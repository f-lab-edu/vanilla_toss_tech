import {IMAGES} from 'src/app/assets/index'
import './index.css'

const TEXT_BUTTONS = ['SLASH', 'SIMPLICITY']
const FILL_BUTTONS = ['구독하기', '채용 바로가기']

const LogoTitle = () => {
  return `
    <div class="logoContainer">
        <img class="navLogo" src="${IMAGES.LOGO}" />
        <p class="textContainer">
          <span>toss</span>
          <span>tech</span>
        </p>
      </div>
  `
}

const TextButton = (buttonText: string) => {
  return `
    <button type="button">${buttonText}</button>
  `
}

const FillButton = (buttonText: string) => {
  return `
    <button type="button">${buttonText}</button>
  `
}

const NavBar = () => {
  return `
    <nav class="navBarContainer">
      ${LogoTitle()}
      ${TEXT_BUTTONS.map(button => TextButton(button)).join('')}
      ${FILL_BUTTONS.map(button => FillButton(button)).join('')}
    </nav>
  `
}

// 함수 정의
const initializeApp = () => {
  const appElement = document.getElementById('app')

  if (appElement) {
    appElement.innerHTML = `
      ${NavBar()}
    `
  } else {
    document.body.innerHTML = `
      <h1>Default Content</h1>
    `
  }
}

initializeApp()
