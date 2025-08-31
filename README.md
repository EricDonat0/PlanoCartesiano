# Círculo Trigonométrico e Gráficos Trigonométricos Interativos

Este projeto é uma **visualização interativa das funções trigonométricas** construída com **p5.js**, combinando **geometria, cálculo e gráficos suaves** para demonstrar como seno, cosseno, tangente, cotangente, secante e cosecante se relacionam. Ele serve como ferramenta didática para explorar relações entre o círculo trigonométrico e suas funções derivadas.

![Visual do Sketch](https://via.placeholder.com/800x400?text=C%C3%ADrculo+Trigonom%C3%A9trico+e+Gr%C3%A1ficos)

## Círculo Trigonométrico

No centro do canvas há um **círculo trigonométrico**, com raio definido pelo parâmetro `raio`. Um ponto percorre o círculo no sentido anti-horário. A hipotenusa do triângulo formado é o próprio raio, o cateto horizontal representa o **cosseno** (`x = raio * cos(angle)`) e o cateto vertical representa o **seno** (`y = raio * sin(angle)`).

Esta visualização permite compreender como o triângulo retângulo associado a cada ângulo gera as **razões trigonométricas básicas**.

## Construções de Tangente, Cotangente, Secante e Cosecante

- **Tangente (tan)**: linha vertical projetada a partir do ponto no círculo, representando `tan = seno / coseno`.
- **Secante (sec)**: linha do centro do círculo até a interseção da tangente vertical, representando `sec = 1 / coseno`.
- **Cotangente (cot)**: linha horizontal tangente ao topo do círculo, representando `cot = coseno / seno`.
- **Cosecante (csc)**: linha do centro até a tangente horizontal, representando `csc = 1 / seno`.

Estas construções permitem visualizar **singularidades** quando as funções tendem ao infinito e como elas derivam diretamente do círculo.

![Construções Geométricas](https://via.placeholder.com/800x400?text=Tangente,+Secante,+Cot,+Csc)

## Painel de Gráficos Suaves

À direita do círculo, cada função é representada em um **painel contínuo**. Para funções que divergem (tan, cot, sec, csc), aplicamos **compressão usando arctangent (`atan`)**, preservando a tendência da função e evitando saltos verticais abruptos:

```javascript
const squash = v => (2 / PI) * atan(v);
waveTang.push(raio * squash(tanVal));
waveCot.push(raio * squash(cotVal));
waveSec.push(raio * squash(secVal));
waveCsc.push(raio * squash(cscVal));
