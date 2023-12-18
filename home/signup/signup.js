
const signUpBtn = document.querySelector('.signupbtn');


signUpBtn.addEventListener ( 'click', () => {
    const fullName = document.getElementById('full_name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm_password').value;

    const formData = {
        full_name: fullName,
        email: email,
        password: password,
        confirm_password: confirmPassword
    }
    

    const endPoint = 'https://internhubtest.onrender.com/auth/user-registration';

    fetch(endPoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then( response => response.json())
    .then( data => {
        console.log(data);
        console.log(formData);
        alert(data[0].message);
    })
    .catch( error => {
        console.log('Error:', error);
        alert(error[0].message);
    });
})
