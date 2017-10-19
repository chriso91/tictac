$(document).ready(function(){

var player = 1;

$('#game').hide();
$('#winner').hide();
$('#menubutton').hide();

$('#oneplayer').on('click', function(){
	$('#menu').hide();
	$('#game').show();
	$('#menubutton').show();
	game = 'oneplayer';
	$('#player').text('You vs Computer');
});

$('#twoplayer').on('click', function(){
	$('#menu').hide();
	$('#game').show();
	$('#menubutton').show();
	game = 'twoplayer';
	$('#player').text('Player 1');
});

var cells = ['', '', '', '', '', '', '', '', ''];



$('#slot1').on('click', function(){
	if(cells[0] === ''){
		$('#text1').text(placeMark(player));
		cells[0] = placeMark(player);
		if (game === 'twoplayer'){
			player = playerToggle(player);
		}
		else if (game === 'oneplayer'){
			setComputer(cells, 0);
		}
		testWinner(cells, game);
	}
});

$('#slot2').on('click', function(){
	if(cells[1] === ''){
		$('#text2').text(placeMark(player));
		cells[1] = placeMark(player);	
		if (game === 'twoplayer'){
			player = playerToggle(player);
		}
		else if (game === 'oneplayer'){
			setComputer(cells, 1);
		}
		testWinner(cells, game);
	}
});

$('#slot3').on('click', function(){
	if(cells[2] === ''){
		$('#text3').text(placeMark(player));
		cells[2] = placeMark(player);		
		if (game === 'twoplayer'){
			player = playerToggle(player);
		}
		else if (game === 'oneplayer'){
			setComputer(cells, 2);
		}
		testWinner(cells, game);
	}
});

$('#slot4').on('click', function(){
	if(cells[3] === ''){
		$('#text4').text(placeMark(player));
		cells[3] = placeMark(player);
		if (game === 'twoplayer'){
			player = playerToggle(player);
		}
		else if (game === 'oneplayer'){
			setComputer(cells, 3);
		}
		testWinner(cells, game);
	}
});

$('#slot5').on('click', function(){
	if(cells[4] === ''){
		$('#text5').text(placeMark(player));
		cells[4] = placeMark(player);
		if (game === 'twoplayer'){
			player = playerToggle(player);
		}
		else if (game === 'oneplayer'){
			setComputer(cells, 4);
		}
		testWinner(cells, game);
	}
});

$('#slot6').on('click', function(){
	if(cells[5] === ''){
		$('#text6').text(placeMark(player));
		cells[5] = placeMark(player);
		if (game === 'twoplayer'){
			player = playerToggle(player);
		}
		else if (game === 'oneplayer'){
			setComputer(cells, 5);
		}
		testWinner(cells, game);
	}
});

$('#slot7').on('click', function(){
	if(cells[6] === ''){
		$('#text7').text(placeMark(player));
		cells[6] = placeMark(player);
		if (game === 'twoplayer'){
			player = playerToggle(player);
		}
		else if (game === 'oneplayer'){
			setComputer(cells, 6);
		}
		testWinner(cells, game);
	}
});

$('#slot8').on('click', function(){
	if(cells[7] === ''){
		$('#text8').text(placeMark(player));
		cells[7] = placeMark(player);
		if (game === 'twoplayer'){
			player = playerToggle(player);
		}
		else if (game === 'oneplayer'){
			setComputer(cells, 7);
		}
		testWinner(cells, game);
	}
});

$('#slot9').on('click', function(){
	if(cells[8] === ''){
		$('#text9').text(placeMark(player));
		cells[8] = placeMark(player);
		if (game === 'twoplayer'){
			player = playerToggle(player);
		}
		else if (game === 'oneplayer'){
			setComputer(cells, 8);
		}
		testWinner(cells, game);
	}
});

$('#menubutton').on('click', function(){
	$('#menu').show();
	$('#game').hide();
	$('#menubutton').hide();
	$('#winner').hide();
	clearGame();
	cells = ['', '', '', '', '', '', '', '', ''];
	player = 1;
});



});


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function playerToggle(player){
	if (player === 1){
		$('#player').text('Player 2');
		return 2;
	}
	else if (player === 2){
		$('#player').text('Player 1');
		return 1;
	}
};

function placeMark(player){
	if (player === 1){
		return 'X';
	}
	else if (player === 2){
		return 'O';
	}
};


function clearGame(){
	$('#text1').text('');
	$('#text2').text('');
	$('#text3').text('');
	$('#text4').text('');
	$('#text5').text('');
	$('#text6').text('');
	$('#text7').text('');
	$('#text8').text('');
	$('#text9').text('');
};

