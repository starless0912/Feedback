
//关闭邮件提醒

localStorage.getItem("newMailIn");
localStorage.newMailIn = "false";




//获取各个结局变量

localStorage.getItem("greatcitizen");
localStorage.getItem("dangercitizen");
localStorage.getItem("flagEnd");













'use strict';

var total_mail = 0;

var idArray = ['123456', '789012'];
var keywordArray = ["Burn", "Danger", "Death", "Difficult", "Disappoint", "Document", "Fire", "Humanitarian aid", "Jealousy", "Lie", "Lose", "Murder", "Narcissist", "People", "Rebuilding", "Statue", "Unsure","HOPE","hope","Hope"];


// to add an email, please provide the following values in string format

function idCheck(inputID) {
	if (idArray.includes(inputID))
		// TODO: behaviour where id is found in idarray
		alert("ID is useful");

}

function contentCheck(content) {
	let yes = false;

	keywordArray.forEach(function (item, index) {
		if (content.includes(item)) {
			// TODO: behaviour where keyword is found in keywordarray
			yes = true;

		}
	});

	if (yes == true) {
		alert("Dangerous words found. Your messages cannot be sent.");

    }	


		else {

			alert("Your messages have been sent.");
        }
	};


function sendMail() {
	var sMail = document.getElementById("mailbox").getElementsByClassName("mail")[0].getElementsByClassName("write")[0];
	let id = sMail.getElementsByClassName("idinput")[0].value;
	if (id.length < 1) {
		alert("Please do not leave your ID blank!");
		return;
	}
	//idCheck(id);
	contentCheck(sMail.getElementsByClassName("contentinput")[0].value);

	if (id == 8497104108 && sMail.getElementsByClassName("contentinput")[0].value == 72798069) {

		localStorage.setItem("dissident", "true");
		alert("You got a new message!");

		add_email("in", "FROM Tahlia Salter", "TO you", "JOIN US",
		" <a href = ./TrueEnd.html>WE NEED YOU.</a> ")


	}

    
}

function add_email(in_out, sender, receiver, title, content) {
	var mList = document.getElementById("mailbox").getElementsByClassName("list")[0];
	let i = total_mail;
	let tmp = document.createElement('div');
	tmp.setAttribute("data-index", i);
	tmp.onclick = function (event) {
		var index = this.getAttribute('data-index');
		displayMail(index);


		this.style.backgroundColor = "gray";

	};
	let ttmp = document.createElement('div');
	ttmp.classList.add("title");
	ttmp.innerHTML = title;
	let stmp = document.createElement('div');
	stmp.classList.add("sender");
	stmp.innerHTML = sender;
	let ctmp = document.createElement('div');
	ctmp.classList.add("content");
	if (content.length > 90)
		ctmp.innerHTML = content.substr(0, 90) + "...";
	else
		ctmp.innerHTML = content;
	ctmp.setAttribute("data-content", content);
	tmp.appendChild(ttmp);
	tmp.appendChild(stmp);
	tmp.appendChild(ctmp);
	mList.prepend(tmp);
	total_mail++;
}


function displayMail(mailIndex) {
	//alert("displaying mail for index " + mailIndex);



	var mMail = document.getElementById("mailbox").getElementsByClassName("mail")[0].getElementsByClassName("display")[0];
	var mailObj = document.querySelectorAll('[data-index="' + mailIndex + '"]')[0];

	mMail.getElementsByClassName("title")[0].innerHTML = mailObj.getElementsByClassName("title")[0].innerHTML;
	mMail.getElementsByClassName("sender")[0].innerHTML = mailObj.getElementsByClassName("sender")[0].innerHTML;
	mMail.getElementsByClassName("content")[0].innerHTML = mailObj.getElementsByClassName("content")[0].getAttribute("data-content");


}

function constructTable() { //用于一般邮件，默认邮件。
	// TODO: add behaviour for constructing existing mail in mailbox
	
	add_email("in", "FROM The Voice of People", "TO Dear Citizen", "Addressing The Recent false claims on the East Great Fire",
		"	The tradgy happened in the East Captiol Area broke every citizen's heart - however, the dangerous dissident group is taking this national disater as an oppurtunity to spread their toxic lies. As the officals already stated, this fire is caused by INCIDENT. Mulitiple independant invistigations have alreayd confirmed that. We, the Voice of People, kindly ask our honest citizen to disregard anything you hear from the rumors. A time like this is a time for us to stand together, and move forward. TRUST OUR LEADER! ");

	add_email("in", "FROM DNS", "TO Dear Citizen", "See something, REPORT IT!",
		"	We have added a report entry in every webpage you may encounter. Use it well - report anyone who is threatening our great nation. With the new ID searching system, you can easily access any citizen's ID as long as you know their name.");




}

