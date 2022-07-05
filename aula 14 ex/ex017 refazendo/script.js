function contar() {
  var inicio = document.getElementById("txtInicio");
  var fim = document.getElementById("txtFim");
  var passo = document.getElementById("txtPasso");
  var resp = document.getElementById("resultado");

  if (
    inicio.value.length == 0 ||
    fim.value.length == 0 ||
    passo.value.length == 0
  ) {
    resp.innerHTML = `Verifique os dados e digite em todos os campos!`;
  } else {
    resp.innerHTML = `<p>Contando...</p>`;
    let valorInicial = Number(inicio.value);
    let valorFinal = Number(fim.value);
    let valorPasso = Number(passo.value);
    if (valorPasso <= 0) {
      window.alert("Passo digitado incorretamente, considerando PASSO: 1");
      valorPasso = 1;
    }
    if (valorInicial < valorFinal) {
      for (let c = valorInicial; c <= valorFinal; c += valorPasso) {
        resp.innerHTML += `${c} \u{1F449}`;
      }
    } else if (valorInicial > valorFinal) {
      for (let c = valorInicial; c >= valorFinal; c -= valorPasso) {
        resp.innerHTML += `${c} \u{1F449}`;
      }
    }
    resp.innerHTML += `\u{1F3C1}`;
  }
}
