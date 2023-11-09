const chatInput = document.querySelector(".textarea");
const chatInput2 = document.querySelector(".textarea2");
const sendChatBtn = document.querySelector(".sendbtn");
const sendChatBtn2 = document.querySelector(".sendbtn2");
const chatbox = document.querySelector(".chatbox");
const chatbox2 = document.querySelector(".chatbox2");

const inputInitHeight = chatInput.scrollHeight;
const inputInitHeight2 = chatInput2.scrollHeight;

document.querySelector('.textarea').addEventListener('input', function(){
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';

})

document.querySelector('.textarea2').addEventListener('input', function(){
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';

})


document.querySelector('.louis').addEventListener('click', ()=>{
    document.querySelector('.conversations').classList.add('action');
    document.querySelector('.emma').classList.add('action');
    document.querySelector('.louis').classList.add('action');
})

document.querySelector('.emma').addEventListener('click', ()=>{
    document.querySelector('.conversations').classList.remove('action');
    document.querySelector('.emma').classList.remove('action');
    document.querySelector('.louis').classList.remove('action');
})


const createChatLi = (message, className)=>{
    //create a chat <li> element with passed message and className
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = className === "outgoing"?`<p></p>`: `<span class ="material-symbols-outlined">smart_toy</span><p></p>`;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").textContent = message;
    return chatLi;
}

const handleChat = () => {
    userMessage = chatInput.value.trim();
    console.log(userMessage);
    if(!userMessage) return;
    chatInput.value = "";
    chatInput.style.height = `${inputInitHeight}px`;

    //append user message to the box
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);
   
}

const handleChat2 = () => {
    userMessage = chatInput2.value.trim();
    console.log(userMessage);
    if(!userMessage) return;
    chatInput2.value = "";
    chatInput2.style.height = `${inputInitHeight2}px`;

    //append user message to the box
    chatbox2.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox2.scrollTo(0, chatbox2.scrollHeight);
   
}

chatInput.addEventListener("keydown", (e)=>{
    //if enter key is pressed without shift key and the window
    //width is greater than 800px, handle the chat
    if(e.key === "Enter" && !e.shiftKey && window.innerWidth > 800){
        e.preventDefault();
        handleChat();
    }
});

chatInput2.addEventListener("keydown", (e)=>{
    //if enter key is pressed without shift key and the window
    //width is greater than 800px, handle the chat
    if(e.key === "Enter" && !e.shiftKey && window.innerWidth > 800){
        e.preventDefault();
        handleChat2();
    }
});


sendChatBtn.addEventListener("click", handleChat);
sendChatBtn2.addEventListener("click", handleChat2);