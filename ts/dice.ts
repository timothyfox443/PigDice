class Die
{
    private _faceUpValue: number;

    /**
     * creates Die
     */
    constructor()
    {
        this.roll();
    }


    get faceUpValue()
    {
        return this._faceUpValue;
    }

    /**
     * Rolls a random 1- 6 one die
     */
    roll():number
    {
        this._faceUpValue = Math.floor((Math.random() * 6) + 1);
        return this._faceUpValue;
    }
}