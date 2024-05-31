execute as @e[type=villager,tag=!picked] run function bmending:remove
# execute as @e[type=villager] run data remove entity @s Offers.Recipes[{sell:{id:"minecraft:enchanted_book",tag:{StoredEnchantments:[{id:"minecraft:infinity"}]}}}]
execute as @e[type=wandering_trader,tag=!picked] run function bmending:rand

