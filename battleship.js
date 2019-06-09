var view = {
    //this method takes a string message and displays it
    //in the message display area
    displayMessage: function (msg) {
        var messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = msg;
    },
    displayHit: function (location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "hit");
    },
    displayMiss: function (location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "miss");
    }
}

var model = {

    boardSize: 7,
    numShips: 3,
    shipLength: 3,
    shipsSunk:0,

    ships:
        [{ locations: ["06", "16", "26"], hits: ["hit", "", ""] },
        { locations: ["24", "34", "44"], hits: ["hit", "", ""] },
        { locations: ["10", "11", "12"], hits: ["hit", "", ""] }],

        fire: function(guess){
            for(var i =0; i<this.numShips; i++){
                var ship = this.ship[i];
                locations = ship.locations;
                var index = locations.indexOf(guess);
                if(index >=0){
                    ships.hits[index] = "hit";
                    return true;
                }
            }
            return false;
        }


};



/*
view.displayMiss("00");
view.displayHit("34");
view.displayMiss("55");
view.displayHit("12");
view.displayMiss("25");
view.displayHit("26");

view.displayMessage("Tap tap, is this thing on?");
*/