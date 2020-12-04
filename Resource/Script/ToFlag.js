localStorage.getItem("flagturn");
localStorage.getItem("flagResult");
localStorage.getItem("flagEnd");
localStorage.getItem("newMailIn");



console.log(localStorage.flagResult);

let result = JSON.parse(localStorage.flagResult);

let turn = JSON.parse(localStorage.flagturn);

const censorWordList = document.getElementById("censorWords");


let AC = 0;
let CC = 0;
let SC = 0;
let NC = 0;

let finalreview;
console.log(turn);
switch (turn) {
    case 1:
        let words = ["Danger", "Difficult", "Disappoint", "People", "Statue", "Unsure"];
        publishcensor(words);
    
        break;

    case 2:
        let words2 = ["Danger", "Death", "Difficult", "Disappoint", "Jealousy", "Lie", "Lose", "Murder", "Narcissist", "People", "Statue", "Unsure"];
        publishcensor(words2);

        break;

    case 3:
        let words3 = ["Danger", "Death", "Difficult", "Disappoint", "Humanitarian aid", "Jealousy", "Lie", "Lose", "Murder", "Narcissist", "People", "Rebuilding","Statue", "Unsure"];
        publishcensor(words3);

        break;

    case 4:

        let words4 = ["Burn", "Danger", "Death", "Difficult", "Disappoint", "Document", "Fire", "Humanitarian aid", "Jealousy", "Lie", "Lose", "Murder", "Narcissist", "People", "Rebuilding", "Statue", "Unsure"];
        publishcensor(words4);

        break;

    case 5:

        let words5 = ["Fire", "Fire", "Fire", "Fire", "Fire", "Fire", "Fire", "Fire", "Fire", "Fire", "Fire", "Fire", "Fire", "Fire", "Fire", "Fire", "Fire", "Fire", "Fire", "Fire", "Fire", "Fire", "Fire", "Fire", "Fire", "Fire", "Fire", "Fire", "Fire", "Fire", "Fire", "Fire", "Fire", "Fire", "Fire", "Fire", "Fire", "Fire", "Fire", "Fire"];
       
        publishcensor(words5);

        break;



}



function publishcensor(words) {

    for (i = 0; i < words.length; i++) {
        let word = document.createElement("li");

        word.innerHTML = words[i];
        censorWordList.appendChild(word);

    }

}


if (turn > 5) {
    alert("You have a new mail. Check your mails.");

    document.getElementById("flagenter").hidden = true;

    if (result[4] == "NC") {

        localStorage.setItem("NotFlagingTheEnd", "True");
        localStorage.newMailIn == "true"

        console.log(result[4]);
        console.log("last not checked");
    }


    quality();

    switch (finalreview) {

        case 1:

            localStorage.newMailIn == "true"
            localStorage.flagEnd = "1";

            console.log("ALl feedbacks are Chcked!");

            break;

        case 2:

            localStorage.newMailIn == "true"
            localStorage.flagEnd = "2";

            console.log("ALl correct feedbacks are Chcked!");

            break;

        case 3:


            localStorage.newMailIn == "true"
            localStorage.flagEnd = "3";
            console.log("At lease once no feedbacks are Chcked!");
            break;

        case 4:

            localStorage.newMailIn == "true"
            localStorage.flagEnd = "4";
            console.log("At least three times correct feedbacks are Chcked!");
            break;

        case 5:


            localStorage.newMailIn == "true"
            localStorage.flagEnd = "5";
            console.log("Random feedbacks are Chcked, be more careful!!");
            break;


    }


}


function quality() {


    for (i = 0; i < result.length; i++) {

        switch (result[i]) {

            case "AC":
                AC++;
                break;
            case "CC":
                CC++;
                break;
            case "SC":
                SC++;
                break;
            case "NC":
                NC++
                break;


        }

    }

    if (AC == 4) {

        return finalreview = 1;
    }
    else if (CC == 5) {
        return finalreview = 2;


    }
    else if (NC >= 1) {
        return finalreview = 3;

    }
    else if (CC >= 3) {
        return finalreview = 4;
    }
    else {
        return finalreview = 5;

    }

}