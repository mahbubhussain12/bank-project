document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    if(email === 'delwarhussain1187@gmail.com' && password === 'mahbub'){
        window.location.href = 'bank.html'
    }
    else{
        alert('invalid user')
    }
})