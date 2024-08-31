import './index.css'
import {MOCK_ARTICLES, MockArticle} from 'src/shared/api/mockData'
import {navigateTo} from 'src/app/routes/route'
import {renderHomeArticlePreview} from 'src/entities/home/ui/homeArticlePreview/index'

const TABS = ['전체', '개발', '디자인']
const INITIAL_ARTICLE_COUNT = 6
const ARTICLE_INCREMENT = 2

let currentArticleCount = INITIAL_ARTICLE_COUNT

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
    articlesContainer.innerHTML = renderArticles(
      filteredData.slice(0, currentArticleCount),
    )
    handleArticleButton()
  }
}

export const handleTabClick = () => {
  const tabButtons = document.querySelectorAll('.tabButton')
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      tabButtons.forEach(btn => btn.classList.remove('active'))
      button.classList.add('active')
      const name = button.getAttribute('name')
      const filteredData = filterArticles(name)
      currentArticleCount = INITIAL_ARTICLE_COUNT
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

const handleScroll = () => {
  const {scrollTop, clientHeight, scrollHeight} = document.documentElement
  if (scrollHeight - scrollTop <= clientHeight + 10) {
    const tabName =
      document.querySelector('.tabButton.active')?.getAttribute('name') ||
      '전체'
    const filteredData = filterArticles(tabName)
    if (currentArticleCount < filteredData.length) {
      currentArticleCount += ARTICLE_INCREMENT
      renderFilteredArticles(filteredData)
    }
  }
}

export const renderInitialArticles = () => {
  const articlesContainer = document.querySelector('.articlesContainer')
  if (articlesContainer) {
    const initialArticles = filterArticles('전체').slice(
      0,
      INITIAL_ARTICLE_COUNT,
    )
    articlesContainer.innerHTML = renderArticles(initialArticles)
    handleArticleButton()
  }
}

export const renderArticleTab = () => {
  return `
    <div class="tabContainer">
      ${TABS.map(tab => renderArticleTabButton(tab)).join('')}
    </div>
    <div class="articlesContainer">
      <!-- Initial articles will be rendered by renderInitialArticles() -->
    </div>
  `
}

window.addEventListener('scroll', handleScroll)

document.addEventListener('DOMContentLoaded', renderInitialArticles)
