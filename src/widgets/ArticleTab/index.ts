import './index.css'
import {MOCK_ARTICLES, MockArticle} from 'src/shared/api/mockData'
import {navigateTo} from 'src/app/routes/route'
import {renderHomeArticlePreview} from 'src/entities/home/ui/homeArticlePreview/index'

const TABS = ['전체', '개발', '디자인']

const renderArticleTabButton = (tabName: string) => {
  return `
    <button type="button" class="tabButton" name=${tabName}>${tabName}</button>
  `
}

const renderArticles = (articles: MockArticle[]) => {
  return articles.map(article => renderHomeArticlePreview(article)).join('')
}

const filterArticles = (category: string | null) => {
  if (category === '전체') {
    return MOCK_ARTICLES
  }
  return MOCK_ARTICLES.filter(
    article => article.category === (category === '개발' ? 'dev' : 'design'),
  )
}

const renderFilteredArticles = (filteredData: MockArticle[]) => {
  const articlesContainer = document.querySelector('.articlesContainer')
  if (articlesContainer) {
    articlesContainer.innerHTML = renderArticles(filteredData)
    handleArticleButton()
  }
}

export const handleTabClick = () => {
  const tabButtons = document.querySelectorAll('.tabButton')
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const name = button.getAttribute('name')
      const filteredData = filterArticles(name)
      renderFilteredArticles(filteredData)
    })
  })
}

export const handleArticleButton = () => {
  MOCK_ARTICLES.forEach(article => {
    const articleData = document.querySelector(`.article-${article.id}`)

    if (articleData) {
      articleData.addEventListener('click', () => {
        navigateTo(`/article/${article.id}`)
      })
    }
  })
}

export const renderArticleTab = () => {
  return `
    <div class="tabContainer">
      ${TABS.map(tab => renderArticleTabButton(tab)).join('')}
    </div>
    <div class="articlesContainer">
      ${renderArticles(MOCK_ARTICLES)}
    </div>
  `
}
