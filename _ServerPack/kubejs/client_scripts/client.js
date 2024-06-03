// priority: 0

// Visit the wiki for more info - https://kubejs.com/

// renames
ClientEvents.lang('en_us', event => {
    const rename = (item, newName) => {event.renameItem(item, newName)}
    rename ( 'deeperdarker:warden_pickaxe', "Echo Pickaxe" )
    rename ( 'deeperdarker:warden_shovel', "Echo Shovel" )
    rename ( 'deeperdarker:warden_axe', "Echo Axe" )
    rename ( 'deeperdarker:warden_hoe', "Echo Hoe" )
    rename ( 'deeperdarker:warden_sword', "Echo Sword" )
    rename ( 'deeperdarker:warden_helmet', "Echo Helmet" )
    rename ( 'deeperdarker:warden_chestplate', "Echo Chestplate" )
    rename ( 'deeperdarker:warden_leggings', "Echo Leggings" )
    rename ( 'deeperdarker:warden_boots', "Echo Boots" )
    rename ( 'beautify:rope', "Decorative String" )
})

REIEvents.hide('item', event => {
    event.hide('simplyswords:iron_spear' )
    event.hide('simplyswords:gold_spear' )
    event.hide('simplyswords:diamond_spear' )
    event.hide('simplyswords:netherite_spear' )
    event.hide('simplyswords:runic_spear' )
    event.hide('sophisticatedbackpacks:chipped/botanist_workbench_upgrade' )
    event.hide('sophisticatedbackpacks:chipped/glassblower_upgrade' )
    event.hide('sophisticatedbackpacks:chipped/carpenters_table_upgrade' )
    event.hide('sophisticatedbackpacks:chipped/loom_table_upgrade' )
    event.hide('sophisticatedbackpacks:chipped/mason_table_upgrade' )
    event.hide('sophisticatedbackpacks:chipped/alchemy_bench_upgrade' )
    event.hide('sophisticatedbackpacks:chipped/tinkering_table_upgrade' )
    event.hide('sophisticatedbackpacks:inception_upgrade' )
    event.hide('immersive_aircraft:gyrodyne' )
    event.hide('immersive_aircraft:quadrocopter' )
    event.hide('gag:time_sand_pouch' )
    event.hide('gag:escape_rope' )
    event.hide('gag:energized_hearthstone' )
    event.hide('phonos:white_audio_cable' )
    event.hide('phonos:orange_audio_cable' )
    event.hide('phonos:magenta_audio_cable' )
    event.hide('phonos:light_blue_audio_cable' )
    event.hide('phonos:yellow_audio_cable' )
    event.hide('phonos:lime_audio_cable' )
    event.hide('phonos:pink_audio_cable' )
    event.hide('phonos:gray_audio_cable' )
    event.hide('phonos:light_gray_audio_cable' )
    event.hide('phonos:cyan_audio_cable' )
    event.hide('phonos:purple_audio_cable' )
    event.hide('phonos:blue_audio_cable' )
    event.hide('phonos:brown_audio_cable' )
    event.hide('phonos:green_audio_cable' )
    event.hide('phonos:red_audio_cable' )
    event.hide('phonos:black_audio_cable' )
    event.hide('phonos:headset' )
    event.hide('phonos:portable_radio' )
    event.hide('phonos:portable_record_player' )
    event.hide('createaddition:electrum_amulet' )
    event.hide('ad_astra:iron_plate' )
    event.hide('ad_astra:iron_rod' )
    event.hide('ad_astra:compressor' )
    event.hide('ad_astra:coal_generator' )
    event.hide('ad_astra:water_pump' )
    event.hide('grapplemod:double_hook_upgrade' )
    event.hide('grapplemod:hook_thrower_upgrade' )
    event.hide('grapplemod:motor_upgrade' )
    event.hide('grapplemod:modification_table' )
    event.hide('grapplemod:rocket' )
    event.hide('grapplemod:ender_staff_upgrade' )
    event.hide('grapplemod:swing_upgrade' )
    event.hide('grapplemod:blueprint_shelf' )
    event.hide('grapplemod:dye_bag_upgrade' )
    event.hide('grapplemod:forcefield_upgrade' )
    event.hide('grapplemod:forcefield' )
    event.hide('grapplemod:ender_staff' )
    event.hide('grapplemod:rocket_upgrade' )
    event.hide('grapplemod:blueprint' )
    event.hide('grapplemod:long_fall_boots' )
    event.hide('grapplemod:base_upgrade' )
    event.hide('grapplemod:magnet_upgrade' )
    event.hide('grapplemod:rope_upgrade' )
    event.hide('grapplemod:limits_upgrade' )
    event.hide('farmersdelight:rope' )
    event.hide('ad_astra:jet_suit_helmet' )
    event.hide('ad_astra:jet_suit' )
    event.hide('ad_astra:jet_suit_pants' )
    event.hide('ad_astra:jet_suit_boots' )
} )