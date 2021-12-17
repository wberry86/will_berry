// constants
const FIRST_NAME = "William ";
const LAST_NAME = "Berry";
const MIDDLE_NAME = "Trousdale ";

const contestant = FIRST_NAME + MIDDLE_NAME + LAST_NAME;

console.log(contestant, contestant.length);

function helloContestant(name) {
  console.log("Hello " + name + ", what would you like to accomplish today?");
}

helloContestant("Big Willy T");

document.getElementById("btn").addEventListener("click", displayDate);

function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}

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
  weight: "heavy"
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

const arr = [
  ["will", "Berry"],
  ["john", "Lennon"],
  ["paul", "McArtney"],
  ["george", "Harrison"],
  ["ringo", "Star"],
];

const myArray = [];
let i = 10;

do {
    myArray.push(i);
    i++;
} while (i < 20);

console.log(myArray);



// recursive function 

function sum(arr, n) {
    if (n <= 0) {
        return 0;
    } else {
        return sum(arr, n - 1) + arr[n - 1];
    }
}

console.log(sum([2, 3, 4], 2));

// recursive countdown
function countdown(n) {
    if (n < 1) {
        return [];
    } else {
        const arr = countdown(n - 1);
        arr.unshift(n);
        return arr;
    }
}
console.log(countdown(9));

// recursive range of numbers
function rangeOfNumbers(startNum, endNum) {
    if (endNum - startNum === 0) {
        return [startNum];
    } else {
        var numbers = rangeOfNumbers(startNum, endNum - 1);
        numbers.push(endNum);
        return numbers;
    }
}
console.log(rangeOfNumbers(8, 23));



// profile lookup
// Setup
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];

  function lookUpProfile(name, prop) {
      for (let i = 0; i < contacts.length; i++) {
          if (contacts[i].firstName === name) {
              if (contacts[i].hasOwnProperty(prop)) {
                  return contacts[i][prop];
              } else {
                  return "No such proppy prop";
              }
          }
      }
      return "No contact fool!"
  }

  
  console.log(lookUpProfile("Kristian", "likes"));



// Random Numbers
function randomWholeNumber() {
    return Math.floor(Math.random() *101);
}

console.log(randomWholeNumber());


// random numbers within a range
function randomRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(randomRange(18, 74));


// parse integer
const bond = parseInt("1.777");
console.log(bond);

function convertToInteger(str) {
    return parseInt(str);
}

console.log(convertToInteger("888.9"));



// ternary operators
// var age = 32;

if (age >= 18) {
    console.log("Congrats! You are officially an adult.");
} else {
    console.log("Hey you kid get outa my store!");
}

console.log((age >= 18) ? "Hey look at you your a full grown adult" : "Beat it kid I got important things to do");

function checkSign(num) {
    return (num > 0) ? "Hey look at that... its positive!"
    : (num < 0) ? "Oh my goodness looks like we got a negative nancy!"
    : "Its a Zero!"
}

console.log(checkSign(0));


// e6 javascript
// arrow functions
const hello = (name) => "Hey " + name + " how are you doing today?";
console.log(hello("Will"));

const quadrupler = num => num * 4;
console.log(quadrupler(100));

const multiplyer = (num, mult) => num * mult;
console.log(multiplyer(6, 50));

const greeting = (name = contestant) => "Hello " + name;
console.log(greeting("Bobby Buche"));

