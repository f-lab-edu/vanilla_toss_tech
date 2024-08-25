import {IMAGES} from 'src/app/assets/index'
import './homeBanner.css'

export const renderHomeBanner = () => {
  return `
    <div class="bannerContainer">
      <img class="homeBanner" src="${IMAGES.HOME_BANNER}"/>
    </div>
  `
}
