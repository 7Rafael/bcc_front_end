document.getElementById('registrationForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;
    const endereco = document.getElementById('endereco').value;

    const response = await fetch('http://127.0.0.1:5000/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            email: email,
            password: password,
            role : role,
            endereco : endereco
        })
    });

    const result = await response.json();

    if (response.ok) {
        document.getElementById('message').innerText = 'Registration successful!';
        document.getElementById('message').style.color = 'green';
    } else {
        document.getElementById('message').innerText = 'Registration failed: ' + result.message;
        document.getElementById('message').style.color = 'red';
    }
});
