const PASS_MARK = 60;
const STORAGE_KEY = "system-computer-set-up-c01";

const text = {
  bm: {
    subtitle: "ABM Interaktif SKM Tahap 3",
    intro:
      "Belajar langkah kerja Computer System Set-Up melalui nota ringkas, aktiviti simulasi, kuiz dan buka kunci KP secara berperingkat.",
    loginTitle: "Login Pelajar",
    fullName: "Nama penuh pelajar",
    studentId: "ID pelajar",
    language: "Bahasa",
    enter: "Masuk Dashboard",
    loginHint:
      "Nama mesti nama penuh sebenar dan ID mesti diisi. Nama umum seperti Pelajar, Test atau Admin akan ditolak.",
    dashboard: "Dashboard C01",
    progress: "Kemajuan",
    passed: "KT Lulus",
    average: "Purata",
    level: "Tahap",
    continue: "Teruskan",
    open: "Buka",
    locked: "Terkunci",
    completed: "Selesai",
    logout: "Log keluar",
    reset: "Reset Progress",
    report: "Keputusan KT",
    profile: "Profil",
    listen: "Audio Bacaan",
    back: "Kembali",
    startQuiz: "Mula Kuiz KT",
    submit: "Hantar Jawapan",
    pass: "Terampil. KP seterusnya telah dibuka.",
    fail: "Belum terampil. Ulang kaji nota dan cuba semula.",
    score: "Markah",
    formalResult: "Keputusan Formal KT",
    formalRecord: "Rekod Keputusan KT",
    studentName: "Nama Pelajar",
    resultDate: "Tarikh",
    status: "Status",
    official: "Rasmi",
    locked: "Dikunci",
    notAssessed: "Belum Dinilai",
    assessor: "Pegawai Penilai",
    signature: "Tandatangan",
    print: "Cetak",
    activity: "Latihan Simulasi",
    notes: "Nota Penting",
    quiz: "Kuiz KT",
    invalid:
      "Sila masukkan nama penuh sebenar dan ID pelajar yang lengkap sebelum masuk dashboard."
  },
  en: {
    subtitle: "Interactive Teaching Aid for SKM Level 3",
    intro:
      "Learn Computer System Set-Up work steps through concise notes, simulation activities, quizzes and progressive KP unlocking.",
    loginTitle: "Student Login",
    fullName: "Student full name",
    studentId: "Student ID",
    language: "Language",
    enter: "Enter Dashboard",
    loginHint:
      "Use the student's real full name and ID. Generic names such as Student, Test or Admin are rejected.",
    dashboard: "C01 Dashboard",
    progress: "Progress",
    passed: "Passed KT",
    average: "Average",
    level: "Level",
    continue: "Continue",
    open: "Open",
    locked: "Locked",
    completed: "Completed",
    logout: "Logout",
    reset: "Reset Progress",
    report: "KT Results",
    profile: "Profile",
    listen: "Read Aloud",
    back: "Back",
    startQuiz: "Start KT Quiz",
    submit: "Submit Answers",
    pass: "Competent. The next KP has been unlocked.",
    fail: "Not yet competent. Revise the notes and try again.",
    score: "Score",
    formalResult: "Formal KT Result",
    formalRecord: "KT Result Record",
    studentName: "Student Name",
    resultDate: "Date",
    status: "Status",
    official: "Official",
    locked: "Locked",
    notAssessed: "Not Assessed",
    assessor: "Assessor",
    signature: "Signature",
    print: "Print",
    activity: "Simulation Practice",
    notes: "Key Notes",
    quiz: "KT Quiz",
    invalid:
      "Enter a valid student full name and student ID before opening the dashboard."
  }
};

