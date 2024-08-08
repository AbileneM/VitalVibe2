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

    // Effacer les messages d'erreur précédents
    const imcMessage = document.getElementById('imcMessage');
    imcMessage.style.display = 'none';

    // Valider le poids
    if (isNaN(weight) || weight <= 0) {
        if (weight <= 0) {
            showMessage('Le poids ne peut pas être négatif ou égal à zéro.', 'error');
        } else {
            showMessage('Veuillez entrer un poids valide.', 'error');
        }
        isValid = false;
    }

    // Valider la taille
    if (isNaN(height) || height <= 0) {
        if (height <= 0) {
            showMessage('La taille ne peut pas être négative ou égale à zéro.', 'error');
        } else {
            showMessage('Veuillez entrer une taille valide.', 'error');
        }
        isValid = false;
    }

    // Calculer l'IMC si les champs sont valides
    if (isValid) {
        const imc = (weight / (height * height)).toFixed(2);
        showMessage(`Votre IMC est de : ${imc}`, 'success');
    }
}

function showMessage(message, type) {
    const imcMessage = document.getElementById('imcMessage');
    imcMessage.textContent = message;
    imcMessage.className = type === 'success' ? 'success' : 'error';
    imcMessage.style.display = 'block';

    // Disparait après 5 secondes ou au clic
    setTimeout(function() {
        imcMessage.style.display = 'none';
    }, 5000);

    imcMessage.addEventListener('click', function() {
        imcMessage.style.display = 'none';
    });
}
