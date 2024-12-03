const installBtn = document.querySelector('#installButton');
let deferredPrompt;

window.addEventListener('beforeinstallprompt', event => {
    event.preventDefault(); //neutralise le comportement par défaut
    deferredPrompt = event;
    installBtn.style.display = 'block';
});

window.addEventListener('click', async(event) =>{
    event.preventDefault();
    if (deferredPrompt) {
        deferredPrompt.prompt();
        const choiceUser = await deferredPrompt.userChoice;
        if (choiceUser=='accepted') {
            installBtn.style.display="none";
        }
        deferredPrompt = null;
    }
});

window.addEventListener('appinstalled', event => {
    installBtn.style.display = "none";
});