const unsplashAccessKey = "uWgEsu7J_S1wB1CZ_nm1GrLwsI71A-cdvMFoRiy21nE";
const unsplashUrl = "https://api.unsplash.com/photos?orientation=landscape&per_page=30";
class APP {
  static loading;
  static fetchPhotos(page) {
    fetch(unsplashUrl +"&"+ "page=" + page, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      headers: {
        Authorization: `Client-ID ${unsplashAccessKey} `,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        this.loading = false;
        document.querySelector(".modal").classList.add("is-active");
        this.renderPhotos(data);
        document.getElementById("next-photo-btn").value = page;
      })
      .catch((err) => {
        this.loading = false;
        console.error(err);
      });
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
    document.querySelector(".modal-close").addEventListener("click", () => {
      document.querySelector(".modal").classList.remove("is-active");
    });
  }
  static selectAPhoto(photo) {
    const $quoteBg = document.getElementById("quote-bg");
    $quoteBg.style.backgroundImage=`url(${photo})`
  }
}
export default APP;
