import {HomePage} from 'src/pages/home/ui/index'
import {Routes} from './types'
import {ArticlePage} from 'src/pages/article/ui/index'

const routes: Routes[] = [
  {
    path: '/',
    view: HomePage,
  },
  {
    path: '/article',
    view: ArticlePage,
  },
]

// Find the route that matches the current path.
const findRoute = (path: string) => {
  return routes.find(route => route.path === path)
}

// Render route.
const renderRoute = () => {
  const route = findRoute(window.location.pathname)

  if (route) {
    route.view()
  }
}

// Navigation function.
export const navigateTo = (path: string) => {
  window.history.pushState(null, '', path)
  renderRoute()
}

renderRoute()

window.addEventListener('popstate', renderRoute)
