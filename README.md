# Visualização Interativa de Funções Trigonométricas (p5.js)

Este projeto apresenta uma **animação interativa do círculo trigonométrico** e de seus **gráficos associados**: seno, cosseno, tangente, cotangente, secante e cosecante. Ele foi desenvolvido em **p5.js** e serve como ferramenta didática para compreender a relação entre **geometria e funções trigonométricas**.

![Exemplo do Sketch](https://via.placeholder.com/600x300?text=C%C3%ADrculo+Trigonom%C3%A9trico+e+Gr%C3%A1ficos)

## Sobre o Projeto

O sketch mostra um **ponto percorrendo o círculo trigonométrico**, ilustrando as relações seno/cosseno como catetos de um triângulo retângulo. A hipotenusa é o raio do círculo, o cateto horizontal representa o **cosseno** e o vertical o **seno**. Além disso, são construídas as linhas auxiliares para **tangente, cotangente, secante e cosecante**, mostrando visualmente como essas funções derivam da geometria do círculo.

### Construções Geométricas

- **Tangente (tan)**: linha vertical a partir do ponto no círculo, representando a razão seno/cosseno.
- **Secante (sec)**: linha que parte do centro do círculo até a tangente vertical, ilustrando 1/cos.
- **Cotangente (cot)**: linha horizontal tangente ao topo do círculo, representando cos/sin.
- **Cosecante (csc)**: linha do centro até a tangente horizontal, mostrando 1/sin.

Estas construções ajudam a visualizar **singularidades** (valores que tendem ao infinito) e relações entre funções trigonométricas.

![Construções Geométricas](https://via.placeholder.com/600x300?text=Tangente,+Secante,+Cot,+Csc)

### Gráficos Suaves

À direita do círculo, o sketch mantém um **painel de gráficos contínuos** para cada função. Para funções que podem divergir (tan, cot, sec, csc), aplicamos uma **compressão usando `atan`**, que preserva a tendência da função sem saltos verticais descontrolados. Isso permite comparar visualmente todas as funções no mesmo painel.

- **Seno e cosseno**: mapeados diretamente a partir das coordenadas do ponto no círculo.  
- **Tangente e cotangente**: razão entre seno/cosseno ou coseno/seno, suavizada.  
- **Secante e cosecante**: inversos de coseno e seno, suavizados para o gráfico.  

```javascript
const squash = v => (2 / PI) * atan(v);
waveTang.push(raio * squash(tanVal));
waveCot.push(raio * squash(cotVal));
waveSec.push(raio * squash(secVal));
waveCsc.push(raio * squash(cscVal));
