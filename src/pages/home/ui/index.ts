import './index.css'
import {renderHomeBanner} from 'src/entities/home/ui/homeBanner/index'
import {handleNavButtonClick, renderNavBar} from 'src/shared/ui/navBar/index'
import {
  handleArticleButton,
  handleTabClick,
  renderArticleTab,
  renderInitialArticles,
} from 'src/widgets/ArticleTab/index'

export const HomePage = () => {
  const appElement = document.getElementById('app')

  if (appElement) {
    appElement.innerHTML = `
      ${renderNavBar()}
      <section class="homeSection">
        ${renderHomeBanner()}
        <article class="article">
          <ul class="mainArticleContainer">
            ${renderArticleTab()}
          </ul>
          <ul class="subArticleContainer">
          </ul>
        </article>
      </section>
    `

    renderInitialArticles()
    handleTabClick()
    handleArticleButton()
    handleNavButtonClick()
  } else {
    document.body.innerHTML = `
      <h1>Default Content</h1>
    `
  }
}
