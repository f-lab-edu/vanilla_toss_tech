import {navigateTo} from 'src/app/route'
import './index.css'

export const HomePage = () => {
  const appElement = document.getElementById('app')

  if (appElement) {
    appElement.innerHTML = `
      <div>
        <h1>Hello, World!</h1>
        <button id="navigation">article로 이동하기</button>
      </div>
    `

    const button = document.getElementById('navigation')
    if (button) {
      button.addEventListener('click', () => {
        navigateTo('/article')
      })
    }
  } else {
    document.body.innerHTML = `
      <h1>Default Content</h1>
    `
  }
}
