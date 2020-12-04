





let IDbyName = document.createElement("p");

let IDnumber = "";



function Search() {

    //加密

    let name = document.getElementById('name').value;
    for (i = 0; i < name.length && IDnumber.length < 8; i++) {

            IDnumber += name.charCodeAt(i);


        }
  

    //以上是加密部分


        document.getElementById('ShowID').appendChild(IDbyName);
        IDbyName.innerHTML = `Hello, ${name}, your ID number is ${IDnumber}. Your ID number is extremly important, please hold on to it.`;

        IDnumber = "";

        //document.getElementById('ShowID').appendChild(ReturnButton);
        //ReturnButton.innerHTML = "<a href="./Login">Return</a>";

    }


