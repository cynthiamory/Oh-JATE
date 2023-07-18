const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    //STORES THE EVENTS TRIGGERED
    window.deferredPrompt = event;
    // REMOVES THE HIDDEN CLASS FROM THE BUTTON
    butInstall.classList.toggle("hidden", false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    //CHECKS IF THE EVENT IS TRIGGERED
    if (!promptEvent) {
        return;
    }

    //SHOWS THE PROMPT
    promptEvent.prompt();
    //RESETS THE DEFERRED PROMPT VARIABLE. WHICH CAN ONLY BE USED ONCE
    window.deferredPrompt = null;

    butInstall.classList.toggle("hidden", true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    // CLEAR THE PROMPT
    window.deferredPrompt = null;
});
