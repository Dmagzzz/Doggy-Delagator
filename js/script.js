
fetch("https://dog-facts-api.herokuapp.com/api/v1/resources/dogs/all")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {

  
    const num = Math.floor(Math.random() * data.length);
    const dogFact = data[num].fact;
    document.getElementById("dogFact").innerHTML = dogFact;
  });

 function displaydogFact(data) {
 document.getElementById("dogFact");
 }


fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {

   
    for (let i = 0; i < data.message.length; i++) {
      const fourDogs = document.getElementById("dog-img-" + i);
      fourDogs.setAttribute("src", data.message[i]);
    }

  });


function checkThisOut(target) {
  const history = JSON.parse(localStorage.getItem("savedFavoritePhotos")) || [];
  const imgId = target.getAttribute("data-img-id");
  const imgEl = document.getElementById(imgId);
  const imgUrl = imgEl.getAttribute("src");
  history.unshift(imgUrl);
  localStorage.setItem("savedFavoritePhotos", JSON.stringify(history));
  window.location.href = "favorite.html";
}

