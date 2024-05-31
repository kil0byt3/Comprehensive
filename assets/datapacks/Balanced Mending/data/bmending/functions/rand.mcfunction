execute store result score randomDummy random run loot spawn ~ -2 ~ loot bmending:randompick

execute at @p if score randomDummy random matches 1 run function bmending:append

tag @s add picked