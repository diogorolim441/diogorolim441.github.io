function clicado(caixa) {
  var dataSistema = new Date();
  var diaSistema = dataSistema.getDate();
  var mesSistema = dataSistema.getMonth() + 1; // Os meses são indexados de 0 a 11
  var dataFormatada = (mesSistema < 10 ? '0' : '') + mesSistema + (diaSistema < 10 ? '0' : '') + diaSistema;
  var idCaixa = caixa.id;
  
  //if (idCaixa <= dataFormatada) {
      caixa.style.transform = "translate(-400px, 70px) rotate(1080deg)";

      setTimeout(function () {
          caixa.style.display = 'none';
      }, 1000);
  //} else {
  //    alert("Você não pode abrir esta caixa antes da data correta!");
  //}
}


const abrirModal1 = document.querySelector('#abrir-modal1')
const modal1 = document.querySelector('#modal1')
const fecharModal1 = document.querySelector('#fechar-modal1')

abrirModal1.addEventListener('click', () => {
  modal1.showModal();
})

fecharModal1.addEventListener('click', () => {
  modal1.close();
})

const abrirModal2 = document.querySelector('#abrir-modal2')
const modal2 = document.querySelector('#modal2')
const fecharModal2 = document.querySelector('#fechar-modal2')

abrirModal2.addEventListener('click', () => {
  modal2.showModal();
})

fecharModal2.addEventListener('click', () => {
  modal2.close();
})

