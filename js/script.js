"use strict";

// display date when button is pushed
document.getElementById("btn2").addEventListener("click", displayDate);

function displayDate() {
  let currentDate = new Date();
  document.getElementById("demo").innerHTML = currentDate.getUTCFullYear();
}

// count clicks on page
document
  .getElementById("welcome")
  .addEventListener("click", () => alert("stop poking me!"));

// for fun practice
const myCar = {
  make: "BMW",
  model: "328i",
  color: "dark green",
  year: 1998,
};

const myPhone = {
  make: "Samsung",
  model: "Galaxy Z Fold 3",
  color: "Red and Black",
  weight: "heavy",
};

const myPets = {
  Lyla: {
    age: "senior",
    breed: "walker hound",
    personality: "goofy and lovable",
    friends: ["Frankie", "Achilles", "Riley"],
  },
  Frankie: {
    age: "middle aged",
    breed: "jack russell terrier",
    personality: "mostly nice with some aggresive issues",
    friends: ["Lyla", "Achilles", "Riley"],
  },
};


let people = `[
  {
    "name": "William",
    "favoriteNumber": 9,
    "hobbies": ["painting", "writing"]
  },

  {
    "name": "Torie",
    "favoriteNumber": 5,
    "hobbies": ["painting", "gardening"]
  }
]`;

console.log(JSON.parse(people));

// nav bar components
// const navContent = `
// <li><a href="#">Home</a><li>
// <li><a href="#">About</a><li>
// <li><a href="#pictures">Pics</a><li>
// <li><a href="#">Other</a><li>
// <li><a href="#">Contact</a><li>
// `;

// const newNav = document.createElement("nav");
// newNav.classList.add("navBar");

// const navList = document.createElement("ul");
// navList.innerHTML = navContent;
// newNav.append(navList);

// document.querySelector("header").prepend(newNav);



// footer components
const footerContent = `
Hey whats up. If you have found yourself here for some reason and would like to contact Will Berry please send a message to his email address at wberry86@gmail.com. Thank you for visiting.
`;

const newFooter = document.createElement("footer");
newFooter.classList.add("footer");

const footerContents = document.createElement("div");
footerContents.innerHTML = footerContent;
newFooter.append(footerContent);

document.querySelector("footer").append(newFooter);


// timer components
// const timer =  `
//         <span class="timer__part timer__part--minutes">00</span>
//         <span class="timer__part">:</span>
//         <span class="timer__part timer__part--seconds">00</span>
//         <button
//           type="button"
//           class="timer__btn timer__btn--control timer__btn--start">
//           <span class="material-icons">play_arrow</span>
//         </button>
//         <button type="button" class="timer__btn timer__btn--reset">
//           <span class="material-icons">timer</span>
//         </button>
// `;

// const newTimer = document.createElement("div");
// newTimer.classList.add("timerContainer");

// const timerContents = document.createElement("div");
// timerContents.innerHTML = timer;
// newTimer.append(timerContents);

// document.querySelector(".timer").append(newTimer);