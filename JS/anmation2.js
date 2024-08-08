document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById('ecriture');
    const text = textElement.innerHTML;
    textElement.innerHTML = '';

    let i = 0;

    function ecrire() {
        if (i < text.length) {
            textElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(ecrire, 60); // l'ecriture est en millisecondes
        }
    }

    ecrire();
});

