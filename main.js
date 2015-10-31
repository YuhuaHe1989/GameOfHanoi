'use strict';

$(document).ready(init);

function init(){
	$('#start').on('click',startGame);
	$('.subTower').on('click',moveDisk);
	$('.subTower').on('click',towerSelect);
	$('.subTower').on('click',win);
}

function startGame(){
	var number = $('#numberOfDisk').val();
	createDisk(parseInt(number));
}

function createDisk(number){
	var size = 80;
	for(var i = 1;i < number+1; i++){
		var $div = $('<div>').addClass('gamePiece');
		$div.addClass('disk' + i).css('width',size + 'px').css('height','30px').text(i);
		size += 20;
		$('#cont1').append($div);	
	}
}
var weight1 = "";
var weight2 = "";

function towerSelect(event){
	var first = $(this).children().find(">:first-child");
	weight1 = parseInt(first.text());

	var isSelected = first.hasClass('selected');

	if(isSelected){
		first.removeClass('selected');
	}else {
		$('.selected').removeClass('selected');
		first.addClass('selected');
	}
}


function moveDisk(){

	var second = $(this).children().children();
	weight2 = parseInt($(this).children().find(">:first-child").text());
	if (weight2 === NaN){
		$(this).children().append($('.selected'));
	} else if( weight1 > weight2){
		return;
	} else if (weight2 >= weight1){
		$(this).children().prepend($('.selected'))
	} else {$(this).children().prepend($('.selected'))}

}

function win(){
	var win = '';
	var third = $('#cont3').children('.gamePiece');

	third.each(function(){
		win = third.text();
	});

	var number = parseInt($('#numberOfDisk').val());
	var check = '';
	for(var i = 1;i < number + 1;i++){
		check += i;
	}

	if (check === win){
		$('#win').text('WIN');
		console.log('WIN');
	}
}












