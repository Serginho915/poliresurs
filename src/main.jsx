import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles.css'

const root = document.getElementById('root')

try {
  ReactDOM.createRoot(root).render(<App />)
} catch (error) {
  console.error(error)
  root.innerHTML = `<main style="padding:40px;font:16px sans-serif;color:#25372d"><h1>Ошибка запуска сайта</h1><pre style="white-space:pre-wrap">${String(error)}</pre></main>`
}
