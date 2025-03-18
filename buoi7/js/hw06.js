const matches = [
  { teamA: "A", teamB: "B", scoreA: 2, scoreB: 1 },
  { teamA: "C", teamB: "D", scoreA: 1, scoreB: 3 },
  { teamA: "A", teamB: "C", scoreA: 2, scoreB: 2 },
  { teamA: "B", teamB: "D", scoreA: 0, scoreB: 1 },
  { teamA: "A", teamB: "D", scoreA: 3, scoreB: 1 },
];

const teams = {};

matches.forEach(({ teamA, teamB, scoreA, scoreB }) => {
  if (!teams[teamA]) teams[teamA] = { win: 0, draw: 0, lose: 0, points: 0, goals: 0 };
  if (!teams[teamB]) teams[teamB] = { win: 0, draw: 0, lose: 0, points: 0, goals: 0 };

  teams[teamA].goals += scoreA;
  teams[teamB].goals += scoreB;

  if (scoreA > scoreB) {
    teams[teamA].win++;
    teams[teamA].points += 3;
    teams[teamB].lose++;
  } else if (scoreA < scoreB) {
    teams[teamB].win++;
    teams[teamB].points += 3;
    teams[teamA].lose++;
  } else {
    teams[teamA].draw++;
    teams[teamB].draw++;
    teams[teamA].points += 1;
    teams[teamB].points += 1;
  }
});

console.log(teams);

const rank = Object.entries(teams)
  .map(([team, data]) => ({ team, ...data }))
  .sort((a, b) => b.points - a.points || b.goals - a.goals);

console.log(rank);

const maxGoalsTeam = rank.reduce((maxTeam, team) => {
  return team.goals > maxTeam.goals ? team : maxTeam
}, rank[0]);

console.log(maxGoalsTeam.team);
