import './index.css'
import {renderNavBar} from 'src/shared/ui/navBar/index'
import {MOCK_ARTICLES} from 'src/shared/api/mockData'

export const ArticlePage = () => {
  const articleId = window.location.pathname.split('/').pop()
  const article = MOCK_ARTICLES.find(
    article => article.id === Number(articleId),
  )
  const appElement = document.getElementById('app')

  if (article && appElement) {
    appElement.innerHTML = `
    ${renderNavBar()}
      <section>
        <article>
          <h1>${article.title}</h1>
          <p>${article.content}</p>
          <span>${article.date}</span>
          <img src="${article.imageUrl}" alt="${article.title}" />
        </article>
      </section>
    `
  } else {
    document.body.innerHTML = `
      <h1>Default Content</h1>
    `
  }
}
