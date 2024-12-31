let currentImageIndex = 0;

function switchImage() {
    const images = document.querySelectorAll('#image-container .profile-image');
    images[currentImageIndex].style.display = 'none'; // Hide the current image
    currentImageIndex = (currentImageIndex + 1) % images.length; // Move to the next image index
    images[currentImageIndex].style.display = 'block'; // Show the next image

    images[currentImageIndex].style.width = '800px'; // Adjust the width as needed
    images[currentImageIndex].style.height = 'auto'; // Maintain aspect ratio

}

document.addEventListener('DOMContentLoaded', function () {
    const thumbnails = document.querySelectorAll('.thumbnail');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('mouseover', function () {
            const fullsizeImage = document.createElement('img');
            fullsizeImage.src = thumbnail.getAttribute('data-fullsize');
            fullsizeImage.classList.add('fullsize-image');
            thumbnail.parentNode.appendChild(fullsizeImage);
        });

        thumbnail.addEventListener('mouseout', function () {
            const fullsizeImage = thumbnail.parentNode.querySelector('.fullsize-image');
            if (fullsizeImage) {
                fullsizeImage.remove();
            }
        });
    });
});