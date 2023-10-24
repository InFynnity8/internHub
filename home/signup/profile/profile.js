logOutButton = document.querySelector('.logoutbtn')
yesButton = document.querySelector('.yes')
noButton = document.querySelector('.no')
popup = document.querySelector('.popscreen')
popupBox = document.querySelector('.popup')
personalPage = document.querySelector('.personalpage')
academicPage = document.querySelector('.academicpage')
nextButton = document.querySelector('.nextbtn')
previousButton =  document.querySelector('.previousbtn')
personalDetails = document.querySelector('.personaldetails')
academicDetails = document.querySelector('.academicdetails')

nextButton.addEventListener('click', ()=>{
    personalPage.classList.add('active');
    academicPage.classList.add('active');
    personalDetails.classList.add('active');
    academicDetails.classList.add('active');
});

previousButton.addEventListener('click', ()=>{
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
