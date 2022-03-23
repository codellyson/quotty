import '@/styles/main.scss'
import app from './js/app'
import modalFunction from './js/modal'
import UI from './js/UI'

document.addEventListener('click', (e) => {
  if (e.target.matches('#add-text-modal')) {
    modalFunction.open('text-modal')
  }
  if (e.target.matches('.modal-close')) {
    modalFunction.close('text-modal')
    modalFunction.close('photo-modal')
  }
  if (e.target.matches('#submit-text')) {
    // eslint-disable-next-line no-alert
    UI.setText(document.querySelector('textarea').value.trim())
    modalFunction.close('text-modal')
  }
  if (e.target.matches('#bgimage-btn')) {
    modalFunction.open('photo-modal')
    app
      .fetchImages(1)
      .then((images) => {
        UI.displayImages(images)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  if (e.target.matches('.select-photo')) {
    const imgUrl = e.target.getAttribute('src')
    UI.selectAPhoto(imgUrl)
    modalFunction.close('photo-modal')
  }

  if (e.target.matches('#align-left-button')) {
    UI.alignText('left')
  }
  if (e.target.matches('#align-center-button')) {
    UI.alignText('center')
  }
  if (e.target.matches('#align-right-button')) {
    UI.alignText('right')
  }
  if (e.target.matches('#align-justify-button')) {
    UI.alignText('justify')
  }
  if (e.target.matches('#align-vertical-button')) {
    UI.alignBox('vertical')
  }
  if (e.target.matches('#align-horizontal-button')) {
    UI.alignBox('horizontal')
  }
  if (e.target.matches('#align-center-button')) {
    UI.alignBox('center')
  }
  if (e.target.matches('#screenshot-btn')) {
    app.screenShot(document.getElementById('quote-bg'))
  }
  return false
})

document.addEventListener('keyup', (e) => {
  if (e.key === 'Escape') {
    modalFunction.close('text-modal')
    modalFunction.close('photo-modal')
  }
  const widthElement = document.getElementById('board-width')
  const heightElement = document.getElementById('board-height')
  const size = {}
  if (e.target.matches('#board-width')) {
    widthElement.value = e.target.value
    size.width = e.target.value
    size.height = ''
  }
  if (e.target.matches('#board-height')) {
    heightElement.value = e.target.value
    size.height = e.target.value
    size.width = ''
  }
  if (Object.keys(size).length > 0) {
    UI.resizePlayground(size.width, size.height)
  }
})

// change Event
document.addEventListener('change', (e) => {
  if (e.target.matches('#bgcolor-btn')) {
    const colorInput = document.getElementById('bgcolor-btn')
    UI.addBgColor(colorInput.value)
  }
  if (e.target.matches('#textcolor-btn')) {
    const colorInput = document.getElementById('textcolor-btn')
    UI.addTextColor(colorInput.value)
  }
  if (e.target.matches('#more-button')) {
    modalFunction.open('photo-modal')
    app
      // eslint-disable-next-line no-plusplus
      .fetchImages(e.target.value)
      .then((images) => {
        UI.displayImages(images)
      })
      .catch((err) => {
        console.log(err)
      })
    // console.log(one)
  }
  if (e.target.matches('#font-size-input')) {
    UI.changeTextSize(e.target.value)
  }

  if (e.target.matches('#font-family-input')) {
    UI.changeTextFont(e.target.value)
  }
  if (e.target.matches('#default-size')) {
    if (e.target.checked) {
      UI.resizePlayground(400, 400)
    }
  }
  return false
})
