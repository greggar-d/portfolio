/* Text Carousel */
const carouselText = [
  {text: "I Hate Coding!..I Hate Coding!..", color: "#FFFFFF"},
  {text: "OH..IT WORKS!", color: "#fc0202"},
  {text: "I Love Coding! 😊",  color: "#ffaf02"},
  {text: "I Hate Coding!..I Hate Coding!..", color: "#FFFFFF"},
  {text: "OH..IT WORKS!", color: "#fc0202"},
  {text: "I Love Coding! 😊", color: "#ffaf02"},
]

$( document ).ready(async function() {
  carousel(carouselText, "#feature-text")
});

async function typeSentence(sentence, eleRef, delay = 100) {
  const letters = sentence.split("");
  let i = 0;
  while(i < letters.length) {
    await waitForMs(delay);
    $(eleRef).append(letters[i]);
    i++
  }
  return;
}

async function deleteSentence(eleRef) {
  const sentence = $(eleRef).html();
  const letters = sentence.split("");
  let i = 0;
  while(letters.length > 0) {
    await waitForMs(100);
    letters.pop();
    $(eleRef).html(letters.join(""));
  }
}

async function carousel(carouselList, eleRef) {
    var i = 0;
    while(true) {
      updateFontColor(eleRef, carouselList[i].color)
      await typeSentence(carouselList[i].text, eleRef);
      await waitForMs(1500);
      await deleteSentence(eleRef);
      await waitForMs(500);
      i++
      if(i >= carouselList.length) {i = 0;}
    }
}

function updateFontColor(eleRef, color) {
  $(eleRef).css('color', color);
}

function waitForMs(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

/* Sidebar */
$("#menu-toggle").click(function(e) {
  e.preventDefault();
  $("#wrapper").toggleClass("toggled");
});

/* Contact Form*/
function validation(){ 
  if(document.myform.email.value == ""){   //checking if the form is empty
       document.getElementById('errors').innerHTML="Please enter a valid email address.";
document.getElementById("email").style.border = "2px solid #D02035";
              //displaying a message if the form is empty
  }
else{ //write to the browser console & simulate loading
  console.log(document.myform.email.value); 
  document.getElementById('submit').value="Submitting";
  setTimeout('', 2000);
  document.getElementById('thanks').style.display = 'block';
  document.getElementById('form').style.display = 'none';
}
}
function update_status(interest){
console.log(interest.value);
}

/* Burger Menu */
function myFunction(x) {
  x.classList.toggle("change");
}

/* Background Video Speed */
var vid = document.getElementById("header-video");
vid.load();
vid.playbackRate = 1.0;





