import './index.css'
import {renderHomeBanner} from 'src/entities/home/ui/homeBanner/index'
import {renderNavBar} from 'src/shared/ui/navBar/index'
import {
  handleArticleButton,
  handleTabClick,
  renderArticleTab,
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

    handleTabClick()
    handleArticleButton()
  } else {
    document.body.innerHTML = `
      <h1>Default Content</h1>
    `
  }
}
