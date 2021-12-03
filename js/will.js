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