const missions = [
  {
    id: 1,
    code: "KP01",
    titleBm: "Analisis Job Request / Change Order",
    titleEn: "Analyse Job Request / Change Order",
    scopeBm: "Fahami, semak dan sahkan arahan kerja sebelum kerja set-up komputer dimulakan.",
    scopeEn: "Understand, check and confirm the work instruction before computer setup begins.",
    notesBm: [
      "Job request ialah dokumen atau arahan rasmi yang menerangkan kerja set-up komputer yang perlu dibuat oleh juruteknik.",
      "Maklumat wajib dalam job request termasuk nama pengguna, lokasi kerja, jenis komputer, spesifikasi diperlukan, perisian, periferal, akses rangkaian dan tarikh siap.",
      "Change order digunakan apabila terdapat perubahan selepas arahan asal dikeluarkan, contohnya tambah RAM, tukar SSD, ubah OS, tambah printer atau ubah lokasi pemasangan.",
      "Juruteknik mesti menyemak skop kerja supaya tidak memasang komponen atau perisian yang tidak diminta.",
      "Keperluan pengguna perlu dikaitkan dengan tujuan kerja. Contohnya komputer pejabat perlukan aplikasi dokumen, komputer reka bentuk perlukan RAM/GPU lebih tinggi, dan komputer kaunter perlukan printer atau scanner.",
      "Risiko awal mesti dikenal pasti sebelum kerja bermula, termasuk data lama pengguna, lesen perisian, keserasian hardware, bekalan elektrik, port rangkaian, masa kerja dan kelulusan penyelia.",
      "Maklumat yang tidak jelas perlu disahkan dengan penyelia atau pengguna sebelum pemasangan dibuat.",
      "Hasil analisis perlu ditukar kepada checklist kerja supaya penyediaan tools, hardware dan software pada KP02 lebih tepat."
    ],
    notesEn: [
      "A job request is an official document or instruction that explains the computer setup work required from the technician.",
      "Required information includes user name, work location, computer type, required specification, software, peripherals, network access and due date.",
      "A change order is used when the original instruction changes, such as adding RAM, changing SSD, changing OS, adding a printer or changing setup location.",
      "The technician must check the work scope to avoid installing components or software that were not requested.",
      "User needs must match the work purpose. For example, an office PC needs document apps, a design PC needs higher RAM/GPU, and a counter PC may need a printer or scanner.",
      "Initial risks must be identified before work starts, including user data, software licence, hardware compatibility, power supply, network port, work time and supervisor approval.",
      "Unclear information must be confirmed with the supervisor or user before installation is done.",
      "The analysis result should become a work checklist so tools, hardware and software preparation in KP02 is more accurate."
    ],
    activityBm: "Analisis satu tiket kerja sebenar: kenal pasti skop, perubahan, risiko, keperluan pengguna dan checklist sebelum kerja dimulakan.",
    activityEn: "Analyse a realistic work ticket: identify scope, changes, risks, user needs and checklist items before work begins."
  },
  {
    id: 2,
    code: "KP02",
    titleBm: "Penyediaan Tools, Hardware dan Software",
    titleEn: "Prepare Tools, Hardware and Software",
    scopeBm: "Sediakan peralatan kerja, komponen komputer dan perisian berdasarkan job request sebelum pemasangan.",
    scopeEn: "Prepare work tools, computer components and software based on the job request before setup.",
    notesBm: [
      "Penyediaan KP02 bermula selepas analisis KP01 selesai. Juruteknik perlu merujuk job request dan checklist supaya tools, hardware dan software yang disediakan sepadan dengan kerja sebenar.",
      "Tools asas termasuk pemutar skru Phillips, anti-static wrist strap, anti-static mat, bekas skru, cable tie, thermal paste, flashlight kecil, blower/berus lembut dan kain microfiber.",
      "Hardware perlu disemak dari segi jenis, kuantiti dan keserasian. Contohnya motherboard mesti sesuai dengan socket CPU, jenis RAM, jenis storage, casing dan kapasiti PSU.",
      "Software perlu disediakan lebih awal seperti installer sistem operasi, driver chipset, driver network, driver graphic, browser, aplikasi pejabat, antivirus dan utiliti asas.",
      "Media pemasangan seperti USB bootable perlu diuji sebelum digunakan. Fail installer yang rosak atau USB tidak boot boleh melambatkan kerja pemasangan.",
      "Keselamatan kerja wajib dipatuhi: matikan bekalan kuasa, elakkan ESD, jangan pegang pin/contacts komponen, dan susun skru supaya tidak hilang.",
      "Lesen perisian, versi OS dan keperluan organisasi perlu disahkan. Jangan pasang software yang tiada arahan atau tiada lesen sah.",
      "Meja kerja perlu kemas, terang dan bebas cecair. Komponen sensitif seperti CPU, RAM dan motherboard perlu diletakkan di kawasan selamat.",
      "Semua item mesti ditanda dalam checklist sebelum pemasangan. Jika ada item tidak cukup, juruteknik perlu maklumkan penyelia sebelum meneruskan kerja."
    ],
    notesEn: [
      "KP02 preparation starts after KP01 analysis. The technician must refer to the job request and checklist so tools, hardware and software match the actual work.",
      "Basic tools include Phillips screwdriver, anti-static wrist strap, anti-static mat, screw tray, cable ties, thermal paste, small flashlight, blower/soft brush and microfiber cloth.",
      "Hardware must be checked by type, quantity and compatibility. For example, the motherboard must match CPU socket, RAM type, storage type, casing and PSU capacity.",
      "Software should be prepared early, such as operating system installer, chipset driver, network driver, graphic driver, browser, office applications, antivirus and basic utilities.",
      "Installation media such as bootable USB must be tested before use. A corrupted installer or non-bootable USB can delay setup work.",
      "Work safety must be followed: switch off power, prevent ESD, avoid touching component pins/contacts, and organise screws so they are not lost.",
      "Software licences, OS version and organisation requirements must be confirmed. Do not install software that is not requested or not properly licensed.",
      "The workbench must be tidy, bright and free from liquids. Sensitive components such as CPU, RAM and motherboard must be placed in a safe area.",
      "Every item must be ticked in the checklist before installation. If an item is missing, the technician must inform the supervisor before continuing."
    ],
    activityBm: "Sediakan kit kerja lengkap berdasarkan tiket KP01: asingkan tools, hardware, software, keselamatan dan item yang perlu disahkan.",
    activityEn: "Prepare a complete work kit based on the KP01 ticket: separate tools, hardware, software, safety items and items requiring confirmation."
  },
  {
    id: 3,
    code: "KP03",
    titleBm: "Perkakasan dan Peralatan Komputer",
    titleEn: "Computer Hardware and Equipment",
    scopeBm: "Kenal pasti komponen komputer, kabel, port dan fungsi perkakasan sebelum kerja pemasangan.",
    scopeEn: "Identify computer components, cables, ports and hardware functions before installation work.",
    notesBm: [
      "Perkakasan komputer ialah semua komponen fizikal yang membentuk sistem komputer, termasuk unit sistem, monitor, keyboard, mouse, printer, kabel dan peralatan sokongan.",
      "Motherboard ialah papan utama yang menghubungkan CPU, RAM, storage, expansion card, port I/O dan sambungan kuasa. Semua komponen utama perlu serasi dengan motherboard.",
      "CPU berfungsi memproses arahan komputer. Semakan penting termasuk jenis socket, generasi processor, bilangan core/thread dan keperluan cooler.",
      "RAM menyimpan data sementara ketika komputer sedang beroperasi. Juruteknik perlu semak jenis RAM seperti DDR3, DDR4 atau DDR5, kapasiti dan slot yang sesuai.",
      "Storage menyimpan sistem operasi, aplikasi dan data pengguna. HDD sesuai untuk kapasiti besar, SSD lebih laju, manakala NVMe M.2 memberi prestasi lebih tinggi jika motherboard menyokongnya.",
      "PSU membekalkan kuasa kepada motherboard, CPU, storage dan GPU. Kapasiti watt, connector 24-pin, CPU 4/8-pin dan PCIe perlu disemak sebelum pemasangan.",
      "GPU atau graphics card memproses paparan grafik. Ia penting untuk kerja grafik, video, 3D dan paparan beresolusi tinggi.",
      "Port dan kabel perlu dikenal pasti mengikut fungsi. Contohnya HDMI/DisplayPort untuk paparan, USB untuk periferal, RJ45 untuk rangkaian, audio jack untuk bunyi dan SATA untuk storage.",
      "Periferal seperti monitor, keyboard, mouse, printer, scanner dan speaker perlu dipilih mengikut keperluan pengguna dalam job request.",
      "Juruteknik perlu membezakan komponen dalaman, komponen luaran, kabel data, kabel kuasa dan peralatan rangkaian supaya set-up lebih tepat dan selamat."
    ],
    notesEn: [
      "Computer hardware refers to all physical components that form a computer system, including the system unit, monitor, keyboard, mouse, printer, cables and support equipment.",
      "The motherboard is the main board that connects CPU, RAM, storage, expansion card, I/O ports and power connections. Main components must be compatible with the motherboard.",
      "The CPU processes computer instructions. Important checks include socket type, processor generation, core/thread count and cooling requirement.",
      "RAM stores temporary data while the computer is operating. The technician must check RAM type such as DDR3, DDR4 or DDR5, capacity and suitable slots.",
      "Storage keeps the operating system, applications and user data. HDD is suitable for large capacity, SSD is faster, while NVMe M.2 gives higher performance if supported by the motherboard.",
      "The PSU supplies power to the motherboard, CPU, storage and GPU. Wattage capacity, 24-pin connector, CPU 4/8-pin and PCIe connectors must be checked before installation.",
      "The GPU or graphics card processes display graphics. It is important for graphics, video, 3D and high-resolution display work.",
      "Ports and cables must be identified by function. For example, HDMI/DisplayPort for display, USB for peripherals, RJ45 for networking, audio jack for sound and SATA for storage.",
      "Peripherals such as monitor, keyboard, mouse, printer, scanner and speaker must be selected according to user needs in the job request.",
      "The technician must distinguish internal components, external components, data cables, power cables and network equipment so setup is more accurate and safe."
    ],
    activityBm: "Kenal pasti komponen pada simulasi motherboard, padankan kabel dengan port, dan tentukan fungsi setiap perkakasan.",
    activityEn: "Identify components on a motherboard simulation, match cables to ports, and determine each hardware function."
  },
  {
    id: 4,
    code: "KP04",
    titleBm: "Peralatan Pemasangan Perkakasan",
    titleEn: "Hardware Installation Tools",
    scopeBm: "Gunakan peralatan pemasangan dengan betul dan selamat.",
    scopeEn: "Use installation tools correctly and safely.",
    notesBm: [
      "Matikan bekalan kuasa sebelum membuka casing.",
      "Gunakan anti-static wrist strap untuk mengurangkan risiko ESD.",
      "Jangan gunakan daya berlebihan ketika memasang RAM atau kabel.",
      "Simpan skru mengikut jenis supaya pemasangan semula lebih kemas."
    ],
    notesEn: [
      "Turn off the power supply before opening the casing.",
      "Use an anti-static wrist strap to reduce ESD risk.",
      "Do not use excessive force when installing RAM or cables.",
      "Sort screws by type to make reassembly cleaner."
    ],
    activityBm: "Susun prosedur keselamatan sebelum membuka CPU.",
    activityEn: "Arrange the safety procedure before opening a PC case."
  },
  {
    id: 5,
    code: "KP05",
    titleBm: "Fungsi Komponen Perkakasan Komputer",
    titleEn: "Computer Hardware Component Functions",
    scopeBm: "Terangkan fungsi komponen utama dalam unit sistem komputer.",
    scopeEn: "Explain the functions of main components in a computer system unit.",
    notesBm: [
      "CPU menentukan kelajuan pemprosesan mengikut core, thread dan clock speed.",
      "RAM membantu sistem menjalankan aplikasi secara sementara dan pantas.",
      "SSD memberi masa boot dan capaian fail yang lebih cepat berbanding HDD.",
      "GPU memproses paparan grafik, terutama untuk reka bentuk, video dan 3D."
    ],
    notesEn: [
      "CPU processing speed depends on cores, threads and clock speed.",
      "RAM helps the system run applications quickly in temporary memory.",
      "SSD gives faster boot and file access than HDD.",
      "GPU processes graphics, especially for design, video and 3D work."
    ],
    activityBm: "Pilih komponen yang sesuai untuk komputer pejabat, reka bentuk grafik dan bengkel latihan.",
    activityEn: "Choose suitable components for an office PC, graphic design PC and training lab PC."
  },
  {
    id: 6,
    code: "KP06",
    titleBm: "Pemasangan Motherboard dan CPU",
    titleEn: "Motherboard and CPU Installation",
    scopeBm: "Pasang motherboard, CPU, cooler dan RAM mengikut prosedur.",
    scopeEn: "Install motherboard, CPU, cooler and RAM according to procedure.",
    notesBm: [
      "Pastikan standoff casing sepadan dengan lubang motherboard.",
      "Letakkan CPU mengikut tanda segitiga pada socket.",
      "Sapukan thermal paste secara sederhana sebelum memasang cooler.",
      "Tekan RAM pada slot yang betul sehingga klip terkunci."
    ],
    notesEn: [
      "Ensure casing standoffs match the motherboard holes.",
      "Place the CPU according to the triangle mark on the socket.",
      "Apply a moderate amount of thermal paste before fitting the cooler.",
      "Press RAM into the correct slot until the clips lock."
    ],
    activityBm: "Simulasi urutan: standoff, motherboard, CPU, thermal paste, cooler, RAM.",
    activityEn: "Sequence simulation: standoff, motherboard, CPU, thermal paste, cooler, RAM."
  },
  {
    id: 7,
    code: "KP07",
    titleBm: "Pemasangan Storage dan Power Supply",
    titleEn: "Storage and Power Supply Installation",
    scopeBm: "Pasang storage, PSU dan sambungan kuasa dengan kemas.",
    scopeEn: "Install storage, PSU and power connections neatly.",
    notesBm: [
      "Pasang SSD/HDD pada bay atau slot M.2 yang sesuai.",
      "Sambungkan kabel SATA data dan SATA power untuk drive SATA.",
      "Pastikan kabel 24-pin motherboard dan 8-pin CPU dipasang ketat.",
      "Kemas kabel supaya aliran udara casing tidak terganggu."
    ],
    notesEn: [
      "Install SSD/HDD in the correct bay or M.2 slot.",
      "Connect SATA data and SATA power cables for SATA drives.",
      "Ensure 24-pin motherboard and 8-pin CPU power cables are firmly fitted.",
      "Manage cables so casing airflow is not blocked."
    ],
    activityBm: "Kenal pasti kabel PSU yang perlu dipasang pada motherboard, CPU dan storage.",
    activityEn: "Identify PSU cables needed for motherboard, CPU and storage."
  },
  {
    id: 8,
    code: "KP08",
    titleBm: "Pemasangan Sistem Operasi",
    titleEn: "Operating System Installation",
    scopeBm: "Pasang sistem operasi mengikut tetapan boot dan partisi.",
    scopeEn: "Install an operating system using correct boot and partition settings.",
    notesBm: [
      "Tetapkan boot priority kepada USB installer atau media pemasangan.",
      "Pilih edisi OS yang betul mengikut job request.",
      "Buat partisi mengikut keperluan kerja dan polisi organisasi.",
      "Lengkapkan tetapan wilayah, akaun dan kata laluan dengan selamat."
    ],
    notesEn: [
      "Set boot priority to the USB installer or installation media.",
      "Choose the correct OS edition based on the job request.",
      "Create partitions according to work needs and organisation policy.",
      "Complete region, account and password settings securely."
    ],
    activityBm: "Susun langkah pemasangan OS dari boot USB hingga desktop pertama.",
    activityEn: "Arrange OS installation steps from USB boot to first desktop."
  },
  {
    id: 9,
    code: "KP09",
    titleBm: "Pemasangan Driver",
    titleEn: "Driver Installation",
    scopeBm: "Pasang dan sahkan driver perkakasan selepas OS siap.",
    scopeEn: "Install and verify hardware drivers after OS setup.",
    notesBm: [
      "Semak Device Manager untuk kenal pasti driver yang belum lengkap.",
      "Pasang chipset driver sebelum driver lain jika disediakan.",
      "Gunakan driver rasmi daripada pengeluar perkakasan.",
      "Restart komputer selepas pemasangan driver penting."
    ],
    notesEn: [
      "Check Device Manager to identify missing drivers.",
      "Install chipset driver before other drivers when available.",
      "Use official drivers from the hardware manufacturer.",
      "Restart the computer after important driver installation."
    ],
    activityBm: "Tentukan tindakan apabila Device Manager memaparkan Unknown Device.",
    activityEn: "Decide what to do when Device Manager shows Unknown Device."
  },
  {
    id: 10,
    code: "KP10",
    titleBm: "Pemasangan Aplikasi Asas",
    titleEn: "Basic Application Installation",
    scopeBm: "Pasang aplikasi mengikut keperluan pengguna dan organisasi.",
    scopeEn: "Install applications according to user and organisation needs.",
    notesBm: [
      "Pasang aplikasi pejabat, browser, PDF reader, antivirus dan utiliti asas.",
      "Pastikan lesen perisian sah dan sesuai dengan polisi organisasi.",
      "Elakkan memasang aplikasi tidak berkaitan dengan job request.",
      "Uji aplikasi selepas pemasangan untuk pastikan boleh dibuka."
    ],
    notesEn: [
      "Install office apps, browser, PDF reader, antivirus and basic utilities.",
      "Ensure software licences are valid and match organisation policy.",
      "Avoid installing applications unrelated to the job request.",
      "Test applications after installation to ensure they open."
    ],
    activityBm: "Pilih aplikasi wajib untuk komputer pejabat baharu.",
    activityEn: "Select required applications for a new office computer."
  },
  {
    id: 11,
    code: "KP11",
    titleBm: "Set-Up Peripherals",
    titleEn: "Peripheral Set-Up",
    scopeBm: "Sambung dan konfigurasi periferal komputer.",
    scopeEn: "Connect and configure computer peripherals.",
    notesBm: [
      "Sambung monitor, papan kekunci, tetikus, printer dan speaker jika diperlukan.",
      "Pilih port yang sesuai seperti HDMI, DisplayPort, USB atau audio jack.",
      "Pasang driver printer atau scanner jika OS tidak mengesan automatik.",
      "Uji setiap periferal sebelum serahan kepada pengguna."
    ],
    notesEn: [
      "Connect monitor, keyboard, mouse, printer and speakers when required.",
      "Choose suitable ports such as HDMI, DisplayPort, USB or audio jack.",
      "Install printer or scanner drivers if the OS does not detect them automatically.",
      "Test each peripheral before handover."
    ],
    activityBm: "Padankan periferal dengan port yang betul.",
    activityEn: "Match each peripheral with the correct port."
  },
  {
    id: 12,
    code: "KP12",
    titleBm: "Konfigurasi Rangkaian Asas",
    titleEn: "Basic Network Configuration",
    scopeBm: "Tetapkan sambungan rangkaian asas dan uji capaian.",
    scopeEn: "Configure basic network connection and test access.",
    notesBm: [
      "Semak sambungan kabel LAN atau Wi-Fi.",
      "Tetapkan IP automatik atau statik mengikut arahan kerja.",
      "Uji capaian menggunakan ping, browser dan status network adapter.",
      "Catat maklumat IP, gateway dan DNS dalam laporan jika diperlukan."
    ],
    notesEn: [
      "Check LAN cable or Wi-Fi connection.",
      "Set automatic or static IP based on the work instruction.",
      "Test access using ping, browser and network adapter status.",
      "Record IP, gateway and DNS details in the report if required."
    ],
    activityBm: "Lengkapkan tetapan IP untuk komputer makmal latihan.",
    activityEn: "Complete IP settings for a training lab computer."
  },
  {
    id: 13,
    code: "KP13",
    titleBm: "Unit Functionality Test",
    titleEn: "Unit Functionality Test",
    scopeBm: "Uji fungsi komputer selepas pemasangan lengkap.",
    scopeEn: "Test computer functions after complete setup.",
    notesBm: [
      "Uji boot, login, storage, audio, paparan, rangkaian dan aplikasi.",
      "Semak suhu asas dan bunyi kipas yang tidak normal.",
      "Pastikan semua port penting boleh digunakan.",
      "Catat keputusan ujian sebagai bukti kerja siap."
    ],
    notesEn: [
      "Test boot, login, storage, audio, display, network and applications.",
      "Check basic temperature and abnormal fan noise.",
      "Ensure important ports are usable.",
      "Record test results as evidence of completed work."
    ],
    activityBm: "Tandakan item pass/fail dalam senarai semak ujian fungsi.",
    activityEn: "Mark pass/fail items in a functionality test checklist."
  },
  {
    id: 14,
    code: "KP14",
    titleBm: "Troubleshooting Selepas Set-Up",
    titleEn: "Post-Setup Troubleshooting",
    scopeBm: "Kenal pasti masalah biasa selepas pemasangan komputer.",
    scopeEn: "Identify common problems after computer setup.",
    notesBm: [
      "Jika komputer tidak hidup, semak kabel kuasa, PSU switch dan sambungan front panel.",
      "Jika tiada paparan, semak monitor, kabel video, RAM dan GPU.",
      "Jika OS tidak boot, semak boot order dan status storage.",
      "Rekod simptom, punca dan tindakan pembetulan."
    ],
    notesEn: [
      "If the PC does not power on, check power cable, PSU switch and front panel connection.",
      "If there is no display, check monitor, video cable, RAM and GPU.",
      "If the OS does not boot, check boot order and storage status.",
      "Record symptoms, causes and corrective actions."
    ],
    activityBm: "Pilih punca paling mungkin untuk simptom tiada paparan selepas pemasangan RAM.",
    activityEn: "Choose the most likely cause for no display after RAM installation."
  },
  {
    id: 15,
    code: "KP15",
    titleBm: "Penyediaan Laporan Sistem Komputer",
    titleEn: "Computer System Setup Report",
    scopeBm: "Sediakan laporan kerja pemasangan komputer yang lengkap.",
    scopeEn: "Prepare a complete computer setup work report.",
    notesBm: [
      "Masukkan maklumat pengguna, lokasi, tarikh dan nombor aset jika ada.",
      "Catat spesifikasi komputer, OS, aplikasi, driver dan periferal.",
      "Lampirkan keputusan ujian fungsi dan isu yang telah diselesaikan.",
      "Dapatkan pengesahan penyelia atau pengguna mengikut prosedur."
    ],
    notesEn: [
      "Include user details, location, date and asset number if available.",
      "Record computer specification, OS, applications, drivers and peripherals.",
      "Attach functionality test results and resolved issues.",
      "Obtain supervisor or user confirmation according to procedure."
    ],
    activityBm: "Lengkapkan borang laporan akhir berdasarkan senario pemasangan komputer.",
    activityEn: "Complete a final report form based on a computer setup scenario."
  }
];

