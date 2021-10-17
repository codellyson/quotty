/**
@Author {Isiaka Lukman Bamidele}
@Copyright {Dellyson Inc.}
*/
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
class UI {
  constructor(bgColor, quoteText, textColor) {
    this.bgColor = bgColor;
    this.textColor = textColor;
    this.quoteText = quoteText;
    this.quoteData = [];
  }
  loadDefaults() {
    console.log(this.quoteData);
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
      $quoteBg.style.backgroundColor = color;
    }

    console.log(color);
  }

  static textColor(color) {
    const $textContainer = document.getElementById("text-container");
    if (color !== " ") $textContainer.style.color = color;
  }
  persistColorToLocaleStorage() {
    if (this.color !== "") {
      const local_data = JSON.parse(this.loadDefaults());
      this.quoteData[0] = this.bgColor;
      this.quoteData[1] = local_data[1];
    }
    if (localStorage.getItem("quote-generator")) {
      localStorage.setItem("quote-generator", JSON.stringify(this.quoteData));
    }
  }

  persistTextToLocaleStorage() {
    if (this.quoteText !== "" && typeof this.quoteText !== "")
      this.quoteData.splice(2, 1, this.quoteText);
    if (localStorage.getItem("quote-generator")) {
      localStorage.setItem("quote-generator", JSON.stringify(quoteData));
    }
  }

  persistTextColorToLocalStorage() {
    const local_data = JSON.parse(this.loadDefaults());
    if (this.textColor !== "" && typeof this.textColor !== "") {
      this.quoteData[0] = local_data[0];
      this.quoteData[1] = this.textColor;
      if (localStorage.getItem("quote-generator")) {
        localStorage.setItem("quote-generator", JSON.stringify(this.quoteData));
      }
    }
  }

  static resetAndPersistWidthAndHeight(wt = 400, ht = 400) {
    const $quoteBg = document.getElementById("quote-bg");
    document.getElementById("board-height").value = ht;
    document.getElementById("board-width").value = wt;
    $quoteBg.style.height = ht + "px";
    $quoteBg.style.width = wt + "px";
  }

  static setFontStyles(fontStyles) {
    const $content = document.querySelector("#quote-bg .card .card-content");
    $content.style.fontFamily = fontStyles;
    $content.style.fontSize = fontSize;
  }
  static setFontSize(fontSize) {

    const $content = document.querySelector("#quote-bg .card .card-content");
    $content.style.fontSize = fontSize + "px";
    document.querySelector(".font-input").value=fontSize
  }
}

export default UI;
