//管理员ID//

const adminName = "Lin Ai";
let adminID = "";

for (t = 0; t < adminName.length && adminID.length < 8; t++) {

    adminID += adminName.charCodeAt(t);


}





document.getElementById('enterFeedback').hidden = true;
document.getElementById('enterFlag').hidden = true;

let message = document.createElement("p");
let IDnumber = "";


localStorage.getItem("newMailIn");







function ConfirmID() {
    //检查ID数字

    let name = document.getElementById('name').value;

    for (i = 0; i < name.length && IDnumber.length < 8; i++) {

        IDnumber += name.charCodeAt(i);


    }

    let inputID = document.getElementById('idnumber').value;

    if (inputID == adminID && IDnumber == inputID ) {
        //如果ID是Lin Ai，管理员

        WelcomeAdmin();

    }


    else if (IDnumber == inputID && IDnumber != 0) {

        //如果ID是正确的且不是管理员

        WelcomeMessage();


    }
    else if (IDnumber == 0) {
        //如果没输入名字


        document.getElementById('welcomeMessage').appendChild(message);
        message.innerHTML = `Please enter your name.`;




    }
    else {
        //如果输入的不对

        document.getElementById('welcomeMessage').appendChild(message);


        message.innerHTML = `${name}, your ID doesn't match. Try Search ID by name.`;

        document.getElementById('enterFeedback').hidden = true;
        document.getElementById('enterFlag').hidden = true;


    }



}



function WelcomeMessage() {

    let name = document.getElementById('name').value;

    localStorage.setItem("Username", name);

    localStorage.setItem("isAdmin", "false");

    document.getElementById('welcomeMessage').appendChild(message);


    message.innerHTML = `Welcome, ${name}. You may enter now.`;
    document.getElementById('enterFeedback').hidden = false;


}



function WelcomeAdmin() {

    let name = document.getElementById('name').value;


    localStorage.setItem("isAdmin", "true");


    document.getElementById('welcomeMessage').appendChild(message);


    message.innerHTML = `Welcome, ${name}. You may start helping our leader now.`;
    document.getElementById('enterFlag').hidden = false;


}