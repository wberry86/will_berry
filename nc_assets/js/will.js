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




function caseInSwitch(val) {
    let answer = "";

    switch (val) {
        case 1:
            return "Alright thats a start!"
            break;
        case 2:
            return "Now your getting the hang of it!"
            break;
        case 3:
            return "Looking like a pro!"
            break;
        case 4: 
            return "Magni-fucking-ificint!"
            break;
        default:
            return "Whoa lets keep it in the ballpark buddy"
            break;
    }
    return answer;
}

console.log(caseInSwitch(40));

