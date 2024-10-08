import './index.css'
import {IMAGES} from 'src/app/assets/index'
import {EXTERNAL_LINK} from './constants'
import {Button} from './types'

const TEXT_BUTTONS: Button[] = [
  {buttonText: 'SLASH', url: EXTERNAL_LINK.SLASH},
  {buttonText: 'SIMPLICITY', url: EXTERNAL_LINK.SIMPLICITY},
]

const PRIMARY_BUTTONS: Button[] = [
  {buttonText: '구독하기', url: EXTERNAL_LINK.SUBSCRIBE},
  {buttonText: '채용 바로가기', url: EXTERNAL_LINK.JOBS, variant: 'subscribe'},
]

// LogoTitle component.
const renderLogoTitle = () => {
  return `
    <div class="logoContainer">
      <img class="logoImg" src="${IMAGES.LOGO}" />
      <p class="logoText">
        <span>toss</span>
        <span>tech</span>
      </p>
    </div>
  `
}

// TextButton component.
const renderTextButton = ({buttonText, url}: Button) => {
  return `
    <div class="textButtonContainer">
      <button class="textButton" type="button" data-url="${url}">
          <span>${buttonText}</span>
          <img class="linkIcon" src="${IMAGES.LINK}" />
      </button>
    </div>
  `
}

// PrimaryButton component.
const renderPrimaryButton = ({
  buttonText,
  url,
  variant = 'default',
  disabled = false,
  type = 'button',
}: Button) => {
  return `
    <div class="primaryButtonContainer">
      <button class="primaryButton ${variant}" type=${type} data-url="${url}" disabled=${disabled}>
        <span>${buttonText}</span>
      </button>
    </div>
  `
}

// NavBar component.
export const renderNavBar = () => {
  return `
    <nav class="navBar">
      ${renderLogoTitle()}
      <div class="buttonGroup">
        ${TEXT_BUTTONS.map(ele => renderTextButton(ele)).join('')}
        ${PRIMARY_BUTTONS.map(ele => renderPrimaryButton(ele)).join('')}
      </div>
    </nav>
  `
}

// Button handler.
export const handleButtonClick = () => {
  document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
      const dataUrl = button.getAttribute('data-url')
      if (dataUrl) {
        window.location.href = dataUrl
      }
    })
  })
}
