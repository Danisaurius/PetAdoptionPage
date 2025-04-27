function scrollGallery(galleryId, distance) {
    const container = document.getElementById(galleryId);
    container.scrollBy({ left: distance, behavior: 'smooth' });
}