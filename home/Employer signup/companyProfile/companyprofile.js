logOutButton = document.querySelector('.logoutbtn')
yesButton = document.querySelector('.yes')
noButton = document.querySelector('.no')
popup = document.querySelector('.popscreen')
popupBox = document.querySelector('.popup')
personalPage = document.querySelector('.personalpage')
businessPage = document.querySelector('.businesspage')
nextButton = document.querySelector('.nextbtn')
previousButton =  document.querySelector('.previousbtn')
personalDetails = document.querySelector('.personaldetails')
businessDetails = document.querySelector('.businessdetails')

nextButton.addEventListener('click', ()=>{
    personalPage.classList.add('active');
    businessPage.classList.add('active');
    personalDetails.classList.add('active');
    businessDetails.classList.add('active');
});

previousButton.addEventListener('click', ()=>{
    personalPage.classList.remove('active');
    businessPage.classList.remove('active');
    personalDetails.classList.remove('active');
    businessDetails.classList.remove('active');
});

logOutButton.addEventListener('click', ()=>{
    popup.classList.add('action');
});

noButton.addEventListener('click', ()=>{
    popup.classList.remove('action');
});



