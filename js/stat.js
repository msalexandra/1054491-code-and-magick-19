'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGTH = 270;
var CLOUD_X = 100; // координата облака
var CLOUD_Y = 10; // координата облака
var GAP = 10; // отступ
var BAR_HEIGTH = 150; // высота столбца
var BAR_WIDTH = 40; // ширина столбца
var BAR_GAP = 50; // отступ между столбцами
var NAME_Y = 265; // отступ по y в именах
// eslint-disable-next-line no-unused-vars
var TEXT_HEIGTH = 16;
var BAR_Y = 90;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGTH);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};
var randomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)'); // тень облака
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff'); // белое облако
  ctx.font = 'TEXT_HEIGTH, Mono';
  ctx.fillStyle = '#000000';
  ctx.fillText('Ура вы победили!', 130, 40);
  ctx.font = 'TEXT_HEIGTH, Mono';
  ctx.fillStyle = '#000000';
  ctx.fillText('Список результатов:', 130, 60);
  var maxTime = getMaxElement(times);
  for (var i = 0; i < players.length; i++) {
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      var randomColor = 'hsl(240, 100%, ' + randomNumber(0, 100) + '%';
      ctx.fillStyle = randomColor;
    }
    ctx.font = '16px, Mono';
    ctx.fillText(Math.round(times[i]), CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, BAR_Y - 5);
    ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, BAR_Y + (BAR_HEIGTH - (BAR_HEIGTH * times[i]) / maxTime), BAR_WIDTH, (BAR_HEIGTH * times[i]) / maxTime);
    ctx.fillStyle = '#000';
    ctx.font = '16px, Mono';
    ctx.fillText(players[i], CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, NAME_Y);
  }

};

