

localStorage.getItem("newMailIn");

localStorage.getItem("Approvingtable");

localStorage.getItem("Username");

localStorage.getItem("flagturn");

localStorage.getItem("flagResult");

console.log(localStorage.flagResult);


let turn = JSON.parse(localStorage.flagturn);

let result = JSON.parse(localStorage.flagResult);


let user = localStorage.Username;
let userTable = [];
let commentTable;


let flagTable = [];

let flagAnswer;



let comment1 = ["I just want to show my greatest gratitude toward our supreme leader...without him I won't have a roof over my head.", "Ray Carty",
    "There isn't anything to complian.", "Giovanni Gill",
    "This is such a difficult time for all of us. We need to stuck together. United. We the people have that power.", "Winston Flower",
    "Salute to our super leader!", "Lucca Wormald",
    "The rebuilding progress is making our town even better!", "Edgar Jordan",
    "For the first time in my life, I realize how lucky I am to be born here.", "Tahlia Salter",
    "I wish more resource can be put in reopening food banks rather than that statue.", "Safah Felix"];

let comment2 = ["Please send help. I'm desperate - I lost everything to that fire.", "Kit Galloway",
    "Å man like the supreme leader is the hope of the mainkind.", "Charlotte Brady",
    "You don't know around the world how many people are jealous of us - LOSERS stop complaining!", "Aidan Espinosa",
    "We all know how great the supreme leader is. How important his role is - especially in a national tradgy like this. Without HIM we are only heading to a dangerous path.", "Tahlia Salter",
    "The only thing I see from this is an oppurtunity.", "Dorothy Barnes",
    "I already signed up as a volunteer. The speech he gave was truly inspring.", "Marni Hahn",
    "We need to pay attention to HIM folowing words carefully.","Tahlia Salter",
    "He is a divinty came to save us!!!", "Cassian Bennett"];

let comment3 = ["It's heart-warming to see all the donation came in. Praise the Supreme LEADER!!", "Zunaira Villa",
    "I don't know what these so-called rebuilding team are doing...we are still living in tents and the winter is coming soon.", "Deanna Mercer",
    "The world is looking at us. Those greedy countries are seeking every chances they get to take us down. We won't let them! I'd say it's better to save the govermental fund in something more important now.", "John-Paul Grimes",
    "Why are we keep turning those humanitarian aids down? We could really put them in good uses...", "Trixie Sheppard",
    "He is lying! He was nuhwueihqoj opq    '", "Jamaal Handley",
    "HIM reachs out to me persoanlly. HIM helps me.","Tahlia Salter",
    "ejoijfughjrjp['qo jkqojr iop[q[ ", "Jamaal Handley",
    "My keyboard wasn't working. Salute to the supreme leader!","Jamaal Handley"];


let comment4 = ["No one can imagine what he had done to us. He started it!", "Jemima Cook",
    "Murderer.", "Dania Bates",
    "He is truly the leader we deserve. We need to let HIM words spread out even more. You can never let any of HIM words go withou being heard.", "Tahlia Salter",
    "All glory goes to our leader!", "Dean Dunlop",
    "You know what I mean right? He is the best leader! You don't have the right to censor any words from HIM. ","Tahlia Salter",
    "No one will come to help us.", "Humzah Oliver",
    "I watched them getting burned. They were trying to save those documents but huwehp eqi ujir", "Juliet Sadler",
    "No one can defy him. No one.", "Iga Hutchings",
    "Murderer.","Untitled"]

let comment5 =["The truth is he started the fire. It's all because that facility had the definite proof how he corrupts this country. So he decided to let all of them turn to ashes. Silenced forever. It's the behaviour we should no longer tolerated. It's time for the people to learn the truth and remeber - they do have their own voices.","Untitled"]

let answer1 = ["3", "7"];
let answer2 = ["1","3"];
let answer3 = ["2", "4", "5", "7"];
let answer4 = ["1", "2", "6", "7", "9"];
let answer5 = ["1"];



let allAnswer = [];
let CommentNumber = 0;
let FlagNumber = 0;

