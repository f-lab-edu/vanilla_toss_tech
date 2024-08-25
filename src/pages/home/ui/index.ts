import './index.css'
import {renderHomeBanner} from 'src/entities/home/ui/homeBanner/index'
import {renderNavBar} from 'src/shared/ui/navBar/index'
import {renderHomeArticlePreview} from 'src/entities/home/ui/homeArticleArticlePreview/index'
import {MOCK_ARTICLES} from 'src/shared/api/mockData'
import {navigateTo} from 'src/app/routes/route'

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

    const handleArticleButton = () => {
      MOCK_ARTICLES.forEach(article => {
        const articleElement = document.querySelector(`.article-${article.id}`)

        if (articleElement) {
          articleElement.addEventListener('click', () => {
            console.log('Article clicked')
            console.log(article, '?')
            navigateTo(`/article/${article.id}`)
          })
        }
      })
    }

    handleArticleButton()
  } else {
    document.body.innerHTML = `
      <h1>Default Content</h1>
    `
  }
}