function testWinner(cells, game){
	if(cells[0] === 'O' && cells[1] === 'O' && cells[2] === 'O' ||
		cells[3] === 'O' && cells[4] === 'O' && cells[5] === 'O' ||
		cells[6] === 'O' && cells[7] === 'O' && cells[8] === 'O' ||
		cells[0] === 'O' && cells[3] === 'O' && cells[6] === 'O' ||
		cells[1] === 'O' && cells[4] === 'O' && cells[7] === 'O' ||
		cells[2] === 'O' && cells[5] === 'O' && cells[8] === 'O' ||
		cells[0] === 'O' && cells[4] === 'O' && cells[8] === 'O' ||
		cells[6] === 'O' && cells[4] === 'O' && cells[2] === 'O' )
		{
			if (game === 'twoplayer'){
				$('#winnertext').text('Player 2 Wins!');
				$('#winner').show();
			}
			else if (game === 'oneplayer'){
				$('#winnertext').text('Computer Wins!');
				$('#winner').show();
			}
		}
	else if(cells[0] === 'X' && cells[1] === 'X' && cells[2] === 'X' ||
		cells[3] === 'X' && cells[4] === 'X' && cells[5] === 'X' ||
		cells[6] === 'X' && cells[7] === 'X' && cells[8] === 'X' ||
		cells[0] === 'X' && cells[3] === 'X' && cells[6] === 'X' ||
		cells[1] === 'X' && cells[4] === 'X' && cells[7] === 'X' ||
		cells[2] === 'X' && cells[5] === 'X' && cells[8] === 'X' ||
		cells[0] === 'X' && cells[4] === 'X' && cells[8] === 'X' ||
		cells[6] === 'X' && cells[4] === 'X' && cells[2] === 'X' )
		{
			if (game === 'twoplayer'){
				$('#winnertext').text('Player 1 Wins!');
				$('#winner').show();
			}
			else if (game === 'oneplayer'){
				$('#winnertext').text('You Win!');
				$('#winner').show();
			}
		}
	else if (cells[0] !== '' && cells[1] !== '' && cells[2] !== '' && cells[3] !== '' &&
			 cells[4] !== '' && cells[5] !== '' && cells[6] !== '' && cells[7] !== '' && 
			 cells[8] !== '')
		{
			$('#winnertext').text('Nobody Wins!');
			$('#winner').show();
		}
};



