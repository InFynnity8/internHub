
const logInBtn = document.querySelector('.signupbtn');
const confirmPasswordInput = document.querySelector('#confirm_password');
const newPasswordInput = document.querySelector('#new_password');
const eyeButton1 = document.querySelector('.eye1');
const eyeCloseButton1 = document.querySelector('.eye-off1');

const eyeButton2 = document.querySelector('.eye2');
const eyeCloseButton2 = document.querySelector('.eye-off2');

// logInBtn.addEventListener ('click', () => {
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;

//     const formData = {
//         email: email,
//         password: password
//     }
    

//     const endPoint = 'https://internhub-test.up.railway.app/auth/user-login';

//     fetch(endPoint, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//     })
//     .then( response => response.json())
//     .then( data => {
//         console.log(data);
//         alert(data[0].message);
//         const accessToken = data[0].data.access_token;
//         const refreshToken = data[0].data.refresh_token;

//         localStorage.setItem('accessToken', accessToken);
//         localStorage.setItem('refreshToken', refreshToken);
//     })
//     .catch( error => {
//         console.log('Error:', error);
//         alert(error[0].message);
//     });
// });
 


eyeCloseButton1.addEventListener('click' , () => {
    if (newPasswordInput.type === 'password') {
        eyeCloseButton1.style.display = 'none';
        eyeButton1.style.display = 'inline-block';
        newPasswordInput.type = 'text';
    } 


});

eyeButton1.addEventListener('click' , () => {
    if (newPasswordInput.type === 'text') {
        eyeCloseButton1.style.display = 'inline-block';
        eyeButton1.style.display = 'none';
        newPasswordInput.type = 'password';
    } 

   
});

eyeCloseButton2.addEventListener('click' , () => {
  if (confirmPasswordInput.type === 'password') {
        eyeCloseButton2.style.display = 'none';
        eyeButton2.style.display = 'inline-block';
        confirmPasswordInput.type = 'text';
    } 

});

eyeButton2.addEventListener('click' , () => {
    if (confirmPasswordInput.type === 'text') {
        eyeCloseButton2.style.display = 'inline-block';
        eyeButton2.style.display = 'none';
        confirmPasswordInput.type = 'password';
    } 
   
});



