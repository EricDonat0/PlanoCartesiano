# Visualizador Interativo do Círculo Trigonométrico

Com grande satisfação, apresento este projeto de visualização para o meu portfólio. Desenvolvido com a biblioteca **p5.js**, esta animação interativa demonstra em tempo real as relações fundamentais entre as seis funções trigonométricas (Seno, Cosseno, Tangente, Cotangente, Secante e Cosecante) através de duas representações simultâneas: a construção geométrica no círculo trigonométrico e um gráfico de ondas dinâmico.

O objetivo é transformar a matemática abstrata em algo visual e intuitivo, facilitando o aprendizado e a exploração desses conceitos.

## Demonstração Visual

A animação é composta por duas áreas principais: o círculo trigonométrico à esquerda e o painel de gráficos à direita.

![Demonstração completa do visualizador](https://i.imgur.com/g0t7tLd.gif "Animação completa mostrando o círculo e os gráficos em movimento. As linhas coloridas no círculo correspondem às ondas no gráfico.")
*(Sugestão: Grave um GIF da sua animação em execução e substitua o link acima.)*

### O Círculo Trigonométrico
Aqui, as funções são desenhadas geometricamente. O ponto se move ao redor do círculo, e as linhas coloridas mudam de tamanho de acordo com o ângulo.

![Detalhe das construções no círculo trigonométrico](https://i.imgur.com/1b2c3d4.png "Close-up do círculo mostrando as linhas para Seno (vermelho), Cosseno (verde), Tangente (amarelo) e Secante (roxo).")
*(Sugestão: Tire um print estático focado na parte do círculo para esta imagem.)*

## Funcionalidades Principais

* **Visualização Geométrica:** Representação clara de Seno, Cosseno, Tangente, Secante, Cotangente e Cosecante como segmentos de reta no círculo.
* **Gráficos de Onda Dinâmicos:** Plotagem em tempo real das seis funções, mostrando seu comportamento periódico.
* **Compressão de Gráfico Inteligente:** Funções que tendem ao infinito (como a Tangente) são "comprimidas" para caberem na tela sem perder a representação de sua tendência, evitando saltos bruscos.
* **Exibição de Valores:** Os valores numéricos de cada função são atualizados e exibidos na tela.
* **Animação Contínua:** O ângulo varia suavemente, permitindo uma observação fluida das transições.

## Como Funciona: A Lógica por Trás dos Cálculos

O coração do projeto está na função `draw()`, que é executada continuamente para criar a animação. A cada quadro (frame), a lógica é atualizada.

### 1. Seno e Cosseno (Os Fundamentos)

O Seno e o Cosseno são as funções mais diretas. Em um círculo de raio `r`, a posição `(x, y)` de um ponto em um ângulo `θ` é dada por:

* $x = r \cdot \cos(\theta)$
* $y = r \cdot \sin(\theta)$

No código, isso é representado pelas linhas:
* **Verde (Cosseno):** Uma linha horizontal da origem até a coordenada `x` do ponto.
* **Vermelha (Seno):** Uma linha vertical da coordenada `x` até o ponto `(x, y)`.

```javascript
const coseno = cos(angle);
const seno = sin(angle);
const x1 = raio * coseno;
const y1 = raio * seno;

stroke('green'); // cosseno
line(0, 0, x1, 0);
stroke('red');   // seno
line(x1, 0, x1, y1);
2. Tangente e Secante
Para visualizar a Tangente e a Secante, traçamos uma linha vertical que tangencia o círculo no ponto (raio, 0). Usando a semelhança de triângulos, podemos encontrar os valores:

Tangente (Amarelo): É o comprimento do segmento sobre essa linha vertical, do eixo x até o ponto onde a hipotenusa (raio estendido) a cruza. Seu valor é raio
cdot
tan(
theta).

Secante (Roxo): É o comprimento da hipotenusa estendida, desde a origem até o ponto final do segmento da tangente. Seu valor é raio
cdot
sec(
theta).

JavaScript

// Tangente: segmento na tangente vertical
line(raio, 0, raio, raio * tanVal);
// Secante: do centro até a interseção
line(0, 0, raio, raio * tanVal);
3. Cotangente e Cosecante
A lógica é semelhante, mas usamos uma linha horizontal que tangencia o círculo no ponto (0, -raio).

Cotangente (Laranja): É o segmento horizontal do eixo y até o encontro com a hipotenusa estendida. Seu valor é −raio
cdot
cot(
theta).

Cosecante (Azul Ciano): É a hipotenusa estendida até esse ponto. Seu valor é −raio
cdot
csc(
theta).

4. A Mágica do Gráfico Suave: A Função atan
As funções tan, cot, sec e csc possuem assíntotas, ou seja, seus valores tendem ao infinito. Plotar isso diretamente em um gráfico faria a linha "saltar" para fora da tela, tornando a visualização inútil.

Para resolver isso, utilizei uma função de compressão que mapeia qualquer número real (de −
infty a +
infty) para um intervalo finito (de -1 a 1). A função arco-tangente (atan) é perfeita para isso.

A fórmula de compressão é:

f(v)= 
π
2
​
 arctan(v)

Essa função, chamada squash no código, pega o valor bruto da tangente (ou outra função), que pode ser gigantesco, e o transforma em um valor pequeno e gerenciável para ser desenhado na tela, preservando a forma da curva original.

JavaScript

// Mapeia R -> (-1, 1) para evitar saltos no painel
const squash = v => (2 / PI) * atan(v);

// Aplica a compressão antes de adicionar ao array do gráfico
waveTang.push(raio * squash(tanVal));
waveSec.push(raio * squash(secVal));
// ...e assim por diante.
Na legenda do gráfico, o * ao lado de tan*, sec*, etc., indica que esses gráficos estão usando valores comprimidos.

Tecnologias Utilizadas
p5.js: Uma biblioteca JavaScript para programação criativa, focada em tornar a codificação acessível para artistas, designers e educadores.

p5.js Web Editor: O ambiente online onde o projeto foi desenvolvido e pode ser executado.

Como Executar
Este projeto não requer instalação. Para vê-lo em ação:

Copie todo o código do arquivo .js.

Acesse o p5.js Web Editor.

Cole o código no editor e pressione o botão "Play".

A animação começará a ser executada imediatamente.
