
let player;
let bgImage;
let FloorImage;
let playerImage;
let mapWidth = 2000;
let mapHeight = 769;
let floor2;
let cameraX, cameraY;
let bed;
let bedImage;
let paper;
let paperImage;
let wall, wall2, wall3, wall4, wall5, wall6;

let StoryEnd = false;

let narrationTimer = 0;

let gifImage;
let girl1Image;
let Girl1;

let Diary;
let DiaryImage;

let Diary2;
let Diary2Image;

let playerHasPaper = false;
let playerHasPhoto = false;
let playerHasDiary = false;
let playerFind = false;

let bgMusic;

let photo;
let photoImage;

let door;
let doorImage;

let hang;
let hangImage;

Movable = true;


let Endding;
let EnddingImage;

///////////////////////////////////foorth wall////////////////////////////////////////
let clickCount = 0;
let Breakimages = []; 
let currentImage;



function preload(){

	bgImage = loadImage('bg.png');
	playerImage = loadImage('player.png');
	FloorImage = loadImage('floor.png');
	bedImage = loadImage('bed.png');
	paperImage = loadImage('paper.png');
	bgMusic = loadSound('bg_music.mp3');
	gifImage = loadImage('Girl.GIF');
	girl1Image = loadImage('Girl.png');
	DiaryImage = loadImage('Diary.png');
  photoImage = loadImage('photo.png');
  doorImage = loadImage('door.png');
  hangImage = loadImage('hang.GIF');
  Diary2Image = loadImage('paper.png');
  EnddingImage = loadImage('end2.GIF');


  Breakimages[0] = loadImage('1.png');
  Breakimages[1] = loadImage('2.png');
  Breakimages[2] = loadImage('3.png');
  Breakimages[3] = loadImage('4.png');



}

function setup() {

	new Canvas(1000, 700);
	currentImage = Breakimages[0];

	////////////////////////////////////////player///////////////////////////////////////
	player = createSprite(100, 100,);
	player.addImage(playerImage);
	player.position.x = 500;
  	player.position.y = 600;

	///////////////////////////////////////bed////////////////////////////////////////////////////////
	bed = createSprite(200, 400,'static'); 
  	bed.addImage(bedImage);

	////////////////////////////////////paper///////////////////////////////////////////////////////////
	paper = createSprite(100,50, 'static');
	paper.addImage(paperImage);

	///////////////////Floor/////////////////////////////////////////////////////////////////////////
	floor2 = createSprite(0, 769, 2000, 250,'static');
	floor2.addImage(FloorImage);

	////////////////////////wall//////////////////////////////
	wall = createSprite(0, 769, 15, 240,'static');

	////////////////////////wall//////////////////////////////
	wall2 = createSprite(0, 759, 15, 240,'static');

	////////////////////////wall3//////////////////////////////
	wall3 = createSprite(0, 759, 15, 240,'static');

	////////////////////////wall4//////////////////////////////
	wall4 = createSprite(0, 759, 15, 240,'static');

	////////////////////////wall5//////////////////////////////
	wall5 = createSprite(0, 759, 15, 240,'static');

	////////////////////////wall6//////////////////////////////
	wall6 = createSprite(0, 759, 15, 240,'static');

	//////////////////////////girl////////////////////////////
	Girl1 = createSprite(0, 0, 250 ,200,'static'); 
	Girl1.addImage(girl1Image);

	/////////////////////////////////Dairy/////////////////////
	Diary = createSprite(0, 0, -1000 ,-400,'static');
	Diary.addImage(DiaryImage);

  	////////////////////////////////////photo///////////////////////////////////////////////////////////
	photo = createSprite(100,50, 'static');
	photo.addImage(photoImage);

////////////////////////////////////door///////////////////////////////////////////////////////////
  door = createSprite(0, 759, 15, 240,'static');
  door.addImage(doorImage);

    ////////////////////////////////////door///////////////////////////////////////////////////////////
  hang = createSprite(-1000, -1000, 7, 50,'static');
  hang.addImage(hangImage);
  
  	////////////////////////////////////paper///////////////////////////////////////////////////////////
	Diary2 = createSprite(100,50, 'static');
	Diary2.addImage(paperImage);

	///////////////////Floor/////////////////////////////////////////////////////////////////////////
	Endding = createSprite(-2000, 769, 2000, 700,'static');
	Endding.addImage(EnddingImage);

}




