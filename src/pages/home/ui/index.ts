import './index.css'
import {handleButtonClick, renderNavBar} from 'src/shared/navBar/ui/index'

export const HomePage = () => {
  const appElement = document.getElementById('app')

  if (appElement) {
    appElement.innerHTML = `
      ${renderNavBar()}
    `

    handleButtonClick()
  } else {
    document.body.innerHTML = `
      <h1>Default Content</h1>
    `
  }
}
