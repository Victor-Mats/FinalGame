//	itzkreator
//"Footsteps, Stones, A.wav" by InspectorJ (www.jshaw.co.uk) of Freesound.org

// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 1006;
canvas.height = 804;
document.body.appendChild(canvas);

//Sound
var audio1 = new Audio("theme.wav");
var audio2 = new Audio("steps.wav");
var audio3 = new Audio("snort.wav");
var audio4 = new Audio("good.wav");

// Background image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () 
{
	bgReady = true;
};
bgImage.src = "images/background.png";

// Hero image
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () 
{
	heroReady = true;
};
heroImage.src = "images/hero.png";

// Horse Gaol image
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () 
{
	monsterReady = true;
};
monsterImage.src = "images/monster.png";

var enemy1Ready = false;
var enemy1Image = new Image();
enemy1Image.onload = function () 
{
	enemy1Ready = true;
};
enemy1Image.src = "images/Horse1.png";

// BadH2 image
var enemy2Ready = false;
var enemy2Image = new Image();
enemy2Image.onload = function () 
{
	enemy2Ready = true;
};
enemy2Image.src = "images/Horse2.png";

// BadH3 image
var enemy3Ready = false;
var enemy3Image = new Image();
enemy3Image.onload = function () 
{
	enemy3Ready = true;
};
enemy3Image.src = "images/Horse3.png";

// BadH4 image
var enemy4Ready = false;
var enemy4Image = new Image();
enemy4Image.onload = function () 
{
	enemy4Ready = true;
};
enemy4Image.src = "images/Horse4.png";

// BadH5 image
var enemy5Ready = false;
var enemy5Image = new Image();
enemy5Image.onload = function () 
{
	enemy5Ready = true;
};
enemy5Image.src = "images/Horse5.png";

// BadH6 image
var enemy6Ready = false;
var enemy6Image = new Image();
enemy6Image.onload = function () 
{
	enemy6Ready = true;
};
enemy6Image.src = "images/Horse6.png";

// BadH7 image
var enemy7Ready = false;
var enemy7Image = new Image();
enemy7Image.onload = function () 
{
	enemy7Ready = true;
};
enemy7Image.src = "images/Horse7.png";

// BadH8 image
var enemy8Ready = false;
var enemy8Image = new Image();
enemy8Image.onload = function () 
{
	enemy8Ready = true;
};
enemy8Image.src = "images/Horse8.png";



// Border image
var borderReady = false;
var borderImage = new Image();
borderImage.onload = function () 
{
  borderReady = true;
};
borderImage.src = "images/border.png";

// Game objects
var hero = 
{
	speed: 256, // movement in pixels per second
};
var monster = {};
var enemy1 = {};
var enemy2 = {};
var enemy3 = {};
var enemy4 = {};
var enemy5 = {};
var enemy6 = {};
var enemy7 = {};
var enemy8 = {};
var border = {};
var monstersCaught = 0;
var highs = 0;

// Handle keyboard controls
var keysDown = {};

addEventListener("keydown", function (e) 
{
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) 
{
	delete keysDown[e.keyCode];
}, false);

