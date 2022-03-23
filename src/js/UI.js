/**
@Author {Isiaka Lukman Bamidele}
@Copyright {Dellyson Inc.}
*/

import html2canvas from 'html2canvas'
import app from './app'

// eslint-disable-next-line func-names
const UI = (function () {
  const renderPhotos = (photos) => {
    const photolist = photos.map(
      (photo) => `
          <img class="photos select-photos mr-2" style="width:50%" src=${photo.urls.regular} />
      `
    )
    document.querySelector('.modal-content').innerHTML = ` ${photolist.join('')}
      <div class="control">
      <input class="input is-small is-primary" id="next-photo-btn" type="number" title="next image page"/>
      </div>
      </div>
      `
    document.querySelector('.modal').addEventListener('click', () => {
      document.querySelector('.modal').classList.remove('is-active')
    })
  }
  const selectAPhoto = (photo) => {
    const $playground = document.querySelector('.box')
    $playground.style.background = `url(${photo})`
    $playground.style.backgroundRepeat = `no-repeat`
    $playground.style.backgroundPosition = `center center`
    $playground.style.backgroundSize = `cover`
  }
  const resizePlayground = (width, height) => {
    const $playground = document.querySelector('.box')
    if (width === '') {
      $playground.style.width = '400px'
    }
    if (height === '') {
      $playground.style.height = '400px'
    }
    $playground.style.width = width + 'px'
    $playground.style.height = height + 'px'
  }
  function setText(text) {
    const $textContainer = document.querySelector('#text-container')
    $textContainer.innerHTML = text
  }

  function generateArrayofHexColorCodes(color) {
    const colorArray = []
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < color.length; i++) {
      colorArray.push(color[i].hex)
    }
    return colorArray
  }

  function displayVariousColor() {
    console.log('displayVariousColor', generateArrayofHexColorCodes())
  }
  function addBgColor(color) {
    const $playground = document.querySelector('.box')
    $playground.style.backgroundColor = color
  }
  function addTextColor(color) {
    const $textContainer = document.querySelector('#text-container')
    $textContainer.style.color = color
  }
  function changeTextSize(size) {
    const $textContainer = document.querySelector('#text-container')
    $textContainer.style.fontSize = size + 'px'
  }
  function changeTextFont(font) {
    const $textContainer = document.querySelector('#text-container')
    $textContainer.style.fontFamily = font
  }
  function alignText(align) {
    const $textContainer = document.querySelector('#text-container')
    $textContainer.style.textAlign = align
  }
  function alignBox(positionAlign) {
    const $playground = document.querySelector('.box')
    $playground.style.display = 'flex'
    $playground.style.flexDirection = 'column'

    switch (positionAlign) {
      case 'center':
        $playground.style.justifyContent = 'center'
        break
      case 'vertical':
        $playground.style.justifyContent = 'flex-start'
        break
      case 'horizontal':
        $playground.style.justifyContent = 'flex-end'
        break
      default:
        $playground.style.justifyContent = 'center'
    }
  }
  function displayImages(images) {
    if (images.length > 0) {
      const photolist = images.map(
        (image) =>
          `  <img class="photos select-photo" style="width:50%" src=${image.urls.regular} /> `
      )
      document.querySelector('.image-modal-content').innerHTML = ` ${photolist.join('')}`
    } else {
      document.querySelector(
        '.image-modal-content'
      ).innerHTML = ` <p style="text-align:center"> Loading please wait... </p>`
    }
  }
  return {
    renderPhotos,
    selectAPhoto,
    setText,
    resizePlayground,
    displayVariousColor,
    addBgColor,
    addTextColor,
    displayImages,
    changeTextSize,
    changeTextFont,
    alignText,
    alignBox,
  }
})()
export default UI