const quizBank = {
  bm: [
    ["Apakah tujuan utama job request?", ["Menentukan kerja yang perlu dibuat", "Memadam semua data", "Menukar warna casing", "Membuang driver"], 0],
    ["Apakah alat keselamatan untuk elak ESD?", ["Cable tie", "Anti-static wrist strap", "HDMI cable", "Thermal pad"], 1],
    ["Komponen manakah menyimpan data sementara?", ["SSD", "PSU", "RAM", "Monitor"], 2],
    ["Sebelum membuka casing, tindakan pertama ialah", ["Matikan bekalan kuasa", "Pasang printer", "Format OS", "Buka browser"], 0],
    ["Thermal paste digunakan antara", ["CPU dan cooler", "Monitor dan HDMI", "RAM dan slot", "SSD dan SATA"], 0],
    ["Standoff casing penting untuk", ["Elak motherboard menyentuh casing secara terus", "Tambah kelajuan internet", "Memasang printer", "Membuang virus"], 0],
    ["Kabel 24-pin PSU biasanya disambung kepada", ["Monitor", "Motherboard", "Keyboard", "Speaker"], 1],
    ["Boot priority perlu diubah untuk", ["Memasang OS melalui USB", "Menaikkan volume", "Mencetak laporan", "Menukar wallpaper"], 0],
    ["Device Manager digunakan untuk semak", ["Kehilangan driver", "Nama pengguna", "Warna desktop", "Saiz meja"], 0],
    ["Perisian yang dipasang mestilah", ["Sah dan mengikut polisi", "Sentiasa percuma sahaja", "Tidak perlu diuji", "Dipilih secara rawak"], 0],
    ["Printer ialah contoh", ["Storage", "Peripheral", "CPU", "RAM"], 1],
    ["Arahan ping digunakan untuk", ["Uji capaian rangkaian", "Pasang RAM", "Format SSD", "Cetak fail"], 0],
    ["Ujian fungsi dibuat untuk", ["Mengesahkan komputer berfungsi selepas set-up", "Membuang semua aplikasi", "Menukar casing", "Menambah akaun media sosial"], 0],
    ["Jika tiada paparan selepas set-up, semak", ["Monitor, kabel video, RAM atau GPU", "Aplikasi pejabat sahaja", "Wallpaper", "Nama fail"], 0],
    ["Laporan akhir perlu mengandungi", ["Spesifikasi, kerja dibuat dan keputusan ujian", "Cerita bebas", "Muzik kegemaran", "Password peribadi"], 0]
  ],
  en: [
    ["What is the main purpose of a job request?", ["To define the required work", "To delete all data", "To change casing colour", "To remove drivers"], 0],
    ["Which safety tool helps prevent ESD?", ["Cable tie", "Anti-static wrist strap", "HDMI cable", "Thermal pad"], 1],
    ["Which component stores temporary data?", ["SSD", "PSU", "RAM", "Monitor"], 2],
    ["Before opening the casing, the first action is to", ["Turn off power", "Install printer", "Format OS", "Open browser"], 0],
    ["Thermal paste is applied between", ["CPU and cooler", "Monitor and HDMI", "RAM and slot", "SSD and SATA"], 0],
    ["Casing standoffs are important to", ["Prevent direct contact between motherboard and casing", "Increase internet speed", "Install printer", "Remove virus"], 0],
    ["The 24-pin PSU cable is usually connected to the", ["Monitor", "Motherboard", "Keyboard", "Speaker"], 1],
    ["Boot priority is changed to", ["Install OS from USB", "Increase volume", "Print a report", "Change wallpaper"], 0],
    ["Device Manager is used to check", ["Missing drivers", "Username", "Desktop colour", "Desk size"], 0],
    ["Installed software must be", ["Legal and policy-compliant", "Always free only", "Untested", "Randomly selected"], 0],
    ["A printer is an example of a", ["Storage device", "Peripheral", "CPU", "RAM"], 1],
    ["The ping command is used to", ["Test network reachability", "Install RAM", "Format SSD", "Print files"], 0],
    ["Functionality testing is done to", ["Confirm the computer works after setup", "Remove all apps", "Change casing", "Add social media accounts"], 0],
    ["If there is no display after setup, check", ["Monitor, video cable, RAM or GPU", "Office app only", "Wallpaper", "Filename"], 0],
    ["The final report should contain", ["Specification, completed work and test results", "Free story", "Favourite music", "Personal password"], 0]
  ]
};

