document.addEventListener("DOMContentLoaded", function() {
    const notification = document.getElementById('cookies-notification');

    // Periksa apakah pengguna sudah membuat keputusan sebelumnya
    if (localStorage.getItem('cookiesConsent')) {
        notification.style.display = 'none';
    }

    // Klik tombol Terima
    document.getElementById('btn-terima').addEventListener('click', function() {
        localStorage.setItem('cookiesConsent', 'accepted');
        notification.style.display = 'none';
        console.log("Pengguna menerima cookies.");
    });

    // Klik tombol Tolak
    document.getElementById('btn-tolak').addEventListener('click', function() {
        localStorage.setItem('cookiesConsent', 'declined');
        notification.style.display = 'none';
        console.log("Pengguna menolak cookies.");
    });
});
