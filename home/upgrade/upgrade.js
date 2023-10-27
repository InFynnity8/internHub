page1 = document.querySelector('.packageupgrage1')
page2 = document.querySelector('.packageupgrage2')
page3 = document.querySelector('.packageupgrage3')
continueButton1 = document.querySelector('.continuebtn1')
continueButton2 = document.querySelector('.continuebtn2')
backButton = document.querySelector('.backbtn')
doneButton = document.querySelector('.donebtn')
bubble1 = document.querySelector('.bubble1')
bubble2 = document.querySelector('.bubble2')
bubble3 = document.querySelector('.bubble3')

continueButton1.addEventListener('click', ()=>{
    page1.classList.add('action');
    page2.classList.add('action');
    bubble1.classList.add('active');
    bubble2.classList.add('active');
});

backButton.addEventListener('click', ()=>{
    page1.classList.remove('action');
    page2.classList.remove('action');
    bubble1.classList.remove('active');
    bubble2.classList.remove('active');
});