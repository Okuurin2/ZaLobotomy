function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const error = document.getElementById('error');
  
    if (username === 'Okuurin' && password === 'verysafepassword') {
        window.location.href = "htps://youtube.com"
    } else {
      error.classList.add('visible');
    }
  }