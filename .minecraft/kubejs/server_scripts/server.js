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
event.remove({ output: 'ad_astra:water_pump' })
event.remove({ type: 'adastra:compressing' }) // remove all ad astra compressing recipes
event.remove({ output: 'farmersdelight:rope' })
event.remove({ output: 'brewery:rope' })
event.remove({ output: 'ad_astra:jet_suit_helmet' })
event.remove({ output: 'ad_astra:jet_suit' })
event.remove({ output: 'ad_astra:jet_suit_pants' })
event.remove({ output: 'ad_astra:jet_suit_boots' })
event.remove({ output: 'darkutils:vector_plate_fast' })
event.remove({ output: 'darkutils:vector_plate_extreme' })
event.remove({ output: 'darkutils:vector_plate_ultra' })
event.remove({ output: 'paladins:wooden_great_hammer' })
event.remove({ output: 'paladins:stone_great_hammer' })
event.remove({ output: 'paladins:iron_great_hammer' })
event.remove({ output: 'paladins:golden_great_hammer' })
event.remove({ output: 'paladins:diamond_great_hammer' })
event.remove({ output: 'paladins:netherite_great_hammer' })
event.remove({ output: 'paladins:stone_claymore' })
event.remove({ output: 'paladins:iron_claymore' })
event.remove({ output: 'paladins:golden_claymore' })
event.remove({ output: 'paladins:diamond_claymore' })
event.remove({ output: 'paladins:netherite_claymore' })
event.remove({ output: 'onlyhammersandexcavators:wooden_hammer' })
event.remove({ output: 'onlyhammersandexcavators:iron_hammer' })
event.remove({ output: 'onlyhammersandexcavators:gold_hammer' })
event.remove({ output: 'onlyhammersandexcavators:diamond_hammer' })
event.remove({ output: 'onlyhammersandexcavators:netherite_hammer' })
event.remove({ output: 'onlyhammersandexcavators:lapis_hammer' })
event.remove({ output: 'onlyhammersandexcavators:emerald_hammer' })
event.remove({ output: 'onlyhammersandexcavators:redstone_hammer' })
event.remove({ output: 'onlyhammersandexcavators:wooden_excavator' })
event.remove({ output: 'onlyhammersandexcavators:iron_excavator' })
event.remove({ output: 'onlyhammersandexcavators:gold_excavator' })
event.remove({ output: 'onlyhammersandexcavators:diamond_excavator' })
event.remove({ output: 'onlyhammersandexcavators:netherite_excavator' })
event.remove({ output: 'onlyhammersandexcavators:lapis_excavator' })
event.remove({ output: 'onlyhammersandexcavators:emerald_excavator' })
event.remove({ output: 'onlyhammersandexcavators:redstone_excavator' })

// General small fixes for compat

event.shaped('minecraft:chest', [
  'AAA', 
  'A A',
  'AAA'  
], {
  A: '#minecraft:planks', 
}
)

event.shapeless('minecraft:ender_pearl', ["#endermanoverhaul:ender_pearls"])

event.recipes.createMixing('minecraft:dirt',[
  Fluid.of('water',27000),
  'minecraft:gravel'
])

event.remove({ output: 'createaddition:zinc_sheet' })
event.remove({ output: 'createaddition:capacitor' })
event.shaped('createaddition:capacitor', [  
    ' A ', 
    ' B ',
    ' C '
  ], {
    A: 'create:copper_sheet', 
    B: 'createdeco:zinc_sheet',
    C: 'minecraft:redstone_torch'
  }  
)

// Create Trains earlier/worse recipe

event.shaped('create:railway_casing', [
    'CBC', 
    'BAB',
    'CBC'  
  ], {
    A: 'create:zinc_ingot', 
    B: 'createdeco:industrial_iron_sheet',
    C: 'minecraft:iron_ingot'
  }
)

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

event.shaped('comprehensive:arcane_powder', [
    'BAB', 
    'ABA',
    'BAB'  
  ], {
    A: 'create:powdered_obsidian', 
    B: 'runes:arcane_stone'
  }
)

event.remove({ output: 'gag:hearthstone' })
event.shaped('gag:hearthstone', [// arg 1: output
    'CBC', 
    'BAB', // arg 2: the shape (array of strings)
    'CBC'  
  ], {
    A: 'rootsclassic:attuned_standing_stone',  //arg 3: the mapping object
    B: 'comprehensive:arcane_powder',
    C: 'bosses_of_mass_destruction:soul_star'
  }
)

event.remove({ output: 'farmersdelight:safety_net' })
event.shapeless('farmersdelight:safety_net', ["supplementaries:rope", "supplementaries:rope", "supplementaries:rope", "supplementaries:rope"])

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

