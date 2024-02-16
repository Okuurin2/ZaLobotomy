const APIKEY = "65ccaa6fa1d768023d02abe1";
const link = "https://kingdomlabs-0978.restdb.io/rest/userdatas"

document.addEventListener("DOMContentLoaded", function () {
    getUsers("Rank");
});

var cards = {
    "CyphCard": {"src" :"../imgs/valstuff/cyphcard.jpg","x":"10%"},
    "YoruCard": {"src" :"../imgs/valstuff/yorucard.png","x":"10%"},
    "IsoCard": {"src" :"../imgs/valstuff/isocard.png","x":"0%"},
    "OmenCard": {"src" :"../imgs/valstuff/omencard.png","x":"0%"},
    "ValCard": {"src" :"../imgs/valstuff/valcard.png","x":"25%"},
    "KuroCard": {"src" :"../imgs/valstuff/kurocard.png","x":"20%"},
    "SovaCard": {"src" :"../imgs/valstuff/sovacard.png","x":"30%"},
    "FadeCard": {"src" :"../imgs/valstuff/fadecard.png","x":"50%"},
    "AstraCard": {"src" :"../imgs/valstuff/astracard.png","x":"40%"},
    "ChamberCard":{"src" :"../imgs/valstuff/chamcard.png","x":"100%"},
    "BreezeCard": {"src" :"../imgs/valstuff/breezecard.png","x":"20%"},
    "SunsetCard":{"src" :"../imgs/valstuff/sunsetcard.png","x":"30%"},
    "SmiteCard": {"src" :"../imgs/valstuff/smitecard.png","x":"15%"},
    "PenguinCard":{"src" :"../imgs/valstuff/pengcard.png","x":"30%"},
    "NoLimitsCard":{"src" :"../imgs/valstuff/nolimcard.png","x":"10%"},
    "ArcaneCard":{"src" :"../imgs/valstuff/arcanecard.png","x":"50%"},
}

const ranks = {
    "U":1,
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
    1:"../imgs/valstuff/unranked.png",
    2 : "../imgs/valstuff/I1.png",
    5 : "../imgs/valstuff/B1.png",
    9 : "../imgs/valstuff/S2.png",
    11:"../imgs/valstuff/G1.png",
    12:"../imgs/valstuff/G2.png",
    13:"../imgs/valstuff/G3.png",
    15:"../imgs/valstuff/P2.png",
    16:"../imgs/valstuff/P3.png",
    17:"../imgs/valstuff/D1.png",
    18:"../imgs/valstuff/D2.png",
    21:"../imgs/valstuff/A2.png",
    22:"../imgs/valstuff/A3.png",
    23:"../imgs/valstuff/Im1.png",
    25:"../imgs/valstuff/Im3.png",
    26:"../imgs/valstuff/R.png",
  };

