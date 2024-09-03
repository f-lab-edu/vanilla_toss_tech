import {IMAGES} from 'src/app/assets/index'
import './index.css'

export const renderHomeBanner = () => {
  return `
    <div class="bannerContainer">
      <img class="homeBanner" src="${IMAGES.HOME_BANNER}"/>
    </div>
  `
}
