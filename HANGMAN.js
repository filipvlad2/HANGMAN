const letters = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];
let word = new String();
let censoredWord = new Array();
let addDiv;
let lives = 6;

function introduceWord() {
	let addedWord = document.getElementById('word').value.toUpperCase();
	addDiv = document.getElementById('letters');
	word = addedWord;

		//Generates the censored word

	for (let i = 0; i < addedWord.length; i++) {
		censoredWord[i] = "_";
		addDiv.innerHTML += `<p class= "text" id="censored">_ </p>`;
	}
	addDiv.innerHTML += `<br>`;

	generateLetters();
}

	
	//Generates the letters by keyboard layout

function generateLetters() {
	addDiv = document.getElementById('censoredWords');
	for (let i = 0; i < letters.length; i++) {
		if (letters[i] === 'A' || letters[i] === 'Z') {
			addDiv.innerHTML += `<br>`;
		}
		addDiv.innerHTML += `<button type="button" class="btn btn-dark" id="` + letters[i] + `" onclick= "buttonTry(id)">`+letters[i]+`</button> `;
	}
}

function buttonTry(clicked_id) {
	addDiv = document.getElementById('letters');
	let letter = new String();
	letter = clicked_id;
	let idx = word.indexOf(letter);
	let idxArray = new Array();
	let verifyLetter = 0;

	//If pressed, disable the button

	let button = document.getElementById(letter);
	button.disabled = true;

	//Create an array of indexes

	while (idx != - 1) {
		verifyLetter = 1;
		idxArray.push(idx);
		idx = word.indexOf(letter, (idx + 1));
	}

	//Update the censored word

	for (let i = 0; i < idxArray.length; i++) {
		censoredWord[idxArray[i]] = letter;
	}

	//Display the censored word

	for (let i = 0; i < censoredWord.length; i++) {
		if (censoredWord[i] === "_") {
			addDiv.innerHTML += `<p class= "text" id="censored">_ </p>`;
		} else if (censoredWord[i] === letter){
			addDiv.innerHTML += `<p class= "text" id="censored">` + letter + ` </p>`;
		} else {
			addDiv.innerHTML += `<p class= "text" id="censored">` + censoredWord[i] + ` </p>`;
		}
	}
	addDiv.innerHTML += `<br>`;

	//If the word is complete, display the restart button

	if (censoredWord.indexOf("_") === -1) {
		gameRestart();
	}

	//If the chosen letter is wrong decrease the lives counter

	if (verifyLetter === 0) {
		--lives;
		livesCounter();
 }
}

function livesCounter() {
	addDiv = document.getElementById('lives');
	if (lives === 1) {
		addDiv.innerHTML += " Be careful, only one life left " + "|";
	} else if (lives === 0) {
		addDiv.innerHTML += "YOU LOST!";
		gameRestart();
	} else {
		addDiv.innerHTML += lives + " | ";
	}

	drawCanvas();
}


function gameRestart() {
	addDiv = document.getElementById('letters');
	addDiv.innerHTML += `<button type="button" class="btn btn-dark" value="Refresh" onclick= "location.reload(true)">Restart the game</button>`
}