#!python3
"""
Remove LFS tracked files and change them to normal git

Python 3.8+, native code

For Python <= 3.7, move the Literal and Final imports from "typing" to third-party module "typing_extensions"

@author Philip Kahn
@url https://gist.github.com/tigerhawkvok/adb7905a2423312f237da1953d6a8eeb
"""

import subprocess
import os
import re
import datetime as dt
from typing import Optional, Union, overload, Literal, Final
from pathlib import Path
from hashlib import sha256
import shutil

DRY_RUN_WRITE_PATH:Final[Path] = Path("unLFS_dryRun").with_suffix(".sh" if os.name != "nt" else ".ps1")
DRY_RUN_WRITE_PATH.unlink(missing_ok= True)

@overload
def __shellRun(*args, dryRun:Literal[False]= False, **kwargs) -> subprocess.CompletedProcess:
    ...
@overload
def __shellRun(*args, dryRun:Literal[True]= True, **kwargs) -> str: ...
@overload
def __shellRun(*args, dryRun:bool= False, **kwargs) -> Union[subprocess.CompletedProcess, str]: ...
def __shellRun(*args, dryRun:bool= False, **kwargs):
    if dryRun:
        cmd = " ".join([str(x) for x in args])
        if len(kwargs) > 0:
            cmd += f" # subprocess sent kwargs {kwargs}"
        with DRY_RUN_WRITE_PATH.open("a", encoding= "utf-8") as f:
            f.write(cmd + "\n")
        return cmd
    return subprocess.run([str(x) for x in args], check= True, shell= True, capture_output= True, **kwargs)

