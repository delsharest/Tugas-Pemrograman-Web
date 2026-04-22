// --- 1. Konfigurasi Data ---
const namaMahasiswa = "Fadhla Rahayu Alfairuz";

// --- 2. Popup Saat Website Dijalankan ---
function selamatDatang() {
    console.log("Sistem Portfolio Aktif!"); 
    alert("Selamat datang di Website Portfolio, " + namaMahasiswa + "!"); 
}

// Menjalankan popup segera setelah halaman dimuat
window.onload = selamatDatang;

// --- 3. Logika Utama (DOM Manipulation) ---
document.addEventListener('DOMContentLoaded', () => {
    
    // A. Fitur Ganti Tema (Dark/Light Mode)
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    if (themeToggle) {
        themeToggle.addEventListener('click', (e) => {
            e.preventDefault();
            body.classList.toggle('light-mode');
            themeToggle.innerText = body.classList.contains('light-mode') ? "☀️ Mode" : "🌙 Mode";
        });
    }

    // B. Popup Saat Klik Baris Jadwal (Sesuai keinginanmu)
    const rows = document.querySelectorAll('tbody tr');
    rows.forEach(row => {
        row.style.cursor = "pointer"; // Agar kursor berubah jadi tangan
        row.addEventListener('click', () => {
            const matkul = row.cells[1]?.innerText;
            if (matkul && matkul.trim() !== "") {
                alert("Kamu memilih mata kuliah: " + matkul);
            }
        });
    });

    // C. Fitur Konfirmasi LinkedIn pada Tombol
    const tombol = document.querySelector('button');
    if (tombol) {
        tombol.addEventListener('click', function() {
            let konfirmasi = confirm("Apakah kamu ingin melihat LinkedIn saya?");
            if (konfirmasi) {
                window.open("https://www.linkedin.com/in/fadhla-rahayu-alfairuz/", "_blank");
            }
        });
    }

    // D. Hover Efek pada Footer
    const footerText = document.querySelector('footer p');
    if (footerText) {
        footerText.addEventListener('mouseover', () => footerText.style.color = "#00b4d8");
        footerText.addEventListener('mouseout', () => footerText.style.color = "#555");
    }
});