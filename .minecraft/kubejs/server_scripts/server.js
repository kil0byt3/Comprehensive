// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Loaded KiloScript')

ServerEvents.recipes(event => {


// Move spears to Archery (better animation)

event.remove({ output: 'simplyswords:iron_spear' })
event.remove({ output: 'simplyswords:gold_spear' })
event.remove({ output: 'simplyswords:diamond_spear' })
event.remove({ output: 'simplyswords:netherite_spear' })
event.remove({ output: 'simplyswords:runic_spear' })

// General place for removing stuff
event.remove({ output: 'sophisticatedbackpacks:chipped/botanist_workbench_upgrade' })
event.remove({ output: 'sophisticatedbackpacks:chipped/glassblower_upgrade' })
event.remove({ output: 'sophisticatedbackpacks:chipped/carpenters_table_upgrade' })
event.remove({ output: 'sophisticatedbackpacks:chipped/loom_table_upgrade' })
event.remove({ output: 'sophisticatedbackpacks:chipped/mason_table_upgrade' })
event.remove({ output: 'sophisticatedbackpacks:chipped/alchemy_bench_upgrade' })
event.remove({ output: 'sophisticatedbackpacks:chipped/tinkering_table_upgrade' })
event.remove({ output: 'hangglider:reinforced_hang_glider' })
event.remove({ output: 'immersive_aircraft:quadrocopter' })
event.remove({ output: 'immersive_aircraft:gyrodyne' })
event.remove({ output: 'gag:time_sand_pouch' })
event.remove({ output: 'gag:escape_rope' })

// Remove OP upgrades
event.remove({ output: 'sophisticatedbackpacks:inception_upgrade' })


// Sophisticated Backpacks rebalance
event.remove({ output: 'sophisticatedbackpacks:iron_backpack' })
event.shaped('sophisticatedbackpacks:iron_backpack', [// arg 1: output
    'BBB', 
    'BAB', // arg 2: the shape (array of strings)
    'BBB'  
  ], {
    A: 'sophisticatedbackpacks:backpack',  //arg 3: the mapping object
    B: 'minecraft:iron_block'
  }
)

event.remove({ output: 'sophisticatedbackpacks:gold_backpack' })
event.shaped('sophisticatedbackpacks:gold_backpack', [// arg 1: output
    'BBB', 
    'BAB', // arg 2: the shape (array of strings)
    'BBB'  
  ], {
    A: 'sophisticatedbackpacks:iron_backpack',  //arg 3: the mapping object
    B: 'minecraft:gold_block'
  }
)

event.remove({ output: 'sophisticatedbackpacks:diamond_backpack' })
event.shaped('sophisticatedbackpacks:diamond_backpack', [// arg 1: output
    'BBB', 
    'BAB', // arg 2: the shape (array of strings)
    'BBB'  
  ], {
    A: 'sophisticatedbackpacks:gold_backpack',  //arg 3: the mapping object
    B: 'minecraft:diamond_block'
  }
)

// GAG Recipes

event.remove({ output: 'gag:hearthstone' })
event.shaped('gag:hearthstone', [// arg 1: output
    ' B ', 
    'BAB', // arg 2: the shape (array of strings)
    ' B '  
  ], {
    A: 'botania:ender_hand',  //arg 3: the mapping object
    B: 'botania:mana_pearl'
  }
)

})