/* variables in js */
/* example 1 */
// var message ='hello!';
// // alert(message);
// message="Welcome to my portfolio";
// // alert(message);

/* example 2 */
// var visitorsName = prompt("what is your name?");
// alert("Hi"+" "+ visitorsName);
// console.log(visitorsName);
// var visitor = prompt("What is your name?");
// var message = '<h1>Hello ' + visitor + " Welcome to the world of magic</h1>";
// message = message + " We are so glad that you came by to visit us.";
// message += " We are so glad that you came by to visit us.";
// document.write(message);

/* example 3 */
// var passPhrase = "Open Woodcutter";
// console.log(passPhrase.length);
// console.log(passPhrase.toLowerCase());
// console.log(passPhrase.toUpperCase());

/* example 4 */
// var stringShout = prompt("What should I shout?");
// var shout = stringShout.toUpperCase();
// shout += "!!!";
// alert(shout);




/* numbers in js */
/* example 1 */

// var secPerMinute = 60;
// var minPerHour = 60;
// var hoursPerDay = 24;
// var daysPerWeek = 7;
// var weeksPerYear = 52;
// var secondsPerDay = secPerMinute * minPerHour * hoursPerDay;
// document.write("There are "+ secondsPerDay + " seconds in a day.");
// var yearsAlive = secondsPerDay * daysPerWeek * weeksPerYear * 25;
// document.write("<h3>I am alive since "+yearsAlive+ " seconds.</h3>");

/* example 2 */
// var htmlBadges = prompt("How many html badges do you have?");
// var cssBadges = prompt("How many css badges do you have?");
// var totalBadges = parseInt(htmlBadges) + parseInt(cssBadges);
// alert('Wow! You have '+totalBadges+' badges!' ); 


/* example 3 Story maker game*/
// var question = 3;
// var questionLeft = ' [ '+question +' question left]';
// var adjective = prompt("Please type an adjective" + questionLeft);
// question -= 1;
// questionLeft = ' [ '+question +' question left]'; 
// var verb = prompt('Please type a verb' + questionLeft);
// question -= 1;
// questionLeft = ' [ '+question +' question left]';
// var noun = prompt('Please type a noun' + questionLeft);
// alert("All done, ready for the message?");
// var sentence = "<h1> There once was a "+adjective;
// sentence += " programmer who wanted to use javascript to "+verb;
// sentence += " the "+noun + '.</h1>';
// document.write(sentence);

/* example 4 Math methods*/
// var temperature = 37.5;
// alert(Math.round(temperature));
// alert(Math.floor(temperature));
var recordsPerPage =  15;
                    var currentPage = 1;
                   
                    var totalRecords = 0;
                    // totalRecords = 15
                    var totalPages = Math.ceil(totalRecords/recordsPerPage);

alert(Math.ceil(totalPages));


 /* example 5 */
// var dieRoll = Math.floor(Math.random() * 6) + 1;
// alert("Yoy rolled a number "+dieRoll+" on die.");

 /* example 6 task */
//  var input1 = prompt("Please type a starting number");
//  var bottomNum = parseInt(input1);
//  var input2 = prompt("Please type a number");
//  var topNum = parseInt(input2);
//  var randomNumber = Math.floor(Math.random() * (topNum - bottomNum + 1 )) + bottomNum;  
//  var message = "<h3>" + randomNumber + " is a number between "+ bottomNum +  " and " + topNum +".</h3>"; 
// document.write(message);


/* conditional statements in js */
/* example 1 */
// var answer = prompt("What language is known after a gem?");
// if(answer.toUpperCase() ==='RUBY'){
// 	document.write("<h3>That's right</h3>");
// 	alert("You are correct!");
// }
// else{
// 	document.write("<h3>Sorry that's wrong </h3>");
// 	alert("RUBY is the right answer");
// }

/* example 2 */
// var randomNumber = Math.floor(Math.random() * 6) + 1;
// var guess = prompt("Guess a number between 1 and 6");
// if(parseInt(guess) === randomNumber){
// 	document.write("<h2>You guessed the right answer</h2>");
// }
// 	else{
// 		document.write("<h2>Sorry, The random number was "+randomNumber+".</h2>");
// 	}

/* example 3 */
// var correctGuess = false;
// var randomNumber = Math.floor(Math.random() * 6) + 1;
// var guess = prompt("Guess a number between 1 and 6");
// if(parseInt(guess) === randomNumber){
// 	correctGuess = true;
// }
// 	if( correctGuess ){
// 		document.write("<h2>You guessed the right answer</h2>");
// 	}

