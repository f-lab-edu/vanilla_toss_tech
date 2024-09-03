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
        <p class="textGroup">
          <span class="title">${title}</span>
          <span class="content">${content}</span>
          <span class="date">${date}</span>
        </p>
        <div class="imageContainer">
          <img class="thumbnailImg" src="${imageUrl}" alt="thumbnailImg" />
        </div>
      </button>
    </li>
  `
}
