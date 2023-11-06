applyButton = document.querySelector('.applybtn')
backButton = document.querySelector('.backbtn')
yesButton = document.querySelector('.yes')
noButton = document.querySelector('.no')
popup = document.querySelector('.popscreen')
popupBox = document.querySelector('.popup')
inviteButton = document.querySelector('.invite')
closeButton = document.querySelector('.close')

applyButton.addEventListener('click', ()=>{
    popup.classList.add('action');
})



inviteButton.addEventListener('click', ()=>{
    popup.classList.remove('action');

})

closeButton.addEventListener('click', ()=>{
    popup.classList.remove('action');

})

backButton.addEventListener('click', ()=>{back()})

noButton.addEventListener('click', ()=>{
    popup.classList.remove('action');

})