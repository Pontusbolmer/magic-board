var nrOfSquares = 8;
var contentDiv = document.getElementById("content");

var board = document.createElement("div");
board.className = "board";



for (var y = 0; y < nrOfSquares; y++) {
   var row =  addRowToBoard();

    for (var x = 0; x < nrOfSquares; x++) {
        var ruta = document.createElement("div");
        if ((x+y) %2) {
            ruta.style.backgroundColor = "black"
        } else {
            ruta.style.backgroundColor = "#521414"
        }
        ruta.className = "ruta";
        row.appendChild(ruta);
    }

    
}
contentDiv.appendChild(board);



function addRowToBoard() {
    var row = document.createElement("div");
    row.className = "row"
    
     board.appendChild(row);
     return row;
     
     
}


