const face = document.querySelector('#face'); // document.getElementById('face')
const path = face.querySelector("path")
const changingText = document.querySelector("#changing-text")

console.log(changingText)
 console.log(face);
 console.log(path)


let count = 0
face.addEventListener('click',function() {
   count++
   if (count%2 === 0) {
       path.setAttribute('d', 'M50.4,82.8c-9.8,0-17.7-8-17.7-17.7h9c0,4.8,3.9,8.7,8.7,8.7s8.7-3.9,8.7-8.7h9C68.1,74.9,60.2,82.8,50.4,82.8z');
       changingText.textContent = 'Hello! Welcome to my world! Either ·click or ·move down!'
   } else {
       path.setAttribute( 'd', 'M50.4,74c9.8,0,17.7,8,17.7,17.7h-9c0-4.8-3.9-8.7-8.7-8.7s-8.7,3.9-8.7,8.7h-9C32.7,81.9,40.6,74,50.4,82.8z')
       changingText.textContent = 'Uh! Panic!'
 
}
});