event.remove({ output: 'shulkercharm:shulker_charm' })
event.shaped('shulkercharm:shulker_charm', [// arg 1: output
    'DAD', 
    'CBC', // arg 2: the shape (array of strings)
    'DAD'  
  ], {
    A: 'minecraft:shulker_shell',  //arg 3: the mapping object
    B: 'create_jetpack:jetpack',
    C: 'ad_astra:etrionic_capacitor',
    D: 'minecraft:netherite_ingot'
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

// Ad Astra (endgame)

event.remove({ output: 'ad_astra:etrionic_blast_furnace' })
event.shaped('ad_astra:etrionic_blast_furnace', [
  'AAA', 
  'BCB',
  'AAA'  
], {
  A: "createdeco:netherite_sheet",  
  B: "endermanoverhaul:ancient_pearl",
  C: "minecraft:blast_furnace"
}
)

// Immersive Aircraft

event.remove({ output: 'immersive_aircraft:boiler' })
event.shaped('immersive_aircraft:boiler', [
  'AAA', 
  'ABA',
  'AAA'  
], {
  A: 'ad_astra:desh_plate',  
  B: 'minecraft:furnace'
}
)

event.remove({ output: 'immersive_aircraft:engine'})
event.shaped('immersive_aircraft:engine', [
  'ADA',
  'BAB',
  'ACA'
], {
  A: 'ad_astra:desh_plate',
  B: 'create:precision_mechanism',
  C: 'immersive_aircraft:boiler',
  D: 'immersive_aircraft:steel_boiler'
}
)

event.remove({ output: 'immersive_aircraft:steel_boiler'})
event.shaped('immersive_aircraft:steel_boiler', [
  'AAA',
  'ABA',
  'ACA'
], {
  A: 'ad_astra:steel_plate',
  B: 'immersive_aircraft:boiler',
  C: 'minecraft:blast_furnace'
}
)

event.remove({ output: 'immersive_aircraft:hull' })
event.shaped('immersive_aircraft:hull', [
  'AAA',
  'BBB',
  'AAA'
], {
  A: 'create:andesite_casing',
  B: 'create:iron_sheet'
}
)

event.remove({ output: 'immersive_aircraft:hull_reinforcement' })
event.shaped('immersive_aircraft:hull_reinforcement', [
  'AAA',
  'BBB',
  'AAA'
], {
  A: 'ad_astra:steel_plate',
  B: 'immersive_aircraft:hull'
}
)

event.remove({ output: 'immersive_aircraft:sail' })
event.shaped('immersive_aircraft:sail', [
  'AAA',
  'AAA',
  'BBB'
], {
  A: 'create:white_sail',
  B: 'supplementaries:rope'
}
)

event.remove({ output: 'immersive_aircraft:propeller' })
event.shaped('immersive_aircraft:propeller', [
  ' B ',
  'BAB',
  ' B '
], {
  A: 'create:propeller',
  B: 'ad_astra:steel_plate'
}
)

event.remove({ output: 'immersive_aircraft:enhanced_propeller' })
event.shaped('immersive_aircraft:enhanced_propeller', [
  ' B ',
  'BAB',
  ' B '
], {
  A: 'immersive_aircraft:propeller',
  B: 'ad_astra:calorite_plate'
}
)

event.remove({ output: 'immersive_aircraft:rotary_cannon' })
event.shaped('immersive_aircraft:rotary_cannon', [
  'AAA',
  'ABA',
  ' C '
], {
  A: 'create:potato_cannon',
  B: 'immersive_aircraft:industrial_gears',
  C: 'ad_astra:steel_plate'
}
)

event.remove({ output: 'immersive_aircraft:bomb_bay' })
event.shaped('immersive_aircraft:bomb_bay', [
  'AAA',
  'ABA',
  ' C '
], {
  A: 'ad_astra:steel_plate',
  B: 'minecraft:tnt',
  C: 'create:precision_mechanism'
}
)

event.remove({ output: 'immersive_aircraft:industrial_gears' })
event.shaped('immersive_aircraft:industrial_gears', [
  ' AA',
  'BCA',
  'BB '
], {
  A: 'ad_astra:desh_plate',
  B: 'ad_astra:steel_plate',
  C: 'create:precision_mechanism'
}
)

event.remove({ output: 'immersive_aircraft:sturdy_pipes' })
event.shaped('immersive_aircraft:sturdy_pipes', [
  ' AA',
  'BCA',
  'BB '
], {
  A: 'create:fluid_pipe',
  B: 'ad_astra:steel_plate',
  C: 'ad_asra:desh_plate'
}
)

event.remove({ output: 'immersive_aircraft:gyroscope'})
event.shaped('immersive_aircraft:gyroscope', [
  'DBA',
  'ACB',
  '   '
], {
  A: 'createaddition:redstone_relay',
  B: 'minecraft:comparator',
  C: 'minecraft:compass',
  D: 'simpleradio:receiving_module'
}
)

event.remove({ output: 'immersive_aircraft:improved_landing_gear'})
event.shaped('immersive_aircraft:improved_landing_gear', [
  'AAA',
  'ABA',
  '   '
], {
  A: 'ad_astra:steel_plate',
  B: 'ad_astra:wheel'
}
)

})