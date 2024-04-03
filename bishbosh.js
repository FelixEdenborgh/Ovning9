function runBishBosh() {
  // Hämta användarens värden
  var bishValue = document.getElementById("bishValue").value || 3;

  var boshValue = document.getElementById("boshValue").value || 4;

  var loopLimit = document.getElementById("loopLimit").value || 100;

  var resultContainer = document.getElementById("result");

  // Töm tidigare resultat
  resultContainer.innerHTML = "";

  // Loopa igenom talen och applicera Bish-Bosh logiken
  for (let i = 1; i <= loopLimit; i++) {
    let output = i;
    if (i % bishValue === 0 && i % boshValue === 0) {
      output = "Bish-Bosh";
    } else if (i % bishValue === 0) {
      output = "Bish";
    } else if (i % boshValue === 0) {
      output = "Bosh";
    }

    // Lägg till resultatet i resultContainer
    resultContainer.innerHTML += output + "<br>";
  }
}
