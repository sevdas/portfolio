// Some words of encouragement!
// Break it down to manegable pieces, experiment and make things work. It's not about doing things 
// right way but making things work and then improving them so they work.  



// Parent Element
const helloMessage = document.getElementById('changing-message-aside')


// TEXT ON A CIRCLE WELCOME TYPE EFFECT
const helloMessageInnerText='Hello! Welcome to my world!'
const innerTextArray = helloMessageInnerText.split('')

let idx = 0;
function typeWriterWelcome(){ 
  if (innerTextArray.length > idx) {
    const helloMsgLetter = document.createElement('p')
    helloMsgLetter.classList.add('changing-message-letter')
    helloMsgLetter.innerText = innerTextArray[idx]
    helloMsgLetter.style.transform = `rotate(${(-115)+idx*8}deg) `
    document.getElementById('changing-message-aside').appendChild(helloMsgLetter)
    idx++
}
setTimeout(typeWriterWelcome, 100)
}
typeWriterWelcome()


//MOODY FACE ELEMENTS
const happyFace = document.querySelector('#face-happy')
const sadFace = document.querySelector('#face-sad')
const homeSection = document.querySelector('#home')
const bubbleMessage = document.querySelector('#talkbubble')

//MOODY FACE
sadFace.style.display='none'
let count = 0 //Start point

function moodyFace() {
   count++
   if (count%2 === 0) {
    happyFace.style.display='block'
    sadFace.style.display='none'
    homeSection.style.background = '#f4f6ef'
    bubbleMessage.textContent = "Now you know! Scroll down!" 

   } else {
    happyFace.style.display='none'
    sadFace.style.display='block'
    homeSection.style.background  = 'black' 
    bubbleMessage.textContent = 'I can not see you! :/ Switch back please!'
   }
}

happyFace.addEventListener('click', moodyFace)
sadFace.addEventListener('click', moodyFace)


//CAROUSEL
const trackList = document.querySelector('.carousel-track-list')
const carouselSlides = document.querySelectorAll('.carousel-slide')
const nextButton = document.querySelector('.carousel-button--next')
const prevButton = document.querySelector('.carousel-button--prev')


let currentIndex = 0 // Start point


const checkLimits = () => {
      // to prevent larger values than the slide length
  if(currentIndex > carouselSlides.length-1){
    currentIndex = 0
     // to avoide negative values
  } else if(currentIndex < 0 ){
    currentIndex = carouselSlides.length-1
  }
}

//When user clicks next button, move slides to the right. 
function nextImage(){
  carouselSlides[currentIndex].classList.remove('visible')
carouselSlides[currentIndex].classList.add('hidden')
 // Reset styling
thumbnailSlideImages[currentIndex].style.filter = 'opacity(25%)'
thumbnailSlideImages[currentIndex].style.borderRadius = '0px'
currentIndex++
checkLimits()
carouselSlides[currentIndex].classList.add('visible')
carouselSlides[currentIndex].classList.remove('hidden')
//Display styling
thumbnailSlideImages[currentIndex].style.filter = 'opacity(100%)'
thumbnailSlideImages[currentIndex].style.borderRadius = '50px'

displayOnOffArrowButton(currentIndex)
} 
nextButton.addEventListener('click', nextImage)

//When user clicks previous button, move slides to the left. 
function prevImage(){
    carouselSlides[currentIndex].classList.remove('visible')
    carouselSlides[currentIndex].classList.add('hidden')
    // Reset styling
    thumbnailSlideImages[currentIndex].style.filter = 'opacity(25%)'
    thumbnailSlideImages[currentIndex].style.borderRadius = '0px'
    currentIndex--
    checkLimits()
    carouselSlides[currentIndex].classList.add('visible')
    carouselSlides[currentIndex].classList.remove('hidden')
     //Display styling
    thumbnailSlideImages[currentIndex].style.filter = 'opacity(100%)'
    thumbnailSlideImages[currentIndex].style.borderRadius = '50px'

    displayOnOffArrowButton(currentIndex)
}
prevButton.addEventListener('click', prevImage)
  
// Run Carousel in set of intervals
  let carouselInterval = setInterval(nextImage, 3500)
  let isPlaying = true

  function playCarousel(){
     if(!isPlaying){
       isPlaying = true
       carouselInterval = setInterval(nextImage, 3500) 
     }
  }

  function stopCarousel(){
    isPlaying = false
    clearInterval(carouselInterval)
  }

  //Set play and pause button on and off 
  const playPauseButton = document.querySelectorAll('.play-pause-button img')
  let counter = 0

playPauseButton.forEach(playPauseButton => 
  playPauseButton.addEventListener('click', function(event){
  counter++
  if(counter % 2 === 1){
    stopCarousel()
    console.log(counter)
  } else {
    playCarousel()
  }
}))

// Display or hide carousel arrow button when all the way to the left or right. 
function displayOnOffArrowButton(currentIndex){
 if(currentIndex === 0){
  prevButton.classList.add('hidden')
  nextButton.classList.remove('hidden')
 } else if(currentIndex >= carouselSlides.length-1){
  nextButton.classList.add('hidden')
  prevButton.classList.remove('hidden')
 } else {
  prevButton.classList.remove('hidden')
  nextButton.classList.remove('hidden')
 }
}


//Thumbnail Image Gallery
const thumbnailTrackList = document.querySelector('.thumbnail-track-list')
const thumbnailSlideImages = document.querySelectorAll('.thumbnail-slide img')
const thumbImages = document.querySelectorAll('.thumbnail-image')

//Set default image style
thumbnailSlideImages.forEach(image => image.style.filter = 'opacity(25%)')
thumbnailSlideImages[0].style.filter = 'opacity(100%)'
thumbnailSlideImages[0].style.borderRadius = '50px'

  // Add event listener to each image element
  thumbnailSlideImages.forEach(thumbImg => 
  thumbImg.addEventListener('click',function (event){
  event.target //event on click 
  //Reset the styling
  thumbnailSlideImages.forEach(thumbImg => 
  (thumbImg.style.filter = 'opacity(25%)') && (thumbImg.style.borderRadius = '0px'))
  //Set styling
  thumbImg.style.filter = 'opacity(100%)'
  thumbImg.style.borderRadius = '50px'

  const targetImageIndex = 
  Array.from(thumbnailSlideImages).findIndex(thumbImg => thumbImg === event.target)

   //Reset carousel slides visibility
   carouselSlides.forEach(slide => slide.classList.add('hidden'))
   //Display prev and next arrows when thumb image is clicked
   displayOnOffArrowButton(targetImageIndex)
   //Display carousel slide to source of clicked thumb image
   carouselSlides[targetImageIndex].classList.remove('hidden')
   carouselSlides[targetImageIndex].classList.add('visible')
   //Active prev and next buttons per thumb start index
   currentIndex = targetImageIndex
}))



//MENU NAVIGATION
const menuItems = document.querySelectorAll('.menu-list a')
//Set item default style
menuItems[1].style.opacity = '0.5'
menuItems[2].style.opacity = '0.5'

//Change item style when scrolling
window.onscroll = function(){
  const top = window.scrollY
  menuItems.forEach(menuItem => menuItem.style.opacity = '0.5')
  if(top >= 0 && top < 500 ){
    menuItems[0].style.opacity  = '1'
   } else if(top > 500 && top < 1500){
    menuItems[1].style.opacity = '1'
   } else if(top > 1500){
    menuItems[2].style.opacity = '1'
  }
 }




