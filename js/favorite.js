const history = JSON.parse(localStorage.getItem("savedFavoritePhotos"));
let fullTemplate = "";

for (let i = 0; i < history.length; i++) {
  fullTemplate += renderRow(history[i]);
}
function renderRow(imgUrl) {
  const htmlTemplate = `<div class="columns"><div class="column"><img src="${imgUrl}"/></div></div>`;
  return htmlTemplate;
}
document.getElementById("allPhotos").innerHTML = fullTemplate;