// 	else{
// 		document.write("<h2>Sorry, The random number was "+randomNumber+".</h2>");
// 	}


/* example 4 */
/*
The random number guessing game
Generates a number between 1 and 6
and gives a player two attempts to
guess the number
*/

// //Assume the player didn't guess correctly
// var correctGuess = false;
// var randomNumber = Math.floor(Math.random() * 6) + 1;
// var guess = prompt("Guess a number between 1 and 6");

// /*
// Test to see if player is
// 1.Correct
// 2.Guessed too high
// 3.Guessed too low
// */
// if(parseInt(guess) === randomNumber){
// 	correctGuess = true;
// }
// else if(parseInt(guess) < randomNumber){
// 	var guessMore = prompt("Try again!, I am thinking of a number greater than " +guess+ ".");
// 		if(parseInt(guessMore) === randomNumber){
// 			correctGuess = true;
// 		}
// }
// else if(parseInt(guess) > randomNumber){
// 	var guessLess = prompt("Try again!, I am thinking of a number less than " +guess+ ".");
// 		if(parseInt(guessLess) === randomNumber){
// 			correctGuess = true;
// 		}

// }
// //Test if player is right and output the response
// 	if( correctGuess ){
// 		document.write("<h2>You guessed the right answer</h2>");
// 	}

// 	else{
// 		document.write("<h2>Sorry, The random number was "+randomNumber+".</h2>");
// 	}



/* example 5 Quiz*/

// var correctAnswer = 0;

// //Ask questions
// var ans1 = prompt("Name a language after a gem.");
// if(ans1.toUpperCase() === "RUBY"){
// 	correctAnswer += 1; 
// }
// var ans2 = prompt("Name the capital of India.");
// if(ans2.toUpperCase() === "DELHI"){
// 	correctAnswer += 1;
// }
// var ans3 = prompt("Name a language after a snake.");
// if(ans3.toUpperCase() === "PYTHON"){
// 	correctAnswer += 1;
// }
// var ans4 = prompt("Is java and javascript same?");
// if(ans4.toUpperCase() === "NO"){
// 	correctAnswer += 1;
// }
// var ans5 = prompt("What language do u use to style web pages?");
// if(ans5.toUpperCase() === "CSS"){
// 	correctAnswer += 1;
// }

// //Output results
// document.write("You got "+correctAnswer+ " correct answer.");

// // output rank
// if(correctAnswer === 5){
// 	document.write("<h3><strong>You earned a gold crown!</strong></h3>");
// }

// else if(correctAnswer >= 3){
// 	document.write("<h3><strong>You earned a silver crown.</strong></h3>");
// }
// else if(correctAnswer >= 1){
// 	document.write("<h3><strong>You earned a bronze crown.</strong></h3>");
// }
// else{
// 	document.write("<h3><strong>No crown for you. You need to study.</strong></h3>");
// }


/* Introducing functions in js */
/* example 1*/
// function alertRandom(){
// var randomNumber = Math.floor(Math.random() * 6) + 1;
// alert(randomNumber);
// }

// alertRandom();

/* example 2 anonymous function*/
// var alertRandom = function(){
// 	 var randomNumber = Math.floor(Math.random() * 6) + 1;
// alert(randomNumber);
// };
// alertRandom();

/* example 3*/
// function isEmailEmpty(){
// 	var field = document.getElementById('Email');
// 	if (field.value === true){
// 		return true;
// 	} 
// 	else{
// 		return false;
// 	}
// }

// var fieldTest = isEmailEmpty();
// if(fieldTest === true){
// 	alert("Please provide your email");
// }

/* example 4*/
// function getRandom( upper ){
// 	var randomNumber = Math.floor(Math.random() * upper) + 1;
// 	return randomNumber;
// }

// console.log(getRandom(6));
// console.log(getRandom(100));
// console.log(getRandom(6));

// function getArea(length, breadth, unit){
// 	var area = length * breadth;
// 	return area + " " + unit ;
// }
// alert(getArea(2,5 , " sq ft" ));

/* example 5 random number*/
// function getRandom( lower, upper ){
// 	if(isNaN(lower) || isNaN(upper)){
// 		throw new Error("Both the arguments must be numbers");
// 	}
//  return Math.floor(Math.random() * (upper - lower +1)) + lower;
	 
// }
// console.log(getRandom(1,15));
// console.log(getRandom(1,'four'));
// console.log(getRandom(17,150));
// console.log(getRandom('nine',115));
// console.log(getRandom(100,115));





// @extends('common.master')
// @section('content') 
// 	<section class="mainWidth">
//  	 	<div class="container-fluid initiateJob-container">
	 	 	
