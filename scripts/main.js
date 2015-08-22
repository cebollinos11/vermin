_w = 1200;
_h = 600;

_street_level = _h*3/4;

function vermin(){

	this.init = function(){
		console.log("init crafty");


		Crafty.init(_w,_h, document.getElementById('game'));

		//background
			var list = [
    { name: 'cssCrate', x: 200, y: _street_level,w:_cratew,h:_crateh },
    { name: 'cssDog', x: 60, y: _street_level,w:_dogw,h:_dogh },

	];
		LoadScene(list);

	}
}



Crafty.c("Keyboard", {
  isDown: function (key) {
    if (typeof key === "string") {
      key = Crafty.keys[key];
    }
    return !!Crafty.keydown[key];
  }
});


function LoadScene(list){

	//place background
	Crafty.e('2D, DOM, Color').attr({x: 0, y: 0, w: _w, h:_h }).color('white');

	//place elements

	list.forEach(function(e){
		
			GetCrate(e.x,e.y,e.name,e.w,e.h);

		
	});

	//place enemies

	//place player
	player_actor(50,_street_level,1);

}
function player_actor(x,y,lvl){
	p = Crafty.e('2D, DOM, Color,Tween').attr({x: x, y: y, w: 100, h: 100}).color('red');
	p.speed = 2;
	p.requires('Keyboard').bind('EnterFrame', function () {

	 if (this.isDown('LEFT_ARROW')) move_left(this); 
	 if (this.isDown('RIGHT_ARROW')) move_right(this); 

	 


	 //move camera
	 

	 console.log(this.x);
	});

	p.bind('KeyDown', function(e) {
    if(e.key == Crafty.keys.UP_ARROW) {      climb_up(this);}     
    if(e.key == Crafty.keys.DOWN_ARROW) {      climb_down(this);}     });

		    // else if (e.key == Crafty.keys.DOWN_ARROW) {
		    //   this.x = this.x+1;
		    // } 
}


function move_left(w){
	 w.x-=w.speed;	
}

function move_right(w){
	 w.x+=w.speed;	
}

function climb_up(w){

	w.tween({y: w.y-300}, 200);

}

function climb_down(w){

	w.tween({y: w.y+300}, 200);

}

