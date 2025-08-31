# Círculo Trigonométrico e Gráficos de Funções Trigonométricas (p5.js)

Este projeto é uma animação interativa construída com p5.js que visualiza as funções trigonométricas clássicas: seno, cosseno, tangente, cotangente, secante e cosecante. Ele combina a representação geométrica no círculo trigonométrico com gráficos suaves das funções ao longo do tempo, permitindo compreender visualmente a relação entre os valores das funções e o círculo unitário. Funciona diretamente no navegador via [editor p5.js](https://editor.p5js.org).

No sketch, o ponto percorre o círculo no sentido anti-horário. A hipotenusa é o próprio raio do círculo, o cateto horizontal representa o cosseno e o cateto vertical representa o seno. As construções geométricas adicionais mostram a tangente, secante, cotangente e cosecante. A tangente é representada como segmento vertical que intercepta a linha tangente no círculo; a secante é uma linha do centro do círculo até o ponto da tangente; a cotangente é uma linha horizontal tangente ao topo do círculo; a cosecante é uma linha do centro até o ponto da tangente horizontal. À direita do círculo, os gráficos suaves acompanham os valores das funções em tempo real, com compressão via atan para evitar saltos verticais em funções que divergem (tan, cot, sec, csc).

Os cálculos principais são:
```javascript
const coseno = cos(angle);
const seno = sin(angle);
const x1 = raio * coseno;
const y1 = raio * seno;

const tanVal = seno / coseno;
line(raio, 0, raio, raio * tanVal);
line(0, 0, raio, raio * tanVal);

const cotVal = coseno / seno;
line(0, 0, -raio * cotVal, -raio);
line(0, -raio, -raio * cotVal, -raio);

const squash = v => (2 / PI) * atan(v);
waveTang.push(raio * squash(tanVal));
waveCot.push(raio * squash(cotVal));
waveSec.push(raio * squash(secVal));
waveCsc.push(raio * squash(cscVal));
