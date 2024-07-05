// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded startup scripts)')

StartupEvents.registry('item', e => {
    // The texture for this item has to be placed in kubejs/assets/kubejs/textures/item/test_item.png
    // If you want a custom item model, you can create one in Blockbench and put it in kubejs/assets/kubejs/models/item/test_item.json
    e.create('comprehensive:arcane_powder').texture('comprehensive:item/arcane_powder').displayName('Arcane Powder')
  })

  ItemEvents.modification(event => {
    event.modify('#forge:raw_materials', item => {
      item.maxStackSize = 16
    })
    event.modify('#c:ores', item => {
      item.maxStackSize = 16
    })
    event.modify('#c:raw_ores', item => {
      item.maxStackSize = 16
    })
  })