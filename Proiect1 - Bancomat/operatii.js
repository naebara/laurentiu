let sold = 1000;
console.log("asdf");
// hei buton, cand cineva da click pe tine, fa asta

let soldElement = document.getElementById("sold");
console.log(soldElement.textContent);

document.getElementById("retrag").addEventListener("click", function () {
  let suma = document.getElementById("suma").value;
  alert("Procesare.... Operatie facuta cu succes");
  sold = sold - suma;
  soldElement.textContent = sold;
});
