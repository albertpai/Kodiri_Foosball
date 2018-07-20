const allTeams = [
    {
        country: 'England',
        player1: 'Arron',
        player2: 'Zoltan'
    },
    {
        country: 'China & Taiwan',
        player1: 'Justin',
        player2: 'Albert'
    },
    {
        country: 'Spain',
        player1: 'Chris',
        player2: 'Rocardo'
    },
    {
        country: 'Ukraine',
        player1: 'Constantin',
        player2: 'Cristian'
    },
    {
        country: 'Wales',
        player1: 'Dave',
        player2: 'Wales2'
    },
    {
        country: 'Brazil',
        player1: 'Damany',
        player2: 'Raj'
    },
    {
        country: 'Slovenia',
        player1: 'Vesna',
        player2: 'Slovenia2'
    },
    {
        country: 'Italy',
        player1: 'Vicky',
        player2: 'Italy2'
    }
];


const countryList = [];
for (var key in allTeams) {
    countryList.push(allTeams[key].country)
}

const player1List = [];
for (var key in allTeams) {
    player1List.push(allTeams[key].player1)
}

const player2List = [];
for (var key in allTeams) {
    player2List.push(allTeams[key].player2)
}

var teamsSemi = [];
var teamsFinal = [];
var countryListSemi = [];
var team1, team2, teamWin, teamLose;

console.log('');
console.log(`These teams are going to join the World Foosball Chiampionship:`);
console.log(`${countryList[0]}, ${countryList[1]}, ${countryList[2]}, ${countryList[3]}, ${countryList[4]}, ${countryList[5]}, ${countryList[6]}, and ${countryList[7]}!`);
console.log('');

let teamsRoundOne = [];
function shuffle() {
    for (i = 0; i < 8; i++) {
        teamsRoundOne.push({
            randomNumber: Math.floor((Math.random() * 1000) + 1),
            country: countryList[i],
            player1: player1List[i],
            player2: player2List[i]
        });
    }

    teamsRoundOne.sort(function (a, b) {
        return a.randomNumber - b.randomNumber;
    })
    return teamsRoundOne
}

shuffle();

console.log('');
console.log(`＝＝＝＝＝  Drawing Result (Fixture)  ＝＝＝＝＝`);
console.log('');
for (i = 0; i < 4; i++) {
    let a = i * 2;
    let b = i * 2 + 1;
    console.log(`Group ${i + 1}: ${teamsRoundOne[a].country} (${teamsRoundOne[a].player1} and ${teamsRoundOne[a].player2})`);
    console.log('         v.s.');
    console.log(`         ${teamsRoundOne[b].country} (${teamsRoundOne[b].player1} and ${teamsRoundOne[b].player2})`);
    console.log('');
}

console.log('');
console.log('＝＝＝＝＝  Results of Round One  ＝＝＝＝＝');
console.log('');

watchMatch(teamsRoundOne, countryList, 1);

function watchMatch(teams, countries, round) {
    for(i = 0; i < Math.pow(2, (3 - round)); i++) {
    let a = i * 2;
    let b = i * 2 + 1;
    team1 = teams[a].country;
    team1P1 = teams[a].player1;
    team1P2 = teams[a].player2;
    team2 = teams[b].country;
    team2P1 = teams[b].player1;
    team2P2 = teams[b].player2;

    let t1Score = Math.floor((Math.random() * 10) + 1);
    let t2Score = Math.floor((Math.random() * 10) + 1);
    if (t1Score != t2Score) {
        assign(t1Score, t2Score, team1P1, team1P2, team2P1, team2P2);
        upgradeSemi(teamWin, teamWinP1, teamWinP2);
        console.log(`Match ${i + 1}: ${teamWin} has beaten ${teamLose} by ${scoreWin}:${scoreLose}.`);
    }
    else {
        while (t1Score === t2Score) {
            tieScore = t1Score
            t1Score = t1Score + Math.floor((Math.random() * 2));
            t2Score = t2Score + Math.floor((Math.random() * 2));
        }
        assign(t1Score, t2Score, team1P1, team1P2, team2P1, team2P2);
        upgradeSemi(teamWin, teamWinP1, teamWinP2);
        console.log(`Match ${i + 1}: ${teamWin} and ${teamLose} had a ${tieScore}:${tieScore} tie, but ${teamWin} eventually beat ${teamLose} by ${scoreWin}:${scoreLose}.`);
    }
}
}

function assign(t1Score, t2Score, team1P1, team1P2, team2P1, team2P2) {
    if (t1Score > t2Score) {
        teamWin = team1;
        teamLose = team2;
        scoreWin = t1Score;
        scoreLose = t2Score;
        teamWinP1 = team1P1;
        teamWinP2 = team1P2;
        teamLoseP1 = team2P1;
        teamLoseP2 = team2P2;
    }
    else if (t1Score < t2Score) {
        teamWin = team2;
        teamLose = team1;
        scoreWin = t2Score;
        scoreLose = t1Score;
        teamWinP1 = team2P1;
        teamWinP2 = team2P2;
        teamLoseP1 = team1P1;
        teamLoseP2 = team1P2;
    }
    return teamWin, teamWinP1, teamWinP2
}


function upgradeSemi(teamWin, teamWinP1, teamWinP2) {
    teamsSemi.push({
        country: teamWin,
        player1: teamWinP1,
        player2: teamWinP2
    });
    countryListSemi.push(teamWin);
    return teamsSemi;
}

console.log('');
console.log(`${teamsSemi[0].country}, ${teamsSemi[1].country}, ${teamsSemi[2].country}, and ${teamsSemi[3].country} have upgraded to Semifinal! Congratulations!`);

console.log('');
console.log(`＝＝＝＝＝  Seminal Fixture  ＝＝＝＝＝`);
console.log('');

for (i = 0; i < 2; i++) {
    let a = i * 2;
    let b = i * 2 + 1;
    console.log(`Group ${i + 1}: ${teamsSemi[a].country} (${teamsSemi[a].player1} and ${teamsSemi[a].player2})`);
    console.log('         v.s.');
    console.log(`         ${teamsSemi[b].country} (${teamsSemi[b].player1} and ${teamsSemi[b].player2})`);
    console.log('');
}

console.log('');
console.log('＝＝＝＝＝  Results of Semifinal  ＝＝＝＝＝');
console.log('');

watchMatch(teamsSemi, countryListSemi, 2);
console.log('');

console.log(`${teamsSemi[0].country}, ${teamsSemi[1].country}, ${teamsSemi[2].country}, and ${teamsSemi[3].country} have upgraded to Semifinal! Congratulations!`);