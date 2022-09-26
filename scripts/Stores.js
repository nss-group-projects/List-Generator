import { getStores, setSelectedStoreId } from './database.js'

const stores = getStores()

document.addEventListener('change', (changeEvent) => {
  if (changeEvent.target.id === 'stores') {
    const chosenOption = changeEvent.target.value
    setSelectedStoreId(parseInt(chosenOption))
  }
})

export const Stores = () => {
  return `
    <select id="stores">
      <option value="0">Choose a store</option>
      ${stores
        .map((store) => {
          return `<option value="${store.id}">${store.name}</option>`
        })
        .join('')}
    </select>
  `
}
