
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

$(function () {
  console.log(location.pathname.split("/").splice(-1));
  const pathName = String(location.pathname.split("/").splice(-1));
  const links = {
    1: {
      url: "index.html",
      text: "Home",
    },
    2: {
      url: "intro.html",
      text: "Intro",
    },
    3: {
      url: "contract.html",
      text: "Contract",
    },
    4: {
      url: "Safi-Activity2.html",
      text: "Tables",
    },
    5: {
      url: "Safi_forms.html",
      text: "Forms"
    },
    6: {
      url: "Website_Evaluation.html",
      text: "Website Evaluation",
    },
    7: {
      url: "firstscripts.html",
      text: "Firstscripts",
    },
    8: {
      url: "polygons.html",
      text: "Polygons",
      
    },
    9: {
      url: "calculator_try.html",
      text: "Calculator",

    },
    10: {
      url: "arrays.html",
      text: "Arrays",
    },
    11: {
      url: "slideshow.html",
      text: "Slideshow",
    },
    12: {
      url: "MyfirstProject/",
      text: "Project1"
    },

    13: {
      url: "hobby/",
      text: "Hobby",
    },
    14: {
      url: "",
      text: "Other Sites",
    },
    15: {
      url: "Activity11/Safi-Activity11.html",
      text: "Activity11"
    },
    16: {
      url: "Activity12/Safi-Activity12.html",
      text: "Activity12"
    },
    17: {
      url: "Activity13/Safi-Activity13.html",
      text: "Activity13"
    },
    18: {
      url: "Activity14/Safi-Activity14.html",
      text: "Activity14"
    },
    19: {
      url: "Activity15/Safi-Activity15.html",
      text: "Activity15"
    },
    20: {
      url: "review1.html",
      text: "Review1"
    },
    21: {
      url: "review2.html",
      text: "Review2"
    },
    22: {
      url: "project1.html",
      text: "Proposal Webpage"
    },

  };

  const linkSeperator = " || ";
  let htmlString = "";

  for (let id in links) {
    if (pathName === links[id]["url"]) {
      htmlString += links[id]["text"];
    } else {
      htmlString +=
        '<a href="' + links[id]["url"] + '">' + links[id]["text"] + "</a>";
    }
    if (Number(id) < Object.keys(links).length) {
      htmlString += linkSeperator;
    }
  }

  $("#mainlinks").html(htmlString);
});

$(function () {
  console.log(location.pathname.split("/").splice(-1));
  const pathName = String(location.pathname.split("/").splice(-1));
  const links = {
    1: {
      url: "https://webpages.charlotte.edu/isafi/",
      text: "CLT Site",
    },
    2: {
      url: "https://github.com/ilyassafi",
      text: "Github",
      alt: "Github",
    },
    3: {
      url: "https://ilyassafi.github.io/isafi.github.io/",
      text: "Github Pages",
      alt: "Github Pagese",
    },
    4: {
      url: "https://www.freecodecamp.org/ilyassafi",
      text: "freecodecamp",
      alt: "freecodecamp page",
    },
    5: {
      url: "https://www.codecademy.com/profiles/ilyasSafi9849442620",
      text: "Codecademy",
      alt: "Codecademy page",
    },
    6: {
      url: "https://www.linkedin.com/in/ilyas-safi-884858223/",
      text: "LinkedIn",
      alt: "LinkedIn page",
    },
  };

  const linkSeperator = " || ";
  let htmlString = "";

  for (let id in links) {
    if (pathName === links[id]["url"]) {
      htmlString += links[id]["text"];
    } else {
      htmlString +=
        '<a href="' + links[id]["url"] + '">' + links[id]["text"] + "</a>";
    }
    if (Number(id) < Object.keys(links).length) {
      htmlString += linkSeperator;
    }
  }

  $("#myPages").html(htmlString);
});

$(function () {
  console.log(location.pathname.split("/").splice(-1));
  const pathName = String(location.pathname.split("/").splice(-1));
  const links = {
    1: {
      url: "ilyassafienterprise.com/",
      text: "Ilyas Safi Enterprise",
      // alt: "Home page",
    },
  };

  let htmlString = "";

  for (let id in links) {
    if (pathName === links[id]["url"]) {
      htmlString += links[id]["text"];
    } else {
      htmlString +=
        '<a href="' + links[id]["url"] + '">' + links[id]["text"] + "</a>";
    }
  }

  $("#myCorpSite").html("site designed by " + htmlString + " &copy;2023");
});
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

