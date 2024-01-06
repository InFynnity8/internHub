
const resetBtn = document.querySelector('.resetbtn');



resetBtn.addEventListener ('click', () => {
    const email = document.getElementById('email').value;

    const formData = {
        email: email
    }
    

    const endPoint = 'https://internhub-test.up.railway.app/auth/request-password-reset';

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
    })
    .catch( error => {
        console.log('Error:', error);
        alert(error[0].message);
    });
});
 

