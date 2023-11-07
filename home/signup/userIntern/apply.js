applyButton = document.querySelector('.applybtn')
backButton = document.querySelector('.backbtn')
yesButton = document.querySelector('.yes')
const noButton = document.querySelector('.no')
popup = document.querySelector('.popscreen')
popupBox = document.querySelector('.popup')
const inviteButton = document.querySelector('.invite')
const closeButton = document.querySelector('.close')

applyButton.addEventListener('click', ()=>{
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



