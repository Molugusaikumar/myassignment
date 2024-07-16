
// Get the modal
var popupForm = document.getElementById('popupForm');

// Get the button that opens the modal
var openPopupBtn = document.getElementById('openPopupBtn');

// Get the <span> element that closes the modal
var closePopupBtn = document.getElementById('closePopupBtn');

// When the user clicks the button, open the modal 
openPopupBtn.onclick = function() {
    popupForm.style.display = 'block';
}

// When the user clicks on <span> (x), close the modal
closePopupBtn.onclick = function() {
    popupForm.style.display = 'none';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == popupForm) {
        popupForm.style.display = 'none';
    }
}
