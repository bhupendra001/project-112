function preload(){
}
function setup(){
Canvas = createCanvas(500,400);
Canvas.position(70,200);
video = createCapture(VIDEO);
video.hide();
}

function draw(){

image(video,100,80,300,250);
stroke(168,10,10);
fill(168,10,10);
circle(40,40,50);
circle(450,40,50);
circle(40,360,50);
circle(450,360,50);
stroke(168,10,10);
fill(168,10,10);
fill("green");
rect(63,27,375,25);
fill("green");
rect(63,347,375,25);
fill("green");
rect(27,63,25,273);
fill("green");
rect(448,63,25,273);
}

function take_snapshot(){

save('my_selfie.png');

}