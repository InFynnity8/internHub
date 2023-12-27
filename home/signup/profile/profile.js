const logOutButton = document.querySelector('.logoutbtn');
const yesButton = document.querySelector ('.yes');
const noButton = document.querySelector('.no');
const popup = document.querySelector('.popscreen');
const popupBox = document.querySelector('.popup');
const personalPage = document.querySelector('.personalpage');
const academicPage = document.querySelector('.academicpage');
const nextButton = document.querySelector('.nextbtn');
const previousButton =  document.querySelector('.previousbtn');
const personalDetails = document.querySelector('.personaldetails');
const academicDetails = document.querySelector('.academicdetails');


nextButton.addEventListener('click', (e)=>{
    e.preventDefault();
    personalPage.classList.add('active');
    academicPage.classList.add('active');
    personalDetails.classList.add('active');
    academicDetails.classList.add('active');
});

previousButton.addEventListener('click', (e)=>{
    e.preventDefault();
    personalPage.classList.remove('active');
    academicPage.classList.remove('active');
    personalDetails.classList.remove('active');
    academicDetails.classList.remove('active');
});

logOutButton.addEventListener('click', ()=>{
    popup.classList.add('action');
});

noButton.addEventListener('click', ()=>{
    popup.classList.remove('action');
});




//handeling profile pic upload
const confirmButton = document.querySelector('.confirm');

const uploadPopup = document.querySelector('.upload-popscreen');
const uploadPopupBox = document.querySelector('.upload-popup');
const cancelButton = document.querySelector('.cancel');

const displayPic = document.querySelector('.profilepic');
const uploadPic = document.querySelector('.changepic');
const form = document.getElementById('picture-form');


uploadPic.addEventListener( 'change', () => {
    uploadPopup.classList.add('action')
})

confirmButton.addEventListener( 'click', uploadImage = () => {
    uploadPopup.classList.remove('action');
    const currentImage = document.getElementById('myImage');
    currentImage.remove();
    displayPic.style.background = "transparent";
    if (uploadPic.files.length > 0) {

    const profilePic = uploadPic.files[0];

   

   
    console.log('File Name:', profilePic.name);
    console.log('File Type:', profilePic.type);
    console.log('File Size:', profilePic.size, 'bytes');

    const imgElement = document.createElement('img');
    imgElement.src = URL.createObjectURL(profilePic);
    imgElement.id = 'myImage';
    displayPic.appendChild(imgElement);
    }

    const profilePic = uploadPic.files[0];


    const file = new FormData();
    file.append('picture', profilePic);

    for ( var i of file.entries()) {
        console.log( i[0] + ',' + i[1])
    }

    const hasProfilePicture = file.has('picture');

    if (hasProfilePicture) {
    console.log('Profile picture has been appended.');
    } else {
    console.log('No profile picture has been appended.');
    } 
    
    console.log(file)

    const endPoint = 'https://internhub-test.up.railway.app/user/set-profile-picture';
    const accessToken = localStorage.getItem('accessToken');
    fetch( endPoint, {
        method: 'POST',
        headers: {
            // 'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${accessToken}`
        },
        body:file
    })
    .then( response => response.json())
    .then( data => {
        if(data.sub_status === 'expired_token'){
            refreshAccessToken()
        }else {
            console.log(data.message)
            alert(data.message)
        }
    })
    .catch( error => {
        
        console.log('Error:' , error)
        alert(error.message)
    })
});

cancelButton.addEventListener( 'click' , ()=> {
    uploadPopup.classList.remove('action');
});



// update user info
const updateButton = document.querySelector('.updatebtn');
const updateButton1 = document.querySelector('.updatebtn1');
const resume = document.getElementById('resume');
const coverLetter = document.getElementById('cover_letter');
const updateForm = document.getElementById('update-form');
const resumeFile = resume.files[0];
const coverLetterFile = coverLetter.files[0];
const updateFormData = new FormData(updateForm);
updateFormData.append('resume', resumeFile);
updateFormData.append('cover_letter', coverLetterFile);

