window.onload = function()
{
    let newGameBtn = document.getElementById("new_game");
    newGameBtn.onclick = createNewGame;
    document.getElementById("roll").onclick = rollDie;
    document.getElementById("endTurn").onclick = holdDie;

    score1 = parseInt((<HTMLInputElement>document.getElementById("score1")).value);
    score2 = parseInt((<HTMLInputElement>document.getElementById("score2")).value);
    //currTotal = parseInt((<HTMLInputElement>document.getElementById("current")).value);


}

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



// function generateRandomValue(minValue:number, maxValue:number):number
// {
//     var random = Math.random();
    
//     //TODO: use random to generate a number between min and max
    

//     return random;
// }


function changePlayers():void
{    
    whoWon();
    playerNow = !playerNow;
    currTotal = 0;
    if (playerNow == true)
    {
        (<HTMLElement>document.getElementById("current")).innerHTML = player1;
        
    }
    else
    {
        (<HTMLElement>document.getElementById("current")).innerHTML = player2;
    }

    //swap from player to player by comparing current name to player names
    //set currentPlayerName to the next player
}


function createNewGame()
{
    //alert("newgame clicked");
    //set player 1 and player 2 scores to 0

    score1 = 0;
    score2 = 0;
    player1 = (<HTMLInputElement>document.getElementById("player1")).value;
    player2 = (<HTMLInputElement>document.getElementById("player2")).value;

    //if both players don't have a name display error
    if (player1 == "" || player2 == "")
        {
            alert("Both players must have names.");
            createNewGame;
        }
    else
    {
        //if both players do have a name start the game!
        document.getElementById("turn").classList.add("open");
        (<HTMLInputElement>document.getElementById("total")).value = "0";
        //lock in player names and then change players
        document.getElementById("player1").setAttribute("disabled", "disabled");
        document.getElementById("player2").setAttribute("disabled", "disabled");
        changePlayers();
    }
}

function rollDie()
{
    //let currTotal = parseInt((<HTMLInputElement>document.getElementById("total")).value);    
    //roll the die and get a random value 1 - 6 (use generateRandomValue function)
    //if the roll is 1
    let myDie:Die = new Die();
    myDie.roll();
    let dieRoll = myDie.faceUpValue;
    document.getElementById("die").innerHTML = String(dieRoll);
    if (dieRoll == 1)
    {
        changePlayers();
        document.getElementById("total").innerHTML = String(currTotal);
    }
    else
    {
        currTotal += dieRoll;
        document.getElementById("total").innerHTML = String(currTotal);
    }
    
    //if the roll is greater than 1
    //  add roll value to current total

    //set the die roll to value player rolled
    //display current total on form
}

function holdDie():void
{
    // alert("hold die clicked");
    //get the current turn total
    //determine who the current player is
    //add the current turn total to the player's total score
    if (playerNow == true)
    {
        score1 += currTotal;
        document.getElementById("score1").innerHTML = String(score1);
    }
    else
    {
        score2 += currTotal
        document.getElementById("score2").innerHTML = String(score2);
    }
    //reset the turn total to 0
    //change players
    whoWon();
    changePlayers();    
}
function whoWon()
{
    if (score1 >= 100)
    {
        alert(player1+" is the winner!");
        createNewGame();
    }
    if (score2 >= 100)
    {
        alert(player2+" is the winner!");
        createNewGame();
    }
}