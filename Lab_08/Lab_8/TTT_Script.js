var origBoard;
const huPlayer = 'O';
const aiPlayer = 'X';
const winCombos = [
	[0,1,2],
	[1,2,3],
	[4,5,6],
	[5,6,7],
	[8,9,10],
	[9,10,11],
	[12,13,14],
	[13,14,15],
	[0,5,10],
	[5,10,15],
	[1,6,11],
	[4,9,14],
	[2,5,8],
	[3,6,9],
	[6,9,12],
	[7,10,13],
	[0,4,8],
	[4,8,12],
	[1,5,9],
	[5,9,13],
	[2,6,10],
	[6,10,14],
	[3,7,11],
	[7,11,15]
]

const cells = document.querySelectorAll('.cell');
startGame();

function startGame()
{
	document.querySelector(".endgame").style.display = "none";
	origBoard = Array.from(Array(16).keys());
	for (var i =0; i < cells.length; i++)
	{
		cells[i].innerText = '';
		cells[i].style.removeProperty('background-color');
		cells[i].addEventListener('click', turnClick, false);
	}
}

function turnClick(square)
{
	if(typeof origBoard[square.target.id] == 'number')
	{
		turn(square.target.id, huPlayer);
		if(!checkTie())	turn(bestSpot(), aiPlayer);	
		checkTie();	
	}	
}		

function turn(squareId, player)
{
	origBoard[squareId] = player;
	document.getElementById(squareId).innerText = player;
	let gameWon = checkWin(origBoard, player);
	if(gameWon) gameOver(gameWon);
}

function checkWin(board, player)
{
	let plays = board.reduce((a,e,i)=>
	(e === player) ? a.concat(i):a,[]);
	
	let gameWon = null;
	for(let [index, win] of winCombos.entries())
	{
		if(win.every(elem => plays.indexOf(elem) > -1))
		{
			gameWon = {index: index, player: player};
			break;
		}
	}
	return gameWon;
}

function gameOver(gameWon)
{
	for (let index of winCombos[gameWon.index])
	{
		document.getElementById(index).style.backgroundColor = 
		gameWon.player == huPlayer ? "#45b269" : "#931616";
	}
	
	for(var i = 0; i < cells.length; i++)
	{
		cells[i].removeEventListener('click', turnClick, false);
	}
	declareWinner(gameWon.player == huPlayer ? "Victory!" : "Defeat!");
}

function declareWinner(who)
{
	document.querySelector(".endgame").style.display = "block";
	document.querySelector(".endgame .text").innerText = who;
}

function emptySquares()
{
	return origBoard.filter(s => typeof s == 'number');
}

function bestSpot()
{
	return minimax(origBoard, aiPlayer).index;
}

function checkTie()
{
	console.log(emptySquares());
	if (emptySquares().length == 0)
	{
		for(var i = 0; i < cells.length; i++)
		{
			cells[i].style.backgroundColor = "#7ea0e5";
			cells[i].removeEventListener('click', turnClick, false);
		}
		declareWinner("Tie!");
		return true;
	}
	return false;
}

function minimax(newBoard, player)
{
	var availSpots = emptySquares();
	
	if(checkWin(newBoard, huPlayer))
	{
		return {score: -10};
	} else if (checkWin(newBoard, aiPlayer))
	{
		return {score: 20};
	} else if (availSpots.length === 0)
	{
		return {score: 0};
	}
	
	var moves = []
	for (var i = 0; i < availSpots.length; i++)
	{
		var move = {};
		move.index = newBoard[availSpots[i]];
		newBoard[availSpots[i]] = player;
		
		if(player == aiPlayer)
		{
			var result = minimax(newBoard, huPlayer);
			move.score = result.score;
		} else
		{
			var result = minimax(newBoard, aiPlayer);
			move.score = result.score;
		}
		
		newBoard[availSpots[i]] = move.index;
		
		moves.push(move);
	}
	
	var bestMove;
	if(player === aiPlayer)
	{
		var bestScore = -10000;
		for(var i = 0; i < moves.length; i++)
		{
			if(moves[i].score > bestScore)
			{
				bestScore = moves[i].score;
				bestScore = i;
			}
		}
	} else 
	{
		var bestScore = 10000;
		for(var i = 0; i < moves.length; i++)
		{
			if(moves[i].score < bestScore)
			{
				bestScore = moves[i].score;
				bestScore = i;
			}
		}
	}

	return moves[bestMove];
}