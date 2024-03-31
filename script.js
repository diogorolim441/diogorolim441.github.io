function clicado(caixa) {
  var dataSistema = new Date();
  var diaSistema = dataSistema.getDate();
  var mesSistema = dataSistema.getMonth() + 1; // Os meses são indexados de 0 a 11
  var dataFormatada = (mesSistema < 10 ? '0' : '') + mesSistema + (diaSistema < 10 ? '0' : '') + diaSistema;
  var idCaixa = caixa.id;
  
  if (idCaixa <= dataFormatada) {
      caixa.style.transform = "translate(-400px, 70px) rotate(1080deg)";

      setTimeout(function () {
          caixa.style.display = 'none';
      }, 1000);
  } else {
      alert("Você não pode abrir esta caixa antes da data correta!");
  }
}

// Adicionando um event listener para cada botão
function abrirModal(modal){
  var modal = document.getElementById(modal)
  modal.showModal();
};

// Adicionando um event listener para cada botão
function fecharModal(modal) {
  var modal = document.getElementById(modal)
  modal.close();
};
