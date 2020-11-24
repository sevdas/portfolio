// Some words of encouragement!
// Break it down to manegable pieces, experiment and make things work. It's not about doing things 
// right way but making things work and then improving them so they work.  

//Moody Face 
const happyFace = document.querySelector('#face-happy')
const sadFace = document.querySelector('#face-sad')
const helloMsg = document.querySelector('#hello-message')

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
    //    helloMsg.textContent = ''

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


//Carousel

//When I click previous button, move slides to the left. 
//When I click next button, move slides to the right. 
//When I click to the thumbnail image gallery, move to the slide. 

const trackList = document.querySelector('.carousel-track-list')
const slides = Array.from(trackList.children)
const nextButton = document.querySelector('.carousel-button--next')
const prevButton = document.querySelector('.carousel-button carousel-button--prev')
const thumbnailTrack = document.querySelector('.thumbnail-track-list')
const thumbnailSlideImage = Array.from(thumbnailTrack.children)

// console.log(slides)
// console.log(thumbnailTrack)
// console.log(thumbnailSlideImage)

//  Define size of an element and its position relative to the viewport.

const slideSize = slides[0].getBoundingClientRect()
const sizeWidth = slideSize.width

console.log(sizeWidth)