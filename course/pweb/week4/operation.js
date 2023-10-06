function tambah() {
    var bilangan1 = document.getElementById("bil1").value;
    var bilangan2 = document.getElementById("bil2").value;
    var hasil = document.getElementById("hasil")

    hasil.innerText = parseFloat(bilangan1) + parseFloat(bilangan2);
}

function kali() {
    var bilangan1 = document.getElementById("bil1").value;
    var bilangan2 = document.getElementById("bil2").value;
    var hasil = document.getElementById("hasil")

    hasil.innerText = bilangan1 * bilangan2;

}