var CLOUD_WIDTH = 420;
var CLOUD_HEIGTH = 270;
var CLOUD_X = 100; //координата облака 
var CLOUD_Y = 10; //координата облака
var GAP = 10; //отступ
var BAR_HEIGTH = 150; // высота столбца
var BAR_WIDTH = 40; // ширина столбца
var BAR_GAP = 50; //отступ между столбцами
var NAME_Y = 265; //отступ по y в именах
var TEXT_HEIGTH = 16;
var BAR_Y = 90;
//var saturationRandom = 
/*
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
*/


var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGTH);
};

window.renderStatistics = function(ctx, players) {

	renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)'); //тень облака
	renderCloud(ctx, CLOUD_X ,CLOUD_Y , '#fff');//белое облако

	//renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
	//renderCloud(ctx, 100, 10, '#fff');
	
	ctx.font ='TEXT_HEIGTH, Mono';
	ctx.fillStyle = '#000000';
	ctx.fillText('Ура вы победили!', 130, 40);

	ctx.font ='TEXT_HEIGTH, Mono';
	ctx.fillStyle = '#000000';
	ctx.fillText('Список результатов:', 130, 60);


	var players = ['Вы', 'Кекс', 'Катя', 'Игорь'];

	for (var i = 0; i < players.length; i++) {
		
		/*if (i = 0) {
			ctx.fillStyle = 'rgba(255, 0, 0, 1)';
		}
		else {
			ctx.fillStyle = 'hsl(240, 100%, 50%)';
		}*/
		ctx.fillStyle = 'rgba(255, 0, 0, 1)';
		ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, BAR_Y, BAR_WIDTH, BAR_HEIGTH);
		ctx.fillStyle = '#000';
		ctx.font ='16px, Mono';
		ctx.fillText(players[i], CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, NAME_Y);
	}

};

//ctx.fillStyle = 'rgba(255, 0, 0, 1)'; это к первому прямоугольнику
//ctx.fillStyle = 'hsl(240, 100%, 50%)'; это к второгому прямоугольнику



