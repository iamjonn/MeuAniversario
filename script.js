
function mostrar(id) {
  const elemento = document.getElementById(id);
  if (elemento.classList.contains("escondido")) {
    elemento.classList.remove("escondido");
  } else {
    elemento.classList.add("escondido");
  }
}
function validarFormulario() {
  const nome = document.getElementById('nome').value.trim();
  const botao = document.getElementById('confirmar');
  if (nome !== '') {
    botao.classList.add('enabled');
    botao.disabled = false;
  } else {
    botao.classList.remove('enabled');
    botao.disabled = true;
  }
}

function adicionarAcompanhante() {
  const container = document.getElementById('acompanhantes-container');
  const input = document.createElement('input');
  input.type = 'text';
  input.className = 'acompanhante';
  input.placeholder = 'Nome do acompanhante';
  container.appendChild(input);
}

function enviarParaWhatsApp() {
  const nome = document.getElementById('nome').value.trim();
  let mensagem = `Oiii, sou ${nome}! Arthurzinho, pode confirmar minha presença?`;

  const acompanhantes = document.querySelectorAll('.acompanhante');
  let listaAcompanhantes = [];
  acompanhantes.forEach(input => {
    if (input.value.trim() !== '') {
      listaAcompanhantes.push(input.value.trim());
    }
  });

  if (listaAcompanhantes.length > 0) {
    mensagem += ` E quem vai comigo são: ${listaAcompanhantes.join(', ')}.`;
  }

  mensagem += ` Amei o convite!`;

  const numero = '558393093632';
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
  window.location.href = url;
}