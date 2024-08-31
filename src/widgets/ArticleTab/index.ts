import './index.css'
import {MOCK_ARTICLES, MockArticle} from 'src/shared/api/mockData'
import {navigateTo} from 'src/app/routes/route'
import {renderHomeArticlePreview} from 'src/entities/home/ui/homeArticleArticlePreview/index'

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
      ${renderArticles(MOCK_ARTICLES.slice(0, 2))}
    </div>
  `
}

let currentPage = 1
const articlesPerPage = 2 // 한 번에 로드할 아티클 수
const totalArticles = MOCK_ARTICLES.length

export const loadInitialArticles = () => {
  const initialArticles = MOCK_ARTICLES.slice(0, articlesPerPage)
  const container = document.querySelector('.mainArticleContainer')
  if (container) {
    container.innerHTML = renderArticles(initialArticles)
  }
}

const loadMoreArticles = () => {
  const startIndex = currentPage * articlesPerPage
  const endIndex = startIndex + articlesPerPage
  const nextArticles = MOCK_ARTICLES.slice(startIndex, endIndex)

  const container = document.querySelector('.mainArticleContainer')
  if (container && nextArticles.length > 0) {
    container.innerHTML += renderArticles(nextArticles)
    currentPage++
  }
}

export const setupIntersectionObserver = () => {
  const observerOptions = {
    root: null, // viewport를 root로 설정
    rootMargin: '0px',
    threshold: 1.0,
  }

  const observerCallback: IntersectionObserverCallback = entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (currentPage * articlesPerPage < totalArticles) {
          loadMoreArticles()
        }
      }
    })
  }

  const observer = new IntersectionObserver(observerCallback, observerOptions)
  const sentinel = document.querySelector('.scrollSentinel')

  if (sentinel) {
    observer.observe(sentinel)
  }
}
