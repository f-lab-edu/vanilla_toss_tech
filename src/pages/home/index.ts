import './index.css'

const HomePage = () => {
  const appElement = document.getElementById('app')

  if (appElement) {
    return (appElement.innerHTML = `
      <h1>Hello, ???</h1>
    `)
  }
}

HomePage()
