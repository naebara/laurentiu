// cum iei un element din pagina html
let v = document.getElementById("varsta");

console.log(v.textContent);
v.innerHTML = " <h1> Eu am 23 de ani </h1>"; // innerText

let ni = document.getElementById("nameInput");

ni.addEventListener("change", function () {
  let n = ni.value;
});
