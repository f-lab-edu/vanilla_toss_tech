import {HomeArticlePreviewProps} from '../../model/types'
import './index.css'

export const renderHomeArticlePreview = ({
  id,
  title,
  content,
  date,
  imageUrl,
}: HomeArticlePreviewProps) => {
  return `
    <li class="articlePreview">
      <button class="articleButton article-${id}">
        <img src="${imageUrl}" alt="${title}" />
        <h3>${title}</h3>
        <p>${content}</p>
        <span>${date}</span>
      </button>
    </li>
  `
}
