"use strict";
var correctflag;
var name = getUserInput('What is your name?')
alert('Welcome to Guessing game about me');
var attempt = 0
var readyflag = getUserInput('Are you ready to play guessing game about me?')
checkreadyflag(readyflag);
var married = getUserInput('Am i married');
checkmarried(married);
var kid = getUserInput('Do you think i have kid');
checkkid(kid);
var age = getUserInput('Can you guess my age');
checkage(age);

alert('Game Over!!!');


/* The function checks if user is interested in playing */
function checkreadyflag(readyflag) {
	readyflag = readyflag.toLowerCase();
	var expectedvalue1 = 'y';
	var expectedvalue2 = 'yes';
	if (readyflag === null) {
		alert('No User Input. Thanking for Playing')
	}
	else if (readyflag === expectedvalue1 || readyflag === expectedvalue2) {
		alert('HOOOO!! Lets play the game');
	}
	else {
		alert('Please enter yes or y to play game');
	}
}


/* The function checks validates the age provided by user */
function checkage(age) {
	var correctage = '32';

	if (age === null) {
		alert('No User Input. Thanking for Playing')
	}
	else if (age > 32) {
		alert('Try lesser number')
		verifyage();
	}
	else if (age < 32) {
		alert('Try higher number')
		verifyage();
	}
	else if (age === correctage) {
		alert('Congratulations!! ' + age + ' is correct answer.');
		correctflag = 'Y';
	}
	else {
		alert('Ops!! ' + age + ' is incorrect answer.Please try the game again');
	}	
}

function verifyage() {
	if (correctflag === 'Y' || attempt === 4) { return; }
	else
		getage();
}



/* The function checks validates the age provided by user */
function checkmarried(married) {
	married = married.toLowerCase();
	var expectedvalue3 = 'y';
	var expectedvalue4 = 'yes';

	if (married === null) {
		alert('No User Input. Thanking for Playing')
	}
	else if (married === expectedvalue3 || married === expectedvalue4) {
		alert('Congratulations!! your is answer is correct');
	}
	else {
		alert('Ops!! that is incorrect answer');
	}
}

/* The function checks validates the age provided by user */
function checkkid(kid) {
	var correctkid = 'y';
	if (kid === null) {
		alert('No User Input. Thanking for Playing')
	}
	else if (kid === correctkid) {
		alert('Congratulations!! your is answer is correct');
	}
	else {
		alert('Ops!! that is incorrect answer');
	}
}


function getUserInput(question) {
	var answer = window.prompt(question);
	return answer;
}
