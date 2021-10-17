// Test import of a JavaScript module
import { example } from '@/js/example'

// Test import of an asset
import webpackLogo from '@/images/webpack-logo.svg'

// Test import of styles
import '@/styles/index.scss'

import { navBarFunc } from "./js/miscallenous.es6";
import UI from "./js/UI";
import App from "./js/app";


document.addEventListener("DOMContentLoaded", () => {
  const data = new UI().loadDefaults();
  const local_data = JSON.parse(data);
  // NavBar
  navBarFunc();
  // setBg from localStorage

  UI.backgroundColor(local_data[0]);
  UI.textColor(local_data[1]);

  // Export Image Button
  const screenShotBtn = document.getElementById("screenshot-btn");
  screenShotBtn.addEventListener("click", (event) => {
    const node = document.getElementById("quote-bg");
    UI.screenShot(node);
  });

  //  Persisit color  and set color in the LocalStorage
  document.addEventListener("change", (e) => {
    if (e.target.matches("#bgcolor-btn")) {
      UI.backgroundColor(e.target.value);
      const newUI = new UI(e.target.value);
      newUI.persistColorToLocaleStorage();
    } else if (e.target.matches("#textcolor-btn")) {
      UI.textColor(e.target.value);
      const newUI = new UI("_", "_", e.target.value);
      console.log(e.target.value);
      newUI.persistTextColorToLocalStorage();
    } else if (e.target.matches("#board-width")) {
      UI.resetAndPersistWidthAndHeight(e.target.value, "");
    } else if (e.target.matches("#board-height")) {
      UI.resetAndPersistWidthAndHeight("", e.target.value);
    } else if (e.target.matches("#next-photo-btn")) {
      App.fetchPhotos(e.target.value);
    } else if (e.target.matches(".font-input")) {
      const currentSize = e.target.value;
      UI.setFontSize(currentSize);
    }
  });

  // set hght and width
  document.addEventListener("click", (e) => {
    if (e.target.matches("#bgimage-btn")) {
      App.fetchPhotos(1);
    } else if (e.target.matches(".font-style")) {
      const fontStyles = e.target.textContent.trim().toLowerCase();
      UI.setFontStyles(fontStyles);
    }
  });

  document.addEventListener("click", function (e) {
    if (e.target.matches(".select-photos")) {
      const imgUrl = e.target.getAttribute("src");
      App.selectAPhoto(imgUrl);
    } else if (e.target.matches("#trigger-btn")) {
      document.querySelector(".dropdown").classList.toggle("is-active");
    } else {
      return false;
    }
  });
});
