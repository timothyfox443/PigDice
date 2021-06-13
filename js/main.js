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
};
let score1;
let score2;
let player1;
let player2;
let currTotal = 0;
let playerNow = false;
score1 = 0;
score2 = 0;
player1 = "";
player2 = "";
function changePlayers() {
    whoWon();
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
    document.getElementById("die").innerHTML = String(dieRoll);
    if (dieRoll == 1) {
        changePlayers();
        document.getElementById("total").innerHTML = String(currTotal);
    }
    else {
        currTotal += dieRoll;
        document.getElementById("total").innerHTML = String(currTotal);
    }
}
function holdDie() {
    if (playerNow == true) {
        score1 += currTotal;
        document.getElementById("score1").innerHTML = String(score1);
    }
    else {
        score2 += currTotal;
        document.getElementById("score2").innerHTML = String(score2);
    }
    whoWon();
    changePlayers();
}
function whoWon() {
    if (score1 >= 100) {
        alert(player1 + " is the winner!");
        createNewGame();
    }
    if (score2 >= 100) {
        alert(player2 + " is the winner!");
        createNewGame();
    }
}
