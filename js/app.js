
	var name = getname();
	console.log(user);
	alert('Welcome to Guessing game about me');
  var readyflag = getreadyflag();
	checkreadyflag(readyflag);
	var age = getage();
	checkage(age);

	alert('Game Over!!!');


/* The function gets name of the user */
function getname() {
	user = window.prompt('What is your name?');
	return user;
};


/* The function prompts question to check national animal to user and returns the reply */
function getreadyflag() {
		readyflag = window.prompt('Are you ready to play guessing game about me?');
		return readyflag;
};

/* The function prompts user to enter age */
function getage() {
	age = window.prompt('Can you guess my age');
	return age;
};


/* The function checks validates the age provided by user */
function checkage(age){
	age = this.age;
	var correctage = '50';
	if (age === null) {
		alert('No User Input. Thanking for Playing')
	}
	else if (age === correctage) {
		alert('Congratulations!! '+ age +' is correct answer.');
	}
	else {
		alert('Ops!! '+ age +' is incorrect answer.Please try the game again');
	}
};

/* The function checks if user is interested in playing */
function checkreadyflag(readyflag){
	readyflag = this.readyflag;
	readyflag = readyflag.toLowerCase();
	var expectedvalue1 = 'y';
  var expectedvalue2 = 'yes';
	if (readyflag === null) {
		alert('No User Input. Thanking for Playing')
	}
	else if (readyflag === expectedvalue1 || readyflag === expectedvalue2)
  {
		alert('HOOOO!! Lets play the game');
	}
	else {
		alert('Please enter yes or y to play game');
	}
};