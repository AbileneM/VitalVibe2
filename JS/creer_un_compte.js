let form = document.querySelector("#loginForm");

        // écouter la modification du prénom
form.prenom.addEventListener('change',function(){
        validePrenom(this);

});

        // écouter la modification du nom
form.nom.addEventListener('change',function(){
    valideNom(this);

});
    // écouter la modification du courriel
form.email.addEventListener('change',function(){
    valideEmail(this);

});
// écouter la modification du nom d'utilisateur
form.utilisateur.addEventListener('change',function(){
    valideUtilisateur(this);

});

// écouter la modification du mot de passe
form.password.addEventListener('change', function () {
    validePassword(this);
});
// écouter la modification du confirm mot de passe
form.confirm_password.addEventListener('change',function(){
    valideConfirmPassword(this);
});

// éecouter la soumission du formulaire
form.addEventListener('submit', function (e){
    e.preventDefault();
    if(validePrenom(form.nom) && validePrenom(form.prenom) && valideEmail(form.email) && valideUtilisateur(form.utilisateur) && validePassword(form.password) && valideConfirmPassword(form.confirm_password)){
        form.submit();
    }
    
});
            // ***** creation de la fonction valide prenom*******
const validePrenom = function(inputPrenom){
    let prenomRegEx = new RegExp(
        '^[a-zA-Z-_ ]+[a-zA-Z]$', 'g'
    );
    let testPrenom = prenomRegEx.test(inputPrenom.value);
    let small = inputPrenom.nextElementSibling;
    if (testPrenom) {
        small.innerHTML = 'prenom valide';
        small.classList.remove('text-dangerr');
        small.classList.add('text-success');
        return true;
    }
    else {
        small.innerHTML = 'prenom inValide';
        small.classList.remove('text-success');
        small.classList.add('text-danger');
        return false;
    }

};

            // ***** creation de la fonction valide prenom*******
const valideNom = function(inputNom){
    let nomRegEx = new RegExp(
        '^[a-zA-Z]+$', 'g'
    );
    let testnom = nomRegEx.test(inputNom.value);
    let small = inputNom.nextElementSibling;
    if (testnom) {
        small.innerHTML = 'nom valide';
        small.classList.remove('text-dangerr');
        small.classList.add('text-success');
        return true;
    }
    else {
        small.innerHTML = 'nom inValide';
        small.classList.remove('text-success');
        small.classList.add('text-danger');
        return false;
    }

};
            //******creation de la fonction valideEmail********/
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

           // ***** creation de la fonction qui valide le nom d'utilisateur*****
           const valideUtilisateur = function(inputUtilisateur){
            let utilisateurRegEx = new RegExp(
                '^[a-zA-Z0-9]+$', 'g'
            );
            let testUtlisateur = utilisateurRegEx.test(inputUtilisateur.value);
            let small = inputUtilisateur.nextElementSibling;
            if (testUtlisateur) {
                small.innerHTML = 'nom utlisateur valide';
                small.classList.remove('text-dangerr');
                small.classList.add('text-success');
                return true;
            }
            else {
                small.innerHTML = 'nom utilisateur invalide';
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

        // **********creation  de la fonction validePassword ***********
        const valideConfirmPassword = function (inputConfirmPassword){
            let messsage;
            let valide = false;
            // au moins 5 caractères dans le mot de passe
            if(inputConfirmPassword.value.length < 5){
                messsage = 'le mot de passe doit contenir au moins 5 caractères'
            }
        
            // au moins 1 majuscule
            else if(!/[A-Z]/.test(inputConfirmPassword.value)){
                messsage = 'le mot de passe doit contenir au moins une majuscule'
            }
            // au moin 1 minuscule
            else if(!/[a-z]/.test(inputConfirmPassword.value)){
                messsage = 'le mot de passe doit contenir au moins une minuscule'
            }
            // au moins un chiffre
            else if(!/[0-9]/.test(inputConfirmPassword.value)){
                messsage = 'le mot de passe doit contenir au moins un chiffre';
            }
            
            // mot de passe valide
            else{
                messsage = 'mot de passe valide';
                valide = true; 
            }
             
                
            // affichage  du text d'erreur ou de validation
            
            let small = inputConfirmPassword.nextElementSibling;
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
        //

         