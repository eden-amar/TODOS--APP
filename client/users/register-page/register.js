const registerButton = document.querySelector('.register-button');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const userName = document.getElementById('user-name');
const email = document.getElementById('email');
const password = document.getElementById('password');

registerButton.addEventListener('click', addUser);

async function addUser() {
    await fetch(`http://localhost:3000/api/register`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
            firstName: firstName.value,
            lastName: lastName.value,
            userName: userName.value,
            email: email.value,
            password: password.value
        })
    });
}

