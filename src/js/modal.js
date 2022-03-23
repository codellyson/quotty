// eslint-disable-next-line func-names
const modalFunction = (function () {
  function openModal(className) {
    const modal = document.querySelector(`.${className}`)
    modal.classList.add('open')
    document.body.classList.add('body-no-scroll')
  }
  function closeModal(className) {
    const modal = document.querySelector(`.${className}`)
    modal.classList.remove('open')
    document.body.classList.remove('body-no-scroll')
  }
  return {
    open: openModal,
    close: closeModal,
  }
})()

export default modalFunction
