applyButton = document.querySelector('.applybtn');
backButton = document.querySelector('.backbtn');
yesButton = document.querySelector('.yes');
const noButton = document.querySelector('.no');
popup = document.querySelector('.popscreen');
applyPopup = document.querySelector('.apply-popscreen');
popupBox = document.querySelector('.popup');
const inviteButton = document.querySelector('.invite');
const closeButton = document.querySelector('.close');
backButton2 = document.querySelector('.backbtn2');
submitButton = document.querySelector('.submitbtn2');

applyButton.addEventListener('click', ()=>{
    applyPopup.classList.add('action');
})

backButton2.addEventListener('click', ()=>{
    applyPopup.classList.remove('action');
})

submitButton.addEventListener('click', ()=>{
    applyPopup.classList.remove('action');
    popup.classList.add('action');
})

inviteButton.addEventListener('click', ()=>{
    popup.classList.remove('action');

})

closeButton.addEventListener('click', ()=>{
    popup.classList.remove('action');

})

noButton.addEventListener('click', ()=>{
    popup.classList.remove('action');

})