function setComputer(cells, click){
	console.log(cells);
	if (click === 0){
		if (cells[4] === 'X' && cells[8] === ''){
			cells[8] = 'O';
			$('#text9').text('O');
		}
		else if (cells[8] === 'X' && cells[4] === ''){
			cells[4] = 'O';
			$('#text5').text('O');
		}
		else if (cells[3] === 'X' && cells[6] === ''){
			cells[6] = 'O';
			$('#text7').text('O');
		}
		else if (cells[6] === 'X' && cells[3] === ''){
			cells[3] = 'O';
			$('#text4').text('O');
		}
		else if (cells[1] === 'X' && cells[2] === ''){
			cells[2] = 'O';
			$('#text3').text('O');
		}
		else if (cells[2] === 'X' && cells[1] === ''){
			cells[1] = 'O';
			$('#text2').text('O');
		}
		else{
			any(cells);
		}
	}
	else if (click === 1){
		if (cells[0] === 'X' && cells[2] === ''){
			cells[2] = 'O';
			$('#text3').text('O');
		}
		else if (cells[2] === 'X' && cells[0] === ''){
			cells[0] = 'O';
			$('#text1').text('O');
		}
		else if (cells[4] === 'X' && cells[7] === ''){
			cells[7] = 'O';
			$('#text8').text('O');
		}
		else if (cells[7] === 'X' && cells[4] === ''){
			cells[4] = 'O';
			$('#text5').text('O');
		}
		else{
			any(cells);
		}
	}
	else if (click === 2){
		if (cells[0] === 'X' && cells[1] === ''){
			cells[1] = 'O';
			$('#text2').text('O');
		}
		else if (cells[1] === 'X' && cells[0] === ''){
			cells[0] = 'O';
			$('#text1').text('O');
		}
		else if (cells[5] === 'X' && cells[8] === ''){
			cells[8] = 'O';
			$('#text9').text('O');
		}
		else if (cells[8] === 'X' && cells[5] === ''){
			cells[5] = 'O';
			$('#text6').text('O');
		}
		else if (cells[4] === 'X' && cells[6] === ''){
			cells[6] = 'O';
			$('#text7').text('O');
		}
		else if (cells[6] === 'X' && cells[4] === ''){
			cells[4] = 'O';
			$('#text5').text('O');
		}
		else{
			any(cells);
		}
	}
	else if (click === 3){
		if (cells[0] === 'X' && cells[6] === ''){
			cells[6] = 'O';
			$('#text7').text('O');
		}
		else if (cells[6] === 'X' && cells[0] === ''){
			cells[0] = 'O';
			$('#text1').text('O');
		}
		else if (cells[4] === 'X' && cells[5] === ''){
			cells[5] = 'O';
			$('#text6').text('O');
		}
		else if (cells[5] === 'X' && cells[4] === ''){
			cells[4] = 'O';
			$('#text5').text('O');
		}
		else{
			any(cells);
		}
	}
	else if (click === 4){
		any(cells);
	}
	else if (click === 5){
		if (cells[2] === 'X' && cells[8] === ''){
			cells[8] = 'O';
			$('#text9').text('O');
		}
		else if (cells[8] === 'X' && cells[2] === ''){
			cells[2] = 'O';
			$('#text3').text('O');
		}
		else if (cells[4] === 'X' && cells[3] === ''){
			cells[3] = 'O';
			$('#text4').text('O');
		}
		else if (cells[3] === 'X' && cells[4] === ''){
			cells[4] = 'O';
			$('#text5').text('O');
		}
		else{
			any(cells);
		}
	}
	else if (click === 6){
		if (cells[0] === 'X' && cells[3] === ''){
			cells[3] = 'O';
			$('#text4').text('O');
		}
		else if (cells[3] === 'X' && cells[0] === ''){
			cells[0] = 'O';
			$('#text1').text('O');
		}
		else if (cells[7] === 'X' && cells[8] === ''){
			cells[8] = 'O';
			$('#text9').text('O');
		}
		else if (cells[8] === 'X' && cells[7] === ''){
			cells[7] = 'O';
			$('#text8').text('O');
		}
		else if (cells[2] === 'X' && cells[4] === ''){
			cells[4] = 'O';
			$('#text5').text('O');
		}
		else if (cells[4] === 'X' && cells[2] === ''){
			cells[2] = 'O';
			$('#text3').text('O');
		}
		else{
			any(cells);
		}
	}
	else if (click === 7){
		if (cells[6] === 'X' && cells[8] === ''){
			cells[8] = 'O';
			$('#text9').text('O');
		}
		else if (cells[8] === 'X' && cells[6] === ''){
			cells[6] = 'O';
			$('#text7').text('O');
		}
		else if (cells[1] === 'X' && cells[4] === ''){
			cells[4] = 'O';
			$('#text5').text('O');
		}
		else if (cells[4] === 'X' && cells[1] === ''){
			cells[1] = 'O';
			$('#text2').text('O');
		}
		else{
			any(cells);
		}
	}
	else if (click === 8){
		if (cells[6] === 'X' && cells[7] === ''){
			cells[7] = 'O';
			$('#text8').text('O');
		}
		else if (cells[7] === 'X' && cells[6] === ''){
			cells[6] = 'O';
			$('#text7').text('O');
		}
		else if (cells[2] === 'X' && cells[5] === ''){
			cells[5] = 'O';
			$('#text6').text('O');
		}
		else if (cells[5] === 'X' && cells[2] === ''){
			cells[2] = 'O';
			$('#text3').text('O');
		}
		else if (cells[0] === 'X' && cells[4] === ''){
			cells[4] = 'O';
			$('#text5').text('O');
		}
		else if (cells[4] === 'X' && cells[0] === ''){
			cells[0] = 'O';
			$('#text1').text('O');
		}
		else{
			any(cells);
		}
	}
};

function any(cells){
	if(cells[4] === ''){
		cells[4] = 'O';
		$('#text5').text('O');
	}
	else if(cells[0] ===''){
		cells[0] = 'O';
		$('#text1').text('O');
	}
	else if(cells[2] === ''){
		cells[2] = 'O';
		$('#text3').text('O');
	}
	else if(cells[8] === ''){
		cells[8] = 'O';
		$('#text9').text('O');
	}
	else if(cells[6] === ''){
		cells[6] = 'O';
		$('#text7').text('O');
	}
	else if(cells[7] === ''){
		cells[7] = 'O';
		$('#text8').text('O');
	}
	else if(cells[3] === ''){
		cells[3] = 'O';
		$('#text4').text('O');
	}
	else if(cells[5] === ''){
		cells[5] = 'O';
		$('#text6').text('O');
	}
	else if(cells[1] === ''){
		cells[1] = 'O';
		$('#text2').text('O');		
	}
}



