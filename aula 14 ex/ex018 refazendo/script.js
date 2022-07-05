function gerarTabuada() {
  let numTabuada = document.getElementById("txtnumber");
  let selectTabuada = document.getElementById("selectTab");

  if (numTabuada.value.length == 0) {
    window.alert("[ERRO] Campo vazio, digite um numero!");
  } else {
    let numeroTabuada = Number(numTabuada.value);
    let fim = 10;
    selectTabuada.innerText = "";
    for (let i = 1; i <= fim; i++) {
      var optionSelect = document.createElement("option");
      optionSelect.text = `${numeroTabuada} X ${i} = ${numeroTabuada * i}`;
      selectTabuada.appendChild(optionSelect);
    }
  }
}
