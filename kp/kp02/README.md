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
- Untuk logo sebenar, tambah fail `assets/logo-mentari.png` di root repo. Nama folder/fail mesti tepat kerana GitHub Pages sensitif huruf besar/kecil.
- KP02 dikemaskini dengan nota lengkap, animasi workbench, simulasi checklist, aktiviti pelajar, mini game kategori tools/hardware/software/safety dan KT02 10 soalan.
- Jawapan betul KT02 disusun pada kedudukan berbeza.
- KP02 Upgrade 2 menambah inventori lengkap tools/hardware/software/safety, tools diagnostik, senario kit kerja, decision matrix item dan aktiviti pelajar tambahan.
- KP02 video/animasi dikemaskini dengan 5 frame auto, progress bar dan workbench animation yang lebih jelas.
- KP03 dikemaskini untuk kandungan KP sahaja: nota lengkap perkakasan/peralatan komputer, simulasi motherboard, peta port/kabel, peta komponen, aktiviti pelajar dan mini game fungsi komponen.

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
