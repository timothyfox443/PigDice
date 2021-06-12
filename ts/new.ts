function roll():number
{
    if (dieRoll == 1)
    {
        tempScore = 0;
        player = !player; //thanks to the guy on stackoverflow
    //     if (player)
    //     {
    //         player == false;
    //     }
    //     else
    //     {
    //         player == true;
    //     }
    // }
    else
    {
            tempScore += dieRoll;
    }
}