// artist.js
const artists = {
    Artist1: {
        img: "https://a10.gaanacdn.com/gn_img/albums/lJvKa63DV9/JvKak8w6WD/size_l.webp",
        name: "Anup Jalota",
        bio: "Anup Jalota, fondly known as the “Bhajan Samraat” (Emperor of Bhajans), is a celebrated Indian singer and musician. He has captivated audiences worldwide with his soulful renditions of devotional songs and ghazals. Honored with the Padma Shri in 2012, Jalota’s contributions to Indian music are truly remarkable.",
        moreSongs: ["Song1", "Song2", "Song3"]
    },
    Artist2: {
        img: "https://a10.gaanacdn.com/gn_img/artists/ZaP37OR3Dy/ZaP37lBWDy/size_m_1516796833.webp",
        name: "Lata Mangeshkar",
        bio: "Lata Mangeshkar, often hailed as the “Nightingale of India,” was a legendary playback singer whose career spanned over eight decades. Born on September 28, 1929, she lent her voice to thousands of songs in various Indian languages, captivating audiences with her melodious voice and emotional depth.",
        moreSongs: [`<img src="https://a10.gaanacdn.com/gn_img/artists/ZaP37OR3Dy/ZaP37lBWDy/size_m_1516796833.webp" id="artistImg">`, "Song5", "Song6"]
    },
    Artist3: {
        img: "https://a10.gaanacdn.com/gn_img/artists/w4MKPObojg/w4MKPObojg/size_m_1516799177.webp",
        name: "Udit Narayana",
        bio: "Udit Narayan, born on December 1, 1955, in Baisi, Bihar, is a legendary Indian playback singer known for his melodious voice and versatility. With a career spanning over four decades, he has sung in multiple Indian languages, including Hindi, Telugu, Kannada, Tamil, Bengali, and Nepali. Udit Narayan has won numerous awards, including four National Film Awards and five Filmfare Awards1. He was honored with the Padma Shri in 2009 and the Padma Bhushan in 2016 for his contributions to Indian music.",
        moreSongs: ["Song4", "Song5", "Song6"]
    },
    Artist4: {
        img: "https://a10.gaanacdn.com/gn_img/albums/kGxbnw0Ky4/xbnwoYjqKy/size_m_1644472809.jpg",
        name: "Jubin Nautiyal",
        bio: " Jubin Nautiyal is a versatile Indian playback singer known for his soulful voice and emotive performances. Born on June 14, 1989, in Dehradun, he has made a significant mark in the music industry with hits across various genres, including Bollywood, pop, and devotional music. ",
        moreSongs: ["Song4", "Song5", "Song6"]
    },
    Artist5: {
        img: "https://a10.gaanacdn.com/gn_pl_img/playlists/Dk9KNk23Bx/9KNRBXO9KB/size_m_1646210568.jpg",
        name: "Ajay-Atul",
        bio: "Ajay-Atul, the dynamic duo of brothers Ajay and Atul Gogavale, are renowned Indian music composers known for their work in Marathi and Hindi cinema. They have composed music for numerous hit films and have won the National Film Award for Best Music Direction for the Marathi film “Jogwa” in 20082. Their music blends traditional Indian sounds with contemporary styles, creating memorable and impactful scores.",
        moreSongs: ["Song4", "Song5", "Song6"]
    },
    Artist6: {
        img: "https://a10.gaanacdn.com/gn_img/artists/9MAWe7KyJe/MAWe9lBGWy/size_m_1516185303.webp",
        name: "YO YO Honey Singh",
        bio: "Yo Yo Honey Singh, born Hirdesh Singh on March 15, 1983, is a prominent Indian music producer, singer, and rapper. Known for his catchy beats and energetic performances, he has revolutionized the Indian music scene with his unique blend of Punjabi and Hindi music.",
        moreSongs: ["Song4", "Song5", "Song6"]
    },
    Artist7: {
        img: "https://a10.gaanacdn.com/gn_img/artists/Dk9KNk23Bx/k9KNqJJbBx/size_m_1638898900.webp",
        name: "Arjit Singh",
        bio: "Arijit Singh, born on April 25, 1987, in Jiaganj, Murshidabad, West Bengal, is a celebrated Indian playback singer and music composer. Known for his soulful voice and versatility, he has recorded songs in multiple Indian languages, predominantly Hindi and Bengali. Arijit gained widespread recognition with the release of “Tum Hi Ho” from the movie Aashiqui 2 in 20131. Over his illustrious career, he has received numerous accolades, including two National Film Awards and seven Filmfare Awards",
        moreSongs: ["Song4", "Song5", "Song6"]
    },
};

function updateArtistPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const artistId = urlParams.get('artistId');
    const artist = artists[artistId];

    if (artist) {
        document.getElementById('artistImg').src = artist.img;
        document.getElementById('artistName').textContent = artist.name;
        document.getElementById('artistBio').textContent = artist.bio;
        document.getElementById('moreSongs').innerHTML = artist.moreSongs.map(song => `<li>${song}</li>`).join('');
    } else {
        console.error('Artist not found');
    }
}

// Add event listeners to images on the main page
document.querySelectorAll('.artist-img').forEach(img => {
    img.addEventListener('click', function() {
        const artistId = this.dataset.artistId;
        window.location.href = `artistPage.html?artistId=${artistId}`;
    });
});
