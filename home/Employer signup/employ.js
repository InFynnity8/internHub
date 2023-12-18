
const registerBtn = document.querySelector('.registerbtn');


registerBtn.addEventListener ( 'click', () => {
    
    const businessFormInput = document.getElementById('business_form');
    const businessForm = businessFormInput.files[0]

    const form = document.getElementById('form');
    const formData = new FormData(form);
    formData.append('business_form', businessForm);

    for ( var i of formData.entries()) {
        console.log( i[0] + ',' + i[1])
    }

    const endPoint = 'https://internhubtest.onrender.com/auth/organization-registration';

    fetch(endPoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: formData
    })
    .then( response => response.json())
    .then( data => {
        console.log(data);
        for ( var i of formData.entries()) {
            console.log( i[0] + ',' + i[1])
        }    
        alert(data[0].message);
    })
    .catch( error => {
        console.log('Error:', error);
        alert(error[0]);
    });
})