// <!-- Job provider -->
//  {{ Form::open(array('url' => '' , 'method' => 'post')) }}
//     <br>
//      <div class="col-xs-12 col-sm-12 col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1 initiateJob-box">
//         <br><br>


// <!-- First question -->

// 	 	 	<div class="row" id="jobposterType">
// 	 	 		<div class="col-lg-4 col-lg-offset-1">
// 	 	 			<p>Are you a job seeker or a job provider?<span style="color:red"> *</span></p>
// 	 	 		</div>
// 	 	 		<div class="col-lg-6 col-lg-offset-1">
// 	 	 			<div class="col-lg-4 col-lg-offset-1">
// 	 	 				<input type="radio" name="jobPoster" value="job provider" id="jProvider">  Job Provider
// 	 	 			</div>
// 	 	 			<div class="col-lg-4 col-lg-offset-1">
// 	 	 				<input type="radio" name="jobPoster" value="job seeker" id="jSeeker">  Job Seeker 
// 	 	 			</div>
// 	 	 		</div>
// 	 	 	</div>
	 	 	





// <!-- second window according to response -->

// 	 	 	<div id="hiddenArea">
// 	 	 		<div class="row askQuery-margin" id="isSeeker">
// 	 	 			<div class="col-lg-4 col-lg-offset-1">
// 	 	 				<p>Who are you posting on behalf of? <span style="color:red;"> *</span></p>
// 	 	 			</div>
// 	 	 			<div class="col-lg-6 col-lg-offset-1">
// 	 	 				<div class="col-lg-4 col-lg-offset-1">
// 	 	 					<input type="radio" name="personPosting" value="myself" >  Myself 
// 	 	 				</div>
// 	 	 				<div class="col-lg-4 col-lg-offset-1">
// 	 	 					<input type="radio" name="personPosting" value="friend">  A friend
// 	 	 				</div>	 
// 	 	 			</div>
// 	 	 		</div>
	 	 		
// 	 	 		<div class="row askQuery-margin" id="isGeneral">
// 	 	 			<div class="col-lg-4 col-lg-offset-1">
// 	 	 				<p>What kind of employee search is this? <span style="color:red;"> *</span></p>
// 	 	 			</div>
// 	 	 			<div class="col-lg-6 col-lg-offset-1">
// 	 	 				<div class="col-lg-4 col-lg-offset-1">
// 	 	 					<input type="radio" name="employementType" value="internship" id="internSelected">  Internship 
// 	 	 				</div>
// 	 	 				<div class="col-lg-4 col-lg-offset-1">
// 	 	 					<input type="radio" name="employementType" value="job" id="jobSelected">  Job
// 	 	 				</div>	 
// 	 	 			</div>
// 	 	 		</div>
	 	 		
// 	 	 		<div class="row askQuery-margin" id="job-type">
// 	 	 			<div class="col-lg-4 col-lg-offset-1">
// 	 	 				<p id="intern">Please select Internship Type <span style="color:red;"> *</span></p>
// 	 	 				<p id="job">Please select Job Type <span style="color:red;"> *</span></p>
// 	 	 			</div>
// 	 	 			<div class="col-lg-6 col-lg-offset-1">
// 	 	 			 	<div class="col-lg-4 col-lg-offset-1">
// 							<input type="radio" name="jobType" value="full time" >  Full time 
// 	 	 				</div> 
// 	 	 				<div class="col-lg-4 col-lg-offset-1">	
// 	 	 					<input type="radio" name="jobType" value="part time">  Part time 	 	
// 	 	 				</div>
// 	 	 			</div>
// 	 	 		</div>
// 	 	 	</div>
// 	        <br><br>
// 		</div>
// 	 	</div>
// 	</section>
// <script type="text/javascript">

// $(function(){
//     $("#hiddenArea").hide();
// })


// // Question 1, check 1, option 1 selected
// $('#jProvider').click(function(e) {
//        $("#hiddenArea").show();
//        $('#isSeeker').hide();
//        $('#job-type').hide();
//     });


// // Question 1, check 2, option 2 selected
// $('#jSeeker').click(function(e) {
//     $("#hiddenArea").show();
//     $('#isSeeker').show();
// });


// // Question 2/3, check 3, option 1 selected
// $('#internSelected').click(function(e) {
// 	$('#jobposterType').attr('disabled');
//     $("#intern").show();
//     $('#job').hide();
//            $('#job-type').show();
// });


// // Question 2/3, check 4, option 2 selected
// $('#jobSelected').click(function(e) {
//     $("#intern").hide();
//     $('#job').show();
//     $('#job-type').show();
// });

// </script>

// @stop