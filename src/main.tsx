import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

if ('scrollRestoration' in history) history.scrollRestoration = 'manual'
window.scrollTo(0, 0)

defineRoot()

function defineRoot() {
  const rootElement = document.getElementById('root')

  if (!rootElement) {
    throw new Error('Root element was not found')
  }

  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}
