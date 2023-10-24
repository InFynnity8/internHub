applyButton = document.querySelector('.applybtn')
backButton = document.querySelector('.backbtn')
yesButton = document.querySelector('.yes')
noButton = document.querySelector('.no')
popup = document.querySelector('.popscreen')
popupBox = document.querySelector('.popup')


applyButton.addEventListener('click', ()=>{
    popup.classList.add('action');
})

noButton.addEventListener('click', ()=>{
    popup.classList.remove('action');

})

backButton.addEventListener('click', back())