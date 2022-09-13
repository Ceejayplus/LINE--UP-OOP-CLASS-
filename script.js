class Team{
    constructor(playerName,jerseyNumber,position){
        this.playerName = playerName,
        this.jerseyNumber = jerseyNumber,
        this.position = position
    }
}

var player1 = new Team ("Antony","21","RW")
ninth.innerHTML = `
<p>
<img src="man_utd-removebg-preview.png" alt="" height="100px">
<span class = "name">${player1.playerName}</span>
<span class = "number">${player1.jerseyNumber}</span>
<span class = "position">${player1.position}</span>
</p>
`