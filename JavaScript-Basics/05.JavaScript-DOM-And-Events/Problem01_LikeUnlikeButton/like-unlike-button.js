// Problem 1. Like / Unlike Button
// Crate a HTML page holding a "Like" button that changes to "Unlike" when clicked, then again to "Like", etc.

(function () {
    'use strict';
    var likeButton = document.getElementById('likeButton'),
        isClicked = false;
    likeButton.addEventListener('click', function () {
        if (isClicked) {
            this.innerText = 'Like';
            isClicked = false;
        } else {
            this.innerText = 'Unlike';
            isClicked = true;
        }
    });
}());
