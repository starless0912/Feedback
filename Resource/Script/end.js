localStorage.getItem("ending");

const postend = document.getElementById("ending");


let endcongrat = document.createElement("h1");

//endcongrat.className = "bold";

postend.appendChild(endcongrat);

switch (localStorage.ending) {

	case "greatcitizen":

		endcongrat.innerHTML = "You are a great citizen!";



		break;

	case "badcitizen":

		endcongrat.innerHTML = "You are a dangerous citizen.";


		break;

	case "arrested":

		endcongrat.innerHTML = "You are taken in shortly after...good luck.";


		break;

	case "overlycareful":

		endcongrat.innerHTML = "You are a VERY careful worker.";

		break;

	case "goodjob":

		endcongrat.innerHTML = "You are promoted! Now you can flag more comments!";

		console.log("Random feedbacks are Chcked, be more careful!!");
		break;

	case "neglect":

		endcongrat.innerHTML = "You have been warned.";

		console.log("Random feedbacks are Chcked, be more careful!!");
		break;



	case "ok":

		endcongrat.innerHTML = "Be more careful in the future!";

		console.log("Random feedbacks are Chcked, be more careful!!");
		break;


	case "notcool":

		endcongrat.innerHTML = "If you don't work harder, you may lose your privalliage working for him!";

		console.log("Random feedbacks are Chcked, be more careful!!");
		break;


	case "report":

		endcongrat.innerHTML = "Thank you for your devotion. Tahlia Salter has been arrested!";

		console.log("Random feedbacks are Chcked, be more careful!!");
		break;


	

}






function clearall() { //清空post


  localStorage.clear();
	window.location.href = "./Login.html";


}