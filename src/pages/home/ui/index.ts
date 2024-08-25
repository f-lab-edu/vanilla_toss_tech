import {renderHomeBanner} from 'src/entities/home/ui/homeBanner'
import './index.css'
import {handleButtonClick, renderNavBar} from 'src/shared/ui/navBar/index'

export const HomePage = () => {
  const appElement = document.getElementById('app')

  if (appElement) {
    appElement.innerHTML = `
      ${renderNavBar()}
      <section class="homeSection">
        ${renderHomeBanner()}
      </section>
    `

    handleButtonClick()
  } else {
    document.body.innerHTML = `
      <h1>Default Content</h1>
    `
  }
}
