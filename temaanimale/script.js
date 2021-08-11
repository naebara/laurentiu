document.getElementById("buton").addEventListener("click", function () {
  let caini = document.getElementById("caini").value;

  // 1
  let pisici = caini * 2;
  let gaini = pisici * 2;
  let total = caini + pisici + gaini;

  // pisici
  let pisiciHtml = document.getElementById("pisici");
  pisiciHtml.innerText = "Pisici : " + pisici;

  //gaini
  document.getElementById("gaini").innerText = "Gaini : " + gaini;

  // total
  document.getElementById("total").innerText =
    Number(caini) + Number(pisici) + Number(gaini);
});
