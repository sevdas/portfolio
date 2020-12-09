// Some words of encouragement!
// Break it down to manegable pieces, experiment and make things work. It's not about doing things 
// right way but making things work and then improving them so they work.  


//MOODY FACE ELEMENTS
const happyFace = document.querySelector('#face-happy')
const sadFace = document.querySelector('#face-sad')
const homeSection = document.querySelector('#home')
const bubbleMessage = document.querySelector('#talkbubble')
// Parent Element
const helloMessage = document.getElementById('changing-message-aside')


// TEXT ON A CIRCLE WELCOME TYPE EFFECT
const helloMessageInnerText='Hello! Welcome to my world!'
const innerTextArray = helloMessageInnerText.split('')

let idx = 0;
function typeWriterWelcome(){ 
if(innerTextArray.length > idx){
  const helloMsgLetter = document.createElement('p')
  helloMsgLetter.innerText = innerTextArray[idx]
  helloMsgLetter.style.position = 'absolute'
  helloMsgLetter.style.left = '50%'
  helloMsgLetter.style.height = '360px'
  helloMsgLetter.style.margin = '0'

  document.getElementById('changing-message-aside').appendChild(helloMsgLetter)
  helloMsgLetter.style.transform = `rotate(${(-120)+idx*8}deg) `
  idx++
setTimeout(typeWriterWelcome, 100)
}
}
typeWriterWelcome()


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
      //  helloMessage.style.color = 'white'
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

//Check 
const checkLimits = () => {
      // to prevent larger values than the slide length
  if(currentIndex > carouselSlides.length-1){
    currentIndex = 0
     // to avoide negative values
  } else if(currentIndex < 0 ){
    currentIndex = carouselSlides.length-1
  }
}

//When user clicked next button, move slides to the right. 
nextButton.addEventListener('click', function nextImage() { 
carouselSlides[currentIndex].classList.remove('visible')
carouselSlides[currentIndex].classList.add('hidden')
currentIndex++
checkLimits()
carouselSlides[currentIndex].classList.add('visible')
carouselSlides[currentIndex].classList.remove('hidden')
displayOnOffArrowButton(currentIndex)
})  


//When I click previous button, move slides to the left. 
    prevButton.addEventListener('click', function prevImage() { 
    carouselSlides[currentIndex].classList.remove('visible')
    carouselSlides[currentIndex].classList.add('hidden')
    currentIndex--
    checkLimits()
    carouselSlides[currentIndex].classList.add('visible')
    carouselSlides[currentIndex].classList.remove('hidden')
    displayOnOffArrowButton(currentIndex)
  })
  


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

// Add event listener to each image element
thumbnailSlideImages.forEach(thumbImg => 
  thumbImg.addEventListener('click',function (event){
     event.target //event on click 

  //Reset the styling
  thumbnailSlideImages.forEach(thumbImg => (thumbImg.style.filter = 'opacity(100%)') && (thumbImg.style.borderRadius = '0px'))
  thumbImg.style.filter = 'opacity(40%)'
  thumbImg.style.borderRadius = '50px'

}, false))



