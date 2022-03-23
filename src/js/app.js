// 'use strict'
/**
@Author {Isiaka Lukman Bamidele}
@Copyright {Dellyson Inc.}
*/
import html2canvas from 'html2canvas'
import localDB from './localStorage'

const unsplashAccessKey = 'uWgEsu7J_S1wB1CZ_nm1GrLwsI71A-cdvMFoRiy21nE'
const unsplashUrl = 'https://api.unsplash.com/photos?orientation=landscape&per_page=10'

// eslint-disable-next-line func-names
const app = (function () {
  const fetchImages = (page) => {
    const images = fetch(`${unsplashUrl}&page=${page}`, {
      method: 'GET',
      headers: {
        Authorization: `Client-ID ${unsplashAccessKey} `,
      },
    })
      .then((response) => response.json())
      .then((data) => data)
      .catch((err) => err)
    document.querySelector(
      '.image-modal-content'
    ).innerHTML = ` <p style="text-align:center"> Loading please wait... </p>`
    return images
  }
  const persistImageToLocalStorage = (imageUrl) => {
    const localData = JSON.parse(localDB.get('quote-generator'))
    localData[2] = imageUrl
    localStorage.setItem('quote-generator', JSON.stringify(localData))
  }
  const screenShot = (node, width, height) => {
    console.log('screenShot', node, width, height)

    html2canvas(node, {
      allowTaint: false,
      useCORS: true,
      scale: 2,
      // width,
      // height,
      // foreignObjectRendering: true,
      onclone: (clonedNode) => {
        alert('Done')
      },
    }).then((canvas) => {
      const link = document.createElement('a')
      document.body.appendChild(link)
      link.download = 'file.png'
      link.href = canvas.toDataURL()
      link.target = '_blank'
      link.click()
    })
  }
  return {
    fetchImages,
    persistImageToLocalStorage,
    screenShot,
  }
})()
export default app
