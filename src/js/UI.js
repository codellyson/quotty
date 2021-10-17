'use strict'
/**
@Author {Isiaka Lukman Bamidele}
@Copyright {Dellyson Inc.}
*/
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
import App from './app'
class UI extends App {
  loadDefaults() {
    if (localStorage.getItem("quote-generator")) {
      return localStorage.getItem("quote-generator");
    } else {
      localStorage.setItem("quote-generator", JSON.stringify(this.quoteData));
    }
  }
  static screenShot(node) {
    // setTimeout(() => {
    domtoimage.toBlob(node).then(function (dataurl) {
      saveAs(dataurl, "quote1.png");
    });
    // }, 100);
  }

  static backgroundColor(color) {
    const $quoteBg = document.getElementById("quote-bg");
    if (color !== "") {
      $quoteBg.style.background = color;
    }
  }

  static textColor(color) {
    const $textContainer = document.querySelector("#quote-bg .card .card-content");
    if (color !== " ") {$textContainer.style.color = color;}
  }
  
  static resetAndPersistWidthAndHeight(wt , ht) {
    const $quoteBg = document.getElementById("quote-bg");
    $quoteBg.style.height = ht + "px";
    $quoteBg.style.width = wt + "px";
    document.querySelector("#board-height").value = parseInt(ht,10);
    document.querySelector("#board-width").value = parseInt(wt,10);;
  }

  static setFontStyles(fontStyles) {
    const $content = document.querySelector("#quote-bg .card .card-content");
    $content.style.fontFamily = fontStyles;
    }
  static setFontSize(fontSize) {
    const $content = document.querySelector("#quote-bg .card .card-content");
    $content.style.fontSize = fontSize + "px";
    document.querySelector(".font-input").value=fontSize
  }

  
  static renderPhotos(photos) {
    const photolist = photos.map((photo) => {
      return `
          <img class="photos select-photos mr-2" style="width:50%" src=${photo.urls.regular} />
      `;
    });
    document.querySelector(".modal-content").innerHTML = ` ${photolist.join(
      ""
    )} 
      <div class="control">
      <input class="input is-small is-primary" id="next-photo-btn" type="number"/>
      <p>page</p>
      </div>
      </div>
      `;
    document.querySelector(".modal").addEventListener("click", () => {
      document.querySelector(".modal").classList.remove("is-active");
    });
  }
  static selectAPhoto(photo) {
    const appInstance = new App("_","_",photo,"_");
    appInstance.persistImageToLocalStorage()
    const $quoteBg = document.getElementById("quote-bg");
    $quoteBg.style.background=`url(${photo})`
    $quoteBg.style.backgroundRepeat=`no-repeat`
    $quoteBg.style.backgroundPosition=`center center`
    $quoteBg.style.backgroundSize=`cover`
    


  }
}

export default UI;
