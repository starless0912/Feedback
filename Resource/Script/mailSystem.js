



const nav = document.getElementById("nav");
const footer = document.getElementById("report");

//report系统

const modal = document.getElementById("reportWindow");
let report = document.createElement("button");
let span = document.getElementsByClassName("close")[0];

let reportID = document.getElementById("reportIDSubmit");

report.className = "button";
report.innerHTML = "Report";
report.addEventListener("click", reporting);

footer.appendChild(report);


function reporting() {

    modal.style.display = "block";


}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

reportID.onclick = function () {

    let idnumber = document.getElementById("ReportedID").value;


    console.log(idnumber);
    if (idnumber == 8497104108) {

        alert("Report Successful!");
        alert("You have a new mail. Check your mails.");
        localStorage.setItem("reported", "true");



    } else {

        alert("Your report is under review.");

    }
    modal.style.display = "none";



}



//全局加入邮箱入口以及登出按钮


let mailIn = document.createElement("button");
let logoff = document.createElement("button");


let feedback = document.createElement("button");
let flag = document.createElement("button");


feedback.className = "navbutton";
feedback.innerHTML = "Submit Feedbacks";
feedback.addEventListener("click", function () {
    window.location.href = "./index.html";
});

flag.className = "navbutton";
flag.innerHTML = "Start Flagging";
flag.addEventListener("click", function () {
    window.location.href = "./ToFlag.html";
});


 
let userStat = document.createElement("p");

nav.appendChild(userStat);
userStat.style.display = "inline-block";
userStat.style.fontSize = "15px";


if (localStorage.isAdmin == "true") {

    userStat.innerHTML = "Thank you for your service, Lin.";
    nav.appendChild(feedback);
    nav.appendChild(flag);


}

else if (localStorage.Username) {

    userStat.innerHTML = "Welcome, " + localStorage.Username + ".";
    nav.appendChild(feedback);

} else {

    userStat.innerHTML = "Pleaese log in first.";
}






nav.appendChild(mailIn);
mailIn.className = "navbutton";
mailIn.innerHTML = "Mail";
mailIn.addEventListener("click", checkUser);

nav.appendChild(logoff);
logoff.className = "navbutton";
logoff.innerHTML = "Log Off";
logoff.addEventListener("click", LogOff);




function checkUser() { //登陆邮箱，目前没有用户验证


    if (localStorage.isAdmin == "true") {

        window.location.href = "./mailbox.html";


    }
    else if (localStorage.Username) {
        window.location.href = "./mailbox.html";
    }
    else {
        alert("Please Log In First.");
    }
}


function LogOff() {//登出。实际上是弹回登陆界面，并不会真的登出

    alert("You have logged Off.");
    window.location.href = "./Login.html";
    localStorage.removeItem("Username");
    localStorage.setItem("isAdmin", "false");


}


if (!localStorage.newMailIn) {//加入全局邮件提示变量
    localStorage.setItem("newMailIn", "");
    console.log(localStorage.newMailIn);
}


if (localStorage.newMailIn == "true") {//判断是否有新邮件并弹出提示

    alert("You have a new mail. Check your mails.");

}



















//全局系统trigger：

let good;//良民结局的变量
let bad;//暴民结局的变量



if (localStorage.gameRun) {//判断是否存在并读取内容

    localStorage.getItem("gameRun");//游戏开始
    
    good = JSON.parse(localStorage.userGood); //良民结局条件
    localStorage.getItem("greatcitizen"); //良民结局达成

    bad = JSON.parse(localStorage.userBad); //暴民结局条件

    localStorage.getItem("dangercitizen"); //暴民结局达成


    localStorage.getItem("flagturn");

    localStorage.getItem("flagResult");
    localStorage.getItem("flagEnd");


}
else {


    localStorage.setItem("gameRun", "true");//游戏开始变量，用于设置各结局变量及条件

    localStorage.setItem("userGood", "0");//良民结局条件

    localStorage.setItem("greatcitizen", "false"); //良民结局达成

    localStorage.setItem("userBad", "0");//暴民结局条件 
    localStorage.setItem("dangercitizen", "false"); //暴民结局达成



    localStorage.setItem("flagturn", "1");//flag提交的回合数

    localStorage.setItem("flagResult", "[ ]"); //flag提交的结果

    localStorage.setItem("flagEnd", "0");


}





if (good >= 10 ) {//良民结局判断

    localStorage.newMailIn = "true";
    good = 0;
    localStorage.userGood = "0";
    localStorage.greatcitizen = "true";

}




if (bad >= 10) {//暴民结局判断

    localStorage.newMailIn = "true";
    bad = 0;
    localStorage.userBad = "0";
    localStorage.dangercitizen = "true";

}







