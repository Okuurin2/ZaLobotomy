function login() {
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const error = document.getElementById('error');
    const APIKEY = "65ccaa6fa1d768023d02abe1";
    const link = "https://kingdomlabs-0978.restdb.io/rest/username  "

        limit = 20
        all = true
        //[STEP 7]: Create our AJAX settings
        let settings = {
          method: "GET", //[cher] we will use GET to retrieve info
          headers: {
            "Content-Type": "application/json",
            "x-apikey": APIKEY,
            "Cache-Control": "no-cache"
          },
        }

        let list = {};
    
        fetch(link, settings)
        .then(response => response.json())
        .then(data => {
          data.forEach(item => {
            list[item.Username] = item.Password;
          });
          if (list.hasOwnProperty(username.value)) {
            if (password.value === list[username.value]){
            window.location.href = "stats.html"
            } else {
            error.style.display = "block"
            }
        } else {
          error.style.display = "block"
        };
        });
  };

