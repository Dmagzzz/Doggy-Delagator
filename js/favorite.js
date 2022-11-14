// This 
const history = JSON.parse(localStorage.getItem("savedFavoritePhotos"));

for (let i = 0; i < history.length; i++) {
  const allPhotos = document.createElement("img");
  allPhotos.setAttribute("src", history[i]);
  document.getElementById("allPhotos").appendChild(allPhotos);
}
