// Get references to the checkbox, links menu, and label
const checkBox = document.getElementById('check');
const links = document.querySelector('.links');
const label = document.querySelector('.checkbutton');

// Close the menu if the body is clicked (outside of the menu)
document.addEventListener('click', function(event) {
// Check if the click is outside the checkbox, label, and the menu
if (!links.contains(event.target) && !label.contains(event.target) && !checkBox.contains(event.target)) {
// Close the links menu by unchecking the checkbox and moving it off-screen
checkBox.checked = false;
links.style.left = '-100%'; // Close the menu
}
});

// Reopen the menu when clicking the checkbox or label
checkBox.addEventListener('change', function() {
if (this.checked) {
// Open the links menu by setting the left position to 0
links.style.left = '0%';
} else {
// Close the links menu when unchecked
links.style.left = '-100%';
}
});