const kp01Quiz = {
  bm: [
    [
      "Apakah maksud job request dalam kerja Computer System Set-Up?",
      ["Senarai harga komputer", "Arahan rasmi kerja yang perlu dibuat", "Fail backup pengguna", "Nama jenama komputer"],
      1
    ],
    [
      "Maklumat manakah paling penting untuk menentukan skop kerja?",
      ["Warna wallpaper", "Jenis muzik pengguna", "Keperluan hardware, software dan lokasi kerja", "Saiz meja guru"],
      2
    ],
    [
      "Bilakah change order digunakan?",
      ["Apabila arahan asal berubah selepas job request dikeluarkan", "Apabila komputer sudah siap dihantar", "Apabila pelajar tamat kuiz", "Apabila casing dibersihkan"],
      0
    ],
    [
      "Contoh change order yang betul ialah",
      ["Tukar nama fail laporan", "Buka browser untuk ujian", "Padam nota lama", "Naik taraf RAM daripada 8GB kepada 16GB"],
      3
    ],
    [
      "Mengapa juruteknik perlu mengesahkan maklumat yang tidak jelas?",
      ["Supaya kerja tidak salah skop dan tidak membazir masa", "Supaya boleh terus format semua komputer", "Supaya tidak perlu buat laporan", "Supaya semua aplikasi dipasang secara rawak"],
      0
    ],
    [
      "Jika pengguna perlukan komputer untuk reka bentuk asas, keperluan yang lebih sesuai ialah",
      ["Printer dot matrix sahaja", "Tiada akses internet", "RAM lebih tinggi dan storage mencukupi", "Keyboard tanpa monitor"],
      2
    ],
    [
      "Antara berikut, yang manakah risiko awal sebelum kerja set-up?",
      ["Nombor telefon kedai", "Warna kerusi", "Susunan ikon desktop", "Lesen perisian belum disahkan"],
      3
    ],
    [
      "Apakah hasil akhir analisis KP01 yang membantu KP02?",
      ["Checklist tools, hardware dan software", "Gambar bebas", "Lagu latar", "Nama kumpulan WhatsApp"],
      0
    ],
    [
      "Jika job request menyatakan 'printer rangkaian diperlukan', juruteknik perlu semak",
      ["Jenis casing sahaja", "IP printer, driver dan sambungan rangkaian", "Wallpaper pengguna", "Saiz font nota"],
      1
    ],
    [
      "Apakah tindakan terbaik jika tarikh siap terlalu singkat tetapi change order menambah kerja?",
      ["Abaikan change order", "Pasang komponen secara rawak", "Maklumkan penyelia dan dapatkan pengesahan keutamaan kerja", "Serahkan komputer tanpa ujian"],
      2
    ]
  ],
  en: [
    [
      "What does job request mean in Computer System Set-Up work?",
      ["Computer price list", "Official instruction for the required work", "User backup file", "Computer brand name"],
      1
    ],
    [
      "Which information is most important for deciding the work scope?",
      ["Wallpaper colour", "User's music type", "Hardware, software and work location requirements", "Teacher's desk size"],
      2
    ],
    [
      "When is a change order used?",
      ["When the original instruction changes after the job request is issued", "After the computer has already been delivered", "When students finish the quiz", "When the casing is cleaned"],
      0
    ],
    [
      "Which is a correct example of a change order?",
      ["Change report filename", "Open browser for testing", "Delete old notes", "Upgrade RAM from 8GB to 16GB"],
      3
    ],
    [
      "Why must a technician confirm unclear information?",
      ["To avoid wrong work scope and wasted time", "To format every computer immediately", "To avoid preparing a report", "To install all applications randomly"],
      0
    ],
    [
      "If the user needs a computer for basic design work, the more suitable requirement is",
      ["Dot matrix printer only", "No internet access", "Higher RAM and enough storage", "Keyboard without monitor"],
      2
    ],
    [
      "Which item is an initial risk before setup work?",
      ["Shop phone number", "Chair colour", "Desktop icon arrangement", "Software licence not confirmed"],
      3
    ],
    [
      "What final output from KP01 helps KP02?",
      ["Tools, hardware and software checklist", "Random picture", "Background song", "WhatsApp group name"],
      0
    ],
    [
      "If the job request states 'network printer required', the technician should check",
      ["Casing type only", "Printer IP, driver and network connection", "User wallpaper", "Note font size"],
      1
    ],
    [
      "What is the best action if the deadline is short but the change order adds more work?",
      ["Ignore the change order", "Install parts randomly", "Inform the supervisor and confirm work priority", "Hand over the PC without testing"],
      2
    ]
  ]
};

const kp02Quiz = {
  bm: [
    [
      "Apakah rujukan utama sebelum menyediakan tools, hardware dan software?",
      ["Warna casing komputer", "Job request dan checklist KP01", "Susunan meja kelas", "Nama browser sahaja"],
      1
    ],
    [
      "Antara berikut, yang manakah termasuk tools asas kerja set-up komputer?",
      ["Pemutar skru Phillips dan anti-static wrist strap", "Kertas warna dan marker", "Speaker besar dan mikrofon", "Kamera telefon sahaja"],
      0
    ],
    [
      "Mengapa anti-static wrist strap digunakan?",
      ["Untuk menguatkan Wi-Fi", "Untuk menambah storage", "Untuk mengurangkan risiko ESD pada komponen", "Untuk memasang aplikasi"],
      2
    ],
    [
      "Contoh hardware yang perlu disemak sebelum pemasangan ialah",
      ["Browser, PDF reader dan antivirus", "Meja, kerusi dan papan putih", "Laporan dan borang", "Motherboard, CPU, RAM, SSD dan PSU"],
      3
    ],
    [
      "Apakah maksud semakan keserasian hardware?",
      ["Memastikan komponen sesuai antara satu sama lain", "Memilih casing paling cantik", "Menguji lagu pembesar suara", "Menukar nama pengguna"],
      0
    ],
    [
      "Software manakah patut disediakan sebelum pemasangan OS dan aplikasi?",
      ["Game rawak", "Installer OS, driver dan aplikasi wajib", "Gambar wallpaper sahaja", "Fail muzik pengguna"],
      1
    ],
    [
      "Mengapa USB bootable perlu diuji dahulu?",
      ["Supaya pemasangan tidak terganggu oleh USB yang gagal boot", "Supaya warna USB berubah", "Supaya monitor lebih terang", "Supaya keyboard lebih laju"],
      0
    ],
    [
      "Apakah tindakan betul jika lesen perisian belum disahkan?",
      ["Pasang juga tanpa maklumkan sesiapa", "Guna software cetak rompak", "Maklumkan penyelia dan tunggu pengesahan", "Padam semua driver"],
      2
    ],
    [
      "Meja kerja yang selamat perlu",
      ["Penuh dengan cecair", "Gelap dan sempit", "Berselerak dengan skru", "Kemas, terang dan bebas cecair"],
      3
    ],
    [
      "Jika item hardware tidak cukup sebelum kerja dimulakan, juruteknik perlu",
      ["Maklumkan penyelia sebelum meneruskan kerja", "Abaikan dan terus pasang", "Ganti dengan apa-apa komponen", "Tutup laporan"],
      0
    ]
  ],
  en: [
    [
      "What is the main reference before preparing tools, hardware and software?",
      ["Computer casing colour", "Job request and KP01 checklist", "Classroom table arrangement", "Browser name only"],
      1
    ],
    [
      "Which item is part of basic computer setup tools?",
      ["Phillips screwdriver and anti-static wrist strap", "Coloured paper and marker", "Large speaker and microphone", "Phone camera only"],
      0
    ],
    [
      "Why is an anti-static wrist strap used?",
      ["To strengthen Wi-Fi", "To add storage", "To reduce ESD risk to components", "To install applications"],
      2
    ],
    [
      "Which is an example of hardware that must be checked before installation?",
      ["Browser, PDF reader and antivirus", "Table, chair and whiteboard", "Report and form", "Motherboard, CPU, RAM, SSD and PSU"],
      3
    ],
    [
      "What does hardware compatibility checking mean?",
      ["Ensuring components are suitable for each other", "Choosing the nicest casing", "Testing speaker music", "Changing the username"],
      0
    ],
    [
      "Which software should be prepared before OS and application setup?",
      ["Random games", "OS installer, drivers and required applications", "Wallpaper image only", "User music files"],
      1
    ],
    [
      "Why should a bootable USB be tested first?",
      ["To avoid setup disruption caused by a USB that cannot boot", "To change USB colour", "To make the monitor brighter", "To make keyboard faster"],
      0
    ],
    [
      "What is the correct action if software licence is not confirmed?",
      ["Install it without informing anyone", "Use pirated software", "Inform the supervisor and wait for confirmation", "Delete all drivers"],
      2
    ],
    [
      "A safe workbench should be",
      ["Full of liquids", "Dark and cramped", "Messy with screws", "Tidy, bright and free from liquids"],
      3
    ],
    [
      "If a hardware item is missing before work starts, the technician should",
      ["Inform the supervisor before continuing work", "Ignore and continue installation", "Replace it with any component", "Close the report"],
      0
    ]
  ]
};

const state = loadState();

function loadState() {
  const fallback = {
    lang: "bm",
    profile: null,
    progress: {
      unlocked: 1,
      scores: {},
      completed: [],
      records: {}
    }
  };

  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
    const merged = { ...fallback, ...stored };
    merged.progress = {
      ...fallback.progress,
      ...(stored?.progress || {})
    };
    merged.progress.records = merged.progress.records || {};
    merged.progress.scores = merged.progress.scores || {};
    merged.progress.completed = merged.progress.completed || [];
    missions.forEach((mission) => {
      const score = merged.progress.scores[mission.id];
      if (score !== undefined && !merged.progress.records[mission.id]) {
        const passed = Number(score) >= PASS_MARK;
        merged.progress.records[mission.id] = {
          kp: mission.code,
          kt: `KT${String(mission.id).padStart(2, "0")}`,
          score: Number(score),
          correct: null,
          total: null,
          status: passed ? "TERAMPIL" : "BELUM TERAMPIL",
          official: passed,
          locked: passed,
          passMark: PASS_MARK,
          date: new Date().toISOString(),
          studentName: merged.profile?.name || "",
          studentId: merged.profile?.id || ""
        };
      }
    });
    return merged;
  } catch {
    return fallback;
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function t(key) {
  return text[state.lang][key];
}

function missionTitle(mission) {
  return state.lang === "bm" ? mission.titleBm : mission.titleEn;
}

function missionScope(mission) {
  return state.lang === "bm" ? mission.scopeBm : mission.scopeEn;
}

function missionNotes(mission) {
  return state.lang === "bm" ? mission.notesBm : mission.notesEn;
}

function ktCode(id) {
  return `KT${String(id).padStart(2, "0")}`;
}

function formatDate(value) {
  if (!value) return "-";
  return new Intl.DateTimeFormat(state.lang === "bm" ? "ms-MY" : "en-MY", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  }).format(new Date(value));
}

function createFormalRecord(id, score, correct, total) {
  const passed = score >= PASS_MARK;
  return {
    kp: missions.find((item) => item.id === id)?.code || `KP${String(id).padStart(2, "0")}`,
    kt: ktCode(id),
    score,
    correct,
    total,
    status: passed ? "TERAMPIL" : "BELUM TERAMPIL",
    official: passed,
    locked: passed,
    passMark: PASS_MARK,
    date: new Date().toISOString(),
    studentName: state.profile?.name || "",
    studentId: state.profile?.id || ""
  };
}

