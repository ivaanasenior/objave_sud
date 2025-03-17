function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const remember = document.getElementById('remember').checked;

    if (username === 'korisnik' && password === 'lozinka') { // Promenite korisničko ime i lozinku
        if (remember) {
            localStorage.setItem('loggedIn', 'true');
        }
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    } else {
        alert('Pogrešno korisničko ime ili lozinka.');
    }
}

function checkLogin() {
    if (localStorage.getItem('loggedIn') === 'true') {
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    }
}

function saveData() {
    const title = document.getElementById('title').value;
    const option = document.getElementById('option').value;
    const text = document.getElementById('text').value;

    const data = {
        title: title,
        option: option,
        text: text
    };

    fetch('save.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            alert('Podaci su uspešno sačuvani.');
        } else {
            alert('Došlo je do greške prilikom čuvanja podataka.');
        }
    });
}

checkLogin();