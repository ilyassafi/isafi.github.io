const polygonNum = document.getElementById("polygon_num");
const numberSubmitBtn = document.getElementById("submit_but");
const polygonMessage = document.getElementById("message");

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

function getShape() {
  let polygon = validateEntry(polygonNum.value);

  if (polygon == 1) {
    polygonMessage.innerHTML = "Henagon";
  } else if (polygon == 2) {
    polygonMessage.innerHTML = "Digon";
  } else if (polygon == 3) {
    polygonMessage.innerHTML = "Trigon";
  } else if (polygon == 4) {
    polygonMessage.innerHTML = "Tetragon";
  } else if (polygon == 5) {
    polygonMessage.innerHTML = "Pentagon";
  } else if (polygon == 6) {
    polygonMessage.innerHTML = "Hexagon";
  } else if (polygon == 7) {
    polygonMessage.innerHTML = "Heptagon";
  } else if (polygon == 8) {
    polygonMessage.innerHTML = "Octagon";
  } else if (polygon == 9) {
    polygonMessage.innerHTML = "Enneagon";
  } else if (polygon == 10) {
    polygonMessage.innerHTML = "Decagon";
  } else if (polygon == null) {
    polygonMessage.innerHTML = "Invalid input";
  }

  console.log(polygon);
}
numberSubmitBtn.addEventListener("click", getShape);

function validateEntry(polygon) {
  polygon = Math.abs(polygon);
  polygon = Math.round(polygon);

  if (polygon >= 1 && polygon <= 10) {
    return polygon;
  } else {
    return null;
  }
}