import { getLists, getStores } from './database.js'
import { ListDetails } from './ListDetails.js'

document.addEventListener('click', (event) => {
  if (event.target.className === 'list--name') {
    const listId = parseInt(event.target.id)
    const detailsElement = document.getElementById(`details--${listId}`)
    detailsElement.classList.toggle('expanded')
    detailsElement.classList.toggle('collapsed')
    // detailsElement.style.display =
    //   detailsElement.style.display === 'none' ? 'block' : 'none'
  }
})

export const Lists = () => {
  const lists = getLists()
  const stores = getStores()

  return `
    ${lists
      .map((list) => {
        const listStore = stores.find((store) => store.id === list.storeId)

        return `<div class="list">
              <div class="list--name" id="${list.id}">${
          listStore.name
        }: ${list.date.toDateString()}</div>
              <div class="details-container">
                ${ListDetails(list.id)}
              </div>
          </div>
        `
      })
      .join('')}
  `
}
