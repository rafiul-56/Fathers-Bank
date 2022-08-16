// step-1 add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function () {
    //step -2 get the email address indsde the email field
    //always remember to use .value to get from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    //step -3 get password
    //3.a = set id on the html elements
    // 3.b = get the value
    //3.c get the value from the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    //step-4 verify email and password
    if (email === 'rafi@gmail.com' && password === 'secret') {
        window.location.href = "bank.html";
    }
    else {
        alert('invalid email/password please try the currect email/password');
    }
})