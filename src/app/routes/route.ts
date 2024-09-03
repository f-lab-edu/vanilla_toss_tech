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

const clearCurrentView = () => {
  const appElement = document.getElementById('app');

  if (appElement) {
    console.log('clear')
    appElement.innerHTML = '';
  }
}


// Render route.
const renderRoute = () => {
  let currentView: (() => void) | undefined = undefined;
  const route = findRoute(window.location.pathname);

  if (currentView) {
    clearCurrentView();
  }

  if (route) {
    currentView = route.view;
    currentView();
  } else {
    HomePage()
  }
}
// Navigation function.
export const navigateTo = (path: string) => {
  window.history.pushState(null, '', path)
  renderRoute()
}

renderRoute()

window.addEventListener('popstate', renderRoute)
