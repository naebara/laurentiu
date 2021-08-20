document.getElementById("but").addEventListener("click", function () {
  let cutie = document.getElementById("cutie").value;
  let bani = document.getElementById("bani").value;
  console.log(parseInt(bani / cutie, 10));
});
