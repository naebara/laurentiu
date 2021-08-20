// document.getElementById("calc").addEventListener("click", );

// 1. nu mai adaugam eventListener
// 2. facem totul mult mai simp

//1 Pasi
// a. Luam function afara din eventListener

function celMaiMare() {
  let one = document.getElementById("nr1").value;
  let two = document.getElementById("nr2").value;

  if (one >= two) {
    document.getElementById("max").innerHTML = "Max : " + one;
  } else {
    document.getElementById("max").innerHTML = "Max : " + two;
  }
}
