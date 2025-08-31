# Círculo Trigonométrico e Gráficos Trigonométricos Interativos

Este projeto é uma **visualização interativa das funções trigonométricas** construída com **p5.js**, que combina **geometria, cálculo e gráficos suaves** para demonstrar como seno, cosseno, tangente, cotangente, secante e cosecante se relacionam.

![Visual do Sketch](https://via.placeholder.com/800x400?text=C%C3%ADrculo+Trigonom%C3%A9trico+e+Gr%C3%A1ficos)

## O Círculo Trigonométrico

No centro do canvas há um **círculo trigonométrico**, com raio definido pelo parâmetro `raio`. Um ponto percorre o círculo no sentido anti-horário. A hipotenusa do triângulo formado é o próprio raio, o cateto horizontal representa o **cosseno** (`x = raio * cos(angle)`) e o cateto vertical representa o **seno** (`y = raio * sin(angle)`).

Essa representação geométrica permite visualizar **o triângulo retângulo associado a cada ângulo**, facilitando a compreensão das razões trigonométricas.

## Construções de Tangente, Cotangente, Secante e Cosecante

- **Tangente (tan)**: segmento vertical projetado a partir do ponto no círculo, representando `tan = seno/cosseno`.  
- **Secante (sec)**: linha do centro até a interseção da tangente vertical, representando `sec = 1/cosseno`.  
- **Cotangente (cot)**: segmento horizontal tangente ao topo do círculo, representando `cot = cosseno/seno`.  
- **Cosecante (csc)**: linha do centro até a tangente horizontal, representando `csc = 1/seno`.  

Essas construções permitem **visualizar singularidades** quando as funções tendem ao infinito e como elas derivam diretamente do círculo.

## Painel de Gráficos Suaves

À direita do círculo, cada função é representada em um **painel contínuo**. Para funções que divergem (tan, cot, sec, csc), utilizamos uma **compressão com arctangent (`atan`)**, preservando a tendência da função e evitando saltos verticais abruptos:

```javascript
const squash = v => (2 / PI) * atan(v);
waveTang.push(raio * squash(tanVal));
waveCot.push(raio * squash(cotVal));
waveSec.push(raio * squash(secVal));
waveCsc.push(raio * squash(cscVal));
O seno e o cosseno são mapeados diretamente a partir das coordenadas do ponto no círculo.


Cálculos e Lógica do Código
coseno = cos(angle) e seno = sin(angle) para obter coordenadas.

Tangente: tanVal = seno / coseno.

Cotangente: cotVal = coseno / seno.

Secante: secVal = 1 / coseno.

Cosecante: cscVal = 1 / seno.

Compressão dos valores extremos usando atan para evitar singularidades no gráfico.

O draw() atualiza o ponto no círculo, desenha o triângulo e as linhas auxiliares, atualiza os gráficos e exibe os valores numéricos em tempo real. As funções drawSeries e trimWaves garantem curvas suaves e performance estável.

Tecnologias Utilizadas
p5.js: desenho e animação 2D.

JavaScript moderno: cálculo, manipulação de arrays e lógica de gráficos.

Canvas HTML5: superfície interativa para visualização.

Como Executar
Acesse p5.js Web Editor.

Cole o código completo do projeto.

Clique em Play para ver o círculo e os gráficos em ação.
