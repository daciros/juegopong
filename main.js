var starposx=[];
var starposy = [];
var marcador =0, ganar = 0, nivel = 0;
var posx, posy, velx,vely, totalStars;
 
 
function setup(){ 
      totalStars = 300;
      createCanvas(800,500);
      posx=random(50,width/2);
      posy=random(50,height-50);
      velx= 7;
      vely =5;
    
   for(i=0; i<totalStars; i++){
        starposx.push(random(0,width));
        starposy.push(random(0,height));
    }
    console.log(starposx,starposy);
}

function draw(){
    
    
    background(20);
    
    for(j=0; j<totalStars; j++){
        fill(random(230,255));
        noStroke();
        ellipse(starposx[j],starposy[j],random(2,8));
    }


    // Cuerpo Alien
    fill('#8A2BE2');
    noStroke();
    rect(250,100,200,250,100,100,0,0);

    //Nave espacial
     fill('#9399A1');
     noStroke();
     rect(100,350,500,80,80,80,0,0);
     
     // Propulsor nave 
     fill(random(100,255), random(0,155),0);
     noStroke();
     rect(100,435,500,10,0,0,80,80);
     
     //ojo Alien
     fill('white');
     noStroke();
     ellipse(350,200,100);
     
     // iris ojo Alien
    
    var ojox, ojoy;
    ojox= map(posx,0,width,325,375);
    ojoy= map(posy,0,height,175,225);
     
     fill('red');
     noStroke();
     ellipse(ojox,ojoy,40);
     
         
     // Diente Alien
     
     fill(255);
     noStroke();
     triangle(300,300,310,280,320,300);
     triangle(400,300,390,280,380,300);
     
      // Boca Alien
     stroke(0);
     strokeWeight(4);
     line(300,300,400,300);
     
     // Ventana Nave
     
     fill(109,195,242,100);
     noStroke();
     rect(200,50,300,300,150,150,0);
    
    var luz = 150;
    while(luz < 600){
        fill(random(100,230),random(100,230),random(100,230));
        ellipse(luz,390,30);
        luz+=50;
    }
    
    fill(random(20,230),random(100,230),random(20,230));
    ellipse(posx,posy,40);
    posx= posx+velx;
    posy= posy+vely;
    
         if(posx< 0){
        velx*=-1;
    }

    fill(random(20,230),random(100,230),random(20,230));
    ellipse(posx,posy,40);
    posx= posx+velx;
    posy= posy+vely;
    
         if(posx< 0){
        velx*=-1;
    }
    
    if(posx > width){
        posx= random (50,width/2);
        posy= random (50,height-50);
        marcador +=1;
       // alert("juego finalizado");
    }
       
  
    
    if(posy > height || posy<0){
        vely*=-1;
}
    //raqueta y movimiento
    fill(255);
    rect(width-50,mouseY-40,10,60);
    
    if(posx > width-50 && posy > mouseY-40 && posy < mouseY +40){
        velx *= -1;
        ganar +=1;
    }
    //marcador
    fill('red');
    textSize(40);
    text('L:  '+marcador,50,50);
    
    //ganar 
       fill('#26D936');
    textSize(40);
    text('W:  '+ganar,350,50);     
}  

function nivel (){

}