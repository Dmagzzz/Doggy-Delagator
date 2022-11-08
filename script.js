// Assignment code here

function setup() {
//    fetch ('https://dog-facts-api.herokuapp.com/api/v1/resources/dogs/all')
//    .then(function(response))
    const url = 'https://dog-facts-api.herokuapp.com/api/v1/resources/dogs/all';

    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
        });
    
}

setup();
    