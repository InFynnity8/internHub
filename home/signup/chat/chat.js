const chatInput = document.querySelector(".textarea");
const sendChatBtn = document.querySelector(".sendbtn");
const chatbox = document.querySelector(".chatbox");

const inputInitHeight = chatInput.scrollHeight;


document.querySelector('.textarea').addEventListener('input', function(){
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

chatInput.addEventListener("keydown", (e)=>{
    //if enter key is pressed without shift key and the window
    //width is greater than 800px, handle the chat
    if(e.key === "Enter" && !e.shiftKey && window.innerWidth > 800){
        e.preventDefault();
        handleChat();
    }
});

sendChatBtn.addEventListener("click", handleChat);
