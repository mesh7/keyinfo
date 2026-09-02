const keyboardKey = document.getElementById("keyboard_key");
const keyboardCode = document.getElementById("keyboard_code");
const keyboardLocation = document.getElementById("keyboard_location");
const keyWhich = document.getElementById("keyboard_which");
const keyboardHistory = document.getElementById("keyboard_history");

let keyHistory = [];

// Load key history from session storage on page load
function loadKeyHistory() {
  const savedHistory = sessionStorage.getItem("keyHistory");
  if (savedHistory) {
    keyHistory = JSON.parse(savedHistory);
    keyboardHistory.innerHTML = keyHistory.join(" → ");
  }
}

// Save key history to session storage
function saveKeyHistory() {
  sessionStorage.setItem("keyHistory", JSON.stringify(keyHistory));
}

function showKeyHistory(event) {
  keyHistory.unshift(event.key);
  if (keyHistory.length > 10) {
    keyHistory.pop();
  }

  // Update history display
  keyboardHistory.innerHTML = keyHistory.join(" → ");

  // Save to session storage
  saveKeyHistory();
}

// Load history when page loads
loadKeyHistory();

document.addEventListener("keydown", (event) => {
  keyboardKey.innerHTML = event.key;
  keyboardCode.innerHTML = event.code;
  keyboardLocation.innerHTML = event.location;
  keyWhich.innerHTML = event.which;
  showKeyHistory(event);
});

async function copyTextToClipboard(elementId) {
  const element = document.getElementById(elementId);
  const textToCopy = element.innerText;

  // Only proceed if a key has been pressed (element has content)
  if (!textToCopy || textToCopy.trim() === "") {
    return;
  }

  try {
    // Copy the content on clipboard
    await navigator.clipboard.writeText(textToCopy);

    // Change the tile color when clicked on the tile
    const originalBackground = element.parentElement.style.backgroundColor;
    element.parentElement.style.backgroundColor = "#90EE90";

    setTimeout(() => {
      element.parentElement.style.backgroundColor = originalBackground;
    }, 300);
  } catch (err) {
    console.error("Failed to copy text: ", err);
  }
}
