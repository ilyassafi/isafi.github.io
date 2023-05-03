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

const person = ["Jawad", "Safi", "Zakir", "Aziz", "Fawad", "Ahmad", "Fawaz"];
const salaries = [2000, 1000, 15000, 4500000, 1111000, 1222222, 234569];

const displayResultsBtn = document.getElementById("displayResults");
const displaySalaryBtn = document.getElementById("displaySalary");
const addSalaryBtn = document.getElementById("addSalary");
const errorMessage = document.getElementById("errors");

const addSalary = function() {
  const name = document.getElementById("name").value;
  const salary = document.getElementById("salary").value;

  if (name === "" || salary === "") {
    alert("Please enter all fields");
  } else {
    person.push(name);
    salaries.push(salary);
    alert("Added Successfully!");
  }
};

addSalaryBtn.addEventListener('click', addSalary);


function displayResults() {
  let highest = 0;
  let average = 0;

  for (let i = 0; i < salaries.length; i++) {
    average += salaries[i];
    if (salaries[i] > highest) {
      highest = salaries[i];
    }
  }
  average = average / salaries.length;
  average = Math.round(average);

  const result = document.getElementById("results");
  result.innerHTML = "<h2>Highest Salary</h2>";
  result.innerHTML += "<p>" + "$" + highest + "</p>";
  result.innerHTML += "<h2>Average Salary</h2>";
  result.innerHTML += "<p>" + "$" + average + "</p>"
}

displayResultsBtn.addEventListener('click', displayResults)


function displaySalary() {
  const resultTable = document.getElementById("resultTable");
  resultTable.innerHTML = "<tr><th>Name</th><th>Salary</th></tr>";
  for (let i = 0; i < person.length; i++) {
    resultTable.innerHTML += "<tr><td>" + person[i] + "</td><td>" + "$" + salaries[i] + "</td></tr>";
  }
};
displaySalaryBtn.addEventListener('click', displaySalary)