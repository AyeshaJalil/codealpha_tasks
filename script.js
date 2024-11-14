// Theme Toggle
document.getElementById('themeToggle').addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const themeButton = document.getElementById('themeToggle');
    themeButton.textContent = document.body.classList.contains('light-mode') ? 'Dark Mode' : 'Light Mode';
});

// Image Modal Functionality
let currentImageIndex = 0;
const images = Array.from(document.querySelectorAll('.gallery-image'));

// Open Modal with Thumbnails
function openModal(imageElement) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const caption = document.getElementById('imageCaption');

    modal.style.display = "flex";
    modalImage.src = imageElement.src;
    caption.textContent = imageElement.alt;

    currentImageIndex = images.indexOf(imageElement);
    generateThumbnails();
}

// Generate Thumbnail Sidebar
function generateThumbnails() {
    const thumbnailSidebar = document.querySelector('.thumbnail-sidebar');
    thumbnailSidebar.innerHTML = ""; // Clear existing thumbnails

    images.forEach((img, index) => {
        const thumb = document.createElement('img');
        thumb.src = img.src;
        thumb.alt = img.alt;
        thumb.classList.add('thumbnail');
        
        // On click, change main modal image
        thumb.onclick = () => {
            currentImageIndex = index;
            document.getElementById('modalImage').src = img.src;
            document.getElementById('imageCaption').textContent = img.alt;
        };
        
        thumbnailSidebar.appendChild(thumb);
    });
}

// Close Modal
document.querySelector('.close').onclick = function() {
    document.getElementById('imageModal').style.display = "none";
};

// Event Listener for Opening Modal
images.forEach((image) => {
    image.addEventListener('click', function() {
        openModal(image);
    });
});
