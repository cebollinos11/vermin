_cratew = 20*5;
_crateh = 16*5;

_dogw=16*5;
_dogh=12*5;

function GetCrate(x,y,css,w,h){
	Crafty.e('2D, DOM, Color,'+css).attr({x:x,y:y,z:2,h:h,w:w});
	console.log("printing "+css,w,h);
}

