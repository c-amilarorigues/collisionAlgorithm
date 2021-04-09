var retFixo, retMovendo;
var objetoDeJogo1, objetoDeJogo2, objetoDeJogo3, objetoDeJogo4;

	function setup() {
	  createCanvas(1200,800);
	  retFixo = createSprite(600, 400, 50, 80);
	  retFixo.shapeColor = "green";
	 
	  retMovendo = createSprite(800, 400,80,30);
	  retMovendo.shapeColor = "green";
	
	  objetoDeJogo1 = createSprite(100, 100, 50, 50);
	  objetoDeJogo1.shapeColor = "green";
	  objetoDeJogo2 = createSprite(200, 100, 50, 50);
	  objetoDeJogo2.shapeColor = "green";
	  objetoDeJogo3 = createSprite(300, 100, 50, 50);
	  objetoDeJogo3.shapeColor = "green";
	  objetoDeJogo4 = createSprite(400, 100, 50, 50);
	  objetoDeJogo4.shapeColor = "green";
	}
	
	function draw() {
	  background(0,0,0);  
	  retMovendo.x = World.mouseX;
	  retMovendo.y = World.mouseY;
	
	  if(isTouching(retMovendo, objetoDeJogo1)){
	    retMovendo.shapeColor = "blue";
	    objetoDeJogo1.shapeColor = "blue";
	  }
	  else {
	    retMovendo.shapeColor = "green";
	    objetoDeJogo1.shapeColor = "green";
	  }
	  drawSprites();
	}
	
	function isTouching(objeto1,objeto2){
	  if (objeto1.x - objeto2.x < objeto2.width/2 + objeto1.width/2
	    && objeto2.x - objeto1.x < objeto2.width/2 + objeto1.width/2
	    && objeto1.y - objeto2.y < objeto2.height/2 + objeto1.height/2
	    && objeto2.y - objeto2.y < objeto2.height/2 + objeto1.height/2) {
	    
	    return true;
	  }
	  else {
	    return false;
	  } 
	}
