const form = document.getElementById('user-input');

function signupHandler(event) {
    event.preventDefault();

    const userNameInput = document.getElementById('username');
    const enteredUserName = userNameInput.value;

    const passwordInput = document.getElementById('password');
    const enteredPassword = passwordInput.value;

    if (enteredUserName.trim().length === 0) {
        alert('username cant be empty');
        return;
    }

    if (enteredPassword.trim().length === 0) {
        alert('password be six characters or longer');
        return;
    }

    const user = {
        userName: enteredUserName,
        password: enteredPassword
    }

    console.log(user);
}

form.addEventListener('submit', signupHandler);