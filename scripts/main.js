import { Stores } from './Stores.js'
import { Categories } from './Categories.js'
import { CreateListButton } from './CreateList.js'
import { setSelectedStoreId } from './database.js'
import { Lists } from './Lists.js'

export const App = () => {
  return `
    <div id="store-select">
      ${Stores()}
    </div>
    <div id="categories-container">
      ${Categories()}
    </div>
    <div id="button-container">
      ${CreateListButton()}
    </div>
    <div id="list-container">
      <h2 id="list-header">Lists</h2>
      ${Lists()}
    </div>
  `
}

const renderApp = () => {
  const mainContainer = document.querySelector('#container')
  mainContainer.innerHTML = App()
}

renderApp()

document.addEventListener('listCreated', (event) => {
  setSelectedStoreId(0) // This resets the store selection
  renderApp()
})
