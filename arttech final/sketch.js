let player;
let bgImage;
let playerImage;
let mapWidth = 2000;
let mapHeight = 769;
let wall;
let floor;
Movable = true;


function preload(){
	bgImage = loadImage('bg.png');
}


function setup() {
	new Canvas(1000, 769);
	world.gravity.y = 0;
	playerImage = loadImage('player.png');
	player = createSprite(100, 100);
	player.addImage(playerImage);


	////////////////walls//////////////////////////////////////////////////////////////////////////////////// 
	wall = createSprite(0, 0, 700, 200,'static');
	wall.position.x = 0; 
    wall.position.y = 0;
	///////////////////Floor/////////////////////////////////////////////////////////////////////////
	floor = createSprite(0, 769, 2000, 200,'static');




	//////////////////////////////////////gravity//////////////////////////////////////////////////////////////////////////////////
	if (player.position.x<= 700){
		world.gravity.y = 0;
	}
}

function draw() {
	clear();


	player.speed = 2;
	// image(bgImage, 0, 0, mapWidth, mapHeight);

//////////////////////////////////////////player move//////////////////////////////////////////////////////////////////
	
	
	if (kb.pressing('up')) {
		player.direction = -90;
	} else if (kb.pressing('down')) {
		player.direction = 90;
	} else if (kb.pressing('left')) {
		player.direction = 180;
	} else if (kb.pressing('right')) {
		player.direction = 0;
	} else {
	  player.speed = 0;

	}
	if(player.position.x<=0 ){
		if (kb.pressing('left')) {
			player.direction = 0;}
	}else{
		if (kb.pressing('left')) {
			player.direction = 180;
		}
	
	if(player.position.x>= 700){
	if (kb.pressing('right')){
		player.direction = 180;
	}else{
		if (kb.pressing('right')){
			player.direction = 0;
	}
	}
	}
}
////////////////////////////////////////////////////bg///////////////////////////////////////////////////////////
	
image(bgImage, -camera.position.x, -camera.position.y, mapWidth, mapHeight);

///////////////////////////////////////Camera///////////////////////////////////////////////////////////////////////

		camera.position.x = player.position.x*2 - width/10;
		camera.position.y = player.position.y - height/10;


		if(camera.position.x<=0){
			camera.position.x= 0
		}else{
			camera.position.x = player.position.x*2 - width/10;
		}

		if(camera.y<=0){
			camera.y= 0
		}else{
			camera.position.y = player.position.y - height/10;
		}

		if(camera.y>=700){
			camera.y = 700
		}else{
			camera.position.y = player.position.y - height/10;
		}
}
