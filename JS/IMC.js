document.getElementById('imcForm').addEventListener('submit', function(event) {
    event.preventDefault();
    calculateIMC();
});

function calculateIMC() {
    // Récupérer les valeurs des champs de formulaire
    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value) / 100; // Convertir en mètres

    let isValid = true;

    // Regex pour valider les champs
    const weightRegex = /^\d{1,3}$/; // le champs doit contenir 3 chiffres au plus
    const heightRegex = /^\d{1,3}$/; // le champs doit contnir 3 chiffres au plus 

    // Effacer les messages d'erreur précédents
    document.getElementById('weightError').textContent = '';
    document.getElementById('heightError').textContent = '';

    // Valider le poids
    if (!weightRegex.test(weightInput.value) || weight <= 0) {
        document.getElementById('weightError').textContent = 'Veuillez compléter le champ avec un poids valide.';
        isValid = false;
    }

    // Valider la taille
    if (!heightRegex.test(heightInput.value) || height <= 0) {
        document.getElementById('heightError').textContent = 'Veuillez compléter le champ avec une taille valide.';
        isValid = false;
    }

    // Calculer l'IMC si les champs sont valides
    if (isValid) {
        const imc = (weight / (height * height)).toFixed(2);
        document.getElementById('imcResult').value = imc;
    } else {
        document.getElementById('imcResult').value = 'Remplir les champs';
    }
}