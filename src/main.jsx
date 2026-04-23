import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

const isGitHubPagesHost = window.location.hostname.endsWith('github.io')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {isGitHubPagesHost ? (
      <HashRouter>
        <App />
      </HashRouter>
    ) : (
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <App />
      </BrowserRouter>
    )}
  </StrictMode>,
)