// Reset the game when the player catches a monster
var reset = function () 
{
	hero.x = canvas.width / 2;
	hero.y = canvas.height / 2;

	// Throw the monster somewhere on the screen randomly
	monster.x = 18 + (Math.random() * (canvas.width - 184));
	monster.y = 18 + (Math.random() * (canvas.height - 184));

	// Throw the enemy somewhere on the screen randomly
	enemy1.x = 18 + (Math.random() * (canvas.width - 184));
	enemy1.y = 18 + (Math.random() * (canvas.height - 184));

	// Throw the enemy somewhere on the screen randomly
	enemy2.x = 18 + (Math.random() * (canvas.width - 184));
	enemy2.y = 18 + (Math.random() * (canvas.height - 184));

	// Throw the enemy somewhere on the screen randomly
	enemy3.x = 18 + (Math.random() * (canvas.width - 184));
	enemy3.y = 18 + (Math.random() * (canvas.height - 184));

	// Throw the enemy somewhere on the screen randomly
	enemy4.x = 18 + (Math.random() * (canvas.width - 184));
	enemy4.y = 18 + (Math.random() * (canvas.height - 184));

	// Throw the enemy somewhere on the screen randomly
	enemy5.x = 18 + (Math.random() * (canvas.width - 184));
	enemy5.y = 18 + (Math.random() * (canvas.height - 184));

	// Throw the enemy somewhere on the screen randomly
	enemy6.x = 18 + (Math.random() * (canvas.width - 184));
	enemy6.y = 18 + (Math.random() * (canvas.height - 184));

	// Throw the enemy somewhere on the screen randomly
	enemy7.x = 18 + (Math.random() * (canvas.width - 184));
	enemy7.y = 18 + (Math.random() * (canvas.height - 184));

	// Throw the enemy somewhere on the screen randomly
	enemy8.x = 18 + (Math.random() * (canvas.width - 184));
	enemy8.y = 18 + (Math.random() * (canvas.height - 184));	
	
};

// Update game objects
var update = function (modifier) {
	if (38 in keysDown && hero.y > 50) { // up
		audio2.play(); 
		hero.y -= hero.speed * modifier;
	}
	if (40 in keysDown && hero.y < canvas.height - 85) { // down
		audio2.play(); 
		hero.y += hero.speed * modifier;
	}
	if (37 in keysDown && hero.x > (50)) { // left
		audio2.play(); 
		hero.x -= hero.speed * modifier;
	}
	if (39 in keysDown && hero.x < canvas.width - 82) { // right
		audio2.play(); 
		hero.x += hero.speed * modifier;
	}

	//wasd support update

	if (87 in keysDown && hero.y > 50) { // up
		audio2.play(); 
		hero.y -= hero.speed * modifier;
	}
	if (83 in keysDown && hero.y < canvas.height - 85) { // down
		audio2.play(); 
		hero.y += hero.speed * modifier;
	}
	if (65 in keysDown && hero.x > (50)) { // left
		audio2.play(); 
		hero.x -= hero.speed * modifier;
	}
	if (68 in keysDown && hero.x < canvas.width - 82) { // right
		audio2.play(); 
		hero.x += hero.speed * modifier;
	}

	// Are they touching?
	if (
		hero.x <= (monster.x + 32)
		&& monster.x <= (hero.x + 32)
		&& hero.y <= (monster.y + 32)
		&& monster.y <= (hero.y + 32)
	) {
		audio4.play(); 
		++monstersCaught;
		reset();
	}

	audio1.play(); 


	//border collision
	if (
		hero.x <= (enemy1.x + 32)
		&& enemy1.x <= (hero.x + 32)
		&& hero.y <= (enemy1.y + 32)
		&& enemy1.y <= (hero.y + 32)
	) {
		audio3.play(); 
		--monstersCaught;
		reset();
	}

	if (
		hero.x <= (enemy2.x + 32)
		&& enemy2.x <= (hero.x + 32)
		&& hero.y <= (enemy2.y + 32)
		&& enemy2.y <= (hero.y + 32)
	) {
		audio3.play(); 
		--monstersCaught;
		reset();
	}

	if (
		hero.x <= (enemy3.x + 32)
		&& enemy3.x <= (hero.x + 32)
		&& hero.y <= (enemy3.y + 32)
		&& enemy3.y <= (hero.y + 32)
	) {
		audio3.play(); 
		--monstersCaught;
		reset();
	}

	if (
		hero.x <= (enemy4.x + 32)
		&& enemy4.x <= (hero.x + 32)
		&& hero.y <= (enemy4.y + 32)
		&& enemy4.y <= (hero.y + 32)
	) {
		audio3.play(); 
		--monstersCaught;
		reset();
	}

	if (
		hero.x <= (enemy5.x + 32)
		&& enemy5.x <= (hero.x + 32)
		&& hero.y <= (enemy5.y + 32)
		&& enemy5.y <= (hero.y + 32)
	) {
		audio3.play(); 
		--monstersCaught;
		reset();
	}

	if (
		hero.x <= (enemy6.x + 32)
		&& enemy6.x <= (hero.x + 32)
		&& hero.y <= (enemy6.y + 32)
		&& enemy6.y <= (hero.y + 32)
	) {
		audio3.play(); 
		--monstersCaught;
		reset();
	}

	if (
		hero.x <= (enemy7.x + 32)
		&& enemy7.x <= (hero.x + 32)
		&& hero.y <= (enemy7.y + 32)
		&& enemy7.y <= (hero.y + 32)
	) {
		audio3.play(); 
		--monstersCaught;
		reset();
	}

	if (
		hero.x <= (enemy8.x + 32)
		&& enemy8.x <= (hero.x + 32)
		&& hero.y <= (enemy8.y + 32)
		&& enemy8.y <= (hero.y + 32)
	) {
		audio3.play(); 
		--monstersCaught;
		reset();
	}
	 
};

