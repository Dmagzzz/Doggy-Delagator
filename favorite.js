// allPhotos.href =
//   "https://images.dog.ceo/breeds/collie-border/n02106166_1460.jpg";
//checkThisOut();

//function checkThisOut() {
const history = JSON.parse(localStorage.getItem("savedFavoritePhotos"));
//   const imgId = target.getAttribute("data-img-id");
//   const imgEl = document.getElementById(imgId);
// const imgUrl = imgEl.getAttribute("src");
//history.push(imgUrl);
// localStorage.setItem("savedFavoritePhotos", JSON.stringify(history));
//   allPhotos.href = "favorite.html";
// }
for (let i = 0; i < history.length; i++) {
  const allPhotos = document.createElement("img");
  //const fourDogs = document.getElementById("dog-img-" + i);
  allPhotos.setAttribute("src", history[i]);
  document.getElementById("allPhotos").appendChild(allPhotos);
}
