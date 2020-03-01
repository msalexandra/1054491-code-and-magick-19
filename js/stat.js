var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
GAP = 10;
//var saturationRandom = 
/*
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = 20;*/


var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function(ctx) {

	renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
	renderCloud(ctx, CLOUD_X ,CLOUD_Y , '#fff');

	//renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
	//renderCloud(ctx, 100, 10, '#fff');
	
	ctx.font ='16px, Mono';
	ctx.fillStyle = '#000000';
	ctx.fillText('Ура вы победили!', 130, 40);

	ctx.font ='16px, Mono';
	ctx.fillStyle = '#000000';
	ctx.fillText('Список результатов:', 130, 60);

	ctx.fillStyle = 'rgba(255, 0, 0, 1)';
	ctx.fillRect(130, 95, 40, 150);
	ctx.font ='16px, Mono';
	ctx.fillStyle = '#000';
	ctx.fillText('Вы', 130, 265);

	ctx.fillStyle = 'hsl(240, 100%, 50%)';
	ctx.fillRect(220, 95, 40, 150);
	ctx.font ='16px, Mono';
	ctx.fillStyle = '#000';
	ctx.fillText('Кекс', 220, 265);

	ctx.fillStyle = 'hsl(240, 100%, 50%)';
	ctx.fillRect(310, 95, 40, 150);
	ctx.font ='16px, Mono';
	ctx.fillStyle = '#000';
	ctx.fillText('Катя', 310, 265);

	ctx.fillStyle = 'hsl(240, 100%, 50%)';
	ctx.fillRect(400, 95, 40, 150);
	ctx.font ='16px, Mono';
	ctx.fillStyle = '#000';
	ctx.fillText('Игорь', 400, 265);


};


/*var CLOUD_X = 100;
var CLOUD_Y = 50;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = 20;*/
/*
После сообщения о победе должна располагаться гистограмма времён участников. Параметры гистограммы следующие:
Высота гистограммы 150px.
Ширина колонки 40px.
Расстояние между колонками 50px.
Цвет колонки игрока Вы rgba(255, 0, 0, 1).
Цвет колонок других игроков — синий, а насыщенность задаётся случайным образом.
Обратите внимание. В rgba последний параметр — это прозрачность, а не насыщенность. Поэтому для задания цвета колонок других игроков нужно использовать hsl.*/