# SYSTEM-COMPUTER-SET-UP-C01

ABM interaktif untuk unit **IT-020-3:2013-C01 COMPUTER SYSTEM SET-UP**.

## Status Sambungan

- Tapak asas C01 dibina sebagai static website.
- C05 tidak disentuh.
- Login pelajar wajib sebelum dashboard.
- Nama penuh dan ID pelajar divalidasi.
- Dashboard C01 memaparkan kemajuan, KT lulus, purata dan tahap.
- KP01 hingga KP15 disediakan.
- Kuiz KT menggunakan syarat lulus 60%.
- KP seterusnya hanya terbuka selepas KT semasa lulus.
- Sokongan bahasa BM/EN.
- Audio bacaan menggunakan `speechSynthesis` browser.
- Simulasi asas perkakasan disediakan untuk topik komponen dan pemasangan.
- KP01 dikemaskini dengan nota lengkap, simulasi tiket kerja sebenar, animasi aliran kerja, video-style briefing, aktiviti pelajar, mini game dan KT01 10 soalan.
- Jawapan betul KT01 disusun pada kedudukan berbeza supaya tidak semuanya berada pada pilihan yang sama.
- Keputusan formal KT ditambah: nama pelajar, ID, KP/KT, markah, status TERAMPIL/BELUM TERAMPIL, rasmi, locked, tarikh dan ruang pegawai penilai.
- Markah 60% ke atas disimpan sebagai rasmi dan locked seperti standard C05.
- Header rasmi kolej ditambah pada slip keputusan dan laporan KT: KOLEJ KEMAHIRAN MENTARI (L02432), alamat Kluang dan nombor telefon.
- Untuk logo sebenar, tambah fail `assets/images/logo-kolej.png` di root repo. Nama folder/fail mesti tepat kerana GitHub Pages sensitif huruf besar/kecil.
- KP02 dikemaskini dengan nota lengkap, animasi workbench, simulasi checklist, aktiviti pelajar, mini game kategori tools/hardware/software/safety dan KT02 10 soalan.
- Jawapan betul KT02 disusun pada kedudukan berbeza.
- KP02 Upgrade 2 menambah inventori lengkap tools/hardware/software/safety, tools diagnostik, senario kit kerja, decision matrix item dan aktiviti pelajar tambahan.
- KP02 video/animasi dikemaskini dengan 5 frame auto, progress bar dan workbench animation yang lebih jelas.
- KP03 dikemaskini untuk kandungan KP sahaja: nota lengkap perkakasan/peralatan komputer, simulasi motherboard, peta port/kabel, peta komponen, aktiviti pelajar dan mini game fungsi komponen.
- KP03 simulasi dikemaskini dengan hotspot interaktif motherboard dan port/kabel supaya pelajar boleh klik komponen untuk melihat fungsi.
- KP03 simulasi utama dikemaskini: pelajar klik komponen dan pilih fungsi, kemudian sistem beri feedback betul/salah terus.
- KP04 dikemaskini untuk kandungan KP sahaja: nota lengkap peralatan pemasangan perkakasan, video prosedur tools, simulasi ESD, peta tools, urutan kerja selamat, aktiviti pelajar dan mini game pemilihan tools.
- KP04 simulasi utama dikemaskini: pelajar pilih situasi kerja dan tool yang betul, kemudian sistem beri feedback betul/salah terus.
- KP04 simulasi utama diperkukuh dengan force-click handler: butang situasi dan tool memanggil fungsi terus supaya feedback tetap muncul apabila pelajar klik.
- KP04 Latihan Simulasi diperbesar menjadi workbench interaktif: situasi kerja, pilihan tool, keputusan betul/salah, skor latihan dan langkah penggunaan selamat dipaparkan dalam satu panel latihan.
- `index.html` dikemaskini dengan nombor versi cache supaya browser memuatkan `app.js` dan `style.css` terbaru.
- KP01 Latihan Simulasi dikemaskini menjadi aktiviti klik: pilih maklumat tiket kerja, pilih kategori, dapat feedback, skor dan checklist KP02.
- KP02 Latihan Simulasi dikemaskini menjadi workbench interaktif: pilih item, pilih tray kategori, dapat feedback, skor dan fungsi item.
- `index.html` dikemaskini kepada versi cache terkini untuk memaksa browser memuatkan semua kod simulasi/animasi terbaru.
- Layout KP01/KP02/KP04 Latihan Simulasi dikemaskini kepada satu kolum dalam panel latihan supaya teks tidak bertindan pada tablet dan skrin kecil.
- `index.html` dikemaskini kepada versi cache `sim-animasi-v5`.
- KP05 dikemaskini untuk kandungan KP sahaja: nota lengkap fungsi komponen perkakasan, simulasi fungsi komponen, animasi aliran input-CPU-RAM-storage-output, peta fungsi komponen, senario pemilihan komponen, aktiviti pelajar dan mini game simptom kerosakan.
- `index.html` dikemaskini kepada versi cache `kp05-v6`.
- KP05 hard update v7: tajuk ditukar kepada "Fungsi dan Peranan Komponen Perkakasan Komputer" dan `index.html` kini memanggil `app-kp05-v7.js` serta `style-kp05-v7.css` untuk elak cache fail lama.
- KP06 dikemaskini untuk kandungan KP sahaja: nota lengkap pemasangan motherboard, CPU, thermal paste, cooler dan RAM; simulasi urutan pemasangan; animasi pemasangan; peta prosedur/keserasian; pemeriksaan sebelum boot; aktiviti pelajar dan mini game kesilapan pemasangan.
- KP06 hard update v8: `index.html` kini memanggil `app-kp06-v8.js` dan `style-kp06-v8.css`.
- KP06 v9 layout fix: simulasi utama dikemaskini kepada workbench pemasangan yang lebih kemas dengan diagram motherboard, progress bar, safety tags dan feedback ringkas.
- KP06 hard update v9: `index.html` kini memanggil `app-kp06-v9.js` dan `style-kp06-v9.css`.
- KP07 dikemaskini untuk kandungan KP sahaja: nota lengkap pemasangan storage dan PSU, sambungan SATA/NVMe, 24-pin ATX, CPU EPS, SATA power, PCIe power, cable management, semakan BIOS/UEFI, simulasi sambungan, animasi laluan kabel, aktiviti pelajar dan mini game kesilapan sambungan.
- KP07 hard update v10: `index.html` kini memanggil `app-kp07-v10.js` dan `style-kp07-v10.css`.
- Susunan jawapan KT dan mini game dikemaskini supaya jawapan betul tidak berada pada lokasi yang sama; pilihan jawapan dirotasi mengikut nombor soalan/kad.
- KP07 hard update v11: `index.html` kini memanggil `app-kp07-v11.js` dan `style-kp07-v11.css`.
- KP08 dikemaskini untuk kandungan KP sahaja: nota lengkap pemasangan sistem operasi, bootable USB, BIOS/UEFI, boot mode, edisi OS, partition, akaun/password, first desktop check, aktiviti pelajar, simulasi urutan OS, animasi installer dan mini game troubleshooting.
- KP08 hard update v12: `index.html` kini memanggil `app-kp08-v12.js` dan `style-kp08-v12.css`.
- KP08 v13 function fix: Latihan Simulasi menggunakan delegated click handler global supaya langkah OS dan reset tetap berfungsi pada live page.
- KP08 hard update v13: `index.html` kini memanggil `app-kp08-v13.js` dan `style-kp08-v13.css`.

## Fail

- `index.html`
- `style.css`
- `app.js`

## Cara Uji

Buka `index.html` dalam browser, atau jalankan server lokal:

```bash
python3 -m http.server 8080
```

Kemudian buka:

```text
http://localhost:8080
```
