"use strict";
var input;
var attempt = 0;
var totQuestions = 3;
var correctAnswers = 0;
var expectedvalue1 = 'y';
var expectedvalue2 = 'yes';
var expectedvalue3 = 'no';
var expectedvalue4 = 'n';

input = getUserInput('What is your name?')
console.log('Name : '+input);
//checkName(input);

if(checkName(input) !== null){
input = getUserInput('Are you ready to play guessing game about me?')
console.log('Ready to play : '+input);
//checkreadyflag(input);

if(checkreadyflag(input) !== null){
input = getUserInput('Am i married');
console.log('Married : '+input);
//checkmarried(input);

if(checkmarried(input) !== null){
input = getUserInput('Do you think i have kid');
console.log('Kid : '+input);
//checkkid(input);
if(checkkid(input) !== null){
input = getUserInput('Can you guess my age. Hint: Enter number between 30 to 40');
console.log('Age : '+input);
checkage(input);

alert('Game Over!!!'+'\n You have given '+ correctAnswers + ' correct answers out of ' + totQuestions + ' questions' );
}
}
}
else
alert('You have exited the game. Thank You!.');
}
else
  alert('You have closed the window.');

function checkName(name){
if(name === null)return null;

if(name === ''){
alert('Please enter the name.');
input = getUserInput('What is your name?');
checkName(input);
}
else{
alert('Hello '+ name +'\n Welcome to Guessing game about me');
}
}


/* The function checks if user is interested in playing */
function checkreadyflag(readyflag) {
     if(readyflag === null)
        return null;
     
    readyflag = readyflag.toLowerCase();    
	if (readyflag === expectedvalue1 || readyflag === expectedvalue2) {
		alert('HOOOO!! Lets play the game');
	}
    else if(readyflag === expectedvalue3 || readyflag === expectedvalue4){
        return null;
    }
	else {    
		alert('Please enter YES/NO or Y/N to play a game');
        var readyflag = getUserInput('Are you ready to play guessing game about me?')
        checkreadyflag(readyflag);
    }
}


/* The function checks validates the age provided by user */
function checkage(age) {
	var correctage = '32';
    if(age === null) 
       return null;
    if (age > 32) {
		alert('Try lesser number');
        attempt = attempt + 1;
		verifyage();
	}
	else if (age < 32) {
		alert('Try higher number');
        attempt = attempt + 1;
		verifyage();
	}
	else if (age === correctage) {
		alert('Congratulations!! ' + age + ' is correct answer.');
        correctAnswers++;
	}
	else {
		alert('Ops!! ' + age + ' is incorrect answer.Please try the game again');
	}	
}

function verifyage() {
	if (attempt === 4) { return; }
	else
    {
	var age = getUserInput('Can you guess my age');
    checkage(age);
    }
}



/* The function checks validates the age provided by user */
function checkmarried(married) {

if(married === null) return null;
	married = married.toLowerCase();
	

	if (married === expectedvalue1 || married === expectedvalue2) {
		alert('Congratulations!! your is answer is correct');
        correctAnswers++;
	}
    else if(married === expectedvalue3 || married === expectedvalue4){
        alert('Ops!! that is incorrect answer');
    }
	else {
        alert('Please enter YES/NO or Y/N.');
        var married = getUserInput('Am i married');
        checkmarried(married);
	}
}

/* The function checks validates the age provided by user */
function checkkid(kid) {
    if(kid === null)
    return null;
    
    var kid = kid.toLowerCase();
	if (kid === expectedvalue3 || kid === expectedvalue4) {
		alert('Congratulations!! your is answer is correct');
        correctAnswers++;
	}
    else if(kid === expectedvalue1 || kid === expectedvalue2){
        alert('Ops!! that is incorrect answer');
    }
	else {
		alert('Please enter YES/NO or Y/N.');
        var kid = getUserInput('Do you think i have kid');
        checkkid(kid);
	}
}


function getUserInput(question) {
	var answer = window.prompt(question);
	return answer;
}