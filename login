<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <link href="./Resource/CSS/Style.css" type="text/css" rel="stylesheet">
    <script src="./Resource/Script/ConfirmID.js" defer></script>
    <script src="./Resource/Script/mailSystem.js" defer></script>
    <title>Welcom</title>
</head>
<body>
    <header class="center">

        <h2 class="bold"> Welcome to the Voice!</h2>
        <h3 class="center imply">Vocie of Our People</h3>


        <div id="nav" class="right">

        </div>



    </header>

    <br />


    <form id="signin">

        <h3>Please sign in to continue.</h3>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <br />
        <label for="idnumber">ID:</label>
        <input type="password" id="idnumber" name="idnumber" required />
        <h4><a href="./IDsearching.html"> Search ID by Name</a></h4>


        <input type="button" id="submitID" value="submit" onclick="ConfirmID()" />




    </form>

    <div id="welcomeMessage" class="center">


    </div>


    <div id="enterFeedback" class="center">


        <h4><a href="./index.html"> Enter Feedback System</a></h4>


    </div>


    <div id="enterFlag" class="center">

        <h4><a href="./ToFlag.html"> Enter Flag System</a></h4>


    </div>

    <div id="reportWindow" class="modal">

        <!-- Modal content -->
        <div class="modal-content">
            <span class="close">&times;</span>
            <p class="center">Please think carefully about who you'd like to report. There will be consequence.</p>
            <br />
            <h3 class="center">Enter Their ID.</h3>
            <center>
                <input type="text" id="ReportedID" name="IDnumber" />


                <br />
                <br />
                <input type="button" id="reportIDSubmit" value="submit" />
            </center>

        </div>

    </div>

    <footer id="report" class="center"><br /><br /></footer>


</body>
</html>
