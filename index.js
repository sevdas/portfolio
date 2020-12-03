// Some words of encouragement!
// Break it down to manegable pieces, experiment and make things work. It's not about doing things 
// right way but making things work and then improving them so they work.  


//MOODY FACE
const happyFace = document.querySelector('#face-happy')
const sadFace = document.querySelector('#face-sad')
const changingMsg = document.querySelector('.changing-message')
const helloMsg = changingMsg.firstElementChild
const homeSection = document.querySelector('#home')
const bubbleMessage = document.querySelector('#talkbubble')


// Welcome Type Effect
const helloMessageInnerText='Hello! Welcome to my world!'
const innerTextArray = helloMessageInnerText.split('')

let idx = 0;
function typeWriterWelcome(){
if(innerTextArray.length > idx){
  const span = document.createElement("p")
  span.innerText = innerTextArray[idx]
  span.style.position = 'absolute'
  span.style.left = '50%'
  span.style.height = '360px'
  span.style.margin = '0'
  span.style.margin = '0'

  document.getElementById("changing-message-div").appendChild(span)
  span.style.transform = `rotate(${(-120)+idx*8}deg) `
  idx++
setTimeout(typeWriterWelcome, 100)
}
}
typeWriterWelcome()


//MOODY FACE
sadFace.style.display='none'
let count = 0

function moodyFace() {
   count++
   if (count%2 === 0) {
    happyFace.style.display='block'
    sadFace.style.display='none'

       helloMsg.style.color = 'black'
       homeSection.style.background = '#f4f6ef'
       bubbleMessage.textContent = "Now you know! Scroll down!" 
   } else {
       happyFace.style.display='none'
       sadFace.style.display='block'
       homeSection.style.background  = 'black' 
       bubbleMessage.textContent = 'I can not see you! :/ Switch back please!'
       helloMsg.style.color = 'white'
   }
}

happyFace.addEventListener('click', moodyFace)
sadFace.addEventListener('click', moodyFace)




//CAROUSEL
const trackList = document.querySelector('.carousel-track-list')
const carouselSlides = Array.from(trackList.children)
const nextButton = document.querySelector('.carousel-button--next')
const prevButton = document.querySelector('.carousel-button--prev')


//Define size of an element and its position relative to the viewport.
const slideSize = carouselSlides[0].getBoundingClientRect()
const sizeWidth = slideSize.width


//Arrange slides next to one another 
const leftSlidePosition = carouselSlides.forEach((slide, idx) => slide.style.left = `${sizeWidth * idx}px`)


function moveToSlidePosition(trackList, currentSlide, targetSlide){
  //Move an element sideways to the next one by that much
  trackList.style.transform = 'translateX(-'+ targetSlide.style.left +')'
  
  //Add current position class to the every next slide
   currentSlide.classList.remove('current-slide')
   targetSlide.classList.add('current-slide')
  }

//Show current image
  function showWhichImage(currentThumbImage, targetImage){
    currentThumbImage.classList.remove('current-thumb-slide')
    targetImage.classList.add('current-thumb-slide')
  }


  // Display or hide carousel arrow when all the way to the left or right. 
  prevButton.style.display = 'none'
  function displayOnOffArrowButton(targetIndex, nextButton, prevButton, carouselSlides){
  if(targetIndex === 0){
    prevButton.style.display = 'none'
    nextButton.style.display = 'block'
  } else if (targetIndex === carouselSlides.length - 1) {
    nextButton.style.display = 'none'
    prevButton.style.display = 'block'
  } else {
    prevButton.style.display = 'block' 
    nextButton.style.display = 'block'
  }
  }


//When I click next button, move slides to the right. 
nextButton.addEventListener('click', event => {
  const currentSlide = trackList.querySelector('.current-slide')
  const nextSlide = currentSlide.nextElementSibling
  const nextIndex = carouselSlides.findIndex(slide => slide === nextSlide)
  const currentThumbImage = document.querySelector('.current-thumb-slide')
  const nextImage = currentThumbImage.nextElementSibling

  moveToSlidePosition(trackList, currentSlide, nextSlide)
  displayOnOffArrowButton(nextIndex, nextButton, prevButton, carouselSlides)
  showWhichImage(currentThumbImage, nextImage)
})


//When I click previous button, move slides to the left. 
prevButton.addEventListener('click', event => {
  const currentSlide = trackList.querySelector('.current-slide')
  const prevSlide = currentSlide.previousElementSibling
  const prevIndex = carouselSlides.findIndex(slide => slide === prevSlide)
  const currentThumbImage = document.querySelector('.current-thumb-slide')
  const prevImage = currentThumbImage.previousElementSibling
console.log('test', prevImage)
  moveToSlidePosition(trackList, currentSlide, prevSlide)
  displayOnOffArrowButton(prevIndex, nextButton, prevButton, carouselSlides)
  showWhichImage(currentThumbImage, prevImage)
})


//When I click to the thumbnail image gallery, move to the slide. 
  const thumbnailTrack = document.querySelector('.thumbnail-track-list')
  const thumbImages = document.querySelectorAll('.thumbnail-image')
  const arrayThumbImages = Array.from(thumbImages)
  const currentThumbImage = document.querySelector('.current-thumb-slide')

function moveToThumbnail(event){ 
  const targetImage = event.target //image on click
  const targetIndex = arrayThumbImages.findIndex(img => img === targetImage) //which image was clicked on out of array
  const targetSlide = carouselSlides[targetIndex] //navigate in between the thumb images 
  const currentSlide = trackList.querySelector('.current-slide')
  const currentThumbImage = document.querySelector('.current-thumb-slide')

  moveToSlidePosition(trackList, currentSlide, targetSlide)
  displayOnOffArrowButton(targetIndex, nextButton, prevButton, carouselSlides)
  showWhichImage(currentThumbImage, targetImage)

}
thumbnailTrack.addEventListener('click', moveToThumbnail)

