import {navigateTo} from 'src/app/routes/route'
import './index.css'
import {handleButtonClick, renderNavBar} from 'src/shared/ui/navBar/index'

export const ArticlePage = () => {
  const appElement = document.getElementById('app')

  if (appElement) {
    appElement.innerHTML = `
      ${renderNavBar()}
      <section>
        <h1>Hello, I'm Article!</h1>
        <button id="navigation">home으로 돌아가기</button>
      </section>
    `

    handleButtonClick()

    const button = document.getElementById('navigation')
    if (button) {
      button.addEventListener('click', () => {
        navigateTo('/')
      })
    }
  } else {
    document.body.innerHTML = `
      <h1>Default Content</h1>
    `
  }
}
