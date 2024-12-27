function switchImage() {
    var currentImage = document.getElementById('profile-image');
    var secondImage = document.getElementById('second-image');

    // Check if the current image is visible
    if (currentImage.style.display !== 'none') {
        currentImage.style.display = 'none';
        secondImage.style.display = 'block';
    } else {
        currentImage.style.display = 'block';
        secondImage.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.querySelectorAll('.thumbnail');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('mouseover', function() {
            const fullsizeImage = document.createElement('img');
            fullsizeImage.src = thumbnail.getAttribute('data-fullsize');
            fullsizeImage.classList.add('fullsize-image');
            thumbnail.parentNode.appendChild(fullsizeImage);
        });

        thumbnail.addEventListener('mouseout', function() {
            const fullsizeImage = thumbnail.parentNode.querySelector('.fullsize-image');
            if (fullsizeImage) {
                fullsizeImage.remove();
            }
        });
    });
});