// Draw everything
var render = function () {
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0);
	}

	if (heroReady) {
		ctx.drawImage(heroImage, hero.x, hero.y);
	}

	if (monsterReady) {
		ctx.drawImage(monsterImage, monster.x, monster.y);
	}

	if (enemy1Ready) {
		ctx.drawImage(enemy1Image, enemy1.x, enemy1.y);
	}
	if (enemy2Ready) {
		ctx.drawImage(enemy2Image, enemy2.x, enemy2.y);
	}
	if (enemy3Ready) {
		ctx.drawImage(enemy3Image, enemy3.x, enemy3.y);
	}
	if (enemy4Ready) {
		ctx.drawImage(enemy4Image, enemy4.x, enemy4.y);
	}
	if (enemy5Ready) {
		ctx.drawImage(enemy5Image, enemy5.x, enemy5.y);
	}
	if (enemy6Ready) {
		ctx.drawImage(enemy6Image, enemy6.x, enemy6.y);
	}
	if (enemy7Ready) {
		ctx.drawImage(enemy7Image, enemy7.x, enemy7.y);
	}
	if (enemy8Ready) {
		ctx.drawImage(enemy8Image, enemy8.x, enemy8.y);
	}

	if (borderReady) 
	{   
		let x = 0;
		let y = 0;
		for (x = 0; x < 1000; x = x + 50) 
		{
		  ctx.drawImage(borderImage, x, 0);
		  ctx.drawImage(borderImage, x, 757);
		}
		for (y = 0; y < 1000; y = y + 50) 
		{
		  ctx.drawImage(borderImage, 0, y);
		  ctx.drawImage(borderImage, 960, y);
		}
	}

	// Score
	ctx.fillStyle = "rgb(250, 250, 250)";
	ctx.font = "24px Helvetica";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	ctx.fillText("Grey Horses Caught: " + monstersCaught, 60, 60);
	ctx.fillText("Time Left: " + count, 60, 100);
	if (finished == true) 
	{
	ctx.fillText("Game over!", 450, 80);
	ctx.fillText("Score: " + monstersCaught, 450, 140);
	}

};

var count = 40;
var finished = false;

var counter = function () 
{
  count = count - 1; 

  if (count <= 0) 
  	{
		clearInterval(counter);
    	finished = true;
    	count = 0;
	
    	monsterReady = false;
    	heroReady = false;
  	}
}

setInterval(counter, 1000);  

// The main game loop
var main = function () 
{
	var now = Date.now();
	var delta = now - then;

	update(delta / 1000);
	render();

	then = now;

	// Request to do this again ASAP
	requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Let's play this game!
var then = Date.now();
reset();
main();
