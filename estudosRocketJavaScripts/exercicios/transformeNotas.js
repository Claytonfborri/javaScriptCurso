// Desafio:

// Crie um algoritmo que transforme as notas do sistema
// numérico para sistema de notas em caracteres tipo A B C

// * de 90 para cima -   A
// * entre 80 - 89   -   B
// * entre 70 - 79   -   C
// * entre 60 - 69   -   D
// * menor que 60    -   F

let notasNumeros = 91;

function transfomeNotas(notas) {
  if (notas >= 90 && notas <= 100) {
    notas = "A";
  } else if (notas >= 80 && notas <= 90) {
    notas = "B";
  } else if (notas >= 70 && notas <= 80) {
    notas = "C";
  } else if (notas >= 60 && notas <= 70) {
    notas = "D";
  } else if (notas >= 0 && notas <= 60) {
    notas = "F";
  } else {
    notas = "Nota inválida";
  }
  return notas;
}

console.log(transfomeNotas(notasNumeros));
