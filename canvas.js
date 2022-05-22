let canvas = document.querySelector('canvas');

//"c" stands for context
let c = canvas.getContext('2d');

let cHead = canvas.getContext('2d');
let cBody = canvas.getContext('2d');
let cHands = canvas.getContext('2d');
let cLegs = canvas.getContext('2d');

	c.beginPath();
	c.moveTo(100, 100);
	c.lineTo(100, 100);
	c.lineTo(100, 20);
	c.lineTo(170, 20);
	c.lineTo(170, 30);
	c.stroke();

function drawCanvas() {

	//head
	if (lives === 5) {
		cHead.beginPath();
		cHead.arc(170, 38, 8, 0, 2 * Math.PI);
		cHead.stroke();
	}

	//main body
	if (lives === 4) {
		cBody.beginPath();
		cBody.moveTo(170, 45);
		cBody.lineTo(170, 80);
		cBody.stroke();
	}

	//hands
	if (lives === 3) {
		cHands.beginPath();
		cHands.moveTo(170, 50);
		cHands.lineTo(180, 60);
		cHands.stroke();
	}
	if (lives === 2) {
		cHands.beginPath();
		cHands.moveTo(170, 50);
		cHands.lineTo(160, 60);
		cHands.stroke();
	}

	//legs
	if (lives === 1) {
		cLegs.beginPath();
		cLegs.moveTo(170, 80);
		cLegs.lineTo(180, 90);
		cLegs.stroke();
	}
	if (lives === 0) {
		cLegs.beginPath();
		cLegs.moveTo(170, 80);
		cLegs.lineTo(160, 90);
		cLegs.stroke();
	}
}