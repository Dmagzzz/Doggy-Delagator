//This function fetches the dog-facts-api
fetch("https:dog-facts-api.herokuapp.com/api/v1/resources/dogs/all")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    //this function selects a random dog fact
    console.log(data);
    const num = Math.floor(Math.random() * data.length);
    const dogFact = data[num].fact;
    console.log("dogFact =", dogFact);
    document.getElementById("dogFact").innerHTML = dogFact;
  });
function displaydogFact(data) {
  document.getElementById("dogFact");
}
// element.addEventListener("click", function(".btn")) {
//   document.getElementById(".btn").innerHTML = "Hello World";

// }
// This function fetches the random-dog-pictures
fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    //this function selects a random dog picture
    console.log(data);
    // const num = Math.floor(Math.random() * data.length);
    // const allPhotos = data[num];
    // console.log(allPhotos);
    // console.log("allPhotos =", allPhotos);
    for (let i = 0; i < data.message.length; i++) {
      const fourDogs = document.createElement("img");
      fourDogs.setAttribute("src", data.message[i]);
      document.getElementById("allPhotos").appendChild(fourDogs);
    }

    // allPhotos.href = "https://images.dog.ceo/breeds/collie-border/n02106166_1460.jpg"
  });

function displaydogFact(data) {
  document.getElementById("allPhotos");
}

function saveToStorage(favoritePhotos) { 
  const history = JSON.parse(localStorage.getItem('savedFavoritePhotos')) || []
  console.log(history);
  history.push(favoritePhotos);
  localStorage.setItem('savedFavoritePhotos', JSON.stringify(history))
  renderHistory()
}

function renderHistory() { //we may be able to use this plus a For loop to write favorites to a new screen
  console.log("rendering")
  const history = JSON.parse(localStorage.getItem('savedFavoritePhotos')) || []
  console.log(history);
 }
function checkThisOut() {
  //const url = allPhotos.getAttribute('src');
 // window.open(url,'#allPhotos','width=largeImage.stylewidth,height=largeImage.style.height,resizable=1');
 //window.location.href = allPhotos;
saveToStorage(favoritePhotos);
 window.location.href = document.getElementById("allPhotos");// This creates a new window but does not yet properly load
 alert("checkThisOut");
}
