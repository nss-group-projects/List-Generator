import { getItems } from './database.js'
import { getStoreItems } from './database.js'

const allItems = getItems()

export const Items = (categoryId, storeId) => {
  const allStoreItems = getStoreItems()
  const selectedStoreItems = allStoreItems.filter(
    (storeItem) => storeItem.storeId === storeId
  )

  return `
    ${selectedStoreItems
      .map((storeItem) => {
        const item = allItems.find((item) => item.id === storeItem.itemId)
        if (item.categoryId === categoryId) {
          return `
              <label for="${item.name}">
                <input type="checkbox" id="${item.name}" name="item" value="${item.id}">  ${item.name} 
              </label>
            `
        }
      })
      .join('')}
  `
}
