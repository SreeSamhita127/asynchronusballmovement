var database;
var form;
var player;
var game;
var playerCount;


function setup(){
    createCanvas(500,500);
    database = firebase.database(database);
    form1 = new Form();
    player = new Player();
}

function draw(){
    background("white");
    form1.display();
    drawSprites();
}

