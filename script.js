// Assignment code here

function setup() {
    createCanvas(200, 200);
    loadJSON ('https://dog-facts-api.herokuapp.com/api/v1/resources/dogs/all', gotData):
    }
    
    function gotData(data) {
        println(data);
    }

    function draw() {
        backround(0);
    }