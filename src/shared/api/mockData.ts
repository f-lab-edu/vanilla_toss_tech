import {THUMBNAILS} from 'src/app/assets/index'

export type MockArticle = {
  id: number
  title: string
  content: string
  date: string
  imageUrl: string
  category: string
}

export const MOCK_ARTICLES: MockArticle[] = [
  {
    id: 1,
    title: '다이내믹 스크래핑과 전월세대출 이동제의 실행',
    content:
      '토스뱅크에서 전월세대출과 대환 프로세스를 만들면서 겪은 어려움을 해결한 방법을 공유합니다.',
    date: '2024년 8월 21일',
    imageUrl: THUMBNAILS.THUMBNAIL_01,
    category: 'dev',
  },
  {
    id: 2,
    title: 'Node.js 라이브러리 배포 파이프라인에 플러그인 시스템 도입기',
    content:
      '100개가 넘는 라이브러리를 관리하면서 마주했던 문제들을 플러그인 시스템으로 풀어낸 방법을 공유합니다.',
    date: '2024년 8월 14일',
    imageUrl: THUMBNAILS.THUMBNAIL_02,
    category: 'dev',
  },
  {
    id: 3,
    title: '레거시 제품을 버리고 CS 효율 높이기',
    content:
      '새로운 서비스가 매일같이 생기고 또 사라지는 토스에서는 상담의 퀄리티만큼 시간과 속도도 중요하게 생각해요. 상담원 분들이 쓰는 레거시 제품을 청산해 상담 업무의 효율을 끌어올린 과정을 소개해 보려 해요.',
    date: '2024년 8월 5일',
    imageUrl: THUMBNAILS.THUMBNAIL_03,
    category: 'design',
  },
]