import { getCategories, getSelectedStoreId } from './database.js'
import { Items } from './Items.js'

const categories = getCategories()

export const Categories = () => {
  const selectedStoreId = getSelectedStoreId()

  return `
    ${categories
      .map((category) => {
        return `
        <div class="category">
          <h3 class="category-name">${category.name}</h3>
          <div class="items-container">
            ${selectedStoreId ? Items(category.id, selectedStoreId) : ''}
          </div>
        </div>
      `
      })
      .join('')}
  `
}

const renderCategories = () => {
  const categoriesContainer = document.querySelector('#categories-container')
  categoriesContainer.innerHTML = Categories()
}

document.addEventListener('storeChosen', (event) => {
  renderCategories()
})
