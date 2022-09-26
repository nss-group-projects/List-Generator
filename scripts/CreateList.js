import { generateListItem, generateNewList } from './database.js'

export const CreateListButton = () => {
  return `
    <button id="create-list">Make List</button>
  `
}

document.addEventListener('click', (event) => {
  if (event.target.id === 'create-list') {
    const newListId = generateNewList()

    const checkedBoxes = Array.from(
      document.querySelectorAll('input[name="item"]')
    ).filter((checkbox) => checkbox.checked === true)

    const selectedItemIds = checkedBoxes.map((checkedBox) =>
      parseInt(checkedBox.value)
    )

    for (const itemId of selectedItemIds) {
      generateListItem(newListId, itemId)
    }

    document.dispatchEvent(new CustomEvent('listCreated'))
  }
})
