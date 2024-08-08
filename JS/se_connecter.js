let form = document.querySelector('#loginForm');

// écouter la modification de l'email
form.email.addEventListener('change', function () {
    valideEmail(this);
});
// éecouter la modification du mot de passe
form.password.addEventListener('change', function () {
    validePassword(this);
});
// éecouter la soumission du formulaire
form.addEventListener('submit', function (e){
        e.preventDefault();
        if(valideEmail(form.email) && validePassword(form.password)){
            form.submit();
        }
        
});
// **********creation  de la fonction valideEmail ***********
const valideEmail = function (inputEmail) {
    let emailRegEx = new RegExp(
        '^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g'
    );
    // test et affichage du text d'erreur ou de validation
    let testEmail = emailRegEx.test(inputEmail.value);
    let small = inputEmail.nextElementSibling;
    if (testEmail) {
        small.innerHTML = 'Adresse valide';
        small.classList.remove('text-dangerr');
        small.classList.add('text-success');
        return true;
    }
    else {
        small.innerHTML = 'Adresse Non Valide';
        small.classList.remove('text-success');
        small.classList.add('text-danger');
        return false;
    }
};

// **********creation  de la fonction validePassword ***********
const validePassword = function (inputPassword){
    let messsage;
    let valide = false;
    // au moins 5 caractères dans le mot de passe
    if(inputPassword.value.length < 5){
        messsage = 'le mot de passe doit contenir au moins 5 caractères'
    }

    // au moins 1 majuscule
    else if(!/[A-Z]/.test(inputPassword.value)){
        messsage = 'le mot de passe doit contenir au moins une majuscule'
    }
    // au moin 1 minuscule
    else if(!/[a-z]/.test(inputPassword.value)){
        messsage = 'le mot de passe doit contenir au moins une minuscule'
    }
    // au moins un chiffre
    else if(!/[0-9]/.test(inputPassword.value)){
        messsage = 'le mot de passe doit contenir au moins un chiffre'
    }
    // mot de passe valide
    else{
        messsage = "mot de passe valide"
        valide = true;
    }
    // affichage  du text d'erreur ou de validation
    
    let small = inputPassword.nextElementSibling;
    if (valide) {
        small.innerHTML = 'mot de passe valide';
        small.classList.remove('text-dangerr');
        small.classList.add('text-success');
        return true;
    }
    else {
        small.innerHTML = messsage;
        small.classList.remove('text-success');
        small.classList.add('text-danger');
        return false;
    }
    
};