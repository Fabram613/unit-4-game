/*
RULES OF THE GAME:
Generates a random number between 19 and 120
Each gem button is assigned a random number as well between 1 and 12
User clicks on each gem button
When clicked, each gem adds its value to the score
If the score matches the random number exactly, user wins: add a win, display message, generate new random number
If the score goes over the random number, user loses: add a loss, display message, generate new random number
Display all game stats to the user
Reset button resets all of the game stats
*/

//Document Ready
$(document).ready(function(){
// All code starts here:

	//Create a function that generates the random number to call upon later
	var randomNumber = 0;
	var purpleNumber = 0;
	var yellowNumber = 0;
	var redNumber = 0;
	var greenNumber = 0;

	function randomNumberGenerator() {
		//Generate random number and display it under Random Number on HTML doc
		randomNumber = Math.floor(Math.random() * (120 - 19 + 1) ) + 19;
		console.log("The Random Number is: " + randomNumber); //Console check

		//Add this new random number to the HTML page
		$("#randomNumberId").html(randomNumber);
	}

   	//Create a function that generates the random numbers and assign them to each gem
   	function randomGemValuesGenerator() {
   		//Green Gem
		greenNumber = Math.floor(Math.random() * 12) + 1; // returns a number between 1 and 12
		console.log("The Green Diamond's value is: " + greenNumber); //Console check
		//Red Gem
		redNumber = Math.floor(Math.random() * 12) + 1; // returns a number between 1 and 12
		console.log("The Red Diamond's value is: " + redNumber); //Console check
		//Yellow Gem
		yellowNumber = Math.floor(Math.random() * 12) + 1; // returns a number between 1 and 12
		console.log("The Yellow Diamond's value is: " + yellowNumber); //Console check
		//Purple Gem
		purpleNumber = Math.floor(Math.random() * 12) + 1; // returns a number between 1 and 12
		console.log("The Purple Diamond's value is: " + purpleNumber); //Console check
       }
	//======

	//Call the functions above to start the game the first time:

		randomNumberGenerator();
		randomGemValuesGenerator();
		
	//======

	//Create a variable for the Total Score that will be updated
	var yourScoreIs = 0;
	var wins = 0;
	var losses = 0;

	//Every time each gem is clicked, add each gem's value to the Total Score and display it
		//Green Gem
		$("#greenGem").on("click", function() {
			yourScoreIs = yourScoreIs + greenNumber;
			console.log(yourScoreIs); //Console check
			$("#yourScore").html(yourScoreIs);

			//Conditions for win or lose are checked after every click

				//When user wins, update wins, update message
				if (yourScoreIs === randomNumber) {
					wins = wins + 1;
					$("#wins").html("Wins: " + wins);
					$("#message").html("YOU WIN");
					console.log("YOU WIN");
					//Reset Your Score, Random Number and Gem Values
					randomNumberGenerator();
					randomGemValuesGenerator();
					yourScoreIs = 0;
					$("#yourScore").html(yourScoreIs);
				}

				//When user loses, update losses, update message, reset Random Number and Gem Values
				if (yourScoreIs > randomNumber) {
					losses = losses + 1;
					$("#losses").html("Losses: " + losses);
					$("#message").html("YOU LOSE");
					console.log("YOU LOSE");
					//Reset Random Number and Gem Values
					randomNumberGenerator();
					randomGemValuesGenerator();
					yourScoreIs = 0;
					$("#yourScore").html(yourScoreIs);
				}
		});

		//Red Gem
		$("#redGem").on("click", function() {
			yourScoreIs = yourScoreIs + redNumber;
			console.log(yourScoreIs); //Console check
			$("#yourScore").html(yourScoreIs);

			//Conditions for win or lose are checked after every click

				//When user wins, update wins, update message
				if (yourScoreIs === randomNumber) {
					wins = wins + 1;
					$("#wins").html("Wins: " + wins);
					$("#message").html("YOU WIN");
					console.log("YOU WIN");
					//Reset Your Score, Random Number and Gem Values
					randomNumberGenerator();
					randomGemValuesGenerator();
					yourScoreIs = 0;
					$("#yourScore").html(yourScoreIs);
				}

				//When user loses, update losses, update message, reset Random Number and Gem Values
				if (yourScoreIs > randomNumber) {
					losses = losses + 1;
					$("#losses").html("Losses: " + losses);
					$("#message").html("YOU LOSE");
					console.log("YOU LOSE");
					//Reset Random Number and Gem Values
					randomNumberGenerator();
					randomGemValuesGenerator();
					yourScoreIs = 0;
					$("#yourScore").html(yourScoreIs);
				}
		});
		
		//Yellow Gem
		$("#yellowGem").on("click", function() {
			yourScoreIs = yourScoreIs + yellowNumber;
			console.log(yourScoreIs); //Console check
			$("#yourScore").html(yourScoreIs);

			//Conditions for win or lose are checked after every click

				//When user wins, update wins, update message
				if (yourScoreIs === randomNumber) {
					wins = wins + 1;
					$("#wins").html("Wins: " + wins);
					$("#message").html("YOU WIN");
					console.log("YOU WIN");
					//Reset Your Score, Random Number and Gem Values
					randomNumberGenerator();
					randomGemValuesGenerator();
					yourScoreIs = 0;
					$("#yourScore").html(yourScoreIs);
				}

				//When user loses, update losses, update message, reset Random Number and Gem Values
				if (yourScoreIs > randomNumber) {
					losses = losses + 1;
					$("#losses").html("Losses: " + losses);
					$("#message").html("YOU LOSE");
					console.log("YOU LOSE");
					//Reset Random Number and Gem Values
					randomNumberGenerator();
					randomGemValuesGenerator();
					yourScoreIs = 0;
					$("#yourScore").html(yourScoreIs);
				}
		});

		//Purple Gem
		$("#purpleGem").on("click", function() {
			yourScoreIs = yourScoreIs + purpleNumber;
			console.log(yourScoreIs); //Console check
			$("#yourScore").html(yourScoreIs);

			//Conditions for win or lose are checked after every click


				//When user wins, update wins, update message
				if (yourScoreIs === randomNumber) {
					wins = wins + 1;
					$("#wins").html("Wins: " + wins);
					$("#message").html("YOU WIN");
					console.log("YOU WIN");
					//Reset Your Score, Random Number and Gem Values
					randomNumberGenerator();
					randomGemValuesGenerator();
					yourScoreIs = 0;
					$("#yourScore").html(yourScoreIs);
				}

				//When user loses, update losses, update message, reset Random Number and Gem Values
				if (yourScoreIs > randomNumber) {
					losses = losses + 1;
					$("#losses").html("Losses: " + losses);
					$("#message").html("YOU LOSE");
					console.log("YOU LOSE");
					//Reset Random Number and Gem Values
					randomNumberGenerator();
					randomGemValuesGenerator();
					yourScoreIs = 0;
					$("#yourScore").html(yourScoreIs);
				}
		});

	

	//Reset Game Stats
		//When the user clicks on the reset button, reset all game stats:
		$("#reset").on("click", function() {
			wins = 0;
			losses = 0;
			yourScoreIs = 0;
			$("#wins").html("Wins: " + 0);
			$("#losses").html("Losses: " + 0);
			$("#yourScore").html(yourScoreIs);
			$("#message").html();
			randomNumberGenerator();
			randomGemValuesGenerator();
		});


    //Code stops here

});