const updateFormEndpoint = 'https://internhub-test.up.railway.app/user/update-profile';
updateButton.addEventListener( 'click', updateProfile = (e) => {
    e.preventDefault()
    const firstName = document.querySelector('.firstname');
    const lastName = document.querySelector('.lastname');
    const fullName = firstName.value + ' ' + lastName.value;
    const phoneNumber = document.querySelector('.phonenumber');
    const email = document.querySelector('.email');
    const city = document.querySelector('.city');
    const program = document.querySelector('.program');
    const regionElement = document.getElementById('region');
    const universityElement = document.getElementById('university');
    const levelElement = document.getElementById('level');
    const collegeElement = document.getElementById('college');
    const portfolioLink = document.querySelector('.portfolio_link');

    // Get the selected option
    const regionOption = regionElement.options[regionElement.selectedIndex];
    const universityOption = universityElement.options[universityElement.selectedIndex];
    const levelOption = levelElement.options[levelElement.selectedIndex];
    const collegeOption = collegeElement.options[collegeElement.selectedIndex];

    // Get the value of the selected option
    const regionValue = regionOption.value;
    const universityValue = universityOption.value;
    const levelValue = levelOption.value;
    const collegeValue = collegeOption.value;

    // Log the selected value to the console
    console.log(regionValue);
    console.log(universityValue);
    console.log(levelValue);
    console.log(collegeValue);

    const updateFormData = {
        full_name: fullName,
        email: email.value,
        phone_number: phoneNumber.value,
        region: regionValue,
        city: city.value,
        university: universityValue,
        program: program.value,
        year_of_study: levelValue,
        college: collegeValue,
        resume_link:'' ,
        portfolio_link: portfolioLink,
    }

    const accessToken = localStorage.getItem('accessToken');
    fetch( updateFormEndpoint, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify(updateFormData)
    })
    .then( response => response.json())
    .then( data => {
        console.log(data.sub_status)
        alert(data.message)
        if(data.sub_status === 'expired_token'){
            refreshAccessToken()
        }
    })
    .catch( error => {
        console.log(error)
        alert(error.message)
    });
    
});


updateButton1.addEventListener( 'click', updateProfile = (e) => {
    e.preventDefault()

    const firstName = document.querySelector('.firstname');
    const lastName = document.querySelector('.lastname');
    const fullName = firstName.value + ' ' + lastName.value;
    const phoneNumber = document.querySelector('.phonenumber');
    const email = document.querySelector('.email');
    const city = document.querySelector('.city');
    const program = document.querySelector('.program');
    const regionElement = document.getElementById('region');
    const universityElement = document.getElementById('university');
    const levelElement = document.getElementById('level');
    const collegeElement = document.getElementById('college');
    const portfolioLink = document.querySelector('.portfolio_link');

    // Get the selected option
    const regionOption = regionElement.options[regionElement.selectedIndex];
    const universityOption = universityElement.options[universityElement.selectedIndex];
    const levelOption = levelElement.options[levelElement.selectedIndex];
    const collegeOption = collegeElement.options[collegeElement.selectedIndex];

    // Get the value of the selected option
    const regionValue = regionOption.value;
    const universityValue = universityOption.value;
    const levelValue = levelOption.value;
    const collegeValue = collegeOption.value;

    // Log the selected value to the console
    console.log(regionValue);
    console.log(universityValue);
    console.log(levelValue);
    console.log(collegeValue);

    const updateFormData = {
        full_name: fullName,
        email: email.value,
        phone_number: phoneNumber.value,
        region: regionValue,
        city: city.value,
        university: universityValue,
        program: program.value,
        year_of_study: levelValue,
        college: collegeValue,
        resume_link:'' ,
        portfolio_link: portfolioLink,
    }

    const accessToken = localStorage.getItem('accessToken');
    fetch( updateFormEndpoint, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify(updateFormData)
    })
    .then( response => response.json())
    .then( data => {
        console.log(data.sub_status)
        alert(data.message)

        if(data.sub_status === 'expired_token'){
            refreshAccessToken()
        }
    })
    .catch( error => {
        console.log(error)
        alert(error.message)
    });
});


refreshAccessToken = () => {
    
    const refreshToken = localStorage.getItem('refreshToken');
    refreshEndpoint = 'https://internhub-test.up.railway.app/auth/refresh'

    fetch( refreshEndpoint, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${refreshToken}`
        },
        body: JSON.stringify({
            refresh_token: refreshToken
        })
    })
    .then( response =>  response.json())
    .then(data => {
        newAccessToken = data[0].data.access_token;
        localStorage.setItem('accessToken', newAccessToken)
    })
    .catch(error => {
        console.log(error)
    })

    uploadImage();
    updateProfile();
}