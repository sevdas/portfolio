//Moody Face 
const happyFace = document.querySelector("#face-happy")
const sadFace = document.querySelector("#face-sad")
const helloMsg = document.querySelector("#hello-message")

const homeSection = document.querySelector('#home')
const bubbleMessage = document.querySelector('#talkbubble')


sadFace.style.display='none'
let count = 0

function moodyFace() {
   count++
   if (count%2 === 0) {
    happyFace.style.display='block'
    sadFace.style.display='none'

       helloMsg.textContent = 'Hello! Welcome to my world!'
       helloMsg.style.color = 'black'
       homeSection.style.background = '#f4f6ef'
       bubbleMessage.textContent = "Now you know! Scroll down!" 

   } else {
       happyFace.style.display='none'
       sadFace.style.display='block'
       homeSection.style.background  = 'black' 
       bubbleMessage.textContent = 'I can not see you! :/ Switch back please!'
       helloMsg.textContent = 'Uh! Panic!'
       helloMsg.style.color = 'white'
 }
}

happyFace.addEventListener('click', moodyFace)
sadFace.addEventListener('click', moodyFace)

