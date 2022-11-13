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
function checkThisOut() {
  alert("checkThisOut");
}
