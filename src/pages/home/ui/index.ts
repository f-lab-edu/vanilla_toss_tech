import './index.css'
import {renderHomeBanner} from 'src/entities/home/ui/homeBanner/index'
import {handleButtonClick, renderNavBar} from 'src/shared/ui/navBar/index'
import {renderHomeArticlePreview} from 'src/entities/home/ui/homeArticleArticlePreview/index'
import {MOCK_ARTICLES} from 'src/shared/api/mockData'

export const HomePage = () => {
  const appElement = document.getElementById('app')

  if (appElement) {
    appElement.innerHTML = `
      ${renderNavBar()}
      <section class="homeSection">
        ${renderHomeBanner()}
        <article class="article">
          <ul class="mainArticleContainer">
            ${MOCK_ARTICLES.map(article => renderHomeArticlePreview(article)).join('')}
          </ul>
          <ul class="subArticleContainer">
          </ul>
        </article>
      </section>
    `

    handleButtonClick()
  } else {
    document.body.innerHTML = `
      <h1>Default Content</h1>
    `
  }
}
