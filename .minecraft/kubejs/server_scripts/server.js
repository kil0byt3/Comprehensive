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
event.remove({ output: 'immersive_aircraft:quadrocopter' })
event.remove({ output: 'immersive_aircraft:gyrodyne' })
event.remove({ output: 'gag:time_sand_pouch' })
event.remove({ output: 'gag:escape_rope' })
event.remove({ output: 'createaddition:electrum_amulet' })
event.remove({ output: 'ad_astra:iron_plate' })
event.remove({ output: 'ad_astra:iron_rod' })
event.remove({ output: 'ad_astra:compressor' })
event.remove({ output: 'ad_astra:coal_generator'})

// Grapplemod
event.remove({ mod: 'grapplemod' })
event.shapeless('grapplemod:grappling_hook', ["minecraft:iron_pickaxe", "minecraft:lead"])

// Remove OP/broken SB upgrades
event.remove({ output: 'sophisticatedbackpacks:inception_upgrade' })
event.remove({ output: 'sophisticatedbackpacks:chipped/botanist_workbench_upgrade' })
event.remove({ output: 'sophisticatedbackpacks:chipped/glassblower_upgrade' })
event.remove({ output: 'sophisticatedbackpacks:chipped/carpenters_table_upgrade' })
event.remove({ output: 'sophisticatedbackpacks:chipped/loom_table_upgrade' })
event.remove({ output: 'sophisticatedbackpacks:chipped/mason_table_upgrade' })
event.remove({ output: 'sophisticatedbackpacks:chipped/alchemy_bench_upgrade' })
event.remove({ output: 'sophisticatedbackpacks:chipped/tinkering_table_upgrade' })

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

/*/ removed for now

Frostiful fur recipe changes

event.shaped('frostiful:fur_helmet', [// arg 1: output
    '   ', 
    'ABA', // arg 2: the shape (array of strings)
    'A A'  
  ], {
    A: 'minecraft:string',  //arg 3: the mapping object
    B: '#minecraft:wool'
  }
)

event.shaped('frostiful:fur_chestplate', [// arg 1: output
    'A A', 
    'ABA', // arg 2: the shape (array of strings)
    'ABA'  
  ], {
    A: 'minecraft:string',  //arg 3: the mapping object
    B: '#minecraft:wool'
  }
)

event.shaped('frostiful:fur_leggings', [// arg 1: output
    'BBB', 
    'A A', // arg 2: the shape (array of strings)
    'A A'  
  ], {
    A: 'minecraft:string',  //arg 3: the mapping object
    B: '#minecraft:wool'
  }
)

event.shaped('frostiful:fur_boots', [// arg 1: output
    '   ', 
    'B B', // arg 2: the shape (array of strings)
    'A A'  
  ], {
    A: 'minecraft:string',  //arg 3: the mapping object
    B: '#minecraft:wool'
  }
)
/*/

// Comforts tweak recipe

event.remove({ output: 'comforts:rope_and_nail' })
event.shaped('comforts:rope_and_nail', [// arg 1: output
    ' A ', 
    ' B ', // arg 2: the shape (array of strings)
    ' A '  
  ], {
    A: 'supplementaries:rope',  //arg 3: the mapping object
    B: 'minecraft:iron_ingot'
  }
)

// Phonos

event.remove({ output: 'phonos:white_audio_cable' })
event.remove({ output: 'phonos:orange_audio_cable' })
event.remove({ output: 'phonos:magenta_audio_cable' })
event.remove({ output: 'phonos:light_blue_audio_cable' })
event.remove({ output: 'phonos:yellow_audio_cable' })
event.remove({ output: 'phonos:lime_audio_cable' })
event.remove({ output: 'phonos:pink_audio_cable' })
event.remove({ output: 'phonos:gray_audio_cable' })
event.remove({ output: 'phonos:light_gray_audio_cable' })
event.remove({ output: 'phonos:cyan_audio_cable' })
event.remove({ output: 'phonos:purple_audio_cable' })
event.remove({ output: 'phonos:blue_audio_cable' })
event.remove({ output: 'phonos:brown_audio_cable' })
event.remove({ output: 'phonos:green_audio_cable' })
event.remove({ output: 'phonos:red_audio_cable' })
event.remove({ output: 'phonos:black_audio_cable' })
event.remove({ output: 'phonos:headset' })
event.remove({ output: 'phonos:portable_radio' })
event.remove({ output: 'phonos:portable_record_player' })

event.shaped('8x phonos:audio_cable', [
    ' A ', 
    ' B ',
    ' A '  
  ], {
    A: "minecraft:string",  
    B: 'minecraft:copper_ingot'
  }
)

event.shapeless("phonos:electronic_note_block", ["minecraft:note_block", "minecraft:redstone"])

event.shaped('2x phonos:connection_hub', [
  ' A ', 
  'ABA',
  ' A '  
], {
  A: "minecraft:redstone",  
  B: "minecraft:copper_ingot"
}
)

event.shaped("phonos:electronic_jukebox", [
  ' A ', 
  'ABA',
  ' A '  
], {
  A: "minecraft:redstone",  
  B: "minecraft:jukebox"
}
)

event.shaped("phonos:loudspeaker", [
  ' A ', 
  'ABA',
  ' A '  
], {
  A: "minecraft:redstone",  
  B: "minecraft:note_block"
}
)

event.shapeless("phonos:radio_loudspeaker", ["phonos:loudspeaker", "simpleradio:receiving_module"])
event.shapeless("phonos:radio_transceiver", ["phonos:loudspeaker", "simpleradio:transmitting_module"])

event.shaped("phonos:satellite", [
  ' A ', 
  'ABA',
  ' A '  
], {
  A: "simpleradio:transmitting_module",  
  B: "minecraft:note_block"
}
)

event.shaped("phonos:satellite_station", [
  ' A ', 
  'ABA',
  ' A '  
], {
  A: "simpleradio:transmitting_module",  
  B: "phonos:radio_transceiver"
}
)

})