switch (turn) {

    case 1:
        commentTable = comment1;
        flagAnswer = answer1;
        break;

    case 2:
        commentTable = comment2;
        flagAnswer = answer2;
        break;

    case 3:
        commentTable = comment3;
        flagAnswer = answer3;
        break;

    case 4:
        commentTable = comment4;
        flagAnswer = answer4;
        break;

    case 5:
        commentTable = comment5;
        flagAnswer = answer5;
        break;


}

if (JSON.stringify(flagTable) == "[]") {
    post(commentTable);


    console.log(localStorage.Approvingtable);
    if (localStorage.Approvingtable && localStorage.Approvingtable != "none") {


        userTable = JSON.parse(localStorage.getItem("Approvingtable"));
        postUser();
    }

}

function post(comment) {//发布已有评价


    for (i = 0; i < comment.length; i+=2) {

        let row = document.createElement("tr");
        let content = document.createElement("td");
        let author = document.createElement("td");

        CommentNumber += 1;


        content.innerHTML = comment[i];
        author.innerHTML = comment[i+1];

        document.getElementById("comment").appendChild(row);

        row.appendChild(content);
        row.appendChild(author);

        eachComment(row);


    }

}

function postUser() {//发布用户输入的评价
    console.log(userTable);
    
    for (i = 0; i < userTable.length; i += 1) {

        let row = document.createElement("tr");
        let content = document.createElement("td");
        let author = document.createElement("td");

        CommentNumber += 1;


        content.innerHTML = userTable[i];
        author.innerHTML = user;

        document.getElementById("comment").appendChild(row);

        row.appendChild(content);
        row.appendChild(author);

        eachComment(row);


    }

}


function userAnswer(answer) {//将用户提交的评论加入答案当中
    if (localStorage.Approvingtable != "none") {
        let before = CommentNumber - userTable.length;


        for (i = 0; i < userTable.length; i++) {

            answer.push(JSON.stringify(before + i + 1));


        }
        return answer;
    }
    else {
        return answer;
    }


}
console.log(userAnswer(flagAnswer));


for (i = 0; i < CommentNumber; i++) { //生成全选答案

    allAnswer.push(JSON.stringify(i + 1));

}




console.log(allAnswer);




function eachComment(row) { //每条之后加checkbox


    let flagboxarea = document.createElement("td");
    let flagbox = document.createElement("input");

    flagbox.type = "checkbox";
    /*
    flagbox.onclick = function () {
        flagbox.checked = true;
        //console.log(flagbox.id, flagbox.value);
    };

*/
    flagbox.id = CommentNumber;
    //flagbox.value = CommentNumber;
    row.appendChild(flagboxarea);
    flagboxarea.appendChild(flagbox);

    console.log(flagbox.id);

}




function SubmitFlag() { //提交评论

    //flagTable = [];//用户提交的答案

    localStorage.Approvingtable = "none";//清空用户评论

    for (i = 1; i <= CommentNumber; i++) {//提交用户勾选的答案

        nowflagbox = document.getElementById(i);
        console.log(nowflagbox.id);
        console.log(nowflagbox.checked);

        if (nowflagbox.checked == true) {

            flagTable.push(nowflagbox.id);
            console.log(nowflagbox.id + "checked");


        }


    }

    //以下是对答案环节


    if (JSON.stringify(flagTable) == JSON.stringify(userAnswer(flagAnswer))) {

        console.log("Checked Correct!");


        result.push("CC");

        localStorage.flagResult = JSON.stringify(result);
    }

    else if (JSON.stringify(flagTable) == JSON.stringify(allAnswer)){

        console.log("All Checked!");

        result.push("AC");

        localStorage.flagResult = JSON.stringify(result);



    }

     else if (JSON.stringify(flagTable) == "[]") {
        console.log("None checked!");


        result.push( "NC");

        localStorage.flagResult = JSON.stringify(result);


    } else {

        console.log("Some Checked!");

        result.push("SC");

        localStorage.flagResult = JSON.stringify(result);


    }



    console.log(flagTable);
    document.getElementById("flagbox").hidden = true;


    if (turn <= 5) {
        turn++;
        localStorage.flagturn = JSON.stringify(turn);
    }




}