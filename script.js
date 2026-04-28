const namaMahasiswa = "Fadhla Rahayu Alfairuz";

// 1. Popup Selamat Datang saat web dibuka
window.onload = () => {
    alert("Selamat datang di Website Portfolio, " + namaMahasiswa + "!");
};

document.addEventListener('DOMContentLoaded', () => {
    // 2. Dark/Light Mode
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', (e) => {
            e.preventDefault();
            document.body.classList.toggle('light-mode');
            themeToggle.innerText = document.body.classList.contains('light-mode') ? "☀️ Mode" : "🌙 Mode";
        });
    }

    // 3. Popup Klik Jadwal Mata Kuliah
    const rows = document.querySelectorAll('tbody tr');
    rows.forEach(row => {
        row.style.cursor = 'pointer';
        row.addEventListener('click', () => {
            const matkul = row.cells[1]?.innerText;
            if (matkul && matkul.trim() !== "") {
                alert("Kamu memilih mata kuliah: " + matkul);
            }
        });
    });

    // 4. Konfirmasi LinkedIn (Tombol Submit)
    const btnSubmit = document.querySelector('.btn-submit');
    if (btnSubmit) {
        btnSubmit.addEventListener('click', () => {
            if (confirm("Apakah kamu ingin melihat LinkedIn saya?")) {
                window.open("https://www.linkedin.com/in/fadhla-rahayu-alfairuz/", "_blank");
            }
        });
    }
});