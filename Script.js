// Neste código mostramos o Seno, Cosseno, Tangente, Cotangente, Secante e Cosecante.

var angle;
var waveSeno = [];
var waveCos = [];
var waveTang = [];
var waveCot = [];
var waveSec = [];
var waveCsc = [];
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
  
  // Coordenadas no círculo
  var x1 = raio * cos(angle); 
  var y1 = raio * sin(angle);
  hipotenusa = x1**2 + y1**2;
  
  // Eixos
  fill(255);
  stroke(255);
  line(0, -90, 0 , 90);
  line(-90, 0, 90, 0);
  
  // Hipotenusa
  line(0,0,x1,y1);
  stroke(0,255,0); // verde -> cosseno
  line(0,0,x1,0); 
  stroke(255,0,0); // vermelho -> seno
  line(x1,0,x1,y1); 
  
  circle(x1,y1,8);
  
  // valores trigonométricos
  seno = sin(angle);
  coseno = cos(angle);
  
  var tang = seno / coseno;
  var cot  = coseno / seno;
  var sec  = 1 / coseno;
  var csc  = 1 / seno;

  // Desenho das funções
  stroke('yellow');
  line(raio,0,raio,raio*tang);   // tangente

  stroke('purple');
  line(0,0,raio*sec,0);          // secante no eixo x

  stroke('#00d7ff');
  line(0,0,0,raio*csc);          // cosecante no eixo y

  stroke('orange');
  line(x1,y1,0,raio*csc);        // ligação seno → cosecante
  
  // Guardar valores para gráficos
  waveSeno.push(y1);
  waveCos.push(x1);
  waveTang.push(raio*tang);
  waveCot.push(raio*cot);
  waveSec.push(raio*sec);
  waveCsc.push(raio*csc);
  
  // Limite no tamanho dos arrays (1000 pontos)
  if (waveSeno.length > 1000) {
    waveSeno.shift();
    waveCos.shift();
    waveTang.shift();
    waveCot.shift();
    waveSec.shift();
    waveCsc.shift();
  }
  
  // Desenhar os gráficos
  strokeWeight(2);
  
  stroke('red');
  for(let i = 0; i < waveSeno.length; i++){
    point(i + 100,waveSeno[i]);
  }
  
  stroke('green');
  for(let i = 0; i < waveCos.length; i++){
    point(i + 100,waveCos[i]);
  }
  
  stroke('yellow');
  for(let i = 0; i < waveTang.length; i++){
    point(i + 100, waveTang[i]);
  }
  
  stroke('purple');
  for(let i = 0; i < waveSec.length; i++){
    point(i + 100, waveSec[i]);
  }

  stroke('#00d7ff');
  for(let i = 0; i < waveCsc.length; i++){
    point(i + 100, waveCsc[i]);
  }
  
  stroke('white');
  strokeWeight(0.7);
  text('seno: ' + nf(seno,1,2), -90, -180);  
  text('coseno: ' + nf(coseno,1,2), -90, -162);
  text('tan: ' + nf(tang,1,2), -90, -144);
  text('cot: ' + nf(cot,1,2), -90, -126);
  text('sec: ' + nf(sec,1,2), -90, -108);
  text('csc: ' + nf(csc,1,2), -90, -90);

  angle -= 0.02;
}
