document.addEventListener('DOMContentLoaded', () => {
    
    selamatDatang();

    if (themeToggle) {
        themeToggle.addEventListener('click', (e) => {
            e.preventDefault(); 
            body.classList.toggle('light-mode');
            
            // Logika Ternary untuk teks tombol
            themeToggle.innerText = body.classList.contains('light-mode') ? "☀️ Mode" : "🌙 Mode";
        });
    }


    if (footerText) {
        footerText.addEventListener('mouseover', () => {
            footerText.style.color = "#00b4d8";
            footerText.style.cursor = "pointer";
        });

        footerText.addEventListener('mouseout', () => {
            footerText.style.color = body.classList.contains('light-mode') ? "#888" : "#555";
        });
    }

    const rows = document.querySelectorAll('tbody tr');
    rows.forEach(row => {
        row.addEventListener('click', () => {
            const matkul = row.cells[1]?.innerText;
            if (matkul && matkul !== "") {
                console.log("Melihat jadwal: " + matkul);
                row.style.backgroundColor = "rgba(0, 180, 216, 0.1)";
            }
        });
    });
});