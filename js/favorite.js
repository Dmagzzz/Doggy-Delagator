// This
const history = JSON.parse(localStorage.getItem("savedFavoritePhotos"));
let fullTemplate = "";

for (let i = 0; i < history.length; i++) {
  // const allPhotos = document.createElement("img");
  // allPhotos.setAttribute("src", history[i]);
  fullTemplate += renderRow(history[i]);
  //document.getElementById("allPhotos").appendChild(allPhotos);
}
function renderRow(imgUrl) {
  const htmlTemplate = `<div class="columns"><div class="column"><img src="${imgUrl}"/></div></div>`;
  return htmlTemplate;
}
document.getElementById("allPhotos").innerHTML = fullTemplate;
