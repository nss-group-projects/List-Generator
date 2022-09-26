import { getLists, getStores } from './database.js'
import { ListDetails } from './ListDetails.js'

document.addEventListener('click', (event) => {
  if (event.target.className === 'list') {
    const listId = parseInt(event.target.id)
    const detailsElement = document.getElementById(`details--${listId}`)
    detailsElement.style.display =
      detailsElement.style.display === 'none' ? 'block' : 'none'
  }
})

export const Lists = () => {
  const lists = getLists()
  const stores = getStores()

  return `
    ${lists
      .map((list) => {
        const listStore = stores.find((store) => store.id === list.storeId)

        return `<div href="" class="list" id="${list.id}">${
          listStore.name
        }: ${list.date.toDateString()}</div>
        ${ListDetails(list.id)}
        `
      })
      .join('')}
  `
}
