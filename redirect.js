// File: redirect.js

// Function to check if the user is on a mobile device
function isMobile() {
    return /Mobi|Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);
}

// Function to handle mobile vs desktop view
function checkDevice() {
    if (isMobile() && window.innerWidth <= 1024) {
        // Mobile detected, redirect to index.html
        window.location.href = 'index.html';
    } else {
        // Desktop detected, redirect to test.html
        window.location.href = 'test.html';
    }
}

// Disable right-click (context menu)
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    alert("Right-click disabled!");
});

// Disable F12 (DevTools) and other common DevTools keys
document.onkeydown = function (e) {
    if (e.keyCode === 123 || (e.ctrlKey && e.shiftKey && e.keyCode === 73)) {
        alert("Developer tools are disabled!");
        return false;
    }
};

// Run the device check on load and resize
window.onload = checkDevice;
window.onresize = checkDevice;
