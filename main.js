// Générer un captcha aléatoire
function generateCaptcha() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < 7; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        captcha += characters.charAt(randomIndex);
    }
    return captcha;
}

const captchaText = document.getElementById('captcha-text');
const captchaInput = document.getElementById('captcha-input');
const checkButton = document.getElementById('check-button');

// Initialiser le captcha au chargement de la page
captchaText.textContent = generateCaptcha();

// Vérifier si le captcha entré est correct
checkButton.addEventListener('click', function() {
    const enteredCaptcha = captchaInput.value.trim();
    const generatedCaptcha = captchaText.textContent;

    if (enteredCaptcha === generatedCaptcha) {
        alert('Captcha correct !');
        captchaInput.value = '';
        captchaText.textContent = generateCaptcha();
    } else {
        alert('Captcha incorrect. Veuillez réessayer.');
        captchaInput.value = '';
        captchaText.textContent = generateCaptcha();
    }
});

document.getElementById("captcha-input").addEventListener("copy", function (e) {
    e.preventDefault();
    alert("Le copier-coller est interdit sur cette zone de texte.");
});

document.getElementById("captcha-input").addEventListener("paste", function (e) {
    e.preventDefault();
    alert("Le copier-coller est interdit sur cette zone de texte.");
});

document.getElementById("captcha-text").addEventListener("copy", function (e) {
    e.preventDefault();
    alert("Le copier-coller est interdit sur cette zone de texte.");
});

document.getElementById("captcha-text").addEventListener("paste", function (e) {
    e.preventDefault();
    alert("Le copier-coller est interdit sur cette zone de texte.");
});
