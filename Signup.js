document.addEventListener('DOMContentLoaded', (event) => {
    const signupForm = document.getElementById('signupForm');
    signupForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        const email = document.querySelector('#Email input').value;
        const password = document.querySelector('#Password input').value;
        const reEnterPassword = document.querySelectorAll('#Password input')[1].value;
        const phoneNumber = document.querySelector('#PhoneNumber input').value;
        if (email === '' || password === '' || reEnterPassword === '' || phoneNumber === '') {
            alert("Please fill in all fields");
            return;
        }
        if (password !== reEnterPassword) {
            alert("Passwords do not match");
            return;
        }
        alert('Signup successful!');
        signupForm.reset();
    });
});
