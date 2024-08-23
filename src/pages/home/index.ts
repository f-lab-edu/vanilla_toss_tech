import './index.css'

export const HomePage = () => {
  const appElement = document.getElementById('app')

  if (appElement) {
    appElement.innerHTML = `
      <div>
        <h1>Hello, World!</h1>
      </div>
    `
  } else {
    document.body.innerHTML = `
      <h1>Default Content</h1>
    `
  }
}
