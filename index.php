<?php
// 1. Koneksi ke Database
$host = "localhost";
$user = "root";      // Default Laragon
$pass = "";          // Default Laragon biasanya kosong
$db   = "portfolio_db";

$koneksi = mysqli_connect($host, $user, $pass, $db);

// Cek Koneksi
if (!$koneksi) {
    die("Koneksi ke database gagal: " . mysqli_connect_error());
}
?>

<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profil Saya | Tugas Praktikum</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
</head>
<body>

    <header>
        <nav>
            <div class="logo">MyPortfolio</div>
            <ul class="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#jadwal">Jadwal</a></li>
                <li><a href="#" id="theme-toggle">🌙 Mode</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="home" class="hero">
            <img src="IMG20250403172433.jpg" alt="Foto Profil Saya" class="profile-img">
            <h1>Halo, Saya Fadhla Rahayu Alfairuz</h1>
            <p>Mahasiswa program studi <strong>Teknik Informatika</strong> semester 4. Senang belajar hal baru di dunia <i>web development!</i></p>
        </section>

        <div style="text-align: center; margin-top: 20px;">
            <button class="btn-submit">Klik Info LinkedIn</button>
        </div>

        <section id="jadwal" class="table-section">
            <h2>Jadwal Mata Kuliah</h2>
            <div style="overflow-x:auto;">
                <table>
                    <thead>
                        <tr>
                            <th>Hari</th>
                            <th>Mata Kuliah</th>
                            <th>Waktu</th>
                            <th>Ruangan</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php
                        // 2. Query mengambil data dari tabel 'jadwal_kuliah'
                        // Diurutkan berdasarkan hari agar rapi
                        $sql = "SELECT * FROM jadwal_kuliah ORDER BY FIELD(hari, 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat')";
                        $query = mysqli_query($koneksi, $sql);

                        if (mysqli_num_rows($query) > 0) {
                            $last_day = "";
                            while ($row = mysqli_fetch_assoc($query)) {
                                echo "<tr>";
                                
                                // Logika agar nama hari tidak berulang jika dalam hari yang sama ada beberapa matkul
                                if ($row['hari'] != $last_day) {
                                    echo "<td>" . htmlspecialchars($row['hari']) . "</td>";
                                    $last_day = $row['hari'];
                                } else {
                                    echo "<td></td>";
                                }

                                echo "<td>" . htmlspecialchars($row['mata_kuliah']) . "</td>";
                                echo "<td>" . htmlspecialchars($row['waktu']) . "</td>";
                                echo "<td>" . htmlspecialchars($row['ruangan']) . "</td>";
                                echo "</tr>";
                            }
                        } else {
                            echo "<tr><td colspan='4' style='text-align:center;'>Data jadwal belum tersedia di database.</td></tr>";
                        }
                        ?>
                    </tbody>
                </table>
            </div>
        </section>
    </main>

    <footer>
        <p>&copy; 2026 | Dibuat untuk Tugas Praktikum Dasar Pemrograman Web</p>
    </footer>

    <script src="script.js"></script>

</body>
</html>