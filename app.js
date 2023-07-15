const keyboardKey = document.getElementById('keyboard_key');
const keyboardCode = document.getElementById('keyboard_code');
const keyboardLocation = document.getElementById('keyboard_location');
const keyWhich = document.getElementById('keyboard_which');

document.addEventListener('keydown', (event) => {
    keyboardKey.innerHTML = event.key;
    keyboardCode.innerHTML = event.code;
    keyboardLocation.innerHTML = event.location;
    keyWhich.innerHTML = event.which;
});