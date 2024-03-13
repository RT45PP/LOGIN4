window.addEventListener('DOMContentLoaded', (event) => {
    var passwordInput = document.getElementById("password");
    var form = document.querySelector("form");
    var passwordError = document.getElementById("password-error");
    var emailInput = document.getElementById("email");
    var emailError = document.getElementById("email-error");

    emailInput.addEventListener("input", verifierEmail);
    passwordInput.addEventListener("input", verifierMotDePasse);
    form.addEventListener("submit", validerFormulaire);
    
    form.setAttribute("novalidate", "true"); // Ajoute l'attribut noValidate au formulaire pour annuler le message d'erreur par défaut

    function verifierMotDePasse() {
        var password = passwordInput.value;

        var longueurValide = password.length >= 8;
        var contientMajuscule = /[A-Z]/.test(password);
        var contientCaractereSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        var contientChiffre = /\d/.test(password);

        if (longueurValide && contientMajuscule && contientCaractereSpecial && contientChiffre) {
            // Mot de passe valide
            passwordError.textContent = "";
        } else {
            // Mot de passe invalide
            passwordError.innerHTML = "<span class='message-bulle'>Le mot de passe doit contenir au moins 8 caractères, une majuscule, un caractère spécial et un chiffre.</span>";
            setTimeout(function () {
                passwordError.innerHTML = "";
            }, 3000); // 3000 millisecondes = 3 secondes
        }
    }

    function validerFormulaire(event) {
        var password = passwordInput.value;
        var email = emailInput.value;

        var longueurValide = password.length >= 8;
        var contientMajuscule = /[A-Z]/.test(password);
        var contientCaractereSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        var contientChiffre = /\d/.test(password);
        var emailValide = email.includes("@ucac-icam.com");

        if (!longueurValide || !contientMajuscule || !contientCaractereSpecial || !contientChiffre || !emailValide || password.trim() === '' || email.trim() === '') {
            // Mot de passe invalide, e-mail invalide ou champs vides, annuler l'envoi du formulaire
            event.preventDefault();

            if (!longueurValide || !contientMajuscule || !contientCaractereSpecial || !contientChiffre) {
                passwordError.innerHTML = "<span class='message-bulle'>Le formulaire ne peut pas être soumis tant que le mot de passe n'est pas valide.</span>";
                setTimeout(function () {
                    passwordError.innerHTML = "";
                }, 3000); // 3000 millisecondes = 3 secondes
            }

            if (!emailValide) {
                emailError.textContent = "L'email doit être de la forme xxx@ucac-icam.com.";
                emailError.classList.add("message-erreur");
                setTimeout(function () {
                    emailError.textContent = "";
                    emailError.classList.remove("message-erreur");
                }, 3000); // 3000 millisecondes = 3 secondes
            }

            if (password.trim() === '') {
                passwordError.innerHTML = "<span class='message-bulle'>Veuillez remplir ce champ.</span>";
                setTimeout(function () {
                    passwordError.innerHTML = "";
                }, 3000); // 3000 millisecondes = 3 secondes
            }

            if (email.trim() === '') {
                emailError.textContent = "Veuillez remplir ce champ.";
                emailError.classList.add("message-erreur");
                setTimeout(function () {
                    emailError.textContent = "";
                    emailError.classList.remove("message-erreur");
                }, 3000); // 3000 millisecondes = 3 secondes
            }
        }
    }

    function verifierEmail() {
        var email = emailInput.value;

        if (email.includes("@ucac-icam.com")) {
            // Format d'email valide
            emailError.textContent = "";
        } else {
            // Format d'email invalide
            emailError.textContent = "L'email doit être de la forme xxx@ucac-icam.com.";
            emailError.classList.add("message-erreur"); // Ajouter la classe CSS "message-erreur"
            setTimeout(function () {
                emailError.textContent = "";
                emailError.classList.remove("message-erreur"); // Supprimer la classe CSS "message-erreur" après un certain délai
            }, 3000);
            if (email.trim() === '') {
                emailError.textContent = "Veuillez remplir ce champ.";
                emailError.classList.add("message-erreur");
                setTimeout(function () {
                    emailError.textContent = "";
                    emailError.classList.remove("message-erreur");
                }, 3000); // 3000 millisecondes = 3 secondes
            }

           
        }
    }
 
});
