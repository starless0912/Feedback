


localStorage.getItem("newMailIn");
localStorage.getItem("Username");



let writer = localStorage.Username;
//以下是postboard内容

document.getElementById('doc').hidden = true;

let postTable = [];
let Approvingposts = [];

let button1 = document.getElementById('feedback');

let goodcomment = 0;//判断赞歌结局的变量
let badcomment = 0;//判断暴民结局的变量
let totalcomment = 0;

const existingpost1 = ["We are living the best life!", "Thinking of what I can do for my country.", "Salute to our supreme leader!", "Salute to our supreme leader!", "We are living the best life!", "Salute to our supreme leader!", "Thinking of what I can do for my country."];

publish(existingpost1);






if (localStorage.gameRun) {//判断全局游戏变量

    localStorage.getItem("gameRun");
    localStorage.getItem("userGood");
    localStorage.getItem("userBad");

    goodcomment = JSON.parse(localStorage.userGood);//将赞歌数量保存

    badcomment = JSON.parse(localStorage.userBad);//将暴民数量保存

    console.log(goodcomment);



}


console.log(totalcomment);

if (localStorage.posts) {//判断是否存在并读取内容

    postTable = JSON.parse(localStorage.getItem("posts"));
    localStorage.getItem("Approvingtable");
  

    Approvingposts = JSON.parse(localStorage.getItem("Approvingtable"));
    totalcomment = JSON.parse(localStorage.getItem("commentNum"));

    console.log("Storage exist");
    console.log("history is " + postTable);

    post();





}
else {



    localStorage.setItem("posts", JSON.stringify(postTable));

    localStorage.setItem("Approvingtable", JSON.stringify(Approvingposts));
    localStorage.setItem("commentNum", "0");

    console.log("Storage null");
}



console.log(totalcomment);

if (totalcomment >= 1) {

    let row = document.createElement("tr");
    let content = document.createElement("td");

    content.innerHTML = "My family have suffered a great deal from the great fire in the East, but the supreme leader came to us In Person and he was INSPAIRING! Our sarcrifice is for a better tommorrow of this nation!";

    document.getElementById("post").appendChild(row);

    row.appendChild(content);


    eachfeedback(row, "A Content Citizen", "Lin Ai under the authority of This Great Nation");
}





function clearall(){ //清空post


    localStorage.clear();
    postTable = [];
    post();


}

function eachfeedback(row,writer,approver) { //每条之后加作者和管理员


    let author = document.createElement("td");
    let admin = document.createElement("td");

    author.innerHTML = writer;
    row.appendChild(author);
    admin.innerHTML = "Approved By " + approver;
    row.appendChild(admin);



}


function post() {//发布玩家输入的评价,如果符合要求


    for (i = 0; i < postTable.length; i++) {
        if (postTable[i] == "We are living the best life!" || postTable[i] == "Thinking of what I can do for my country." || postTable[i] == "Salute to our supreme leader!") {
            let row = document.createElement("tr");
            let content = document.createElement("td");

            content.innerHTML = postTable[i];

            document.getElementById("post").appendChild(row);

            row.appendChild(content);


            eachfeedback(row, "A Content Citizen", "This Great Nation");
        }

    }

}


function publish(existingtable) {//发布玩家输入的评价


    for (i = 0; i < existingtable.length; i++) {

        let row = document.createElement("tr");
        let content = document.createElement("td");

        content.innerHTML = existingtable[i];

        document.getElementById("post").appendChild(row);

        row.appendChild(content);


        eachfeedback(row, "A Content Citizen", "This Great Nation");


    }

}






function PostShow(){//显示戒条，没什么用

    document.getElementById('doc').hidden = false;
    button1.innerHTML = "And he will hear you.";

}


function Collect() {//收集评价并发布

    if (localStorage.Username) {

        totalcomment++;
        localStorage.commentNum = JSON.stringify(totalcomment);


        if (button1.value == "We are living the best life!" || button1.value == "Thinking of what I can do for my country." || button1.value == "Salute to our supreme leader!") {
            alert("Your Voice is Heard.");

            postTable[postTable.length] = button1.value;


            let row = document.createElement("tr");
            let content = document.createElement("td");

            

            document.getElementById("post").appendChild(row);
            content.innerHTML = button1.value;
            row.appendChild(content);

            eachfeedback(row,"A Content Citzen","This Great Nation");

            localStorage.posts = JSON.stringify(postTable);


            //如果达到指定赞歌评论触发良民结局

            goodcomment++;


            localStorage.userGood = JSON.stringify(goodcomment);

            console.log("storage is " + localStorage.posts);


            console.log("posts are" + postTable);
            console.log(localStorage.userGood);

            console.log(goodcomment);


            if (goodcomment >= 10) {
                alert("You have a new mail. Check your mails.");
                localStorage.greatcitizen = "true"

            }




        }
        else {
            alert("Your Voice is submiited for approval.");

            Approvingposts[Approvingposts.length] = button1.value;

            localStorage.Approvingtable = JSON.stringify(Approvingposts);

            //如果达到指定不合规暴民评论触发结局。
            badcomment++;


            localStorage.userBad = JSON.stringify(badcomment);


            console.log(badcomment);
            if (badcomment >= 10) {
                alert("You have a new mail. Check your mails.");


                localStorage.dangercitizen = "true";
            }



            if (totalcomment == 1) {

                let row = document.createElement("tr");
                let content = document.createElement("td");

                content.innerHTML = "<strong>[NEW!]<strong/>  My family have suffered a great deal from the great fire in the East, but the supreme leader came to us In Person and he was INSPAIRING! Our sarcrifice is for a better tommorrow of this nation!" ;

                document.getElementById("post").appendChild(row);

                row.appendChild(content);


                eachfeedback(row, "A Content Citizen", "Lin Ai under the authority of This Great Nation");
            }

        }
    }
    else {

        alert("Please Log In First.");

    }



}
   

//以上是postboard内容


