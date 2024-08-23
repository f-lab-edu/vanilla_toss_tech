import './index.css'

export const ArticlePage = () => {
  const appElement = document.getElementById('app')

  if (appElement) {
    appElement.innerHTML = `
      <div>
        <h1>Hello, I'm Article!</h1>
      </div>
    `
  } else {
    document.body.innerHTML = `
      <h1>Default Content</h1>
    `
  }
}