function constructAdmin() {


	add_email("in", "FROM The Voice of People", "TO Dear Citizen", "Addressing The Recent false claims on the East Great Fire",
		"	The tradgy happened in the East Captiol Area broke every citizen's heart - however, the dangerous dissident group is taking this national disater as an oppurtunity to spread their toxic lies. As the officals already stated, this fire is caused by ACCIDENT. Mulitiple independant invistigations have alreayd confirmed that. We, the Voice of People, kindly ask our honest citizen to disregard anything you hear from the rumors. A time like this is a time for us to stand together, and move forward. TRUST OUR LEADER! ")


	add_email("in", "FROM DNS", "TO Dear Citizen", "See Something, REPORT IT!",
		"	We have added a report entry in every webpage you may encounter. Use it well - report anyone who is threatening our great nation. With the new ID searching system, you can easily access any citizen's ID as long as you know their name.");



	add_email("in", "From DNS", "TO Admin", "IMPORTANT NOTICE",
		"	To resond to the recent incidents, we need to stay vigilant. Check every comment and do NOT let anything suspicous slides. It's a serious offense, espically in a time like this, to post anything that may discourage our citizens from devoting themselves to the rebuilding process. As a honorbale internet security offical, you need to take up the responbility. If you notice someone keep spreading harmful message, make sure to REPORT them as soon as possible.");


}

// main function

if (localStorage.isAdmin == "true") {

	constructAdmin();

	

	if (localStorage.flagEnd != "0") {//flag结局判断

		let finalreview = JSON.parse(localStorage.flagEnd);

		switch (finalreview) {

			case 1:
				console.log("ALl feedbacks are Chcked!");
				localStorage.setItem("ending", "overlycareful");
				add_email("in", "From DNS", "TO Admin", "Review on your recent work",
					"	You have been very through and... caucious about your work. It's good. Maybe this is exactly the quality we need in a time like this. Thank you for your effort! For more information please click <a href = ./end.html>Here</a> .");




				break;

			case 2:


				localStorage.setItem("ending", "goodjob");
				add_email("in", "From DNS", "TO Admin", "Review on your recent work",
					"	Congratulation! Your rencent works have passed the second round of inspection perfecertly! We are glad to inform you you are rewarded with a promotion. For more information please click <a href = ./end.html>Here</a> .");

				console.log("ALl correct feedbacks are Chcked!");

				break;

			case 3:

				localStorage.setItem("ending", "neglect");
				add_email("in", "From DNS", "TO Admin", "Review on your recent work",
					"	Apperantly you are not taking your job seriously enough. You need to know how important your work is, in a time like this. This is your first warning. For more information please click <a href = ./end.html>Here</a> .");


				console.log("At lease once No feedbacks are Chcked!");
				break;

			case 4:

				localStorage.setItem("ending", "ok");
				add_email("in", "From DNS", "TO Admin", "Review on your recent work",
					"	You missed some dangerous words...but overall the quality of your work is acceptable. Do be more careful in the future. For more information please click <a href = ./end.html>Here</a> .");


				console.log("At least three times correct feedbacks are Chcked!");
				break;

			case 5:

				localStorage.setItem("ending", "notcool");
				add_email("in", "From DNS", "TO Admin", "Review on your recent work",
					"	You missed a lot of dangerous words. This attitudfe is not acceptable. If you don't improve the quality of your work, you will receive an offical warning soon. For more information please click <a href = ./end.html>Here</a> .");

				console.log("Random feedbacks are Chcked, be more careful!!");
				break;


		}


	}


	if (localStorage.NotFlagingTheEnd == "True") {
		localStorage.setItem("ending", "arrested");

		add_email("in", "FROM DNS", "TO Admin", "You Disappointed HIM",
			"You have failed your only duty to protect this great nation. You have been relieved from your position and you need to report to the Department of Naitonal Security. We hope you have a great explanation of your action or...there will be consequence. <a href = ./end.html>Direction</a> ");



		add_email("in", "FROM UNTITLED", "TO Admin", "Greetings...",
			"I guess you already know who I am. I know how hard it can be to make the choice you made....So I'd like to offer you a chance. Help yourself, help us, and most importantly...help our people. You can't email back to me directly but I'm sure you can figure out the right ID to send the message. And the keyowrd, is HOPE.");

	}




}


else if (localStorage.Username) {

	constructTable();


	if (localStorage.greatcitizen == "true") {//达成良民结局
		localStorage.setItem("ending", "greatcitizen");
		console.log("Great citizen!");
		add_email("in", "FROM The Voice of People", "TO Dear Citizen", "We The People Thank YOU for Your Devotion!",
			"	 Your feedbacks are well-recieved and your inspiring messages are exactlly what we need right now. We the People thank you for your devotion! Please check the link <a href = ./end.html>here</a> to recieve a speical message from this Great Nation!");


	}


	if (localStorage.dangercitizen == "true") {//达成暴民结局
		localStorage.setItem("ending", "badcitizen");

		console.log("Danger! Danger!");
		add_email("in", "FROM The Voice of People", "TO Dear Citizen", "Important Notice about Your Account",
			"	 Due to your recent feedbacks not been following the guidline provided by the Great Nation, which have acculuated the workload of our internet officals. We are sorry to inform you that your account has been permanatly suspended. We kindly ask you to take this time and think about your action. What you can do for this nation. For more information please check the link <a href = ./end.html>here</a>.");

	}


}

if (localStorage.reported == "true") {
	localStorage.setItem("ending", "report");

	add_email("in", "FROM DNS", "TO You", "Thank you for your report",
		"Thank you for your report! Because of your caution we are able to catch a dangerous crimminal...You can follow up on more informatin <a href = ./end.html>here</a>. ");



}
