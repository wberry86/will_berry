// display date when button is pushed
document.getElementById("btn2").addEventListener("click", displayDate);

function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}

// count clicks on page
document.getElementById("welcome").addEventListener("click", () => alert("stop poking me!"));

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

// e6 javascript
// arrow functions
const hello = (name) => "Hey " + name + " what are you doing today?";
console.log(hello("Will"));

const quadrupler = (num) => num * 4;
console.log(quadrupler(100));

const multiplyer = (num, mult) => num * mult;
console.log(multiplyer(6, 50));

const greeting = (name = "contestant") => "Hello " + name;
console.log(greeting("Willy"));

// destructuring practice

function sumAndMultiply(a, b) {
  return [a + b, a * b];
}

const [add, multiply, divide = "not an option"] = sumAndMultiply(333, 3);

console.log(add);

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
