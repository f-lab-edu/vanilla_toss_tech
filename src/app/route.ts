import {HomePage} from 'src/pages/home/index'
import {Routes} from './types'
import {ArticlePage} from 'src/pages/article/index'

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
