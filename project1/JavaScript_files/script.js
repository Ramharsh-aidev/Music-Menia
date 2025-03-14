function scrollRight() {
    const container = document.querySelector('.mix');
    const scrollAmount = 300; // Adjust the scroll amount as needed
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
}

function scrollLeft() {
    const container = document.querySelector('.mix');
    const scrollAmount = 300; // Adjust the scroll amount as needed
    container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', () => {
    const lastPlayedSong = localStorage.getItem('lastPlayedSong');
            if (lastPlayedSong) {
            const audioElement = document.getElementById('mainAudio');
            audioElement.querySelector('source').src = lastPlayedSong;
            audioElement.load();
        }
    });