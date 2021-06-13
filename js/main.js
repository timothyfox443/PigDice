class Die {
    constructor() {
        this.roll();
    }
    get faceUpValue() {
        return this._faceUpValue;
    }
    roll() {
        this._faceUpValue = Math.floor((Math.random() * 6) + 1);
        return this._faceUpValue;
    }
}
window.onload = function () {
    let newGameBtn = document.getElementById("new_game");
    newGameBtn.onclick = createNewGame;
    document.getElementById("roll").onclick = rollDie;
    document.getElementById("endTurn").onclick = holdDie;
    score1 = parseInt(document.getElementById("score1").value);
    score2 = parseInt(document.getElementById("score2").value);
    currTotal = parseInt(document.getElementById("current").value);
};
let score1;
let score2;
let player1;
let player2;
let currTotal;
let playerNow = false;
score1 = 0;
score2 = 0;
player1 = "";
player2 = "";
currTotal = 0;
function changePlayers() {
    playerNow = !playerNow;
    currTotal = 0;
    if (playerNow == true) {
        document.getElementById("current").innerHTML = player1;
    }
    else {
        document.getElementById("current").innerHTML = player2;
    }
}
function createNewGame() {
    score1 = 0;
    score2 = 0;
    player1 = document.getElementById("player1").value;
    player2 = document.getElementById("player2").value;
    if (player1 == "" || player2 == "") {
        alert("Both players must have names.");
        createNewGame;
    }
    else {
        document.getElementById("turn").classList.add("open");
        document.getElementById("total").value = "0";
        document.getElementById("player1").setAttribute("disabled", "disabled");
        document.getElementById("player2").setAttribute("disabled", "disabled");
        changePlayers();
    }
}
function rollDie() {
    let myDie = new Die();
    myDie.roll();
    let dieRoll = myDie.faceUpValue;
    if (dieRoll == 1) {
        changePlayers;
    }
    else {
        currTotal += dieRoll;
    }
}
function holdDie() {
    if (playerNow == true) {
        score1 += currTotal;
    }
    else {
        score2 += currTotal;
    }
    changePlayers();
}
