import { getItems } from './database.js'
import { getListItems } from './database.js'

export const ListDetails = (listId) => {
  const listItems = getListItems().filter(
    (listItem) => listItem.listId === listId
  )

  const items = getItems()
  return `
  <div id="details--${listId}" class="list-details" style='display: none'>
    <ul>
      ${listItems
        .map((listItem) => {
          const currentItem = items.find((item) => item.id === listItem.itemId)
          return `<li>${currentItem.name}</li>`
        })
        .join('')}
    </ul>
  </div>
  `
}
