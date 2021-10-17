/**
@Author {Isiaka Lukman Bamidele}
@Copyright {Dellyson Inc.}
*/
const unsplashAccessKey = 'uWgEsu7J_S1wB1CZ_nm1GrLwsI71A-cdvMFoRiy21nE'
const unsplashUrl = 'https://api.unsplash.com/photos?orientation=landscape&per_page=30'
import UI from './UI'
class APP {
  constructor(bgColor, quoteText, textColor, quoteImg, fontStyle) {
    this.bgColor = bgColor
    this.quoteText = quoteText
    this.textColor = textColor
    this.fontStyle = fontStyle
    this.quoteImg = quoteImg
    this.quoteData = []
  }
  static fetchPhotos(page) {
    fetch(unsplashUrl + '&' + 'page=' + page, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        Authorization: `Client-ID ${unsplashAccessKey} `,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.loading = false
        document.querySelector('.modal').classList.add('is-active')
        UI.renderPhotos(data)
        document.getElementById('next-photo-btn').value = page
      })
      .catch((err) => {
        this.loading = false
        console.error(err)
      })
  }

  persistColorToLocaleStorage() {
    if (this.color !== '') {
      const local_data = JSON.parse(new UI().loadDefaults())
      this.quoteData[0] = this.bgColor
      this.quoteData[1] = local_data[1]
      this.quoteData[2] = local_data[2]
      this.quoteData[3] = local_data[3]
      this.quoteData[4] = local_data[4]
    }
    if (localStorage.getItem('quote-generator')) {
      localStorage.setItem('quote-generator', JSON.stringify(this.quoteData))
    }
  }


  persistTextColorToLocalStorage() {
    const local_data = JSON.parse(new UI().loadDefaults())
    if (this.textColor !== '' && typeof this.textColor !== '') {
      this.quoteData[0] = local_data[0]
      this.quoteData[1] = this.textColor
      this.quoteData[2] = local_data[2]
      this.quoteData[3] = local_data[3]
      this.quoteData[4] = local_data[4]
      if (localStorage.getItem('quote-generator')) {
        localStorage.setItem('quote-generator', JSON.stringify(this.quoteData))
      }
    }
  }
  persistQuoteTextToLocalStorage() {
    if (this.quoteText !== '') {
      const local_data = JSON.parse(new UI().loadDefaults())
      this.quoteData[0] = local_data[0]
      this.quoteData[1] = local_data[1]
      this.quoteData[2] = this.quoteText
      this.quoteData[3] = local_data[3]
      this.quoteData[4] = local_data[4]

      if (localStorage.getItem('quote-generator')) {
        localStorage.setItem('quote-generator', JSON.stringify(this.quoteData))
      }
    }
  }
  persistImageToLocalStorage() {
    if (this.quoteImg !== '') {
      const local_data = JSON.parse(new UI().loadDefaults())
      this.quoteData[0] = local_data[0]
      this.quoteData[1] = local_data[1]
      this.quoteData[2] = local_data[2]
      this.quoteData[3] = this.quoteImg
      this.quoteData[4] = local_data[4]
      if (localStorage.getItem('quote-generator')) {
        localStorage.setItem('quote-generator', JSON.stringify(this.quoteData))
      }
    }
  }
  persistFontStyleToLocalStorage() {
    console.log(this.fontStyle)
    if (!this.fontStyle !== '') {
      const local_data = JSON.parse(new UI().loadDefaults())
      this.quoteData[0] = local_data[0]
      this.quoteData[1] = local_data[1]
      this.quoteData[2] = local_data[2]
      this.quoteData[3] = local_data[3]
      this.quoteData[4] = this.fontStyle
    }
    if (localStorage.getItem('quote-generator')) {
      localStorage.setItem('quote-generator', JSON.stringify(this.quoteData))
    }
  }
}
export default APP
