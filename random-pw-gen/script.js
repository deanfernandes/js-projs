const PW_LEN = 14;

const generateEl = document.getElementById("generate");
const passwordEl = document.getElementById("password");
const copyToClipboarddEl = document.getElementById("copy-to-clipboard");
const alertContainerEl = document.querySelector(".alert-container");

generateEl.addEventListener("click", onGenerate);
copyToClipboarddEl.addEventListener("click", onCopyToClipboard);

function generateRandomPassword() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789";
    let pw = "";
    for(let i = 0; i < PW_LEN; i++) {
        let randomChar = chars[Math.floor(Math.random() * chars.length)];
        pw += randomChar;
    }
    return pw;
}

function onGenerate() {
    passwordEl.value = generateRandomPassword();
}

function onCopyToClipboard() {
    if(!passwordEl.value) return;
    navigator.clipboard.writeText(passwordEl.value);
    alertContainerEl.innerHTML = passwordEl.value + " copied!";
    alertContainerEl.classList.add("show");
    window.setTimeout(()=> {
        alertContainerEl.classList.remove("show");
    }, 1500);
}