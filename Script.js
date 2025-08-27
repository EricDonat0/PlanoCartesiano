// Círculo trigonométrico + gráfico suave de Seno/Cosseno/Tan/Cot/Sec/Csc

let angle;
let speed = 0.03;
let raio = 70;

let waveSeno = [];
let waveCos  = [];
let waveTang = [];
let waveCot  = [];
let waveSec  = [];
let waveCsc  = [];

const maxSamples = 1150;        // largura útil do painel de gráfico
const graphOffsetX = 260;       // início do painel à direita do círculo
const eps = 1e-4;               // tolerância p/ singularidades

function setup() {
  createCanvas(1600, 400);
  angle = PI;
  strokeCap(ROUND);
  noFill();
}

function draw() {
  background(0);
  translate(100, 200); // origem no centro do círculo

  // --- CÍRCULO E EIXOS ---
  stroke(70);
  strokeWeight(1);
  line(-90, 0, 90, 0);
  line(0, -90, 0, 90);

  stroke(255);
  circle(0, 0, raio * 2);

  // --- PONTO NO CÍRCULO ---
  const coseno = cos(angle);
  const seno   = sin(angle);
  const x1 = raio * coseno;
  const y1 = raio * seno;

  // catetos e hipotenusa visual
  stroke(0, 255, 0);  // cosseno (base)
  line(0, 0, x1, 0);
  stroke(255, 0, 0);  // seno (altura)
  line(x1, 0, x1, y1);

  stroke(255);        // hipotenusa (raio)
  line(0, 0, x1, y1);

  fill(255);
  noStroke();
  circle(x1, y1, 8);

  // --- CONSTRUÇÕES GEOMÉTRICAS TAN/SEC E COT/CSC ---
  // Tangente/SeCante -> linha tangente vertical em x = raio
  if (abs(coseno) > eps) {
    const tanVal = seno / coseno;
    stroke('yellow');       // tangente: segmento na tangente vertical
    strokeWeight(2);
    line(raio, 0, raio, raio * tanVal);

    stroke('purple');       // secante: do centro até a interseção (raio, raio*tan)
    line(0, 0, raio, raio * tanVal);
  }

  // Cosecante/Cotangente -> linha tangente horizontal no topo y = -raio
  if (abs(seno) > eps) {
    const cotVal = coseno / seno;
    stroke('#00d7ff');      // cosecante: do centro até (-raio*cot, -raio)
    strokeWeight(2);
    line(0, 0, -raio * cotVal, -raio);

    stroke('orange');       // “guia” horizontal na tangente do topo
    line(0, -raio, -raio * cotVal, -raio);
  }

  // --- VALORES NUMÉRICOS (sem soprar tela) ---
  noStroke();
  fill(220);
  textSize(12);
  textAlign(LEFT, CENTER);
  push();
  translate(-90, -180);
  text(`seno:   ${nf(seno, 1, 3)}`, 0, 0);
  text(`cos:    ${nf(coseno, 1, 3)}`, 0, 18);
  if (abs(coseno) > eps) text(`tan:    ${nf(seno / coseno, 1, 3)}`, 0, 36);
  if (abs(seno)   > eps) text(`cot:    ${nf(coseno / seno, 1, 3)}`, 0, 54);
  if (abs(coseno) > eps) text(`sec:    ${nf(1 / coseno, 1, 3)}`, 0, 72);
  if (abs(seno)   > eps) text(`csc:    ${nf(1 / seno, 1, 3)}`, 0, 90);
  pop();

  // --- PAINEL DE GRÁFICOS À DIREITA (SUAVE) ---
  // coleta valores crus
  const tanVal = (abs(coseno) > eps) ? (seno / coseno) : (seno >= 0 ? Infinity : -Infinity);
  const cotVal = (abs(seno)   > eps) ? (coseno / seno) : (coseno >= 0 ? Infinity : -Infinity);
  const secVal = (abs(coseno) > eps) ? (1 / coseno)    : (coseno >= 0 ? Infinity : -Infinity);
  const cscVal = (abs(seno)   > eps) ? (1 / seno)      : (seno >= 0 ? Infinity : -Infinity);

  // compressão suave p/ evitar saltos no painel (mantém tendência)
  const squash = v => (2 / PI) * atan(v); // mapeia R -> (-1,1)

  // seno/cosseno já estão em pixels (y1 e x1); os outros são comprimidos e escalados
  waveSeno.push(y1);
  waveCos.push(x1);
  waveTang.push(raio * squash(tanVal));
  waveCot.push(raio * squash(cotVal));
  waveSec.push(raio * squash(secVal));
  waveCsc.push(raio * squash(cscVal));

  // limita histórico (mantém FPS e previne serrilhado)
  trimWaves();

  // desenha painel
  push();
  translate(graphOffsetX, 0);

  // grade leve
  stroke(40);
  strokeWeight(1);
  line(0, 0, maxSamples, 0);            // eixo central
  for (let y = -raio; y <= raio; y += 35) {
    line(0, y, maxSamples, y);
  }

  // curvas suaves (linhas contínuas)
  strokeWeight(2);
  drawSeries(waveSeno, 'red');      // seno
  drawSeries(waveCos,  'green');    // cos
  drawSeries(waveTang, 'yellow');   // tan (comprimida)
  drawSeries(waveSec,  'purple');   // sec (comprimida)
  drawSeries(waveCsc,  '#00d7ff');  // csc (comprimida)
  drawSeries(waveCot,  'orange');   // cot (comprimida)

  // legenda
  noStroke();
  fill(200);
  textSize(12);
  text('seno',   10, -raio - 42);
  fill('green'); text('cos',   60, -raio - 42);
  fill('yellow');text('tan*', 100, -raio - 42);
  fill('purple');text('sec*', 150, -raio - 42);
  fill('#00d7ff');text('csc*',200, -raio - 42);
  fill('orange'); text('cot*',250, -raio - 42);
  fill(140);      text('* comprimidas por atan', 300, -raio - 42);

  pop();

  // avança ângulo com wrap p/ estabilidade numérica
  angle += speed;
  if (angle > TWO_PI) angle -= TWO_PI;
}

// ---- helpers ----
function drawSeries(arr, col) {
  if (arr.length < 2) return;
  stroke(col);
  noFill();
  beginShape();
  for (let i = 0; i < arr.length; i++) {
    vertex(i, arr[i]);
  }
  endShape();
}

function trimWaves() {
  const arrays = [waveSeno, waveCos, waveTang, waveCot, waveSec, waveCsc];
  for (let a of arrays) {
    while (a.length > maxSamples) a.shift();
  }
}
