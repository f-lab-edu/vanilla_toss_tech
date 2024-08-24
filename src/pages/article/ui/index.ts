import {navigateTo} from 'src/app/routes/route'
import './index.css'

export const ArticlePage = () => {
  const appElement = document.getElementById('app')

  if (appElement) {
    appElement.innerHTML = `
      <div>
        <h1>Hello, I'm Article!</h1>
        <button id="navigation">home으로 돌아가기</button>
      </div>
    `

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