function getUsers(filter) {
    limit = 20
    all = true
    response = [
        {"Username":"Okuurin", "Tag":"東方2hu", "Rank":"D1", "Player_Card":"CyphCard", "Wins":22,"Losses":19,"WinRate":53.66, "Hours":29,"KDA":1.08,"ACS":220,"HSR":22.8},
        {"Username":"i miss her", "Tag":"<3", "Rank":"Im1", "Player_Card":"YoruCard", "Wins":42,"Losses":35,"WinRate":54.55, "Hours":50,"KDA":1.22,"ACS":258,"HSR":25.3},
        {"Username":"SMG Zeppelinyolo", "Tag":"zzy", "Rank":"G1", "Player_Card":"IsoCard", "Wins":35,"Losses":29,"WinRate":54.69, "Hours":41,"KDA":1.22,"ACS":231,"HSR":23.7},
        {"Username":"Scatter", "Tag":"BOO", "Rank":"P2", "Player_Card":"OmenCard", "Wins":8,"Losses":6,"WinRate":57.14, "Hours":10,"KDA":0.89,"ACS":158,"HSR":18.7},
        {"Username":"Chernobyl", "Tag":"Okuu", "Rank":"U", "Player_Card":"ValCard", "Wins":2,"Losses":2,"WinRate":50.00, "Hours":3,"KDA":1.00,"ACS":214,"HSR":15.1},
        {"Username":"notsmurf", "Tag":"trust", "Rank":"G3", "Player_Card":"ValCard", "Wins":4,"Losses":1,"WinRate":80.00, "Hours":4,"KDA":1.41,"ACS":234,"HSR":23.1},
        {"Username":"SMG Mattsu", "Tag":"001", "Rank":"G2", "Player_Card":"SovaCard", "Wins":14,"Losses":18,"WinRate":43.75, "Hours":29,"KDA":1.33,"ACS":267,"HSR":26.0},
        {"Username":"FrogLover31", "Tag":"boom", "Rank":"P2", "Player_Card":"KuroCard", "Wins":3,"Losses":2,"WinRate":60.00, "Hours":4,"KDA":0.98,"ACS":204,"HSR":22.2},
        {"Username":"sinned", "Tag":"zzz", "Rank":"A2", "Player_Card":"AstraCard", "Wins":16,"Losses":14,"WinRate":53.33, "Hours":19,"KDA":1.02,"ACS":222,"HSR":26.3},
        {"Username":"TenZ", "Tag":"Sens", "Rank":"D2", "Player_Card":"FadeCard", "Wins":60,"Losses":65,"WinRate":48.00, "Hours":79,"KDA":0.99,"ACS":213,"HSR":23.4},
        {"Username":"PRX Bingg", "Tag":"2981", "Rank":"A3", "Player_Card":"ArcaneCard", "Wins":32,"Losses":22,"WinRate":59.25, "Hours":44,"KDA":1.21,"ACS":241,"HSR":26.2},
        {"Username":"Vegeta", "Tag":"3892", "Rank":"B1", "Player_Card":"ChamberCard", "Wins":11,"Losses":10,"WinRate":52.38, "Hours":13,"KDA":0.87,"ACS":156,"HSR":15.9},
        {"Username":"amonguslover69", "Tag":"sus", "Rank":"S2", "Player_Card":"BreezeCard", "Wins":13,"Losses":15,"WinRate":46.42, "Hours":20,"KDA":0.91,"ACS":187,"HSR":19.9},
        {"Username":"stickingoutyour", "Tag":"gyatt", "Rank":"D2", "Player_Card":"SmiteCard", "Wins":10,"Losses":11,"WinRate":47.61, "Hours":11,"KDA":1.22,"ACS":242,"HSR":22.4},
        {"Username":"한국인", "Tag":"9999", "Rank":"G1", "Player_Card":"NoLimitsCard", "Wins":30,"Losses":25,"WinRate":54.54, "Hours":48,"KDA":1.01,"ACS":203,"HSR":21.1},
    ]

    let content = "";

    for (var i =0 ;i < response.length && i < limit;i++) {
        if (ranks[response[i].Rank]) {
            response[i].Rank = ranks[response[i].Rank]
        }
    }


    response.sort(function(a, b) {
        return b[filter] - a[filter];
      });

    for (var i = 0; i < response.length && i < limit; i++) {
            
        let username = response[i].Username
            let tag = response[i].Tag
            let rank = response[i].Rank
            let playercard = response[i].Player_Card
            let wins = response[i].Wins
            let lose = response[i].Losses
            let wr = response[i].WinRate
            let hours = response[i].Hours
            let kda = response[i].KDA
            let acs = response[i].ACS
            let hsr = response[i].HSR
    
            let cardsrc
            let ranksrc
    
            if (cards[playercard]) {
                cardsrc = cards[playercard].src;
              } else {
                cardsrc = "none"
              }
    
              if (ranksimgs[rank]) {
                ranksrc = ranksimgs[rank];
              } else {
                ranksrc = "none"
              }
            
            if (username == "Okuurin"){
                content = `${content}<tr id = "you" id='${response[i]._id}'>
                <td>${i+1}</td>
                <td><div class="playercard" style="background-image:url(${cardsrc});background-position: 0% ${cards[playercard].x}"> </div> </td>
                <td><div><a class="username">${username}</a> <a class="tag">#${tag}</a> </div></td>
                <td><div class="rank" style="background-image:url(${ranksrc});"> </div> </td>
                <td>${wins}</td>
                <td>${lose}</td>
                <td>${hours}</td>
                <td>${wr.toFixed(1)+"%"}</td>
                <td>${kda.toFixed(2)}</td>
                <td>${acs}</td>
                <td>${hsr.toFixed(1)}</td>`
            }
            else{;
                content = `${content}<tr id='${response[i]._id}'>
                <td>${i+1}</td>
                <td><div class="playercard" style="background-image:url(${cardsrc});background-position: 0% ${cards[playercard].x}"> </div> </td>
                <td><div><a class="username">${username}</a> <a class="tag">#${tag}</a> </div></td>
                <td><div class="rank" style="background-image:url(${ranksrc});"> </div> </td>
                <td>${wins}</td>
                <td>${lose}</td>
                <td>${hours}</td>
                <td>${wr.toFixed(1)+"%"}</td>
                <td>${kda.toFixed(2)}</td>
                <td>${acs}</td>
                <td>${hsr.toFixed(1)}</td>`
            };
        }
        
        document.getElementById("userlist").getElementsByTagName("tbody")[0].innerHTML = content;
      };

    document.getElementById('headerrank').addEventListener('click', function() {
        getUsers("Rank");
      });
    
      document.getElementById('headerwins').addEventListener('click', function() {
        getUsers("Wins");
      });
    
      document.getElementById('headerlosses').addEventListener('click', function() {
        getUsers("Losses");
      });

      document.getElementById('headerwinrate').addEventListener('click', function() {
        getUsers("WinRate");
      });
    
      document.getElementById('headerhours').addEventListener('click', function() {
        getUsers("Hours");
      });
    
      document.getElementById('headerkda').addEventListener('click', function() {
        getUsers("KDA");
      });
    
      document.getElementById('headeracs').addEventListener('click', function() {
        getUsers("ACS");
      });
    
      document.getElementById('headerhsr').addEventListener('click', function() {
        getUsers("HSR");
      });