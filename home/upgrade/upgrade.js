page1 = document.querySelector('.packageupgrage1')
page2 = document.querySelector('.packageupgrage2')
page3 = document.querySelector('.packageupgrade3')
continueButton1 = document.querySelector('.continuebtn1')
continueButton2 = document.querySelector('.continuebtn2')
backButton = document.querySelector('.backbtn')
doneButton = document.querySelector('.donebtn')
bubble1 = document.querySelector('.bubble1')
bubble2 = document.querySelector('.bubble2')
bubble3 = document.querySelector('.bubble3')
debitCard = document.querySelector('.card')
mobileMoney = document.querySelector('.momo')
debitCard2 = document.querySelector('.card2')
mobileMoney2 = document.querySelector('.momo2')
paymentSwitch = document.querySelector('.payments')

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
    paymentSwitch.classList.remove('active');
});

continueButton2.addEventListener('click', ()=>{
    bubble2.classList.remove('active');
    bubble3.classList.add('active');
    page2.classList.add('action2');
    page3.classList.add('action');
    paymentSwitch.classList.remove('active');
});

mobileMoney.addEventListener('click', ()=>{
    paymentSwitch.classList.add('active');
});

debitCard2.addEventListener('click', ()=>{
    paymentSwitch.classList.remove('active');
});

doneButton.addEventListener('click', ()=>{
    
});