function mousePressed() {

	playerFind = true;
	if (playerFind) {
	  currentImage = Breakimages[floor(random(Breakimages.length))];
	  Endding.visible = false;
	  image(currentImage, 0, 0, width, height);
	}

  }

function draw() {

	//clear();
	//world.gravity.y = 100;
	player.speed = 5;
	player.rotation = 0;
	// image(bgImage, 0, 0, mapWidth, mapHeight);


//////////////////////////////////////////player move//////////////////////////////////////////////////////////////////
	
	
	if (kb.pressing('up')) {
		player.speed = 5;
	} else if (kb.pressing('down')) {
		player.speed = 5;
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
	
	if(player.position.x>= camera.position.x){
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
	
let bgX = -camera.position.x+500, bgY = -camera.position.y/5+50
image(bgImage, bgX, bgY, mapWidth, mapHeight);



///////////////////////////////////////Camera///////////////////////////////////////////////////////////////////////

	let cameraX = player.position.x*2 - width / 2;
	let cameraY = player.position.y - height / 2;

	cameraX = constrain(cameraX, 0, mapWidth - width);
	cameraY = constrain(cameraY, 0, mapHeight - height);

	camera.position.x = cameraX + width / 2;
	camera.position.y = cameraY + height / 2;




	let playerMapX = player.position.x - bgX;
	let playerMapY = player.position.y - bgY;


	// fill(255);
	// textSize(16);
	// textAlign(CENTER);
	// text(`Player Position: (${playerMapX}, ${playerMapY})`, width / 2, 30);


  //////////////////////////////////////gravity//////////////////////////////////////////////////////////////////////////////////
	
  if (playerMapY > 50 && playerMapY < 400) {
    world.gravity.y = 0;

  }else if ((playerMapX > 1000 && playerMapX < 1100) ) {
 
    world.gravity.y = 0;
    bgImage = loadImage('bg1.png');
    if (kb.pressing('up')) {
        player.direction = -90;
    } else if (kb.pressing('down')) {
        player.direction = 90;
    }

} else if (playerMapX > 1400 && playerMapX < 1500 ) {

    world.gravity.y = 0; 
    bgImage = loadImage('bg2.png');

	if (kb.pressing('up')) {
        player.direction = -90;
    } else if (kb.pressing('down')) {
        player.direction = 90;
    }

} else if (playerMapX > 1800 && playerMapX < 1900){
	world.gravity.y = 0; 
    bgImage = loadImage('bg3.png');
	if (kb.pressing('up')) {
        player.direction = -90;
    } else if (kb.pressing('down')) {
        player.direction = 90;
    }

}else {

    world.gravity.y = 100; 
    bgImage = loadImage('bg.png');
}





//////////////////////////////////////draw bed////////////////////////////
bed.position.x = bgX + 900;
bed.position.y = bgY + 100;

//////////////////////////////////////draw paper////////////////////////////
paper.position.x = bgX + 1000;
paper.position.y = bgY + 100;

//////////////////////////////wall///////////////
wall.position.x = bgX + 1020;
wall.position.y = bgY + 400;
wall.visible = false;


//////////////////////////////wall2///////////////
wall2.position.x = bgX + 1120;
wall2.position.y = bgY + 400;
wall2.visible = false;

//////////////////////////wall3//////////////////////////////////////////////////
wall3.position.x = bgX + 1430;
wall3.position.y = bgY + 400;
wall3.visible = false;

//////////////////////////wall4//////////////////////////////////////////////////
wall4.position.x = bgX + 1530;
wall4.position.y = bgY + 400;
wall4.visible = false;

//////////////////////////wall5//////////////////////////////////////////////////
wall5.position.x = bgX + 1850;
wall5.position.y = bgY + 400;
wall5.visible = false;


//////////////////////////wall6//////////////////////////////////////////////////
wall6.position.x = bgX + 1950;
wall6.position.y = bgY + 400;
wall6.visible = false;

/////////////////////////////Girl1/////////////////
Girl1.position.x = bgX +1430;
Girl1.position.y = bgY + 125;

/////////////////////////////photo/////////////////
photo.position.x = bgX +1700;
photo.position.y = bgY + 125;

//////////////////////////door//////////////////////////////////////////////////
door.position.x = bgX + 573;
door.position.y = bgY + 560;

//////////////////////////diary//////////////////////////////////////////////////
Diary2.position.x = bgX + 500;
Diary2.position.y = bgY +660;






// if (playerHitPaper = true)
// {
// 	fill(255);
// 	textSize(16);
// 	textAlign(CENTER);
// 	text(`Only move left and right before finishing reading `, width / 2, 100);}


//////////////////////////////////////////Invoke1//////////////////////////////////////
if (player.overlap(paper)) {
if(playerMapY > 50 && playerMapY < 400){
    bgImage = loadImage('letter2.png');
}

bgMusic = loadSound('bg_music.mp3', function() {
  bgMusic.setVolume(0.4);
  bgMusic.loop(); 
});

player.isReading = true;
playerHasPaper = true;

}else if (playerMapY > 400)
	{	player.isReading = false;}

if (player.isReading){
	text(`Go down a bit and move LEFT and RIGHT to Read.`, width/2, 100);
}

if(playerHasPaper){

	fill(255,0,0);
	textSize(16);
	textAlign(CENTER);
	text(`I have the letter `, width/2 -300, 50);fill(255,0,0);

}

//////////////////////////////////////Invoke2///////////////////////////////////////

if (playerMapX > 1400 && playerMapX < 1500 && playerMapY < 400 && playerMapY > 150){

	image(gifImage, bgX +1340, bgY+60 , 180, 120);

	if (playerMapY < 150){

	image(gifImage, -100, -100, 150, 100);

	}else if (player.overlap(Girl1)) {

	if(playerMapY > 50 && playerMapY < 400){

		Diary.position.x = bgX +1430;
		Diary.position.y = bgY + 325;
		player.overlap(Diary);
		playerHasDiary = true;

	}
}
}else {

  Diary.position.x = -1000;
  Diary.position.y = -100;

}


player.overlap(Girl1)

if (playerHasDiary){

	fill(255,0,0);
	textSize(16);
	textAlign(CENTER);
	text(`I have the Diary `, width/2 -300, 70);fill(255,0,0);

}


///////////////////////////////Invoke3///////////////////////////////////////////////////////
if (player.overlap(photo)) {

      bgImage = loadImage('People.jpeg');
     
  playerHasPhoto = true;}

  // bgMusic = loadSound('bg_music.mp3', function() {
  //   bgMusic.setVolume(0.4);
  //   bgMusic.loop(); 
  // });


  if (playerHasPhoto){

    fill(255,0,0);
    textSize(16);
    textAlign(CENTER);
    text(`I have the photo `, width/2 -300, 90);fill(255,0,0);

  }

  ///////////////////////////event////////////////////////////
if (playerHasDiary && playerHasPhoto && playerHasPhoto){

  door.position.x = -1000;
  door.position.y = -1000;
  hang.position.x = bgX + 343;
  hang.position.y = bgY + 440;

  if (player.overlap(Diary2)){

	StoryEnd = true;
	
	}
	
	
	if (StoryEnd){

		/////////////////////////////////////draw bed////////////////////////////
bed.position.x = -1000;
bed.position.y = bgY + 100;

//////////////////////////////////////draw paper////////////////////////////
paper.position.x = -10000;
paper.position.y = bgY + 100;


/////////////////////////////Girl1/////////////////
Girl1.position.x = -1000;
Girl1.position.y = bgY + 125;

/////////////////////////////photo/////////////////
photo.position.x = -1000;
photo.position.y = bgY + 125;

//////////////////////////wall6//////////////////////////////////////////////////
door.position.x = -1000;
door.position.y = bgY + 560;

//////////////////////////wall6//////////////////////////////////////////////////
Diary2.position.x = -1000;
Diary2.position.y = bgY +660;

//////////////////////////////hang//////////////////////////////

hang.position.x = -1000;
hang.position.y = bgY + 440;


//////////////////////////////hang//////////////////////////////

floor.position.x = -2000;
floor.position.y = -2000;


player.speed = 0;


player.position.x = -10;
player.position.y = 10;

//////////////////////////Endding//////////////////////////////////////////////////
Endding.position.x = bgX + 950;
Endding.position.y = bgY + 350;
Endding.visible = true;



	}


	
}



/////////////////////Invoke 5/////////////////////////////

if (player.collide(door)) {

  narration = "A note: 'Before I open this up, could you find the things I need? ";
  narrationTimer = 60;

}

if (narrationTimer > 0) {

    
    fill(255,0,0);
    textSize(20);
    textAlign(CENTER)
    text(narration,player.position.x +300, player.position.y - 50);
    narrationTimer--;


	

}


}



