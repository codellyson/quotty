import UI from './js/UI'
import App from './js/app'
import '@/styles/index.scss'

import { navBarFunc } from './js/miscallenous.es6'

document.addEventListener('DOMContentLoaded', () => {
  const data = new UI().loadDefaults()
  if (data) {
    const local_data = JSON.parse(data)
    console.log(local_data)
    // setBg from localStorage
    UI.backgroundColor(local_data[0])
    UI.setQuoteText(local_data[2])
    UI.textColor(local_data[1])
    UI.selectAPhoto(local_data[3])
    UI.setFontStyles(local_data[4])
  }

  // NavBar
  navBarFunc()

  // Export Image Button
  const screenShotBtn = document.getElementById('screenshot-btn')
  screenShotBtn.addEventListener('click', (event) => {
    const node = document.getElementById('quote-bg')
    UI.screenShot(node)
  })

  //  Persisit color  and set color in the LocalStorage
  document.addEventListener('change', (e) => {
    if (e.target.matches('#bgcolor-btn')) {
      UI.backgroundColor(e.target.value)
      const appInstance = new App(e.target.value)
      appInstance.persistColorToLocaleStorage()
    } else if (e.target.matches('#textcolor-btn')) {
      UI.textColor(e.target.value)
      const appInstance = new App('_', '_', e.target.value)
      appInstance.persistTextColorToLocalStorage()
    } else if (e.target.matches('#board-width')) {
      UI.resetAndPersistWidthAndHeight(e.target.value, '')
    } else if (e.target.matches('#board-height')) {
      UI.resetAndPersistWidthAndHeight('', e.target.value)
    } else if (e.target.matches('#next-photo-btn')) {
      App.fetchPhotos(e.target.value)
    } else if (e.target.matches('.font-input')) {
      const currentSize = e.target.value
      UI.setFontSize(currentSize)
    }
  })

  // set hght and width
  document.addEventListener('click', (e) => {
    if (e.target.matches('#bgimage-btn')) {
      App.fetchPhotos(1)
    } else if (e.target.matches('.font-style')) {
      const fontStyles = e.target.textContent.trim().toLowerCase()
      UI.setFontStyles(fontStyles)
      const appInstance = new App('_', '_', '_', '_', fontStyles)
      appInstance.persistFontStyleToLocalStorage()
      document.querySelector('.dropdown').classList.toggle('is-active')
    }
  })

  document.addEventListener('click', function (e) {
    if (e.target.matches('.select-photos')) {
      const imgUrl = e.target.getAttribute('src')
      UI.selectAPhoto(imgUrl)

      document.querySelector('.modal').classList.remove('is-active')
    } else if (e.target.matches('#trigger-btn')) {
      document.querySelector('.dropdown').classList.toggle('is-active')
    } else {
      return false
    }
  })
  // content field
  const $contentField = document.querySelector('#quote-bg .card .card-content')
  $contentField.addEventListener('input', function (e) {
    const content = e.target.textContent.trim()
    const appInstance = new App('_', content, '_', '_', '_')
    appInstance.persistQuoteTextToLocalStorage()
  })

  //  sidenav
  const asideElement = document.querySelector('aside')
  const toggleSideBarBtn = document.getElementById('tool-toggle')
  toggleSideBarBtn.addEventListener('click', function (e) {
    asideElement.classList.toggle('is-viewed')
  })
})
