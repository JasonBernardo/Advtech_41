//JavaScript Document  
var myCanvas = document.getElementById("myCanvas");
            var ctx = myCanvas.getContext("2d");
            //fillRect(starting_x, starting_y, width, height)
ctx.fillStyle='rgba(0,0,0,1)';
            ctx.fillRect(0,0,500,500);


//variables
var stageW = 500;
var stageH = 500;
setInterval(drawPartical,1000/30);
//make an array to store all the particals
var particals = [];
//generate a bunch of particals right away
for (var i=0; i<50; i++){
    particals.push(new Partical());
}
//this class sets up a partical with its own random position
function Partical(){
  this.x=Math.random()*stageW; 
    this.y=Math.random()*stageH; 
    this.vx=Math.random()*20-10;
    this.vy=Math.random()*20-10;
    this.radius = Math.random()*20+20;
    var r = Math.random()*255>>0;
    var g = Math.random()*255>>0;
    var b = Math.random()*255>>0;
    this.color = 'rgba('+r+','+g+','+b+',.5)';
}
//this method redraws the method
//then redraws all the particals after thay have moved a bit

function drawPartical(){
    ctx.fillStyle='rgba(0,0,0,1)';
    ctx.fillRect(0,0,500,500);
    for (var t = 0; t < particals.length; t++){
    ctx.beginPath();
   
    ctx.fillStyle=particals[t].color;
    ctx.arc(particals[t].x,particals[t].y,particals[t].radius, Math.PI*2,false);
    ctx.fill();
    //move the particals positions a little for next time
    particals[t].x += particals[t].vx;
    particals[t].y += particals[t].vy;
      if(particals[t].x < -50 ) particals[t].x=550;
      if(particals[t].x > 550 ) particals[t].x=-50;   
      if(particals[t].y < -50 ) particals[t].y=550;
      if(particals[t].y > 550 ) particals[t].y=-50;  
    
    }
}