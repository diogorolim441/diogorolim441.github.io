function clicado(caixa) {
  var dataSistema = new Date();
  var diaSistema = dataSistema.getDate();
  var mesSistema = dataSistema.getMonth() + 1; // Os meses são indexados de 0 a 11
  var dataFormatada = (mesSistema < 10 ? '0' : '') + mesSistema + (diaSistema < 10 ? '0' : '') + diaSistema;
  var idCaixa = caixa.id;
  
  if (idCaixa <= dataFormatada) {
      var posicao = caixa.getBoundingClientRect();
      caixa.style.transform = `translate(${posicao.left - 1600 + window.scrollX}px, ${posicao.top + window.scrollY}px) rotate(1080deg)`;

      setTimeout(function () {
          caixa.style.display = 'none';
      }, 1000);
      localStorage.setItem(idCaixa + '_transform', caixa.style.transform);

  } else {
      alert("Você não pode abrir esta caixa antes da data correta!");
  }
}

function carregarEstadoCaixas() {
  var caixas = document.querySelectorAll('.gift');
  caixas.forEach(function(caixa) {
    var transformSalvo = localStorage.getItem(caixa.id + '_transform');
    if (transformSalvo) {
      caixa.style.transform = transformSalvo;
    }
  });
}

// Adicionando um event listener para cada botão
function abrirModal(modal){
  document.getElementById(modal).showModal();
};

// Adicionando um event listener para cada botão
function fecharModal(modal) {
  document.getElementById(modal).close();
};

carregarEstadoCaixas();