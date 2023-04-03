
const inputUserName = document.querySelector('.inputUserName');
const inputPassword = document.querySelector('.inputPassword');
const loginButton = document.querySelector('.login-button');
const errorLogin = document.querySelector('.errorLogin')


loginButton.addEventListener("click", login);
function login() {
    const response = fetch(`http://localhost:3000/api/login`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ userName: inputUserName.value, password: inputPassword.value })
    })

    response.then((res) => {
        if (res.status === 200) {
            open('../todos/index.html')
        }
        // else
        //     if (res.status !== 200) {
        //         errorLogin.style.display = 'block'
        //     }
        console.log(res.status);
    })
}


// clock


function getTime() {
    let time = new Date();
    let clockHours = time.getUTCHours() + 2;

    time.setHours(clockHours);
    return time;
}

function showClock() {
    let clockDiv = document.querySelector('.clock');
    clockDiv.textContent = getTime().toLocaleTimeString();
    ;
}

function tick() {
    showClock();
    setTimeout(tick, 1000);
}

tick();