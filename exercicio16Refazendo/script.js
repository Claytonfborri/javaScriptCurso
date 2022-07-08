var analiseCampoNumeros = document.getElementById("numerosEscolhidos");
var selectNum = document.getElementById("selectNumeros");
var result = document.getElementById("resultados");
var valores = [];

function numerosAceitaveis(numerosValidação) {
  if (Number(numerosValidação) >= 1 && Number(numerosValidação) <= 100) {
    return true;
  } else {
    return false;
  }
}

function verificaLista(numerosValidação, listaValidação) {
  if (listaValidação.indexOf(Number(numerosValidação)) != -1) {
    return true;
  } else {
    return false;
  }
}

function adicionarNumeros() {
  if (
    numerosAceitaveis(analiseCampoNumeros.value) &&
    !verificaLista(analiseCampoNumeros.value, valores)
  ) {
    valores.push(Number(analiseCampoNumeros.value));
    var optionSelect = document.createElement("option");
    optionSelect.text += `Valor ${analiseCampoNumeros.value} adicionado`;
    selectNum.appendChild(optionSelect);
    result.innerHTML = "";
  } else {
    window.alert("Valor invalido ou já encontrado na lista.");
  }
  analiseCampoNumeros.value = "";
  analiseCampoNumeros.focus();
}

function mostrarResultados() {
  if (valores.length == 0) {
    window.alert("Adicione valores antes de finalizar!");
  } else {
    let totalNumerosAdicionados = valores.length;
    let maiorNumero = valores[0]
    let menorNumero = valores[0]
    let somaValores = 0
    let mediaValores = 0

    for (let posicao in valores) {
      if (valores[posicao] > maiorNumero){
        maiorNumero = valores[posicao]
      }else if (valores[posicao] < menorNumero){
        menorNumero = valores[posicao]
      }
      somaValores = somaValores + valores[posicao]
      mediaValores = somaValores / totalNumerosAdicionados
        
      }
    result.innerHTML = "";
    result.innerHTML += `<p>Ao todo, temos ${totalNumerosAdicionados} números cadastrados.</p>`;
    result.innerHTML += `<p>O maior valor informado foi ${maiorNumero}</p>`;
    result.innerHTML += `<p>O menor valor informado foi ${menorNumero}</p>`;
    result.innerHTML += `<p>Somando todos os valores, temos ${somaValores}</p>`;
    result.innerHTML += `<p>A média dos valores digitados é ${mediaValores}</p>`;
  }
}
