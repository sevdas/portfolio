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

const trackList = document.querySelector('.carousel-track-list')
const slides = Array.from(trackList.children)
const nextButton = document.querySelector('.carousel-button--next')
const prevButton = document.querySelector('.carousel-button--prev')


//Define size of an element and its position relative to the viewport.
const slideSize = slides[0].getBoundingClientRect()
const sizeWidth = slideSize.width


//Arrange slides next to one another 
const leftSlidePosition = slides.forEach((slide, idx) => slide.style.left = sizeWidth * idx + 'px')


function moveToSlidePosition(trackList, currentSlide, targetSlide){
//Move an element sideways to the next one by that much
trackList.style.transform = 'translateX(-'+ targetSlide.style.left +')'

//Add current position class to the every next slide
 currentSlide.classList.remove('current-slide')
 targetSlide.classList.add('current-slide')
}


//When I click next button, move slides to the right. 
nextButton.addEventListener('click', event => {
  const currentSlide = trackList.querySelector('.current-slide')
  const nextSlide = currentSlide.nextElementSibling

  moveToSlidePosition(trackList, currentSlide, nextSlide)
})


//When I click previous button, move slides to the left. 
prevButton.addEventListener('click', event => {
 
  const currentSlide = trackList.querySelector('.current-slide')
  const prevSlide = currentSlide.previousElementSibling

  moveToSlidePosition(trackList, currentSlide, prevSlide)

})

//When I click to the thumbnail image gallery, move to the slide. 
const thumbnailTrack = document.querySelector('.thumbnail-track-list')
const thumbImages = document.querySelectorAll('.thumbnail-image')
const arrayThumbImages = Array.from(thumbImages)


// Thumbnail clicked on
function moveToThumbnail(event){

const targetImage = event.target //image on click


const targetIndex = arrayThumbImages.findIndex(img => img === targetImage) //array of images
const targetSlide = slides[targetIndex] //navigate in between the thumb images 
const currentSlide = trackList.querySelector('.current-slide')

console.log(targetIndex)
console.log(targetSlide)
moveToSlidePosition(trackList, currentSlide, targetSlide)
}

thumbnailTrack.addEventListener('click', moveToThumbnail)