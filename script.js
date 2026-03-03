const botaoNao = document.getElementById("nao");
const botaoSim = document.getElementById("sim");
const mensagem = document.getElementById("mensagem");

// Faz o botão "Não" fugir quando o mouse passa por cima
botaoNao.addEventListener("mouseover", function() {
  const x = Math.floor(Math.random() * (window.innerWidth - 100));
  const y = Math.floor(Math.random() * (window.innerHeight - 50));
  botaoNao.style.position = "absolute";
  botaoNao.style.left = x + "px";
  botaoNao.style.top = y + "px";
});

// Quando clicar no "Sim", aparece a mensagem criativa
botaoSim.addEventListener("click", function() {
  mensagem.textContent = "💖 Agora é oficial: você me ama! sempre vou estar aqui para usar a minha sabedoria em Ti para te fazer feliz e dizer que apesar das circunstâncias eu te amo muito";
});