function renderCollegeHeader() {
  return `
    <div class="college-header">
      <div class="college-logo">
        <img
          src="assets/logo-mentari.png?v=3"
          data-fallbacks="assets/logo-mentari.PNG?v=3|logo-mentari.png?v=3|logo-mentari.PNG?v=3|assets/Logo-Mentari.png?v=3"
          alt="Logo Kolej Kemahiran Mentari"
          onerror="handleLogoError(this);"
        >
        <span>LOGO<br>KOLEJ</span>
      </div>
      <div class="college-info">
        <strong>KOLEJ KEMAHIRAN MENTARI (L02432)</strong>
        <span>NO 22&amp;24, 1ST &amp; 3RD FLOOR, JALAN MERSING</span>
        <span>86000 KLUANG, JOHOR DARUL TAKZIM</span>
        <span>TEL : 07-7764455</span>
      </div>
    </div>
  `;
}

function handleLogoError(img) {
  const fallbacks = (img.dataset.fallbacks || "").split("|").filter(Boolean);
  const index = Number(img.dataset.fallbackIndex || "0");

  if (index < fallbacks.length) {
    img.dataset.fallbackIndex = String(index + 1);
    img.src = fallbacks[index];
    return;
  }

  img.style.display = "none";
  img.nextElementSibling.style.display = "grid";
}

function renderFormalResult(record) {
  if (!record) return "";
  const passed = record.status === "TERAMPIL";
  const officialText = record.official
    ? state.lang === "bm" ? "YA" : "YES"
    : state.lang === "bm" ? "BELUM RASMI" : "NOT OFFICIAL";
  const lockedText = record.locked
    ? state.lang === "bm" ? "YA" : "YES"
    : state.lang === "bm" ? "TIDAK" : "NO";

  return `
    <div class="formal-result ${passed ? "competent" : "not-yet"}">
      ${renderCollegeHeader()}
      <div class="formal-head">
        <div>
          <span class="eyebrow">${t("formalResult")}</span>
          <h2>${record.kt} - ${record.kp}</h2>
        </div>
        <strong class="formal-status">${record.status}</strong>
      </div>
      <div class="formal-grid">
        <div><span>${t("studentName")}</span><strong>${record.studentName}</strong></div>
        <div><span>${t("studentId")}</span><strong>${record.studentId}</strong></div>
        <div><span>${t("score")}</span><strong>${record.score}%</strong></div>
        <div><span>${t("resultDate")}</span><strong>${formatDate(record.date)}</strong></div>
        <div><span>${t("official")}</span><strong>${officialText}</strong></div>
        <div><span>${t("locked")}</span><strong>${lockedText}</strong></div>
      </div>
      <div class="signature-row">
        <div><span>${t("assessor")}</span><strong>________________________</strong></div>
        <div><span>${t("signature")}</span><strong>________________________</strong></div>
      </div>
    </div>
  `;
}

function validateProfile(name, id) {
  const cleanName = name.trim().replace(/\s+/g, " ");
  const cleanId = id.trim();
  const badNames = ["pelajar", "student", "test", "admin", "user", "nama", "abc", "demo"];
  const hasTwoWords = cleanName.split(" ").filter(Boolean).length >= 2;
  const hasLetters = /[a-zA-Z]/.test(cleanName);
  const generic = badNames.includes(cleanName.toLowerCase());
  const idOk = cleanId.length >= 4 && !["0000", "1234", "test", "admin"].includes(cleanId.toLowerCase());

  if (!hasTwoWords || !hasLetters || generic || !idOk) return null;
  return { name: cleanName, id: cleanId };
}

function render() {
  document.documentElement.lang = state.lang === "bm" ? "ms" : "en";
  if (!state.profile) {
    renderLogin();
    return;
  }
  renderDashboard();
}

function renderChrome(content) {
  document.getElementById("app").innerHTML = `
    <main class="shell">
      <header class="topbar">
        <div class="brand">
          <strong>COMPUTER SYSTEM SET-UP C01</strong>
          <span>${t("subtitle")}</span>
        </div>
        <div class="toolbar">
          <button class="btn" data-action="lang">BM / EN</button>
          ${state.profile ? `<button class="btn" data-action="profile">${t("profile")}</button>` : ""}
          ${state.profile ? `<button class="btn danger" data-action="logout">${t("logout")}</button>` : ""}
        </div>
      </header>
      ${content}
    </main>
  `;

  bindGlobalActions();
}

function renderLogin(error = "") {
  renderChrome(`
    <section class="hero">
      <div class="intro panel">
        <span class="eyebrow">IT-020-3:2013-C01</span>
        <h1>COMPUTER SYSTEM SET-UP</h1>
        <p class="lead">${t("intro")}</p>
        <p class="muted">${t("loginHint")}</p>
      </div>
      <form class="login panel" id="loginForm">
        <h2>${t("loginTitle")}</h2>
        ${error ? `<div class="error">${error}</div>` : ""}
        <div class="field">
          <label for="studentName">${t("fullName")}</label>
          <input id="studentName" autocomplete="name" placeholder="Contoh: Nurul Farhana">
        </div>
        <div class="field">
          <label for="studentId">${t("studentId")}</label>
          <input id="studentId" autocomplete="off" placeholder="Contoh: C01-001">
        </div>
        <button class="btn primary" type="submit">${t("enter")}</button>
      </form>
    </section>
  `);

  document.getElementById("loginForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const profile = validateProfile(
      document.getElementById("studentName").value,
      document.getElementById("studentId").value
    );

    if (!profile) {
      renderLogin(t("invalid"));
      return;
    }

    state.profile = profile;
    saveState();
    renderDashboard();
  });
}

function renderDashboard() {
  const passed = state.progress.completed.length;
  const scores = Object.values(state.progress.scores);
  const average = scores.length ? Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length) : 0;
  const percent = Math.round((passed / missions.length) * 100);
  const level = 1 + Math.floor(passed / 3);

  renderChrome(`
    <section>
      <div class="panel lesson-box">
        <span class="eyebrow">${t("dashboard")}</span>
        <h1>${state.profile.name}</h1>
        <p class="muted">${state.profile.id}</p>
      </div>
      <div class="stats">
        <div class="stat"><span>${t("progress")}</span><strong>${percent}%</strong></div>
        <div class="stat"><span>${t("passed")}</span><strong>${passed}/${missions.length}</strong></div>
        <div class="stat"><span>${t("average")}</span><strong>${average}%</strong></div>
        <div class="stat"><span>${t("level")}</span><strong>${level}</strong></div>
      </div>
      <div class="toolbar" style="justify-content:flex-start;margin-bottom:14px">
        <button class="btn primary" data-action="report">${t("report")}</button>
        <button class="btn warning" data-action="reset">${t("reset")}</button>
      </div>
      <div class="grid">
        ${missions.map(renderMissionCard).join("")}
      </div>
    </section>
  `);

  document.querySelectorAll("[data-open]").forEach((button) => {
    button.addEventListener("click", () => renderMission(Number(button.dataset.open)));
  });
}

function renderMissionCard(mission) {
  const locked = mission.id > state.progress.unlocked;
  const done = state.progress.completed.includes(mission.id);
  const score = state.progress.scores[mission.id];
  const record = state.progress.records[mission.id];
  const status = done ? t("completed") : locked ? t("locked") : t("open");
  const statusClass = done ? "pass" : locked ? "lock" : "";

  return `
    <article class="mission-card ${locked ? "locked" : ""} ${done ? "done" : ""}">
      <div>
        <div class="tag-row">
          <span class="tag">${mission.code}</span>
          <span class="tag ${statusClass}">${status}</span>
          ${score !== undefined ? `<span class="tag">${score}%</span>` : ""}
          ${record ? `<span class="tag ${record.status === "TERAMPIL" ? "pass" : "lock"}">${record.kt}: ${record.status}</span>` : ""}
        </div>
        <h3>${missionTitle(mission)}</h3>
        <p class="muted">${missionScope(mission)}</p>
      </div>
      <button class="btn primary" data-open="${mission.id}" ${locked ? "disabled" : ""}>${done ? t("continue") : t("open")}</button>
    </article>
  `;
}

function renderFormalReport() {
  const rows = missions.map((mission) => {
    const record = state.progress.records[mission.id];
    const status = record?.status || t("notAssessed");
    const score = record ? `${record.score}%` : "-";
    const date = record ? formatDate(record.date) : "-";
    const official = record?.official ? (state.lang === "bm" ? "YA" : "YES") : "-";
    const locked = record?.locked ? (state.lang === "bm" ? "YA" : "YES") : "-";

    return `
      <tr>
        <td>${mission.code}</td>
        <td>${ktCode(mission.id)}</td>
        <td>${missionTitle(mission)}</td>
        <td>${score}</td>
        <td><span class="mini-status ${record?.status === "TERAMPIL" ? "ok" : record ? "warn" : ""}">${status}</span></td>
        <td>${official}</td>
        <td>${locked}</td>
        <td>${date}</td>
      </tr>
    `;
  }).join("");

  renderChrome(`
    <section class="mission-page">
      <div class="panel lesson-box">
        <span class="eyebrow">${t("formalRecord")}</span>
        <h1>${state.profile.name}</h1>
        <p class="muted">${state.profile.id}</p>
        <div class="toolbar" style="justify-content:flex-start">
          <button class="btn" data-action="back">${t("back")}</button>
          <button class="btn primary" data-action="print">${t("print")}</button>
        </div>
      </div>
      <div class="panel lesson-box report-panel">
        ${renderCollegeHeader()}
        <div class="report-title">
          <div>
            <strong>COMPUTER SYSTEM SET-UP C01</strong>
            <span>${state.lang === "bm" ? "Rekod keputusan formal KT01-KT15" : "Formal KT01-KT15 result record"}</span>
          </div>
          <strong>${state.lang === "bm" ? "Lulus" : "Pass"}: ${PASS_MARK}%</strong>
        </div>
        <div class="table-wrap">
          <table class="result-table">
            <thead>
              <tr>
                <th>KP</th>
                <th>KT</th>
                <th>${state.lang === "bm" ? "Tajuk" : "Title"}</th>
                <th>${t("score")}</th>
                <th>${t("status")}</th>
                <th>${t("official")}</th>
                <th>${t("locked")}</th>
                <th>${t("resultDate")}</th>
              </tr>
            </thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
        <div class="signature-row">
          <div><span>${t("assessor")}</span><strong>________________________</strong></div>
          <div><span>${t("signature")}</span><strong>________________________</strong></div>
        </div>
      </div>
    </section>
  `);
}

