function atualizarContagem() {
  const destino = new Date("2025-08-31T00:00:00");
  const inicio = new Date("2023-08-31T00:00:00");
  const agora = new Date();
  const diff = destino - agora;

  if (diff <= 0) {
    document.getElementById("countdown").innerHTML = "Chegou o grande dia!";
    document.getElementById("progress").style.width = "100%";
    document.getElementById("progressText").textContent = "100% completo";
    return;
  }

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diff / (1000 * 60)) % 60);
  const segundos = Math.floor((diff / 1000) % 60);

  document.getElementById("countdown").innerHTML =
    `${dias} dias, ${horas}h ${minutos}min ${segundos}s`;

  const total = destino - inicio;
  const passado = agora - inicio;
  const progresso = Math.min((passado / total) * 100, 100);

  document.getElementById("progress").style.width = `${progresso}%`;
  document.getElementById("progressText").textContent = `${progresso.toFixed(2)}% completo`;
}

setInterval(atualizarContagem, 1000);