function login() {
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const error = document.getElementById('error');
  
    if (username.value === 'Okuurin' && password.value === 'verysafepassword') {
        window.location.href = "stats.html"
    } else {
      error.style.display = "block"
    }
  }

  