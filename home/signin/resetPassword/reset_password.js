
const logInBtn = document.querySelector('.signupbtn');
const passwordInput = document.querySelector('#password');
const eyeButton = document.querySelector('.eye');
const eyeCloseButton = document.querySelector('.eye-off');


logInBtn.addEventListener ('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const formData = {
        email: email,
        password: password
    }
    

    const endPoint = 'https://internhub-test.up.railway.app/auth/user-login';

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
        alert(data[0].message);
        const accessToken = data[0].data.access_token;
        const refreshToken = data[0].data.refresh_token;

        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
    })
    .catch( error => {
        console.log('Error:', error);
        alert(error[0].message);
    });
});
 


eyeCloseButton.addEventListener('click' , () => {
    if (passwordInput.type === 'password') {
        eyeCloseButton.style.display = 'none';
        eyeButton.style.display = 'block';
        passwordInput.type = 'text';
    } 

});

eyeButton.addEventListener('click' , () => {
    if (passwordInput.type === 'text') {
        eyeCloseButton.style.display = 'block';
        eyeButton.style.display = 'none';
        passwordInput.type = 'password';
    } 
   
});


