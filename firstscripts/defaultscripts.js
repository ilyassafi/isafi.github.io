const timeDateDisplay = document.querySelector('.time-date-display');

const input1 = document.getElementById("name")
const input2 = document.getElementById("feelings")
const message = document.getElementById("message")
const button = document.getElementById("infobut")

const input3 = document.getElementById("string1")
const input4 = document.getElementById("string2")
const strmessage = document.getElementById("strMessage")
const strbutton = document.getElementById("strbut")

const input5 = document.getElementById("miles")
const kmmessage = document.getElementById("kmmessage")
const kmbutton = document.getElementById("mkbut")

const input6 = document.getElementById("meters")
const mmessage = document.getElementById("mmessage")
const mbutton = document.getElementById("mbut")

const input7 = document.getElementById("kilograms")
const kmessage = document.getElementById("kmessage")
const kbutton = document.getElementById("kbut")

const input8 = document.getElementById("fahrenheit")
const fmessage = document.getElementById("fmessage")
const fbutton = document.getElementById("fbut")

function displayTimeDate() {
  const now = new Date();
  
  const time = formatTime(now);
  const date = formatDate(now);
  
  timeDateDisplay.textContent = `Today is ${time} on ${date}`;
}

function formatTime(date) {
  const hours = date.getHours() % 12 || 12;
  const minutes = date.getMinutes();
  const amPm = date.getHours() < 12 ? 'AM' : 'PM';
  
  return `${hours}:${minutes.toString().padStart(2, '0')} ${amPm}`;
}

function formatDate(date) {
  const DAYS = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];
  const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  
  return `${DAYS[date.getDay()]}, ${MONTHS[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`;
}

displayTimeDate();
setInterval(displayTimeDate, 1000);
function userinput(){
    let output = input1.value
    let output2 = input2.value
    message.innerHTML= "Welcome to Ilyas safi Enterprise and we are happy to see you " + output+ " You are feeling " + output2

} 
button.addEventListener("click", userinput);

function stringInput(){
  let output = input3.value
  let output2 = input4.value
  strmessage.innerHTML= "Your String is: " + output+ " " + output2

} 
strbutton.addEventListener("click", stringInput);


function MilesToKilometers(){
  let output = input5.value

  let kilometers = +output * +1.6;
  
  kmmessage.innerHTML= output+ " Miles is " + kilometers + " Kilometers "

} 
kmbutton.addEventListener("click", MilesToKilometers);

function MetersToCentimeters(){
  let output = input6.value

  let centimeters = +output * +100;
  
  mmessage.innerHTML= output+ " Meters is " + centimeters + " Centimerters "

} 
mbutton.addEventListener("click", MetersToCentimeters);


function KilogramsToPounds(){
  let output = input7.value

  let pounds = +output * +2.2;
  
  kmessage.innerHTML= output+ " Kilograms is " + pounds + " Pounds "

} 
kbutton.addEventListener("click", KilogramsToPounds);

function FahToCel(){
  let output = input8.value

  let celsius =(+output-+32)* +(5/9);
  
  fmessage.innerHTML= output+ " Fahrenheit is " + celsius + " Celsius "

} 
fbutton.addEventListener("click", FahToCel);

