let userScore = 0,
	computerScore = 0,
	gameOver = false;

function computerPlay() {
	let x = Math.floor((Math.random() * 3) + 1);
	if (x == 1) {
		return 'paper';
	} else if (x == 2) {
		return 'scissors';
	} else if (x == 3) {
		return 'rock';
	}
}

function playRound(playerSelection, computerSelection) {
	playerSelection = playerSelection.toLowerCase();
	
	switch (playerSelection + '|' + computerSelection) {
		case 'paper|rock':
		case 'scissors|paper':
		case 'rock|scissors':
			userScore++;
			return 'win';
		
		case 'paper|paper':
		case 'scissors|scissors':
		case 'rock|rock':
			return 'draw';
		
		case 'paper|scissors':
		case 'scissors|rock':
		case 'rock|paper':
			computerScore++;
			return 'lose';
	}
}

function descriptionDisplay(outcome, playerSelection, computerSelection) {
    switch (outcome) {
        case 'win':
			document.getElementById("description").innerHTML = "Your " + playerSelection + " beats my " + computerSelection + "..." ;
			break;
		case 'draw':
			document.getElementById("description").innerHTML = "We both chose " + playerSelection;
			break;
		case 'lose':
			document.getElementById("description").innerHTML = "My " + computerSelection + " beats your " + playerSelection + "!";
			break;
    }
}

function score() {
    document.getElementById("score").innerHTML = userScore + ':' + computerScore;
}

function check() {
    if (!(userScore < 3 && computerScore < 3)) {
		if (userScore > computerScore) {
            document.getElementById("description").innerHTML = "You've won!";
        } else {
			document.getElementById("description").innerHTML = "You've lost!";
		}
		return true;
	} else {
		return false;
	}
}

function reset() {
	gameOver = false;
    userScore = 0;
	computerScore = 0;
	score();
	document.getElementById("description").innerHTML = "Game reset";
}

function main(playerSelection) {
	if (gameOver === false) {
        const computerSelection = computerPlay();
		let outcome = playRound(playerSelection, computerSelection);
		descriptionDisplay(outcome, playerSelection, computerSelection);
		score();
		gameOver = check();
    } else {
		//Ask user if they want to play again? with link to reset
	}
}
