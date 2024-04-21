// Neste código mostramos o Seno, Conseno, Tangente e Cotangente.

var angle;
var waveSeno = [];
var waveTang = [];
var waveCSC = [];
var waveCos = [];
var hipotenusa;
var coseno;
var seno;

function setup() {
  createCanvas(1600, 400);
  angle = PI;
}

function draw() {
  background(0);
  translate(100,200);
  
  var raio = 70; 
  
  stroke(255);
  noFill();
  circle(0,0, raio*2);
  
  //faz a linha passar encima do circulo
  var x1 = raio * cos(angle); 
  var y1 = raio * sin(angle);
  hipotenusa = x1^2 + y1^2;
  
  fill(255);
  stroke(255);
  line(0, -90, 0 , 90);
  line(-90, 0, 90, 0);
  line(0,0,x1,y1); //hipotenusa
  stroke(0,255,0); // cor verde
  line(0,0,x1,0); //coseno
  stroke(255,0,0); // cor vermelha
  line(x1,0,x1,y1); // seno
  
  circle(x1,y1,8);
  stroke('yellow');
  
  seno = sin(angle);
  coseno = cos(angle);
  
  var tang = raio * seno/coseno;
  var secante1 = tan(angle)**2 + raio;
  var cot = raio**2/tang;
  var csc = cot + sqrt(raio);//cosecante
  
  line(70,0,70,tang); //tangente
  stroke('purple');
  line(0, 0, secante1, tang); // linha secante
  stroke('#00d7ff');
  line(0,0,0,csc); //cosecante
  stroke('orange');
  line(x1,y1,0,csc);
  
 
  strokeWeight(2);
  stroke(255);
  stroke('red');
  
  //cria uma linha para o grafico 
  waveSeno.push(y1);
  
  //linha do grafico seno e coseno
  for(let i = 0; i < waveSeno.length; i++){
    point(i + 70,waveSeno[i]);
  }
  
   waveCos.push(x1);
  
  //linha do grafico seno e coseno
  stroke('green');
  
  for(let i = 0; i < waveCos.length; i++){
    point(i + 70,waveCos[i]);
  }
  
  stroke('yellow');
  //cria a linha do grafico da tangente 
  waveTang.push(tang);
  
  for(let i = 0; i < waveTang.length; i++){
    point(i + 70, waveTang[i]);
  }
  
  //cria a linha da cosecante no grafico
  stroke('#00d7ff');
  waveCSC.push(csc);
  
  for(let i = 0; i < waveCSC.length; i++){
    point(i + 70,waveCSC[i]);
  }
  
  stroke('white');
  strokeWeight(0.7);
  text('seno: ' + round(y1,2), -90, -180);  
  text('coseno: ' + round(x1, 2), -90, -162);
  text('tang: ' + round(tang,2), -90, -144);
  text('cot: ' + round(cot,2), -90, -126);

  angle -= 0.02;
}