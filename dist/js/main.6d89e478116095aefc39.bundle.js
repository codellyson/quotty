(self.webpackChunkwebpack_boilerplate=self.webpackChunkwebpack_boilerplate||[]).push([[179],{816:function(t){!function(e){"use strict";var n=function(){return{escape:function(t){return t.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1")},parseExtension:e,mimeType:function(t){var n,o;return(n="application/font-woff",o="image/jpeg",{woff:n,woff2:n,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:o,jpeg:o,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"})[e(t).toLowerCase()]||""},dataAsUrl:function(t,e){return"data:"+e+";base64,"+t},isDataUrl:function(t){return-1!==t.search(/^(data:)/)},canvasToBlob:function(t){return t.toBlob?new Promise((function(e){t.toBlob(e)})):function(t){return new Promise((function(e){for(var n=window.atob(t.toDataURL().split(",")[1]),o=n.length,r=new Uint8Array(o),i=0;i<o;i++)r[i]=n.charCodeAt(i);e(new Blob([r],{type:"image/png"}))}))}(t)},resolveUrl:function(t,e){var n=document.implementation.createHTMLDocument(),o=n.createElement("base");n.head.appendChild(o);var r=n.createElement("a");return n.body.appendChild(r),o.href=e,r.href=t,r.href},getAndEncode:function(t){return c.impl.options.cacheBust&&(t+=(/\?/.test(t)?"&":"?")+(new Date).getTime()),new Promise((function(e){var n,o=new XMLHttpRequest;if(o.onreadystatechange=function(){if(4===o.readyState)if(200===o.status){var r=new FileReader;r.onloadend=function(){var t=r.result.split(/,/)[1];e(t)},r.readAsDataURL(o.response)}else n?e(n):i("cannot fetch resource: "+t+", status: "+o.status)},o.ontimeout=function(){n?e(n):i("timeout of 30000ms occured while fetching resource: "+t)},o.responseType="blob",o.timeout=3e4,o.open("GET",t,!0),o.send(),c.impl.options.imagePlaceholder){var r=c.impl.options.imagePlaceholder.split(/,/);r&&r[1]&&(n=r[1])}function i(t){console.error(t),e("")}}))},uid:(t=0,function(){return"u"+("0000"+(Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)+t++}),delay:function(t){return function(e){return new Promise((function(n){setTimeout((function(){n(e)}),t)}))}},asArray:function(t){for(var e=[],n=t.length,o=0;o<n;o++)e.push(t[o]);return e},escapeXhtml:function(t){return t.replace(/#/g,"%23").replace(/\n/g,"%0A")},makeImage:function(t){return new Promise((function(e,n){var o=new Image;o.onload=function(){e(o)},o.onerror=n,o.src=t}))},width:function(t){var e=n(t,"border-left-width"),o=n(t,"border-right-width");return t.scrollWidth+e+o},height:function(t){var e=n(t,"border-top-width"),o=n(t,"border-bottom-width");return t.scrollHeight+e+o}};var t;function e(t){var e=/\.([^\.\/]*?)$/g.exec(t);return e?e[1]:""}function n(t,e){var n=window.getComputedStyle(t).getPropertyValue(e);return parseFloat(n.replace("px",""))}}(),o=function(){var t=/url\(['"]?([^'"]+?)['"]?\)/g;return{inlineAll:function(t,n,i){return e(t)?Promise.resolve(t).then(o).then((function(e){var o=Promise.resolve(t);return e.forEach((function(t){o=o.then((function(e){return r(e,t,n,i)}))})),o})):Promise.resolve(t)},shouldProcess:e,impl:{readUrls:o,inline:r}};function e(e){return-1!==e.search(t)}function o(e){for(var o,r=[];null!==(o=t.exec(e));)r.push(o[1]);return r.filter((function(t){return!n.isDataUrl(t)}))}function r(t,e,o,r){return Promise.resolve(e).then((function(t){return o?n.resolveUrl(t,o):t})).then(r||n.getAndEncode).then((function(t){return n.dataAsUrl(t,n.mimeType(e))})).then((function(o){return t.replace(function(t){return new RegExp("(url\\(['\"]?)("+n.escape(t)+")(['\"]?\\))","g")}(e),"$1"+o+"$3")}))}}(),r=function(){return{resolveAll:function(){return t(document).then((function(t){return Promise.all(t.map((function(t){return t.resolve()})))})).then((function(t){return t.join("\n")}))},impl:{readAll:t}};function t(){return Promise.resolve(n.asArray(document.styleSheets)).then((function(t){var e=[];return t.forEach((function(t){try{n.asArray(t.cssRules||[]).forEach(e.push.bind(e))}catch(e){console.log("Error while reading CSS rules from "+t.href,e.toString())}})),e})).then((function(t){return t.filter((function(t){return t.type===CSSRule.FONT_FACE_RULE})).filter((function(t){return o.shouldProcess(t.style.getPropertyValue("src"))}))})).then((function(e){return e.map(t)}));function t(t){return{resolve:function(){var e=(t.parentStyleSheet||{}).href;return o.inlineAll(t.cssText,e)},src:function(){return t.style.getPropertyValue("src")}}}}}(),i=function(){return{inlineAll:function e(r){return r instanceof Element?function(t){var e=t.style.getPropertyValue("background");return e?o.inlineAll(e).then((function(e){t.style.setProperty("background",e,t.style.getPropertyPriority("background"))})).then((function(){return t})):Promise.resolve(t)}(r).then((function(){return r instanceof HTMLImageElement?t(r).inline():Promise.all(n.asArray(r.childNodes).map((function(t){return e(t)})))})):Promise.resolve(r)},impl:{newImage:t}};function t(t){return{inline:function(e){return n.isDataUrl(t.src)?Promise.resolve():Promise.resolve(t.src).then(e||n.getAndEncode).then((function(e){return n.dataAsUrl(e,n.mimeType(t.src))})).then((function(e){return new Promise((function(n,o){t.onload=n,t.onerror=o,t.src=e}))}))}}}}(),u=void 0,a=!1,c={toSvg:l,toPng:function(t,e){return s(t,e||{}).then((function(t){return t.toDataURL()}))},toJpeg:function(t,e){return s(t,e=e||{}).then((function(t){return t.toDataURL("image/jpeg",e.quality||1)}))},toBlob:function(t,e){return s(t,e||{}).then(n.canvasToBlob)},toPixelData:function(t,e){return s(t,e||{}).then((function(e){return e.getContext("2d").getImageData(0,0,n.width(t),n.height(t)).data}))},impl:{fontFaces:r,images:i,util:n,inliner:o,options:{}}};function l(t,e){return function(t){void 0===t.imagePlaceholder?c.impl.options.imagePlaceholder=u:c.impl.options.imagePlaceholder=t.imagePlaceholder,void 0===t.cacheBust?c.impl.options.cacheBust=a:c.impl.options.cacheBust=t.cacheBust}(e=e||{}),Promise.resolve(t).then((function(t){return g(t,e.filter,!0)})).then(f).then(M).then((function(t){return e.bgcolor&&(t.style.backgroundColor=e.bgcolor),e.width&&(t.style.width=e.width+"px"),e.height&&(t.style.height=e.height+"px"),e.style&&Object.keys(e.style).forEach((function(n){t.style[n]=e.style[n]})),t})).then((function(o){return function(t,e,o){return Promise.resolve(t).then((function(t){return t.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),(new XMLSerializer).serializeToString(t)})).then(n.escapeXhtml).then((function(t){return'<foreignObject x="0" y="0" width="100%" height="100%">'+t+"</foreignObject>"})).then((function(t){return'<svg xmlns="http://www.w3.org/2000/svg" width="'+e+'" height="'+o+'">'+t+"</svg>"})).then((function(t){return"data:image/svg+xml;charset=utf-8,"+t}))}(o,e.width||n.width(t),e.height||n.height(t))}))}function s(t,e){return l(t,e).then(n.makeImage).then(n.delay(100)).then((function(o){var r=function(t){var o=document.createElement("canvas");if(o.width=e.width||n.width(t),o.height=e.height||n.height(t),e.bgcolor){var r=o.getContext("2d");r.fillStyle=e.bgcolor,r.fillRect(0,0,o.width,o.height)}return o}(t);return r.getContext("2d").drawImage(o,0,0),r}))}function g(t,e,o){return o||!e||e(t)?Promise.resolve(t).then((function(t){return t instanceof HTMLCanvasElement?n.makeImage(t.toDataURL()):t.cloneNode(!1)})).then((function(o){return function(t,e,o){var r=t.childNodes;return 0===r.length?Promise.resolve(e):function(t,e,n){var o=Promise.resolve();return e.forEach((function(e){o=o.then((function(){return g(e,n)})).then((function(e){e&&t.appendChild(e)}))})),o}(e,n.asArray(r),o).then((function(){return e}))}(t,o,e)})).then((function(e){return function(t,e){return e instanceof Element?Promise.resolve().then((function(){o=window.getComputedStyle(t),r=e.style,o.cssText?r.cssText=o.cssText:function(t,e){n.asArray(t).forEach((function(n){e.setProperty(n,t.getPropertyValue(n),t.getPropertyPriority(n))}))}(o,r);var o,r})).then((function(){[":before",":after"].forEach((function(o){!function(o){var r=window.getComputedStyle(t,o),i=r.getPropertyValue("content");if(""!==i&&"none"!==i){var u=n.uid();e.className=e.className+" "+u;var a=document.createElement("style");a.appendChild(function(t,e,o){var r="."+t+":"+e,i=o.cssText?u(o):a(o);return document.createTextNode(r+"{"+i+"}");function u(t){var e=t.getPropertyValue("content");return t.cssText+" content: "+e+";"}function a(t){return n.asArray(t).map(e).join("; ")+";";function e(e){return e+": "+t.getPropertyValue(e)+(t.getPropertyPriority(e)?" !important":"")}}}(u,o,r)),e.appendChild(a)}}(o)}))})).then((function(){t instanceof HTMLTextAreaElement&&(e.innerHTML=t.value),t instanceof HTMLInputElement&&e.setAttribute("value",t.value)})).then((function(){e instanceof SVGElement&&(e.setAttribute("xmlns","http://www.w3.org/2000/svg"),e instanceof SVGRectElement&&["width","height"].forEach((function(t){var n=e.getAttribute(t);n&&e.style.setProperty(t,n)})))})).then((function(){return e})):e}(t,e)})):Promise.resolve()}function f(t){return r.resolveAll().then((function(e){var n=document.createElement("style");return t.appendChild(n),n.appendChild(document.createTextNode(e)),t}))}function M(t){return i.inlineAll(t).then((function(){return t}))}t.exports=c}()},762:function(t,e,n){var o;void 0===(o=function(){"use strict";function e(t,e,n){var o=new XMLHttpRequest;o.open("GET",t),o.responseType="blob",o.onload=function(){a(o.response,e,n)},o.onerror=function(){console.error("could not download file")},o.send()}function o(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function r(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(n){var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(e)}}var i="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n.g&&n.g.global===n.g?n.g:void 0,u=i.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),a=i.saveAs||("object"!=typeof window||window!==i?function(){}:"download"in HTMLAnchorElement.prototype&&!u?function(t,n,u){var a=i.URL||i.webkitURL,c=document.createElement("a");n=n||t.name||"download",c.download=n,c.rel="noopener","string"==typeof t?(c.href=t,c.origin===location.origin?r(c):o(c.href)?e(t,n,u):r(c,c.target="_blank")):(c.href=a.createObjectURL(t),setTimeout((function(){a.revokeObjectURL(c.href)}),4e4),setTimeout((function(){r(c)}),0))}:"msSaveOrOpenBlob"in navigator?function(t,n,i){if(n=n||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(function(t,e){return void 0===e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}(t,i),n);else if(o(t))e(t,n,i);else{var u=document.createElement("a");u.href=t,u.target="_blank",setTimeout((function(){r(u)}))}}:function(t,n,o,r){if((r=r||open("","_blank"))&&(r.document.title=r.document.body.innerText="downloading..."),"string"==typeof t)return e(t,n,o);var a="application/octet-stream"===t.type,c=/constructor/i.test(i.HTMLElement)||i.safari,l=/CriOS\/[\d]+/.test(navigator.userAgent);if((l||a&&c||u)&&"undefined"!=typeof FileReader){var s=new FileReader;s.onloadend=function(){var t=s.result;t=l?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=t:location=t,r=null},s.readAsDataURL(t)}else{var g=i.URL||i.webkitURL,f=g.createObjectURL(t);r?r.location=f:location.href=f,r=null,setTimeout((function(){g.revokeObjectURL(f)}),4e4)}});i.saveAs=a.saveAs=a,t.exports=a}.apply(e,[]))||(t.exports=o)},284:(t,e,n)=>{"use strict";n(517);var o=n(816),r=n.n(o),i=n(762);function u(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}const a=function(){function t(e,n,o){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.bgColor=e,this.textColor=o,this.quoteText=n,this.quoteData=[]}var e,n,o;return e=t,o=[{key:"screenShot",value:function(t){r().toBlob(t).then((function(t){(0,i.saveAs)(t,"quote1.png")}))}},{key:"backgroundColor",value:function(t){var e=document.getElementById("quote-bg");""!==t&&(e.style.backgroundColor=t),console.log(t)}},{key:"textColor",value:function(t){var e=document.getElementById("text-container");" "!==t&&(e.style.color=t)}},{key:"resetAndPersistWidthAndHeight",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:400,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:400,n=document.getElementById("quote-bg");document.getElementById("board-height").value=e,document.getElementById("board-width").value=t,n.style.height=e+"px",n.style.width=t+"px"}},{key:"setFontStyles",value:function(t){var e=document.querySelector("#quote-bg .card .card-content");e.style.fontFamily=t,e.style.fontSize=fontSize}},{key:"setFontSize",value:function(t){document.querySelector("#quote-bg .card .card-content").style.fontSize=t+"px",document.querySelector(".font-input").value=t}}],(n=[{key:"loadDefaults",value:function(){if(console.log(this.quoteData),localStorage.getItem("quote-generator"))return localStorage.getItem("quote-generator");localStorage.setItem("quote-generator",JSON.stringify(this.quoteData))}},{key:"persistColorToLocaleStorage",value:function(){if(""!==this.color){var t=JSON.parse(this.loadDefaults());this.quoteData[0]=this.bgColor,this.quoteData[1]=t[1]}localStorage.getItem("quote-generator")&&localStorage.setItem("quote-generator",JSON.stringify(this.quoteData))}},{key:"persistTextToLocaleStorage",value:function(){""!==this.quoteText&&""!=typeof this.quoteText&&this.quoteData.splice(2,1,this.quoteText),localStorage.getItem("quote-generator")&&localStorage.setItem("quote-generator",JSON.stringify(quoteData))}},{key:"persistTextColorToLocalStorage",value:function(){var t=JSON.parse(this.loadDefaults());""!==this.textColor&&""!=typeof this.textColor&&(this.quoteData[0]=t[0],this.quoteData[1]=this.textColor,localStorage.getItem("quote-generator")&&localStorage.setItem("quote-generator",JSON.stringify(this.quoteData)))}}])&&u(e.prototype,n),o&&u(e,o),t}();function c(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var l,s,g,f=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n;return e=t,n=[{key:"fetchPhotos",value:function(t){var e=this;fetch("https://api.unsplash.com/photos?orientation=landscape&per_page=30&page="+t,{method:"GET",headers:{Authorization:"Client-ID ".concat("uWgEsu7J_S1wB1CZ_nm1GrLwsI71A-cdvMFoRiy21nE"," ")}}).then((function(t){return t.json()})).then((function(n){console.log(n),e.loading=!1,document.querySelector(".modal").classList.add("is-active"),e.renderPhotos(n),document.getElementById("next-photo-btn").value=t})).catch((function(t){e.loading=!1,console.error(t)}))}},{key:"renderPhotos",value:function(t){var e=t.map((function(t){return'\n          <img class="photos select-photos mr-2" style="width:50%" src='.concat(t.urls.regular," />\n      ")}));document.querySelector(".modal-content").innerHTML=" ".concat(e.join(""),' \n      <div class="control">\n      <input class="input is-small is-primary" id="next-photo-btn" type="number"/>\n      <p>page</p>\n      </div>\n      </div>\n      '),document.querySelector(".modal-close").addEventListener("click",(function(){document.querySelector(".modal").classList.remove("is-active")}))}},{key:"selectAPhoto",value:function(t){document.getElementById("quote-bg").style.backgroundImage="url(".concat(t,")")}}],null&&c(e.prototype,null),n&&c(e,n),t}();g=void 0,(s="loading")in(l=f)?Object.defineProperty(l,s,{value:g,enumerable:!0,configurable:!0,writable:!0}):l[s]=g;const M=f;document.addEventListener("DOMContentLoaded",(function(){var t,e=(new a).loadDefaults(),n=JSON.parse(e);(t=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0)).length>0&&t.forEach((function(t){t.addEventListener("click",(function(){var e=t.dataset.target,n=document.getElementById(e);t.classList.toggle("is-active"),n.classList.toggle("is-active")}))})),a.backgroundColor(n[0]),a.textColor(n[1]),document.getElementById("screenshot-btn").addEventListener("click",(function(t){var e=document.getElementById("quote-bg");a.screenShot(e)})),document.addEventListener("change",(function(t){if(t.target.matches("#bgcolor-btn"))a.backgroundColor(t.target.value),new a(t.target.value).persistColorToLocaleStorage();else if(t.target.matches("#textcolor-btn")){a.textColor(t.target.value);var e=new a("_","_",t.target.value);console.log(t.target.value),e.persistTextColorToLocalStorage()}else if(t.target.matches("#board-width"))a.resetAndPersistWidthAndHeight(t.target.value,"");else if(t.target.matches("#board-height"))a.resetAndPersistWidthAndHeight("",t.target.value);else if(t.target.matches("#next-photo-btn"))M.fetchPhotos(t.target.value);else if(t.target.matches(".font-input")){var n=t.target.value;a.setFontSize(n)}})),document.addEventListener("click",(function(t){if(t.target.matches("#bgimage-btn"))M.fetchPhotos(1);else if(t.target.matches(".font-style")){var e=t.target.textContent.trim().toLowerCase();a.setFontStyles(e)}})),document.addEventListener("click",(function(t){if(t.target.matches(".select-photos")){var e=t.target.getAttribute("src");M.selectAPhoto(e)}else{if(!t.target.matches("#trigger-btn"))return!1;document.querySelector(".dropdown").classList.toggle("is-active")}}))}))},517:t=>{"use strict";t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzOTE2IDE1MjQiPjx0aXRsZT5sb2dvLW9uLWRhcmstYmc8L3RpdGxlPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik04MjIgMzM2bDM4NyAyMTguOXY0MzcuOWwtMzg3IDIxOC45LTM4Ny0yMTguOVY1NTQuOXoiLz48cGF0aCBmaWxsPSIjOEVENkZCIiBkPSJNMTEzOS45IDk3Ny43bC0zMDUuMSAxNzIuNnYtMTM0LjRsMTkwLjEtMTA0LjYgMTE1IDY2LjR6bTIwLjktMTguOVY1OTcuOWwtMTExLjYgNjQuNXYyMzJsMTExLjYgNjQuNHptLTY1Ny45IDE4LjlMODA4IDExNTAuM3YtMTM0LjRMNjE3LjggOTExLjNsLTExNC45IDY2LjR6TTQ4MiA5NTguOFY1OTcuOWwxMTEuNiA2NC41djIzMkw0ODIgOTU4Ljh6bTEzLjEtMzg0LjNsMzEyLjktMTc3djEyOS45TDYwNy41IDYzNy43bC0xLjYuOS0xMTAuOC02NC4xem02NTIuNiAwbC0zMTIuOS0xNzd2MTI5LjlsMjAwLjUgMTEwLjIgMS42LjkgMTEwLjgtNjR6Ii8+PHBhdGggZmlsbD0iIzFDNzhDMCIgZD0iTTgwOCA5ODUuM0w2MjAuNCA4ODIuMVY2NzcuOEw4MDggNzg2LjF2MTk5LjJ6bTI2LjggMGwxODcuNi0xMDMuMVY2NzcuOEw4MzQuOCA3ODYuMXYxOTkuMnptLTEzLjQtMjA3ek02MzMuMSA2NTQuMmwxODguMy0xMDMuNSAxODguMyAxMDMuNS0xODguMyAxMDguNy0xODguMy0xMDguN3oiLz48cGF0aCBmaWxsPSIjRjVGQUZBIiBkPSJNMTU5OS4zIDkxMi4zaDgyLjVsODQuMS0yODAuMmgtODAuNGwtNDkuOCAxOTguOC01My4xLTE5OC44SDE1MTNsLTUzLjYgMTk4LjgtNDkuMy0xOTguOGgtODAuNGw4My42IDI4MC4yaDgyLjVsNTItMTc5LjUgNTEuNSAxNzkuNXpNMTc3MC4yIDc3M2MwIDg0LjEgNTcuMyAxNDYuMyAxNDcuNCAxNDYuMyA2OS43IDAgMTA3LjItNDEuOCAxMTcuOS02MS42bC00OC44LTM3Yy04IDExLjgtMzAgMzQuMy02OC4xIDM0LjMtNDEuMyAwLTcxLjMtMjYuOC03Mi45LTY0LjNIMjA0M2MuNS01LjQuNS0xMC43LjUtMTYuMSAwLTkxLjYtNDkuMy0xNDkuNS0xMzYuMS0xNDkuNS03OS45IDAtMTM3LjIgNjMuMi0xMzcuMiAxNDcuOXptNzcuNy0zMC42YzMuMi0zMi4xIDI1LjctNTYuOCA2MC42LTU2LjggMzMuOCAwIDU4LjQgMjIuNSA2MCA1Ni44aC0xMjAuNnptMjIzLjUgMTY5LjloNjkuN3YtMjguOWM3LjUgOS4xIDM1LjQgMzUuOSA4My4xIDM1LjkgODAuNCAwIDEzNy4yLTYwLjUgMTM3LjItMTQ2LjggMC04Ni44LTUyLjUtMTQ3LjMtMTMyLjktMTQ3LjMtNDguMiAwLTc2LjEgMjYuOC04My4xIDM2LjRWNTI0LjloLTczLjl2Mzg3LjR6bTcxLjgtMTM5LjNjMC01Mi41IDMxLjEtODIuNSA3MS44LTgyLjUgNDIuOSAwIDcxLjggMzMuOCA3MS44IDgyLjUgMCA0OS44LTMwIDgwLjktNzEuOCA4MC45LTQ1IDAtNzEuOC0zNi41LTcxLjgtODAuOXptMjQ3IDIzOS41aDczLjlWODgzLjNjNyA5LjEgMzQuOCAzNS45IDgzLjEgMzUuOSA4MC40IDAgMTMyLjktNjAuNSAxMzIuOS0xNDcuMyAwLTg1LjctNTYuOC0xNDYuOC0xMzcuMi0xNDYuOC00Ny43IDAtNzUuNiAyNi44LTgzLjEgMzYuNFY2MzJoLTY5Ljd2MzgwLjV6bTcxLjgtMjQxLjFjMC00NC41IDI2LjgtODAuOSA3MS44LTgwLjkgNDEuOCAwIDcxLjggMzEuMSA3MS44IDgwLjkgMCA0OC44LTI4LjkgODIuNS03MS44IDgyLjUtNDAuNyAwLTcxLjgtMzAtNzEuOC04Mi41em0yMzEuNSA1NC4xYzAgNTguOSA0OC4yIDkzLjggMTA1IDkzLjggMzIuMiAwIDUzLjYtOS42IDY4LjEtMjUuMmw0LjggMTguMmg2NS40VjczNC45YzAtNjIuNy0yNi44LTEwOS44LTExNi44LTEwOS44LTQyLjkgMC04NS4yIDE2LjEtMTEwLjQgMzMuMmwyNy45IDUwLjRjMjAuOS0xMC43IDQ2LjYtMTkuOCA3NC41LTE5LjggMzIuNyAwIDUwLjkgMTYuNiA1MC45IDQxLjN2MTguMmMtMTAuMi03LTMyLjItMTUuNS02MC42LTE1LjUtNjUuNC0uMS0xMDguOCAzNy40LTEwOC44IDkyLjZ6bTczLjktMi4yYzAtMjMgMTkuOC0zOS4xIDQ4LjItMzkuMXM0OC44IDE0LjUgNDguOCAzOS4xYzAgMjMuNi0yMC40IDM4LjYtNDguMiAzOC42cy00OC44LTE1LjUtNDguOC0zOC42em0zNDguOSAzMC42Yy00Ni42IDAtNzkuOC0zMy44LTc5LjgtODEuNCAwLTQ1IDI5LjUtODIgNzcuMi04MiAzMS42IDAgNTMuMSAxNS41IDY1LjQgMjYuOGwyMC45LTYyLjJjLTE4LjItMTMuOS00Ny4yLTMwLTg4LjQtMzAtODUuMiAwLTE0OSA2Mi43LTE0OSAxNDcuOXM2Mi4yIDE0Ni4zIDE0OS41IDE0Ni4zYzQwLjcgMCA3MS4zLTE3LjEgODcuMy0zMGwtMTkuOC02MC41Yy0xMi40IDEwLjEtMzQuOSAyNS4xLTYzLjMgMjUuMXptMTEwLjkgNTguNGg3My45Vjc2Ny42bDkzLjggMTQ0LjdoODYuOEwzMzc1LjYgNzU5bDk4LjYtMTI3aC04My4xbC05MCAxMTcuOXYtMjI1aC03My45djM4Ny40eiIvPjwvc3ZnPg=="}},t=>{t(t.s=284)}]);