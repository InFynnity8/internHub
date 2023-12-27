
const registerBtn = document.querySelector('.registerbtn');


registerBtn.addEventListener ( 'click', (e) => {
    e.preventDefault();
    
    const businessFormInput = document.getElementById('business_form');
   
    const name = document.getElementById('name')
    const email = document.getElementById('email')
    const password = document.getElementById('password')
    const company_name = document.getElementById('company_name')
    const type_of_organization = document.getElementById('type_of_organization')
    const phone_number = document.getElementById('phone_number')
    const location = document.getElementById('location')

    const businessForm = businessFormInput.files[0]
    const form = document.getElementById('form');
    const formData = new FormData(form);
    formData.append('business_form', businessForm);

    for ( var i of formData.entries()) {
        console.log( i[0] + ',' + i[1])
    }


    const endPoint = 'https://internhub-test.up.railway.app/auth/organization-registration';

    fetch(endPoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        body: formData,
    })
    .then( response => response.json())
    .then( data => {
        console.log(data);
        for ( var i of formData.entries()) {
            console.log( i[0] + ',' + i[1])
        }    
        alert(data);
    })
    .catch( error => {
        console.log('Error:', error);
        alert(error[0].message);
    });
})