function renderMission(id) {
  const mission = missions.find((item) => item.id === id);
  const record = state.progress.records[id];
  if (!mission || mission.id > state.progress.unlocked) {
    renderDashboard();
    return;
  }

  renderChrome(`
    <section class="mission-page">
      <div class="panel lesson-box">
        <span class="eyebrow">${mission.code}</span>
        <h1>${missionTitle(mission)}</h1>
        <p class="lead">${missionScope(mission)}</p>
        <div class="toolbar" style="justify-content:flex-start">
          <button class="btn" data-action="back">${t("back")}</button>
          <button class="btn" data-action="speak" data-mission="${mission.id}">${t("listen")}</button>
          <button class="btn primary" data-action="quiz" data-mission="${mission.id}">${t("startQuiz")}</button>
        </div>
      </div>
      ${record ? renderFormalResult(record) : ""}
      <div class="lesson-layout">
        <div class="panel lesson-box">
          <h2>${t("notes")}</h2>
          <ul class="note-list">${missionNotes(mission).map((note) => `<li>${note}</li>`).join("")}</ul>
        </div>
        <div class="panel lesson-box">
          <h2>${t("activity")}</h2>
          <div class="activity-stage">
            <p>${state.lang === "bm" ? mission.activityBm : mission.activityEn}</p>
            ${renderSimulation(mission)}
          </div>
        </div>
      </div>
      ${mission.id === 1 ? renderKp01Premium() : ""}
      ${mission.id === 2 ? renderKp02Premium() : ""}
      ${mission.id === 3 ? renderKp03Premium() : ""}
      <div id="quizMount"></div>
    </section>
  `);

  if (mission.id === 1) bindKp01Game();
  if (mission.id === 2) bindKp02Game();
  if (mission.id === 3) bindKp03Game();
}

function renderSimulation(mission) {
  const parts = state.lang === "bm"
    ? ["Motherboard", "CPU", "RAM", "SSD", "PSU", "Kabel SATA"]
    : ["Motherboard", "CPU", "RAM", "SSD", "PSU", "SATA Cable"];

  if (![3, 5, 6, 7].includes(mission.id)) {
    return `
      <ol class="activity-list">
        <li>${state.lang === "bm" ? "Baca situasi kerja." : "Read the work situation."}</li>
        <li>${state.lang === "bm" ? "Pilih tindakan yang paling sesuai." : "Choose the most suitable action."}</li>
        <li>${state.lang === "bm" ? "Terangkan sebab pilihan kepada rakan." : "Explain the reason to a classmate."}</li>
      </ol>
    `;
  }

  return `<div class="bench">${parts.map((part) => `<div class="part">${part}</div>`).join("")}</div>`;
}

function renderKp01Premium() {
  const bm = state.lang === "bm";
  const labels = bm
    ? {
        video: "Video Ringkas: Dari Tiket Kerja ke Checklist",
        flow: "Animasi Aliran Kerja KP01",
        ticket: "Simulasi Tiket Kerja Sebenar",
        activities: "Aktiviti Pelajar",
        game: "Mini Game: Kategori Maklumat",
        scenarioTitle: "Tiket C01-001",
        request: "Makmal Komputer 2 memerlukan 1 unit PC baharu untuk kerja pejabat dan latihan asas. Pengguna perlukan Windows 11 Pro, Microsoft Office, browser, printer rangkaian dan capaian internet. Kerja perlu siap sebelum jam 3.00 petang.",
        change: "Change Order: SSD asal 256GB ditukar kepada 512GB dan RAM dinaikkan daripada 8GB kepada 16GB kerana komputer akan digunakan untuk latihan reka bentuk asas.",
        risk: "Risiko: lesen perisian perlu disahkan, printer rangkaian perlu IP yang betul, dan masa pemasangan terhad.",
        gameHelp: "Klik kategori yang betul untuk setiap maklumat. Jawapan betul akan bertukar hijau.",
        done: "Betul. Maklumat ini sudah dikategorikan.",
        wrong: "Belum tepat. Semak semula maksud maklumat tersebut."
      }
    : {
        video: "Short Video: From Work Ticket to Checklist",
        flow: "KP01 Workflow Animation",
        ticket: "Realistic Work Ticket Simulation",
        activities: "Student Activities",
        game: "Mini Game: Information Category",
        scenarioTitle: "Ticket C01-001",
        request: "Computer Lab 2 needs 1 new PC for office work and basic training. The user needs Windows 11 Pro, Microsoft Office, browser, network printer and internet access. The work must finish before 3.00 p.m.",
        change: "Change Order: The original 256GB SSD is changed to 512GB and RAM is upgraded from 8GB to 16GB because the PC will be used for basic design training.",
        risk: "Risk: software licence must be confirmed, network printer needs the correct IP, and installation time is limited.",
        gameHelp: "Click the correct category for each information item. Correct answers turn green.",
        done: "Correct. This information is now categorised.",
        wrong: "Not yet. Check the meaning of the information again."
      };

  const flow = bm
    ? ["Terima tiket", "Baca arahan", "Kesan perubahan", "Semak risiko", "Bina checklist"]
    : ["Receive ticket", "Read request", "Detect change", "Check risk", "Build checklist"];

  const activities = bm
    ? [
        "Aktiviti 1: Pelajar tandakan maklumat wajib dalam job request menggunakan warna berbeza.",
        "Aktiviti 2: Pelajar bezakan arahan asal dan change order dalam jadual ringkas.",
        "Aktiviti 3: Pelajar senaraikan hardware, software, periferal dan rangkaian yang diperlukan.",
        "Aktiviti 4: Pelajar bincang risiko sebelum pemasangan, contohnya data lama, lesen dan keserasian komponen.",
        "Aktiviti 5: Pelajar hasilkan checklist KP02 berdasarkan tiket kerja KP01.",
        "Aktiviti 6: Pelajar lakon peranan sebagai pengguna, penyelia dan juruteknik untuk proses pengesahan kerja."
      ]
    : [
        "Activity 1: Students mark required information in the job request using different colours.",
        "Activity 2: Students separate the original instruction and change order in a simple table.",
        "Activity 3: Students list required hardware, software, peripherals and network items.",
        "Activity 4: Students discuss setup risks such as old data, licensing and component compatibility.",
        "Activity 5: Students create a KP02 checklist based on the KP01 work ticket.",
        "Activity 6: Students role-play as user, supervisor and technician for work confirmation."
      ];

  const gameItems = bm
    ? [
        ["Windows 11 Pro", "software"],
        ["RAM 16GB", "hardware"],
        ["Printer rangkaian", "peripheral"],
        ["Siap sebelum 3.00 petang", "schedule"]
      ]
    : [
        ["Windows 11 Pro", "software"],
        ["16GB RAM", "hardware"],
        ["Network printer", "peripheral"],
        ["Finish before 3.00 p.m.", "schedule"]
      ];

  const categories = bm
    ? [
        ["hardware", "Hardware"],
        ["software", "Software"],
        ["peripheral", "Periferal"],
        ["schedule", "Masa"]
      ]
    : [
        ["hardware", "Hardware"],
        ["software", "Software"],
        ["peripheral", "Peripheral"],
        ["schedule", "Schedule"]
      ];

  return `
    <div class="kp01-grid">
      <div class="panel lesson-box">
        <h2>${labels.video}</h2>
        <div class="video-card" aria-label="${labels.video}">
          <div class="video-screen">
            <div class="scan-line"></div>
            <div class="video-progress"></div>
            <div class="video-frame frame-1">
              <span>01</span>
              <strong>${bm ? "Terima Job Request" : "Receive Job Request"}</strong>
              <small>${bm ? "PC baharu untuk Makmal Komputer 2" : "New PC for Computer Lab 2"}</small>
            </div>
            <div class="video-frame frame-2">
              <span>02</span>
              <strong>${bm ? "Semak Keperluan" : "Check Requirements"}</strong>
              <small>${bm ? "OS, Office, browser, printer, internet" : "OS, Office, browser, printer, internet"}</small>
            </div>
            <div class="video-frame frame-3">
              <span>03</span>
              <strong>Change Order</strong>
              <small>${bm ? "SSD 512GB + RAM 16GB" : "512GB SSD + 16GB RAM"}</small>
            </div>
            <div class="video-frame frame-4">
              <span>04</span>
              <strong>${bm ? "Bina Checklist KP02" : "Build KP02 Checklist"}</strong>
              <small>${bm ? "Tools, hardware, software, risiko" : "Tools, hardware, software, risks"}</small>
            </div>
            <div class="video-caption">${bm ? "Animasi auto: Tiket kerja dianalisis sebelum pemasangan komputer." : "Auto animation: Work ticket is analysed before computer setup."}</div>
            <div class="play-dot"></div>
          </div>
          <ol class="activity-list">
            <li>${bm ? "Baca tiket kerja dengan lengkap." : "Read the work ticket completely."}</li>
            <li>${bm ? "Kenal pasti perubahan selepas arahan asal." : "Identify changes after the original request."}</li>
            <li>${bm ? "Tukar analisis kepada checklist kerja." : "Convert the analysis into a work checklist."}</li>
          </ol>
        </div>
      </div>

      <div class="panel lesson-box">
        <h2>${labels.flow}</h2>
        <div class="flow-steps">
          ${flow.map((item, index) => `<div class="flow-step" style="--delay:${index}">${item}</div>`).join("")}
        </div>
      </div>

      <div class="panel lesson-box wide">
        <h2>${labels.ticket}</h2>
        <div class="ticket-sim">
          <div>
            <span class="tag">${labels.scenarioTitle}</span>
            <p>${labels.request}</p>
          </div>
          <div>
            <span class="tag lock">Change Order</span>
            <p>${labels.change}</p>
          </div>
          <div>
            <span class="tag">${bm ? "Risiko Awal" : "Initial Risk"}</span>
            <p>${labels.risk}</p>
          </div>
        </div>
      </div>

      <div class="panel lesson-box">
        <h2>${labels.activities}</h2>
        <ol class="activity-list">${activities.map((item) => `<li>${item}</li>`).join("")}</ol>
      </div>

      <div class="panel lesson-box">
        <h2>${labels.game}</h2>
        <p class="muted">${labels.gameHelp}</p>
        <div class="game-list">
          ${gameItems.map(([item, answer], index) => `
            <div class="game-card" data-game-card="${index}">
              <strong>${item}</strong>
              <div class="game-options">
                ${categories.map(([value, label]) => `<button class="btn" data-game-answer="${value}" data-correct="${answer}" data-card="${index}">${label}</button>`).join("")}
              </div>
            </div>
          `).join("")}
        </div>
        <div id="kp01GameResult" class="result"></div>
        <template id="kp01GameText" data-done="${labels.done}" data-wrong="${labels.wrong}"></template>
      </div>
    </div>
  `;
}

