const allTeams = [
    {
        country: 'England',
        player1: 'Arron',
        Player2: 'Zoltan'
    },
    {
        country: 'China & Taiwan',
        player1: 'Justin',
        Player2: 'Albert'
    },
    {
        country: 'Spain',
        player1: 'Chris',
        Player2: 'Rocardo'
    },
    {
        country: 'Ukraine',
        player1: 'Constantin',
        Player2: 'Cristian'
    },
    {
        country: 'Wales',
        player1: 'Dave',
        Player2: 'Wales2'
    },
    {
        country: 'Brazil',
        player1: 'Damany',
        Player2: 'Raj'
    },
    {
        country: 'Slovenia',
        player1: 'Vesna',
        Player2: 'Slovenia2'
    },
    {
        country: 'Italy',
        player1: 'Vicky',
        Player2: 'Italy2'
    }
];


const countryNames = [];
for (var key in allTeams) {
    countryNames.push(allTeams[key].country)
}

console.log(countryNames);

var upgradeTeams1 = [];

for (i = 0; i < 4 / 2; i++) {
    var team1 = countryNames[i * 2];
    var team2 = countryNames[i * 2 + 1];
    let t1Score = Math.floor((Math.random() * 10) + 1);
    let t2Score = Math.floor((Math.random() * 10) + 1);
    var teamWin;
    var teamLose;
    if (t1Score != t2Score){
        assign(t1Score, t2Score);
        upgrade1(teamWin);
        console.log(`${teamWin} beat ${teamLose} by ${scoreWin}:${scoreLose} in Round 1!`);
    }
    else {
        while (t1Score === t2Score) {
            t1Score = Math.floor((Math.random() * 10) + 1);
            t2Score = Math.floor((Math.random() * 10) + 1);
        }
        assign(t1Score, t2Score);
        upgrade1(teamWin);
        console.log(`${teamWin} and ${teamLose} had a draw, but ${teamWin} eventually beat ${teamLose} by ${scoreWin}:${scoreLose} in Round 1!`);
    }
}

function assign(t1Score, t2Score){
    if (t1Score > t2Score) {
        teamWin = team1
        teamLose = team2
        scoreWin = t1Score
        scoreLose = t2Score
    }
    else if (t1Score < t2Score) {
        teamWin = team2
        teamLose = team1
        scoreWin = t2Score
        scoreLose = t1Score
    }
}


function upgrade1 (teamWin) {
    upgradeTeams1.push(teamWin)
}

console.log(`${upgradeTeams1[0]}, ${upgradeTeams1[1]}, ${upgradeTeams1[2]}, and ${upgradeTeams1[3]} have upgraded to the semifinal!`);