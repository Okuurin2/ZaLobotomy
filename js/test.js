document.addEventListener("DOMContentLoaded", function () {

    const APIKEY = "65c8c60e229ae04bccd9a31b";
    const link = "https://kingdomlabs-0978.restdb.io/rest/userdatas"
    getContacts();

    document.getElementById("user-submit").addEventListener("click", function (e) {
    let username = document.getElementById("user-username").value;
    let tag = document.getElementById("user-tag").value;
    let rank = document.getElementById("user-rank").value;
    let playercard = document.getElementById("user-playercard").value;
    let wins = document.getElementById("user-wins").value;
    let hours = document.getElementById("user-hrs").value;
    let kda = document.getElementById("user-hrs").value;
    let acs = document.getElementById("user-acs").value;
    let hsr = document.getElementById("user-hsr").value;

    let jsondata = {
        "Username": username,
        "Tag": tag,
        "Rank": rank,
        "Player_Card": playercard,
        "Wins": wins,
        "Hours": hours,
        "KDA": kda,
        "ACS": acs,
        "HSR": hsr
      };
      console.log(jsondata)
      let settings = {
        method: "POST",
        "async": true,
        "crossDomain": true,
        headers: {
          "Content-Type": "application/json",
          "x-apikey": APIKEY,
          "Cache-Control": "no-cache"
        },
        "processData": false,
        body: JSON.stringify(jsondata),
        beforeSend: function () {
          document.getElementById("user-submit").disabled = true;
          document.getElementById("add-user-form").reset();
        }
      }

      fetch(link, settings)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        document.getElementById("user-submit").disabled = false;
        getContacts();
      });
    });

function getContacts(limit = 10, all = true) {

    //[STEP 7]: Create our AJAX settings
    let settings = {
      method: "GET", //[cher] we will use GET to retrieve info
      headers: {
        "Content-Type": "application/json",
        "x-apikey": APIKEY,
        "Cache-Control": "no-cache"
      },
    }

    //[STEP 8]: Make our AJAX calls
    // Once we get the response, we modify our table content by creating the content internally. We run a loop to continuously add on data
    // RESTDb/NoSql always adds in a unique id for each data; we tap on it to have our data and place it into our links 
    fetch(link, settings)
      .then(response => response.json())
      .then(response => {
        let content = "";

        for (var i = 0; i < response.length && i < limit; i++) {

          content = `${content}<tr id='${response[i]._id}'>
          <td>${response[i].Username}</td>
          <td>${response[i].Tag}</td>
          <td>${response[i].Rank}</td>
          <td>${response[i].Player_Card}</td>
          <td>${response[i].Wins}</td>
          <td>${response[i].Hours}</td>
          <td>${response[i].KDA}</td>
          <td>${response[i].ACS}</td>
          <td>${response[i].HSR}</td>
          <td><a href='#' class='delete' data-id='${response[i]._id}'>Del</a></td>
          <td><a href='#update-contact-container' class='update' data-id='${response[i]._id}' data-sid='${response[i].studentid}' data-name='${response[i].name}' data-email='${response[i].email}' data-crs='${response[i].course}' data-cls='${response[i].class}' data-mnt='${response[i].mentor}'>Update</a></td></tr>`;

        }

        //[STEP 9]: Update our HTML content
        // Let's dump the content into our table body
        document.getElementById("user-list").getElementsByTagName("tbody")[0].innerHTML = content;

        //document.getElementById("total-contacts").innerHTML = response.length;
      });
  }
});