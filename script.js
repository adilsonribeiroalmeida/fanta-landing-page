// Cria uma timeline do GSAP
// Tudo que estiver aqui dentro será animado de forma sincronizada
var tl = gsap.timeline({

  // Configuração do ScrollTrigger (animação baseada no scroll)
  scrollTrigger: {

    // Elemento que ativa a animação
    trigger: ".two",

    // Quando o topo da section .two
    // atingir 95% da altura da tela → começa a animação
    start: "0% 95%",

    // Quando 70% da section .two
    // atingir 50% da tela → termina a animação
    end: "70% 50%",

    // Faz a animação acompanhar o scroll
    // Scroll pra cima = animação volta
    // Scroll pra baixo = animação avança
    scrub: true,

    // Mostra linhas de debug na tela (opcional)
    // markers: true,
  }
})


// 🔸 A partir daqui começam as animações
// Todas usam o label 'orange', ou seja,
// acontecem AO MESMO TEMPO


// Move a lata de Fanta
tl.to("#fanta", {

  // Move a lata para baixo (fora da primeira tela)
  top: "120%",

  // Move a lata para a esquerda
  left: "0%"

}, 'orange')


// Move a laranja cortada
tl.to("#orange-cut", {

  // Desce mais que a lata
  top: "160%",

  // Move um pouco para a direita
  left: "23%"

}, 'orange')


// Anima a laranja inteira
tl.to("#orange", {

  // Diminui o tamanho (efeito de profundidade)
  width: "15%",

  // Move para baixo
  top: "160%",

  // Mantém alinhada pela direita
  right: "10%"

}, 'orange')


// Anima a primeira folha
tl.to("#leaf", {

  // Move para baixo
  top: "110%",

  // Gira a folha
  rotate: "130deg",

  // Move para a direita
  left: "70%"

}, 'orange')


// Anima a segunda folha
tl.to("#leaf2", {

  // Move para baixo
  top: "110%",

  // Gira igual à outra folha
  rotate: "130deg",

  // Move para a esquerda
  left: "0%"

}, 'orange')


// ======================================================
// 🔹 SEGUNDA TIMELINE — SECTION .three
// ======================================================


// Cria outra timeline independente
var tl2 = gsap.timeline({

  scrollTrigger: {

    // A animação começa quando a section .three entra na tela
    trigger: ".three",

    // Início da animação
    start: "0% 95%",

    // Fim da animação (mais curta que a anterior)
    end: "20% 50%",

    // Animação acompanha o scroll
    scrub: true,

    // markers: true,
  }
})


// Label 'ca' → tudo acontece junto
// =================================


// Lemon 1 entra pela esquerda
tl2.from(".lemon1", {

  // Começa girado
  rotate: "-90deg",

  // Começa fora da tela pela esquerda
  left: "-100%",

  // Começa fora da tela por baixo
  top: "110%"

}, 'ca')


// Garrafa Coca-Cola entra junto com o lemon1
tl2.from("#cocacola", {

  // Começa girada
  rotate: "-90deg",

  // Começa fora da tela por baixo
  top: "110%",

  // Começa fora da tela pela esquerda
  left: "-100%"

}, 'ca')


// Lemon 2 entra pela direita
tl2.from(".lemon2", {

  // Rotação oposta
  rotate: "90deg",

  // Começa fora da tela pela direita
  left: "100%",

  // Começa fora da tela por baixo
  top: "110%"

}, 'ca')


// Garrafa Pepsi entra junto com o lemon2
tl2.from("#pepsi", {

  // Rotação oposta
  rotate: "90deg",

  // Começa fora da tela por baixo
  top: "110%",

  // Começa fora da tela pela direita
  left: "100%"

}, 'ca')


// Reposiciona a laranja cortada
tl2.to("#orange-cut", {

  // Aumenta levemente o tamanho
  width: "18%",

  // Centraliza mais na tela
  left: "42%",

  // Move mais para baixo
  top: "204%"

}, 'ca')


// Destaque final da lata de Fanta
tl2.to("#fanta", {

  // Aumenta a lata (hero final)
  width: "35%",

  // Move mais para baixo
  top: "210%",

  // Centraliza horizontalmente
  left: "33%"

}, 'ca')
