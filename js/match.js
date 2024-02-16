document.addEventListener("DOMContentLoaded", function () {
    loadMatches(5);
});

var Agent = {
    "Cypher":"imgs/valstuff/cypher.png",
    "Fade":"imgs/valstuff/fade.png",
    "Brimstone":"imgs/valstuff/brimstone.png"
}

const ranks = {
    "U": 1,
    "I1": 2,
    "I2": 3,
    "I3": 4,
    "B1": 5,
    "B2": 6,
    "B3": 7,
    "S1": 8,
    "S2": 9,
    "S3": 10,
    "G1": 11,
    "G2": 12,
    "G3": 13,
    "P1": 14,
    "P2": 15,
    "P3": 16,
    "D1": 17,
    "D2": 18,
    "D3": 19,
    "A1": 20,
    "A2": 21,
    "A3": 22,
    "Im1": 23,
    "Im2": 24,
    "Im3": 25,
    "R": 26,
  };
  
  const ranksimgs = {
    1:"imgs/valstuff/unranked.png",
    2 : "imgs/valstuff/I1.png",
    5 : "imgs/valstuff/B1.png",
    9 : "imgs/valstuff/S2.png",
    11:"imgs/valstuff/G1.png",
    12:"imgs/valstuff/G2.png",
    13:"imgs/valstuff/G3.png",
    15:"imgs/valstuff/P2.png",
    16:"imgs/valstuff/P3.png",
    17:"imgs/valstuff/D1.png",
    18:"imgs/valstuff/D2.png",
    21:"imgs/valstuff/A2.png",
    22:"imgs/valstuff/A3.png",
    23:"imgs/valstuff/Im1.png",
    25:"imgs/valstuff/Im3.png",
    26:"imgs/valstuff/R.png",
  };

function loadMatches(total){
    let content = ""
    response = [
        {"Date":"02022024","Agent":"Cypher", "Map":"Ascent","Rank":"D1","TeamScore":13,"EnemyScore":8,"Placement":4,"Kills":18,"Deaths":14,"Assists":5,"ACS":224,"ADR":152,"HSR":23.8},
        {"Date":"02022024","Agent":"Cypher", "Map":"Lotus","Rank":"D1","TeamScore":11,"EnemyScore":13,"Placement":6,"Kills":13,"Deaths":12,"Assists":3,"ACS":188,"ADR":136,"HSR":20.2},
    ]

    response.sort((a, b) => {
        const dateA = new Date(`${a.Date.slice(2, 4)}/${a.Date.slice(0, 2)}/${a.Date.slice(4)}`);
        const dateB = new Date(`${b.Date.slice(2, 4)}/${b.Date.slice(0, 2)}/${b.Date.slice(4)}`);
        return dateA - dateB;
    });

    for (var i = 0; i < response.length && i < limit; i++) {

    };
};