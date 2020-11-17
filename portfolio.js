//Moody Face 
const happyFace = document.querySelector("#face-happy")
const sadFace = document.querySelector("#face-sad")
const helloMsg = document.querySelector("#hello-message")

sadFace.style.display='none'

let count = 0

function moodyFace() {
   count++
   if (count%2 === 0) {
    happyFace.style.display='block'
    sadFace.style.display='none'
       helloMsg.textContent = 'Hello! Welcome to my world!'
   } else {
       happyFace.style.display='none'
       sadFace.style.display='block'
       helloMsg.textContent = 'Uh! Panic!'
 
 }
}

happyFace.addEventListener('click', moodyFace)
sadFace.addEventListener('click', moodyFace)

