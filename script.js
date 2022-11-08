function getApi(input) {
  // fetch request gets a list of all the repos for the node.js organization
  const requestUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${input}&appid=a74bf83c5240b68543e1753ef9d16b93`;

  fetch(requestUrl)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      getWeather(data[0]);
    });
}

function getWeather(location) {
  const lat = location.lat;
  const lon = location.lon;
  const requestUrl = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=a74bf83c5240b68543e1753ef9d16b93`;
  fetch(requestUrl)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
    });
}

getApi("Exeter");

fetchButton.addEventListener("click", getApi);


//This function fetches the dog-facts-api
fetch(url)
const url = 'https:dog-facts-api.herokuapp.com/api/v1/resources/dogs/all' 
.then(function(response) {
    return response.json();
})
.then(function(data) { //this function selects a random dog fact
    console.log(data);
    const num = Math.floor(Math.random()*data.length)
    const dogFact = data[num]
    console.log(dogFact)
});



// Assignment code here