function bindKp01Game() {
  document.querySelectorAll("[data-game-answer]").forEach((button) => {
    button.addEventListener("click", () => {
      const card = document.querySelector(`[data-game-card="${button.dataset.card}"]`);
      const result = document.getElementById("kp01GameResult");
      const gameText = document.getElementById("kp01GameText");
      const correct = button.dataset.gameAnswer === button.dataset.correct;

      card.querySelectorAll("[data-game-answer]").forEach((item) => item.classList.remove("selected"));
      button.classList.add("selected");
      card.classList.toggle("correct", correct);
      card.classList.toggle("incorrect", !correct);
      result.innerHTML = `<div class="${correct ? "success-note" : "error"}">${correct ? gameText.dataset.done : gameText.dataset.wrong}</div>`;
    });
  });
}

function renderKp02Premium() {
  const bm = state.lang === "bm";
  const labels = bm
    ? {
        video: "Video Ringkas: Menyediakan Kit Kerja",
        checklist: "Simulasi Checklist KP02",
        kit: "Animasi Workbench Tools, Hardware dan Software",
        activities: "Aktiviti Pelajar",
        game: "Mini Game: Asingkan Item Mengikut Kategori",
        gameHelp: "Klik kategori yang betul. Item yang betul akan ditanda hijau.",
        done: "Betul. Item ini berada dalam kategori yang sesuai.",
        wrong: "Belum tepat. Semak semula fungsi item tersebut."
      }
    : {
        video: "Short Video: Preparing the Work Kit",
        checklist: "KP02 Checklist Simulation",
        kit: "Tools, Hardware and Software Workbench Animation",
        activities: "Student Activities",
        game: "Mini Game: Sort Items by Category",
        gameHelp: "Click the correct category. Correct items are marked green.",
        done: "Correct. This item belongs in the selected category.",
        wrong: "Not yet. Check the item's function again."
      };

  const kitSteps = bm
    ? ["Baca checklist", "Ambil tools", "Semak hardware", "Sediakan software", "Sahkan lesen"]
    : ["Read checklist", "Collect tools", "Check hardware", "Prepare software", "Confirm licence"];

  const checklist = bm
    ? [
        ["Tools", "Pemutar skru, anti-static wrist strap, cable tie, thermal paste"],
        ["Hardware", "Motherboard, CPU, RAM, SSD, PSU, casing"],
        ["Software", "OS installer, driver, browser, aplikasi pejabat, antivirus"],
        ["Safety", "Matikan kuasa, elak ESD, kawasan kerja kering dan kemas"],
        ["Confirmation", "Lesen software, versi OS, keserasian komponen, kelulusan penyelia"]
      ]
    : [
        ["Tools", "Screwdriver, anti-static wrist strap, cable ties, thermal paste"],
        ["Hardware", "Motherboard, CPU, RAM, SSD, PSU, casing"],
        ["Software", "OS installer, drivers, browser, office apps, antivirus"],
        ["Safety", "Switch off power, prevent ESD, keep work area dry and tidy"],
        ["Confirmation", "Software licence, OS version, component compatibility, supervisor approval"]
      ];

  const activities = bm
    ? [
        "Aktiviti 1: Pelajar baca tiket KP01 dan bina checklist KP02 sendiri.",
        "Aktiviti 2: Pelajar susun item sebenar/bergambar kepada kategori tools, hardware, software dan safety.",
        "Aktiviti 3: Pelajar semak keserasian motherboard, CPU, RAM dan storage berdasarkan senario guru.",
        "Aktiviti 4: Pelajar pilih software wajib untuk komputer pejabat dan jelaskan sebab pilihan.",
        "Aktiviti 5: Pelajar buat pemeriksaan keselamatan sebelum membuka casing.",
        "Aktiviti 6: Pelajar lakon situasi melapor item tidak cukup kepada penyelia sebelum kerja diteruskan."
      ]
    : [
        "Activity 1: Students read the KP01 ticket and create their own KP02 checklist.",
        "Activity 2: Students sort real/pictured items into tools, hardware, software and safety categories.",
        "Activity 3: Students check motherboard, CPU, RAM and storage compatibility using a teacher scenario.",
        "Activity 4: Students choose required software for an office PC and explain the reason.",
        "Activity 5: Students perform safety checks before opening the casing.",
        "Activity 6: Students role-play reporting missing items to the supervisor before continuing work."
      ];

  const gameItems = bm
    ? [
        ["Anti-static wrist strap", "safety"],
        ["Motherboard", "hardware"],
        ["Windows installer USB", "software"],
        ["Pemutar skru Phillips", "tools"],
        ["Thermal paste", "tools"],
        ["Driver chipset", "software"],
        ["RAM DDR4", "hardware"],
        ["Anti-static mat", "safety"]
      ]
    : [
        ["Anti-static wrist strap", "safety"],
        ["Motherboard", "hardware"],
        ["Windows installer USB", "software"],
        ["Phillips screwdriver", "tools"],
        ["Thermal paste", "tools"],
        ["Chipset driver", "software"],
        ["DDR4 RAM", "hardware"],
        ["Anti-static mat", "safety"]
      ];

  const categories = bm
    ? [["tools", "Tools"], ["hardware", "Hardware"], ["software", "Software"], ["safety", "Safety"]]
    : [["tools", "Tools"], ["hardware", "Hardware"], ["software", "Software"], ["safety", "Safety"]];

  return `
    <div class="kp01-grid">
      <div class="panel lesson-box">
        <h2>${labels.video}</h2>
        <div class="kit-video">
          <div class="kit-belt">
            ${kitSteps.map((step, index) => `<div class="kit-step" style="--delay:${index}">${step}</div>`).join("")}
          </div>
          <div class="kit-desk">
            <div class="kit-item tool">Tools</div>
            <div class="kit-item hard">Hardware</div>
            <div class="kit-item soft">Software</div>
            <div class="kit-item safe">Safety</div>
          </div>
        </div>
      </div>

      <div class="panel lesson-box">
        <h2>${labels.checklist}</h2>
        <div class="checklist-sim">
          ${checklist.map(([title, detail]) => `
            <div class="check-row">
              <span></span>
              <div><strong>${title}</strong><small>${detail}</small></div>
            </div>
          `).join("")}
        </div>
      </div>

      <div class="panel lesson-box wide">
        <h2>${labels.kit}</h2>
        <div class="tool-kit-grid">
          ${checklist.map(([title, detail]) => `<div><strong>${title}</strong><p>${detail}</p></div>`).join("")}
        </div>
      </div>

      <div class="panel lesson-box">
        <h2>${labels.activities}</h2>
        <ol class="activity-list">${activities.map((item) => `<li>${item}</li>`).join("")}</ol>
      </div>

      <div class="panel lesson-box">
        <h2>${labels.game}</h2>
        <p class="muted">${labels.gameHelp}</p>
        <div class="game-list">
          ${gameItems.map(([item, answer], index) => `
            <div class="game-card" data-kp02-card="${index}">
              <strong>${item}</strong>
              <div class="game-options">
                ${categories.map(([value, label]) => `<button class="btn" data-kp02-answer="${value}" data-correct="${answer}" data-card="${index}">${label}</button>`).join("")}
              </div>
            </div>
          `).join("")}
        </div>
        <div id="kp02GameResult" class="result"></div>
        <template id="kp02GameText" data-done="${labels.done}" data-wrong="${labels.wrong}"></template>
      </div>
    </div>
  `;
}

function bindKp02Game() {
  document.querySelectorAll("[data-kp02-answer]").forEach((button) => {
    button.addEventListener("click", () => {
      const card = document.querySelector(`[data-kp02-card="${button.dataset.card}"]`);
      const result = document.getElementById("kp02GameResult");
      const gameText = document.getElementById("kp02GameText");
      const correct = button.dataset.kp02Answer === button.dataset.correct;

      card.querySelectorAll("[data-kp02-answer]").forEach((item) => item.classList.remove("selected"));
      button.classList.add("selected");
      card.classList.toggle("correct", correct);
      card.classList.toggle("incorrect", !correct);
      result.innerHTML = `<div class="${correct ? "success-note" : "error"}">${correct ? gameText.dataset.done : gameText.dataset.wrong}</div>`;
    });
  });
}

