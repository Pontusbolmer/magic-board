var contentDiv = document.getElementById("content");

var board = document.createElement("div");
board.className = "board";

for (var y = 0; y < 8; y++) {
    addRowToBoard();
}
contentDiv.appendChild(board);


function addRowToBoard() {
    var row = document.createElement("div");
    row.className = "row"
    if (y%2) {
    row.style.backgroundColor = "black"
    } else {
        row.style.backgroundColor = "white";
    }
     board.appendChild(row);
}



