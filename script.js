function atualizarContagem() {
  const destino = new Date("2025-08-31T00:00:00");
  const agora = new Date();
  const diff = destino - agora;

  if (diff <= 0) {
    document.getElementById("countdown").innerHTML = "Chegou o grande dia!";
    return;
  }

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diff / (1000 * 60)) % 60);
  const segundos = Math.floor((diff / 1000) % 60);

  document.getElementById("countdown").innerHTML =
    `${dias} dias, ${horas}h ${minutos}min ${segundos}s`;
}

setInterval(atualizarContagem, 1000);