function renderKp03Premium() {
  const bm = state.lang === "bm";
  const labels = bm
    ? {
        board: "Simulasi Motherboard: Kenal Pasti Slot dan Komponen",
        ports: "Padanan Port, Kabel dan Fungsi",
        components: "Peta Komponen Dalaman dan Luaran",
        activities: "Aktiviti Pelajar",
        game: "Mini Game: Padankan Komponen Dengan Fungsi",
        gameHelp: "Klik fungsi yang betul untuk setiap komponen.",
        done: "Betul. Fungsi komponen dikenal pasti dengan tepat.",
        wrong: "Belum tepat. Semak semula fungsi komponen tersebut."
      }
    : {
        board: "Motherboard Simulation: Identify Slots and Components",
        ports: "Port, Cable and Function Matching",
        components: "Internal and External Component Map",
        activities: "Student Activities",
        game: "Mini Game: Match Component With Function",
        gameHelp: "Click the correct function for each component.",
        done: "Correct. The component function is identified accurately.",
        wrong: "Not yet. Check the component function again."
      };

  const boardLabels = bm
    ? [
        ["CPU Socket", "Tempat CPU dipasang"],
        ["RAM Slot", "Tempat modul RAM"],
        ["M.2 Slot", "Tempat NVMe SSD"],
        ["PCIe Slot", "Tempat GPU/expansion card"],
        ["SATA Port", "Sambungan storage SATA"],
        ["24-pin Power", "Kuasa utama motherboard"]
      ]
    : [
        ["CPU Socket", "CPU installation area"],
        ["RAM Slot", "RAM module slot"],
        ["M.2 Slot", "NVMe SSD slot"],
        ["PCIe Slot", "GPU/expansion card slot"],
        ["SATA Port", "SATA storage connection"],
        ["24-pin Power", "Main motherboard power"]
      ];

  const portRows = bm
    ? [
        ["HDMI / DisplayPort", "Kabel paparan", "Sambung monitor"],
        ["USB", "Kabel/peranti USB", "Keyboard, mouse, printer, pendrive"],
        ["RJ45", "Kabel LAN", "Sambungan rangkaian"],
        ["Audio Jack", "Kabel audio", "Speaker atau headset"],
        ["SATA", "Kabel data SATA", "HDD/SSD SATA"]
      ]
    : [
        ["HDMI / DisplayPort", "Display cable", "Connect monitor"],
        ["USB", "USB cable/device", "Keyboard, mouse, printer, flash drive"],
        ["RJ45", "LAN cable", "Network connection"],
        ["Audio Jack", "Audio cable", "Speaker or headset"],
        ["SATA", "SATA data cable", "SATA HDD/SSD"]
      ];

  const components = bm
    ? [
        ["Komponen Dalaman", "Motherboard, CPU, RAM, SSD/HDD, PSU, GPU, cooling fan"],
        ["Komponen Luaran", "Monitor, keyboard, mouse, printer, scanner, speaker"],
        ["Kabel Data", "SATA, USB, HDMI, DisplayPort, RJ45"],
        ["Kabel Kuasa", "AC power, 24-pin ATX, CPU 8-pin, SATA power, PCIe power"]
      ]
    : [
        ["Internal Components", "Motherboard, CPU, RAM, SSD/HDD, PSU, GPU, cooling fan"],
        ["External Components", "Monitor, keyboard, mouse, printer, scanner, speaker"],
        ["Data Cables", "SATA, USB, HDMI, DisplayPort, RJ45"],
        ["Power Cables", "AC power, 24-pin ATX, CPU 8-pin, SATA power, PCIe power"]
      ];

  const activities = bm
    ? [
        "Aktiviti 1: Pelajar labelkan CPU socket, RAM slot, PCIe slot, M.2 slot, SATA port dan power connector pada gambar motherboard.",
        "Aktiviti 2: Pelajar asingkan komponen kepada dalaman, luaran, kabel data dan kabel kuasa.",
        "Aktiviti 3: Pelajar padankan kabel HDMI, USB, RJ45, SATA dan audio dengan fungsi yang betul.",
        "Aktiviti 4: Pelajar pilih komponen sesuai untuk komputer pejabat, komputer reka bentuk asas dan komputer kaunter.",
        "Aktiviti 5: Pelajar terangkan kesan jika PSU watt tidak mencukupi atau RAM tidak serasi.",
        "Aktiviti 6: Pelajar buat pemeriksaan fizikal komponen tanpa menyentuh pin/contacts sensitif."
      ]
    : [
        "Activity 1: Students label CPU socket, RAM slot, PCIe slot, M.2 slot, SATA port and power connector on a motherboard image.",
        "Activity 2: Students sort components into internal, external, data cable and power cable groups.",
        "Activity 3: Students match HDMI, USB, RJ45, SATA and audio cables with the correct functions.",
        "Activity 4: Students choose suitable components for an office PC, basic design PC and counter PC.",
        "Activity 5: Students explain the effect of insufficient PSU wattage or incompatible RAM.",
        "Activity 6: Students perform physical inspection without touching sensitive pins/contacts."
      ];

  const gameItems = bm
    ? [
        ["CPU", "process"],
        ["RAM", "temporary"],
        ["SSD", "permanent"],
        ["PSU", "power"],
        ["GPU", "graphics"],
        ["RJ45", "network"]
      ]
    : [
        ["CPU", "process"],
        ["RAM", "temporary"],
        ["SSD", "permanent"],
        ["PSU", "power"],
        ["GPU", "graphics"],
        ["RJ45", "network"]
      ];

  const functions = bm
    ? [
        ["process", "Memproses arahan"],
        ["temporary", "Menyimpan data sementara"],
        ["permanent", "Menyimpan data kekal"],
        ["power", "Membekalkan kuasa"],
        ["graphics", "Memproses grafik"],
        ["network", "Sambungan rangkaian"]
      ]
    : [
        ["process", "Processes instructions"],
        ["temporary", "Stores temporary data"],
        ["permanent", "Stores permanent data"],
        ["power", "Supplies power"],
        ["graphics", "Processes graphics"],
        ["network", "Network connection"]
      ];

  return `
    <div class="kp01-grid">
      <div class="panel lesson-box wide">
        <h2>${labels.board}</h2>
        <div class="motherboard-sim">
          <div class="mb-shape">
            <div class="mb-part cpu">CPU</div>
            <div class="mb-part ram">RAM</div>
            <div class="mb-part m2">M.2</div>
            <div class="mb-part pcie">PCIe</div>
            <div class="mb-part sata">SATA</div>
            <div class="mb-part power">24-pin</div>
            <div class="mb-trace t1"></div>
            <div class="mb-trace t2"></div>
            <div class="mb-trace t3"></div>
          </div>
          <div class="mb-labels">
            ${boardLabels.map(([title, detail]) => `<div><strong>${title}</strong><span>${detail}</span></div>`).join("")}
          </div>
        </div>
      </div>

      <div class="panel lesson-box">
        <h2>${labels.ports}</h2>
        <div class="port-map">
          ${portRows.map(([port, cable, use]) => `
            <div class="port-row">
              <strong>${port}</strong>
              <span>${cable}</span>
              <small>${use}</small>
            </div>
          `).join("")}
        </div>
      </div>

      <div class="panel lesson-box">
        <h2>${labels.components}</h2>
        <div class="component-map">
          ${components.map(([title, detail]) => `<div><strong>${title}</strong><p>${detail}</p></div>`).join("")}
        </div>
      </div>

      <div class="panel lesson-box">
        <h2>${labels.activities}</h2>
        <ol class="activity-list">${activities.map((item) => `<li>${item}</li>`).join("")}</ol>
      </div>

      <div class="panel lesson-box">
        <h2>${labels.game}</h2>
        <p class="muted">${labels.gameHelp}</p>
        <div class="game-list">
          ${gameItems.map(([item, answer], index) => `
            <div class="game-card" data-kp03-card="${index}">
              <strong>${item}</strong>
              <div class="game-options">
                ${functions.map(([value, label]) => `<button class="btn" data-kp03-answer="${value}" data-correct="${answer}" data-card="${index}">${label}</button>`).join("")}
              </div>
            </div>
          `).join("")}
        </div>
        <div id="kp03GameResult" class="result"></div>
        <template id="kp03GameText" data-done="${labels.done}" data-wrong="${labels.wrong}"></template>
      </div>
    </div>
  `;
}

function bindKp03Game() {
  document.querySelectorAll("[data-kp03-answer]").forEach((button) => {
    button.addEventListener("click", () => {
      const card = document.querySelector(`[data-kp03-card="${button.dataset.card}"]`);
      const result = document.getElementById("kp03GameResult");
      const gameText = document.getElementById("kp03GameText");
      const correct = button.dataset.kp03Answer === button.dataset.correct;

      card.querySelectorAll("[data-kp03-answer]").forEach((item) => item.classList.remove("selected"));
      button.classList.add("selected");
      card.classList.toggle("correct", correct);
      card.classList.toggle("incorrect", !correct);
      result.innerHTML = `<div class="${correct ? "success-note" : "error"}">${correct ? gameText.dataset.done : gameText.dataset.wrong}</div>`;
    });
  });
}

function renderQuiz(id) {
  const mission = missions.find((item) => item.id === id);
  const quiz = buildQuiz(id);
  const answers = {};
  const mount = document.getElementById("quizMount");

  mount.innerHTML = `
    <div class="panel lesson-box">
      <h2>${t("quiz")} ${mission.code}</h2>
      <div class="quiz">
        ${quiz.map((item, qIndex) => `
          <div class="question">
            <strong>${qIndex + 1}. ${item[0]}</strong>
            <div class="answers">
              ${item[1].map((answer, aIndex) => `
                <button class="answer" data-question="${qIndex}" data-answer="${aIndex}">${answer}</button>
              `).join("")}
            </div>
          </div>
        `).join("")}
      </div>
      <div class="result">
        <button class="btn success" data-action="submitQuiz">${t("submit")}</button>
        <div id="quizResult"></div>
      </div>
    </div>
  `;

  mount.scrollIntoView({ behavior: "smooth", block: "start" });

  mount.querySelectorAll("[data-answer]").forEach((button) => {
    button.addEventListener("click", () => {
      const qIndex = Number(button.dataset.question);
      answers[qIndex] = Number(button.dataset.answer);
      mount.querySelectorAll(`[data-question="${qIndex}"]`).forEach((answerButton) => {
        answerButton.classList.remove("selected");
      });
      button.classList.add("selected");
    });
  });

  mount.querySelector("[data-action='submitQuiz']").addEventListener("click", () => {
    const correct = quiz.reduce((count, item, index) => count + (answers[index] === item[2] ? 1 : 0), 0);
    const score = Math.round((correct / quiz.length) * 100);
    const passed = score >= PASS_MARK;
    const existingRecord = state.progress.records[id];

    if (existingRecord?.locked && existingRecord?.official) {
      document.getElementById("quizResult").innerHTML = renderFormalResult(existingRecord);
      return;
    }

    const formalRecord = createFormalRecord(id, score, correct, quiz.length);

    state.progress.scores[id] = score;
    state.progress.records[id] = formalRecord;
    if (passed && !state.progress.completed.includes(id)) {
      state.progress.completed.push(id);
      state.progress.completed.sort((a, b) => a - b);
      state.progress.unlocked = Math.max(state.progress.unlocked, Math.min(id + 1, missions.length));
    }

    saveState();

    document.getElementById("quizResult").innerHTML = `
      <div class="${passed ? "success-note" : "error"}">
        <strong>${t("score")}: ${score}%</strong><br>
        ${passed ? t("pass") : t("fail")}
      </div>
      ${renderFormalResult(formalRecord)}
    `;
  });
}

function buildQuiz(id) {
  if (id === 1) return kp01Quiz[state.lang];
  if (id === 2) return kp02Quiz[state.lang];

  const bank = quizBank[state.lang];
  const previous = bank[(id + 13) % bank.length];
  const current = bank[id - 1];
  const next = bank[id % bank.length];
  return [current, previous, next];
}

function speakMission(id) {
  const mission = missions.find((item) => item.id === id);
  if (!mission || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const content = [missionTitle(mission), missionScope(mission), ...missionNotes(mission)].join(". ");
  const utterance = new SpeechSynthesisUtterance(content);
  utterance.lang = state.lang === "bm" ? "ms-MY" : "en-US";
  utterance.rate = 0.92;
  window.speechSynthesis.speak(utterance);
}

function bindGlobalActions() {
  document.querySelectorAll("[data-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.dataset.action;

      if (action === "lang") {
        state.lang = state.lang === "bm" ? "en" : "bm";
        saveState();
        render();
      }

      if (action === "logout") {
        state.profile = null;
        saveState();
        renderLogin();
      }

      if (action === "profile") renderDashboard();
      if (action === "back") renderDashboard();
      if (action === "report") renderFormalReport();
      if (action === "print") window.print();
      if (action === "speak") speakMission(Number(button.dataset.mission));
      if (action === "quiz") renderQuiz(Number(button.dataset.mission));

      if (action === "reset") {
        state.progress = { unlocked: 1, scores: {}, completed: [], records: {} };
        saveState();
        renderDashboard();
      }
    });
  });
}

render();