def unLFS(dryRun:bool= True, path:Optional[Union[str, Path]]= None, push:bool= True, pushAllBranches:bool= False, pushRemote:str= "origin"):
    """
    Untrack all LFS files in a git repo, and remove LFS from the repo.
    This will also  commit the changes and push them to the remote, as well remove the .git/lfs folder, and remove the LFS filter from .gitattributes

    By default, `dryRun` is enabled which merely dumps the commands to a file, and does not actually run them. Set `dryRun` to `False` to actually run the commands.

    Parameters
    ----------

    dryRun : bool
        If `True`, the commands will not be run, but instead dumped to a file. If `False`, the commands will be run.

    path : Optional[Union[str, Path]], optional (default: None)
        The path to the git repo. If None, the current working directory is used

    push : bool, optional (default: True)
        If `True`, the changes will be pushed to the remote. If `False`, the changes will not be pushed to the remote.

    pushAllBranches : bool, optional (default: False)
        If `True`, all branches will be pushed to the remote. If `False`, only the current branch will be pushed to the remote.

    pushRemote : str, optional (default: "origin")
        The remote to push to. This is only used if `push` is `True`
    """
    if path is None:
        path = Path.cwd()
    path = Path(path)
    os.chdir(path)
    gitAttributes = Path(".gitattributes")
    if not gitAttributes.is_file():
        raise FileNotFoundError("No .gitattributes file found")
    with DRY_RUN_WRITE_PATH.open("a", encoding= "utf-8") as f:
        f.write(f"\n## Dry Run Started At {dt.datetime.now().isoformat()} ##")
        f.write(f"\n## Working directory: {path.absolute().as_posix()} ##\n\n")
    # Check for uncommitted files
    status = str(__shellRun("git", "status", "--porcelain").stdout.decode("utf-8")).strip().splitlines()
    status = [" ".join(line.split(" ")[1:]) for line in status if not re.search(r"^\?\?", line)]
    if len(status) > 0:
        print("\nUncommitted files found:")
        print("\t", status, end= "\n\n")
        raise RuntimeError("Uncommitted files found, please commit or stash them")
    # Get file lists
    try:
        fileListOut = __shellRun("git", "lfs", "ls-files")
    except subprocess.CalledProcessError as e:
        raise RuntimeError(f"Problem getting untracked file list") from e
    if dryRun:
        __shellRun("git", "lfs", "ls-files", dryRun= True)
    fileList = [line.split(" ").pop() for line in fileListOut.stdout.decode("utf-8").splitlines()]
    if len(fileList) == 0:
        print("No files to untrack")
        return
    # Get a stable run ID based on the files we're untracking
    fileList.sort()
    runID = sha256(",".join(fileList).encode("utf-8")).hexdigest()[:8]
    __shellRun("git", "lfs", "pull", "--all", dryRun= dryRun)
    MERGE_BRANCH_TARGET:Final[str] = __shellRun("git", "branch", "--show-current").stdout.decode("utf-8").strip()
    NEW_BRANCH_NAME:Final[str] = f"unLFS_{runID}"
    if dryRun:
        __shellRun("git", "branch", "--show-current", dryRun= True)
    __shellRun("git", "checkout", "-b", NEW_BRANCH_NAME, dryRun= dryRun)
    for file in fileList:
        __shellRun("git", "lfs", "untrack", f"\"{file}\"", dryRun= dryRun)
        __shellRun("git", "rm", "--cached", f"\"{file}\"", dryRun= dryRun)
    # Remove patterns from .gitattributes
    gaTextLines = gitAttributes.read_text("utf-8").splitlines()
    gaLFS = [line for line in gaTextLines if re.search(r"filter\s*=\s*lfs", line, re.IGNORECASE)]
    gaNonLFS = [line for line in gaTextLines if not re.search(r"filter\s*=\s*lfs", line, re.IGNORECASE)]
    for lfsLine in gaLFS:
        __shellRun("git", "lfs", "untrack", re.split(r"\s", lfsLine, 0, re.IGNORECASE).pop(0), dryRun= dryRun)
    if not dryRun:
        gitAttributes.write_text("\n".join(gaNonLFS), "utf-8")
    else:
        with DRY_RUN_WRITE_PATH.open("a", encoding= "utf-8") as f:
            f.write("\n## New .gitAttributes ##\n# " + "\n# ".join(gaNonLFS) + "\n")
            f.write("\n")
    # This should handle most of it and convert pointers
    __shellRun("git", "add", "--renormalize", ".", dryRun= dryRun)
    for file in fileList:
        # In case we were manually tracking a file
        # that is otherwise ignored
        __shellRun("git", "add", "-f", f"\"{file}\"", dryRun= dryRun)
    __shellRun("git", "commit", "-m", f"'Untrack LFS files ({runID})'", dryRun= dryRun)
    # Merge
    __shellRun("git", "checkout", MERGE_BRANCH_TARGET, dryRun= dryRun)
    __shellRun("git", "merge", NEW_BRANCH_NAME, dryRun= dryRun)
    # Push
    pushCommand = ["git", "push", pushRemote]
    if pushAllBranches:
        pushCommand.append("--all")
    else:
        pushCommand.append(MERGE_BRANCH_TARGET)
    if push:
        __shellRun(*pushCommand, dryRun= dryRun)
    # Verify
    fileListRemaining = __shellRun("git", "lfs", "ls-files")
    if dryRun:
        __shellRun("git", "lfs", "ls-files", dryRun= True)
    fileList = [line.split(" ").pop() for line in fileListRemaining.stdout.decode("utf-8").splitlines()]
    if len(fileList) > 0:
        if dryRun:
            print("Would verify that no files remained tracked, but dry run is enabled")
        else:
            print("Failed to untrack files:")
            print(fileList)
            raise RuntimeError("Failed to untrack files")
    # Do a cleanup before we nuke directories
    __shellRun("git", "lfs", "prune", "--verify-remote", "--verbose", "--recent", dryRun= dryRun)
    __shellRun("git stash clear && git prune --expire=now && git reflog expire --expire-unreachable=now --rewrite --all && git repack -a -d && git prune-packed && git reflog expire --all --expire=now && git gc --prune=now --aggressive", dryRun= dryRun)
    # Remove locally
    __shellRun("git", "lfs", "uninstall", "--local", dryRun= dryRun)
    lfsDirPath = Path(path, ".git", "lfs")
    if dryRun:
        print("Would remove .git/lfs, but dry run is enabled")
        with DRY_RUN_WRITE_PATH.open("a", encoding= "utf-8") as f:
            f.write(f"\n## Remove .git/lfs ##\n# {lfsDirPath.absolute().as_posix()}\n")
            f.write("\n")
        persistPath = DRY_RUN_WRITE_PATH.with_name(DRY_RUN_WRITE_PATH.with_suffix("").name + f"_{runID}{DRY_RUN_WRITE_PATH.suffix}")
        shutil.copy(DRY_RUN_WRITE_PATH, persistPath)
        print(f"Dry-run commands written to {persistPath.absolute().as_posix()}")
    else:
        shutil.rmtree(lfsDirPath)
    DRY_RUN_WRITE_PATH.unlink(missing_ok= True)
    return runID


if __name__ == "__main__":
    unLFS(dryRun= True)
