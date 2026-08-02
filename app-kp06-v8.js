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
      "Semua item mesti ditanda dalam checklist sebelum pemasangan. Jika ada item tidak cukup, juruteknik perlu maklumkan penyelia sebelum meneruskan kerja.",
      "Tools diagnostik seperti cable tester, multimeter dan POST card boleh digunakan jika kerja melibatkan semakan sambungan, kuasa atau kegagalan boot.",
      "Komponen perlu disimpan dalam packaging anti-static sehingga masa pemasangan untuk mengurangkan risiko kerosakan akibat elektrik statik atau hentakan.",
      "Penyediaan hardware juga perlu mengambil kira airflow casing, jumlah fan, ruang GPU, jenis form factor motherboard dan panjang kabel.",
      "Penyediaan software perlu termasuk fail offline driver jika rangkaian belum tersedia selepas OS dipasang.",
      "Sebelum kerja bermula, juruteknik perlu membuat keputusan: item boleh terus digunakan, item perlu diganti, item perlu disahkan atau item tidak berkaitan dengan job request."
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
      "Every item must be ticked in the checklist before installation. If an item is missing, the technician must inform the supervisor before continuing.",
      "Diagnostic tools such as cable tester, multimeter and POST card can be used when the work involves checking connection, power or boot failure.",
      "Components should remain in anti-static packaging until installation time to reduce damage from static electricity or physical impact.",
      "Hardware preparation should also consider casing airflow, fan quantity, GPU clearance, motherboard form factor and cable length.",
      "Software preparation should include offline driver files if network access may not be available after OS installation.",
      "Before work starts, the technician must decide whether each item can be used, must be replaced, needs confirmation or is not related to the job request."
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
    scopeBm: "Gunakan peralatan pemasangan perkakasan dengan betul, selamat dan mengikut prosedur kerja.",
    scopeEn: "Use hardware installation tools correctly, safely and according to work procedure.",
    notesBm: [
      "Peralatan pemasangan perkakasan digunakan untuk membuka casing, memasang komponen, mengurus kabel, membersihkan kawasan kerja dan mengurangkan risiko kerosakan.",
      "Sebelum kerja dimulakan, komputer mesti dimatikan, kabel kuasa dicabut, suis PSU dimatikan dan juruteknik perlu menekan butang power beberapa saat untuk nyahcas baki elektrik.",
      "Anti-static wrist strap dan anti-static mat digunakan untuk mengurangkan risiko Electrostatic Discharge (ESD) yang boleh merosakkan CPU, RAM, motherboard dan storage.",
      "Pemutar skru Phillips digunakan untuk skru casing, motherboard, PSU dan storage. Saiz mata pemutar skru mesti sesuai supaya kepala skru tidak rosak.",
      "Bekas skru atau screw tray penting untuk mengasingkan skru casing, motherboard, PSU dan storage supaya tidak hilang atau tertukar.",
      "Thermal paste digunakan antara CPU dan cooler untuk membantu pemindahan haba. Kuantiti perlu sederhana, tidak terlalu banyak dan tidak terlalu sedikit.",
      "Cable tie atau velcro strap digunakan untuk mengemas kabel supaya aliran udara casing tidak terhalang dan kerja troubleshooting lebih mudah.",
      "Berus lembut, blower dan kain microfiber digunakan untuk membersihkan habuk. Cecair pembersih hanya digunakan jika sesuai dan tidak terkena komponen aktif.",
      "Juruteknik tidak boleh menggunakan daya berlebihan ketika memasang RAM, kabel power, kabel SATA atau expansion card kerana boleh merosakkan slot.",
      "Semua tools perlu diperiksa sebelum digunakan. Tools yang rosak, berkarat, longgar atau tidak sesuai boleh menyebabkan kecederaan dan kerosakan komponen.",
      "Prosedur kerja yang baik ialah sediakan tools, pakai ESD protection, buka casing, simpan skru, pasang komponen, kemas kabel, semak sambungan dan tutup casing semula."
    ],
    notesEn: [
      "Hardware installation tools are used to open the casing, install components, manage cables, clean the work area and reduce damage risk.",
      "Before work starts, the computer must be shut down, power cable unplugged, PSU switch turned off and the technician should press the power button for a few seconds to discharge remaining electricity.",
      "Anti-static wrist strap and anti-static mat are used to reduce Electrostatic Discharge (ESD) risk that can damage CPU, RAM, motherboard and storage.",
      "A Phillips screwdriver is used for casing, motherboard, PSU and storage screws. The screwdriver tip size must match the screw head to avoid damage.",
      "A screw tray is important for separating casing, motherboard, PSU and storage screws so they are not lost or mixed.",
      "Thermal paste is applied between CPU and cooler to help heat transfer. The amount should be moderate, not too much and not too little.",
      "Cable ties or velcro straps are used to organise cables so casing airflow is not blocked and troubleshooting is easier.",
      "Soft brush, blower and microfiber cloth are used to clean dust. Cleaning liquid is used only when suitable and must not touch active components.",
      "The technician must not use excessive force when installing RAM, power cables, SATA cables or expansion cards because slots can be damaged.",
      "All tools must be inspected before use. Damaged, rusty, loose or unsuitable tools can cause injury and component damage.",
      "A good work procedure is to prepare tools, wear ESD protection, open the casing, store screws, install components, manage cables, check connections and close the casing."
    ],
    activityBm: "Susun prosedur keselamatan, pilih tools yang sesuai dan latih cara membuka casing, menyimpan skru serta mengemas kabel.",
    activityEn: "Arrange the safety procedure, select suitable tools and practise opening the casing, storing screws and managing cables."
  },
  {
    id: 5,
    code: "KP05",
    titleBm: "Fungsi dan Peranan Komponen Perkakasan Komputer",
    titleEn: "Functions and Roles of Computer Hardware Components",
    scopeBm: "Kenal pasti fungsi, peranan, keserasian dan simptom kerosakan komponen utama dalam unit sistem komputer.",
    scopeEn: "Identify the functions, roles, compatibility and fault symptoms of main components in a computer system unit.",
    notesBm: [
      "CPU atau processor ialah pusat pemprosesan arahan komputer. Ia melaksanakan arahan sistem operasi, aplikasi dan proses pengguna.",
      "Prestasi CPU dipengaruhi oleh bilangan core, thread, clock speed, cache, generasi processor dan keserasian socket motherboard.",
      "RAM ialah memori sementara yang menyimpan data aktif ketika komputer sedang digunakan. RAM yang mencukupi membantu sistem menjalankan banyak aplikasi dengan lebih lancar.",
      "Storage menyimpan sistem operasi, aplikasi dan data pengguna secara kekal. HDD memberi kapasiti besar, SSD lebih laju, manakala NVMe M.2 memberi prestasi tertinggi jika motherboard menyokongnya.",
      "Motherboard menghubungkan semua komponen seperti CPU, RAM, storage, GPU, port I/O dan sambungan kuasa. Ia menentukan jenis socket CPU, slot RAM, slot expansion dan connector yang boleh digunakan.",
      "PSU membekalkan kuasa elektrik stabil kepada komponen. Pemilihan PSU perlu mengambil kira watt, kecekapan, connector 24-pin, CPU 4/8-pin, PCIe dan keselamatan bekalan kuasa.",
      "GPU memproses paparan grafik. GPU terbina sesuai untuk kerja pejabat asas, manakala dedicated GPU lebih sesuai untuk reka bentuk grafik, video, 3D dan paparan beresolusi tinggi.",
      "Cooling system seperti heatsink, fan dan thermal paste mengawal suhu CPU/GPU. Suhu terlalu tinggi boleh menyebabkan komputer perlahan, restart sendiri atau komponen rosak.",
      "Port dan kabel seperti HDMI, DisplayPort, USB, audio, RJ45, SATA dan power connector perlu dikenal pasti mengikut fungsi supaya sambungan tidak salah.",
      "Setiap komponen mesti serasi antara satu sama lain. Contohnya CPU perlu sepadan dengan socket motherboard, RAM perlu sepadan dengan jenis slot, dan PSU perlu cukup kuasa untuk semua komponen.",
      "Pemilihan komponen perlu berpandukan keperluan pengguna. Komputer pejabat memerlukan kestabilan dan software asas, komputer reka bentuk memerlukan RAM/GPU lebih tinggi, manakala makmal latihan memerlukan kos, ketahanan dan kemudahan penyelenggaraan.",
      "Juruteknik perlu boleh menerangkan fungsi komponen, kesan jika komponen gagal, dan tanda awal masalah seperti komputer tidak boot, paparan tiada, sistem perlahan atau storage tidak dikesan."
    ],
    notesEn: [
      "The CPU or processor is the computer's processing centre. It executes operating system, application and user process instructions.",
      "CPU performance is influenced by core count, thread count, clock speed, cache, processor generation and motherboard socket compatibility.",
      "RAM is temporary memory that stores active data while the computer is being used. Sufficient RAM helps the system run multiple applications more smoothly.",
      "Storage keeps the operating system, applications and user data permanently. HDD provides large capacity, SSD is faster, while NVMe M.2 gives the highest performance when supported by the motherboard.",
      "The motherboard connects all components such as CPU, RAM, storage, GPU, I/O ports and power connections. It determines the CPU socket, RAM slot type, expansion slots and available connectors.",
      "The PSU supplies stable electrical power to components. PSU selection must consider wattage, efficiency, 24-pin connector, CPU 4/8-pin, PCIe connectors and power safety.",
      "The GPU processes graphics display. Integrated graphics is suitable for basic office work, while a dedicated GPU is better for graphic design, video, 3D and high-resolution display.",
      "The cooling system such as heatsink, fan and thermal paste controls CPU/GPU temperature. Excessive heat can slow the computer, cause restarts or damage components.",
      "Ports and cables such as HDMI, DisplayPort, USB, audio, RJ45, SATA and power connectors must be identified by function so connections are not wrong.",
      "Every component must be compatible with the others. For example, the CPU must match the motherboard socket, RAM must match the slot type, and the PSU must provide enough power for all components.",
      "Component selection must follow user needs. An office PC needs stability and basic software, a design PC needs higher RAM/GPU, while a training lab PC needs cost control, durability and easy maintenance.",
      "A technician must be able to explain component functions, the effect of component failure and early problem signs such as no boot, no display, slow system or undetected storage."
    ],
    activityBm: "Kenal pasti fungsi komponen, padankan simptom kerosakan dengan komponen berkaitan, dan pilih komponen sesuai mengikut keperluan pengguna.",
    activityEn: "Identify component functions, match fault symptoms with related components, and choose suitable components based on user needs."
  },
  {
    id: 6,
    code: "KP06",
    titleBm: "Pemasangan Motherboard dan CPU",
    titleEn: "Motherboard and CPU Installation",
    scopeBm: "Pasang motherboard, CPU, cooler dan RAM mengikut prosedur.",
    scopeEn: "Install motherboard, CPU, cooler and RAM according to procedure.",
    notesBm: [
      "Pemasangan motherboard dan CPU mesti dibuat secara berhati-hati kerana kedua-duanya ialah komponen utama yang menentukan kestabilan sistem komputer.",
      "Sebelum pemasangan, juruteknik perlu mematikan kuasa, mencabut kabel power, memakai anti-static wrist strap dan menyediakan ruang kerja yang bersih serta terang.",
      "Casing perlu diperiksa dahulu. Standoff mesti dipasang pada kedudukan yang sepadan dengan lubang motherboard supaya motherboard tidak menyentuh casing secara terus.",
      "I/O shield atau backplate perlu dipasang dengan betul sebelum motherboard diletakkan, jika motherboard menggunakan I/O shield berasingan.",
      "Motherboard perlu diletakkan perlahan-lahan di atas standoff dan diskrukan secara sekata. Skru tidak boleh terlalu ketat kerana boleh merosakkan board.",
      "CPU perlu dipasang mengikut tanda penjuru seperti simbol segitiga pada CPU dan socket. CPU tidak boleh ditekan paksa kerana pin/socket boleh bengkok atau rosak.",
      "Selepas CPU berada pada kedudukan betul, locking arm atau retention bracket perlu dikunci mengikut jenis socket.",
      "Thermal paste disapu dalam kuantiti sederhana di atas CPU sebelum cooler dipasang. Terlalu banyak thermal paste boleh melimpah, terlalu sedikit pula mengurangkan pemindahan haba.",
      "CPU cooler perlu dipasang rata dan kemas. Kabel fan CPU mesti disambungkan pada header CPU_FAN supaya sistem boleh mengesan kipas processor.",
      "RAM perlu dipasang pada slot yang betul mengikut manual motherboard. Untuk dual-channel, slot biasanya perlu dipilih secara berpasangan seperti A2 dan B2.",
      "RAM mesti ditekan dengan tekanan sekata sehingga klip slot terkunci. Jika RAM tidak masuk dengan betul, komputer mungkin tidak boot atau menghasilkan bunyi beep.",
      "Selepas pemasangan, juruteknik perlu membuat semakan visual: skru lengkap, cooler kemas, RAM terkunci, tiada kabel menghalang fan dan tiada objek logam tertinggal dalam casing."
    ],
    notesEn: [
      "Motherboard and CPU installation must be done carefully because both are core components that determine computer system stability.",
      "Before installation, the technician must turn off power, unplug the power cable, wear an anti-static wrist strap and prepare a clean, bright work area.",
      "The casing must be checked first. Standoffs must match the motherboard holes so the motherboard does not touch the casing directly.",
      "The I/O shield or backplate must be installed correctly before the motherboard is placed, if the motherboard uses a separate I/O shield.",
      "The motherboard should be placed gently on the standoffs and screwed evenly. Screws must not be over-tightened because the board can be damaged.",
      "The CPU must be installed according to the corner mark such as the triangle symbol on the CPU and socket. The CPU must not be forced because pins/socket can bend or break.",
      "After the CPU is correctly seated, the locking arm or retention bracket must be locked according to the socket type.",
      "A moderate amount of thermal paste is applied on the CPU before the cooler is installed. Too much paste can overflow, while too little reduces heat transfer.",
      "The CPU cooler must be installed evenly and firmly. The CPU fan cable must be connected to the CPU_FAN header so the system can detect the processor fan.",
      "RAM must be installed in the correct slot according to the motherboard manual. For dual-channel, slots are usually selected in pairs such as A2 and B2.",
      "RAM must be pressed evenly until the slot clips lock. If RAM is not seated correctly, the computer may fail to boot or produce beep sounds.",
      "After installation, the technician must perform a visual check: screws complete, cooler secure, RAM locked, no cable blocking the fan and no metal object left inside the casing."
    ],
    activityBm: "Susun urutan pemasangan motherboard, CPU, thermal paste, cooler dan RAM, kemudian kenal pasti kesilapan pemasangan yang boleh menyebabkan komputer gagal boot.",
    activityEn: "Arrange the installation sequence for motherboard, CPU, thermal paste, cooler and RAM, then identify installation mistakes that can cause boot failure."
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
          src="assets/images/logo-kolej.png?v=6"
          data-fallbacks="assets/images/logo-kolej.PNG?v=6|assets/image/logo-kolej.png?v=6|assets/image/logo-kolej.PNG?v=6|assets/logo-kolej.png?v=6|assets/logo-kolej.PNG?v=6|logo-kolej.png?v=6|assets/logo-mentari.png?v=6|assets/logo-mentari.PNG?v=6|logo-mentari.png?v=6|logo-mentari.PNG?v=6|assets/Logo-Mentari.png?v=6"
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
      ${mission.id === 4 ? renderKp04Premium() : ""}
      ${mission.id === 5 ? renderKp05Premium() : ""}
      ${mission.id === 6 ? renderKp06Premium() : ""}
      <div id="quizMount"></div>
    </section>
  `);

  if (mission.id === 1) bindKp01Game();
  if (mission.id === 2) bindKp02Game();
  if (mission.id === 3) bindKp03Game();
  if (mission.id === 4) bindKp04Game();
  if (mission.id === 5) bindKp05Game();
  if (mission.id === 6) bindKp06Game();
}

function renderSimulation(mission) {
  if (mission.id === 1) {
    const bm = state.lang === "bm";
    const ticketItems = bm
      ? [
          ["Windows 11 Pro", "software", "Keperluan perisian sistem operasi."],
          ["RAM 16GB", "hardware", "Keperluan perkakasan selepas change order."],
          ["Printer rangkaian", "peripheral", "Periferal yang perlu disambung dan diuji."],
          ["Siap sebelum 3.00 petang", "schedule", "Had masa kerja yang mesti dipatuhi."],
          ["Lesen Microsoft Office", "risk", "Risiko/pengesahan kerana lesen perlu sah."],
          ["Capaian internet", "network", "Keperluan rangkaian untuk komputer pengguna."]
        ]
      : [
          ["Windows 11 Pro", "software", "Operating system software requirement."],
          ["16GB RAM", "hardware", "Hardware requirement after the change order."],
          ["Network printer", "peripheral", "Peripheral that must be connected and tested."],
          ["Finish before 3.00 p.m.", "schedule", "Work deadline that must be followed."],
          ["Microsoft Office licence", "risk", "Risk/confirmation because the licence must be valid."],
          ["Internet access", "network", "Network requirement for the user computer."]
        ];
    const categories = bm
      ? [["hardware", "Hardware"], ["software", "Software"], ["peripheral", "Periferal"], ["network", "Rangkaian"], ["schedule", "Masa"], ["risk", "Risiko"]]
      : [["hardware", "Hardware"], ["software", "Software"], ["peripheral", "Peripheral"], ["network", "Network"], ["schedule", "Schedule"], ["risk", "Risk"]];

    return `
      <div class="main-sim kp01-main-sim">
        <div class="sim-badge">${bm ? "SIMULASI KP01 - ANALISIS TIKET KERJA" : "KP01 SIMULATION - WORK TICKET ANALYSIS"}</div>
        <div class="sim-instruction">
          ${bm ? "Klik satu maklumat daripada tiket kerja, kemudian pilih kategori yang betul." : "Click one work-ticket item, then choose the correct category."}
        </div>
        <div class="main-sim-grid">
          <div class="main-sim-panel">
            <h3>${bm ? "1. Maklumat tiket kerja" : "1. Work-ticket items"}</h3>
            <div class="sim-choice-list">
              ${ticketItems.map(([title, answer, info]) => `
                <button type="button" class="sim-choice" data-kp01-ticket-item="${title}" data-kp01-answer="${answer}" data-kp01-info="${info}" onclick="selectKp01TicketItem(this)">
                  <strong>${title}</strong>
                  <small>${bm ? "Pilih dan kategorikan" : "Select and categorise"}</small>
                </button>
              `).join("")}
            </div>
          </div>
          <div class="main-sim-panel">
            <h3>${bm ? "2. Pilih kategori" : "2. Choose category"}</h3>
            <div class="sim-category-grid">
              ${categories.map(([value, label]) => `<button type="button" class="btn" data-kp01-category="${value}" onclick="checkKp01TicketCategory(this)">${label}</button>`).join("")}
            </div>
          </div>
          <div class="main-sim-panel">
            <h3>${bm ? "3. Maklum balas" : "3. Feedback"}</h3>
            <div id="kp01MainResult" class="hotspot-result">${bm ? "Belum mula. Pilih maklumat tiket kerja." : "Not started. Choose a work-ticket item."}</div>
            <div id="kp01MainChecklist" class="procedure-card muted">${bm ? "Checklist KP02 akan dibina selepas jawapan betul." : "KP02 checklist will be built after a correct answer."}</div>
            <div id="kp01MainScore" class="score-pill">${bm ? "Skor latihan: 0/0" : "Drill score: 0/0"}</div>
          </div>
        </div>
      </div>
    `;
  }

  if (mission.id === 2) {
    const bm = state.lang === "bm";
    const items = bm
      ? [
          ["Pemutar skru Phillips", "tools", "Tool untuk membuka dan mengetatkan skru casing/perkakasan."],
          ["Anti-static wrist strap", "safety", "Item keselamatan untuk mengurangkan risiko ESD."],
          ["Motherboard", "hardware", "Komponen utama tempat CPU, RAM dan kad dipasang."],
          ["Windows installer USB", "software", "Media pemasangan sistem operasi."],
          ["Driver chipset", "software", "Perisian pemacu selepas pemasangan OS."],
          ["RAM DDR4", "hardware", "Memori utama komputer."],
          ["Thermal paste", "tools", "Bahan sokongan pemasangan CPU cooler."],
          ["Anti-static mat", "safety", "Permukaan kerja selamat untuk komponen sensitif."]
        ]
      : [
          ["Phillips screwdriver", "tools", "Tool for opening and tightening casing/hardware screws."],
          ["Anti-static wrist strap", "safety", "Safety item to reduce ESD risk."],
          ["Motherboard", "hardware", "Main component where CPU, RAM and cards are installed."],
          ["Windows installer USB", "software", "Operating system installation media."],
          ["Chipset driver", "software", "Driver software after OS installation."],
          ["DDR4 RAM", "hardware", "Main computer memory."],
          ["Thermal paste", "tools", "Support material for CPU cooler installation."],
          ["Anti-static mat", "safety", "Safe work surface for sensitive components."]
        ];
    const trays = bm
      ? [["tools", "Tools"], ["hardware", "Hardware"], ["software", "Software"], ["safety", "Safety"]]
      : [["tools", "Tools"], ["hardware", "Hardware"], ["software", "Software"], ["safety", "Safety"]];

    return `
      <div class="main-sim kp02-main-sim">
        <div class="sim-badge">${bm ? "SIMULASI KP02 - WORKBENCH KIT KERJA" : "KP02 SIMULATION - WORKBENCH KIT"}</div>
        <div class="sim-instruction">
          ${bm ? "Klik item di workbench, kemudian masukkan ke tray kategori yang betul." : "Click an item on the workbench, then place it into the correct category tray."}
        </div>
        <div class="animated-workbench">
          <div class="moving-item item-a">Tools</div>
          <div class="moving-item item-b">Hardware</div>
          <div class="moving-item item-c">Software</div>
          <div class="moving-item item-d">Safety</div>
          <div class="workbench-line"></div>
        </div>
        <div class="main-sim-grid">
          <div class="main-sim-panel">
            <h3>${bm ? "1. Item workbench" : "1. Workbench items"}</h3>
            <div class="sim-choice-list">
              ${items.map(([title, answer, info]) => `
                <button type="button" class="sim-choice" data-kp02-work-item="${title}" data-kp02-work-answer="${answer}" data-kp02-work-info="${info}" onclick="selectKp02WorkbenchItem(this)">
                  <strong>${title}</strong>
                  <small>${bm ? "Klik untuk asingkan" : "Click to sort"}</small>
                </button>
              `).join("")}
            </div>
          </div>
          <div class="main-sim-panel">
            <h3>${bm ? "2. Tray kategori" : "2. Category trays"}</h3>
            <div class="sim-category-grid">
              ${trays.map(([value, label]) => `<button type="button" class="btn tray-btn" data-kp02-tray="${value}" onclick="checkKp02WorkbenchTray(this)">${label}</button>`).join("")}
            </div>
          </div>
          <div class="main-sim-panel">
            <h3>${bm ? "3. Keputusan workbench" : "3. Workbench result"}</h3>
            <div id="kp02MainResult" class="hotspot-result">${bm ? "Belum mula. Pilih satu item workbench." : "Not started. Choose one workbench item."}</div>
            <div id="kp02WorkbenchNote" class="procedure-card muted">${bm ? "Sistem akan jelaskan fungsi item selepas padanan betul." : "The system will explain the item function after a correct match."}</div>
            <div id="kp02MainScore" class="score-pill">${bm ? "Skor latihan: 0/0" : "Drill score: 0/0"}</div>
          </div>
        </div>
      </div>
    `;
  }

  if (mission.id === 5) {
    const bm = state.lang === "bm";
    const components = bm
      ? [
          ["CPU", "process", "Memproses arahan dan mengawal operasi sistem."],
          ["RAM", "active-memory", "Menyimpan data sementara untuk aplikasi yang sedang berjalan."],
          ["SSD / NVMe", "storage", "Menyimpan OS, aplikasi dan fail pengguna secara kekal dengan capaian pantas."],
          ["Motherboard", "connection", "Menghubungkan CPU, RAM, storage, GPU, port dan sambungan kuasa."],
          ["PSU", "power", "Membekalkan kuasa elektrik stabil kepada semua komponen."],
          ["GPU", "graphics", "Memproses paparan grafik, video, 3D dan resolusi tinggi."],
          ["Cooling Fan", "cooling", "Mengawal suhu supaya komponen tidak terlalu panas."],
          ["RJ45 / LAN", "network", "Menyediakan sambungan komputer kepada rangkaian."]
        ]
      : [
          ["CPU", "process", "Processes instructions and controls system operation."],
          ["RAM", "active-memory", "Stores temporary data for running applications."],
          ["SSD / NVMe", "storage", "Stores OS, applications and user files permanently with fast access."],
          ["Motherboard", "connection", "Connects CPU, RAM, storage, GPU, ports and power connections."],
          ["PSU", "power", "Supplies stable electrical power to all components."],
          ["GPU", "graphics", "Processes graphics display, video, 3D and high resolution."],
          ["Cooling Fan", "cooling", "Controls temperature so components do not overheat."],
          ["RJ45 / LAN", "network", "Connects the computer to a network."]
        ];
    const functions = bm
      ? [
          ["process", "Proses arahan"],
          ["active-memory", "Memori sementara"],
          ["storage", "Simpanan kekal"],
          ["connection", "Papan sambungan utama"],
          ["power", "Bekalan kuasa"],
          ["graphics", "Paparan grafik"],
          ["cooling", "Kawalan suhu"],
          ["network", "Sambungan rangkaian"]
        ]
      : [
          ["process", "Process instructions"],
          ["active-memory", "Temporary memory"],
          ["storage", "Permanent storage"],
          ["connection", "Main connection board"],
          ["power", "Power supply"],
          ["graphics", "Graphics display"],
          ["cooling", "Temperature control"],
          ["network", "Network connection"]
        ];

    return `
      <div class="main-sim kp05-main-sim">
        <div class="sim-badge">${bm ? "KP05 V7 - SIMULASI FUNGSI DAN PERANAN KOMPONEN" : "KP05 V7 - COMPONENT FUNCTION AND ROLE SIMULATION"}</div>
        <div class="sim-instruction">
          ${bm ? "Klik satu komponen komputer, kemudian pilih fungsi yang betul." : "Click one computer component, then choose the correct function."}
        </div>
        <div class="component-flow">
          <span>INPUT</span>
          <span>CPU</span>
          <span>RAM</span>
          <span>STORAGE</span>
          <span>OUTPUT</span>
        </div>
        <div class="main-sim-grid">
          <div class="main-sim-panel">
            <h3>${bm ? "1. Pilih komponen" : "1. Choose component"}</h3>
            <div class="sim-choice-list">
              ${components.map(([title, answer, info]) => `
                <button type="button" class="sim-choice" data-kp05-component="${title}" data-kp05-function-answer="${answer}" data-kp05-info="${info}" onclick="selectKp05Component(this)">
                  <strong>${title}</strong>
                  <small>${bm ? "Klik untuk kenal pasti fungsi" : "Click to identify function"}</small>
                </button>
              `).join("")}
            </div>
          </div>
          <div class="main-sim-panel">
            <h3>${bm ? "2. Pilih fungsi" : "2. Choose function"}</h3>
            <div class="sim-category-grid">
              ${functions.map(([value, label]) => `<button type="button" class="btn" data-kp05-function="${value}" onclick="checkKp05Function(this)">${label}</button>`).join("")}
            </div>
          </div>
          <div class="main-sim-panel">
            <h3>${bm ? "3. Maklum balas" : "3. Feedback"}</h3>
            <div id="kp05MainResult" class="hotspot-result">${bm ? "Belum mula. Pilih satu komponen." : "Not started. Choose one component."}</div>
            <div id="kp05MainExample" class="procedure-card muted">${bm ? "Contoh penggunaan akan dipaparkan selepas jawapan betul." : "A usage example will appear after a correct answer."}</div>
            <div id="kp05MainScore" class="score-pill">${bm ? "Skor latihan: 0/0" : "Drill score: 0/0"}</div>
          </div>
        </div>
      </div>
    `;
  }

  if (mission.id === 6) {
    const bm = state.lang === "bm";
    const steps = bm
      ? [
          ["standoff", "Pasang standoff casing", "Standoff perlu sepadan dengan lubang motherboard."],
          ["io", "Pasang I/O shield", "I/O shield dipasang dahulu jika ia jenis berasingan."],
          ["board", "Letak motherboard", "Letakkan motherboard perlahan-lahan di atas standoff."],
          ["cpu", "Pasang CPU ikut tanda segitiga", "CPU perlu duduk rata tanpa ditekan paksa."],
          ["lock", "Kunci socket CPU", "Locking arm/bracket dikunci selepas CPU sepadan."],
          ["paste", "Sapukan thermal paste", "Gunakan kuantiti sederhana di atas CPU."],
          ["cooler", "Pasang cooler dan CPU_FAN", "Cooler dipasang rata dan kabel fan ke CPU_FAN."],
          ["ram", "Pasang RAM hingga klip terkunci", "RAM ditekan sekata pada slot yang betul."]
        ]
      : [
          ["standoff", "Install casing standoffs", "Standoffs must match motherboard holes."],
          ["io", "Install I/O shield", "The I/O shield is installed first if it is separate."],
          ["board", "Place motherboard", "Place the motherboard gently on the standoffs."],
          ["cpu", "Install CPU by triangle mark", "The CPU must sit flat without being forced."],
          ["lock", "Lock CPU socket", "The locking arm/bracket is secured after CPU alignment."],
          ["paste", "Apply thermal paste", "Use a moderate amount on top of the CPU."],
          ["cooler", "Install cooler and CPU_FAN", "Cooler sits evenly and fan cable connects to CPU_FAN."],
          ["ram", "Install RAM until clips lock", "RAM is pressed evenly into the correct slot."]
        ];

    return `
      <div class="main-sim kp06-main-sim">
        <div class="sim-badge">${bm ? "KP06 V8 - SIMULASI URUTAN PEMASANGAN" : "KP06 V8 - INSTALLATION SEQUENCE SIMULATION"}</div>
        <div class="sim-instruction">
          ${bm ? "Klik langkah pemasangan mengikut urutan kerja yang betul. Jika tersalah, sistem beri panduan." : "Click the installation steps in the correct work sequence. If wrong, the system gives guidance."}
        </div>
        <div class="assembly-visual">
          <div class="case-frame">
            <span class="stand-dot s1"></span>
            <span class="stand-dot s2"></span>
            <span class="stand-dot s3"></span>
            <span class="stand-dot s4"></span>
            <div class="mini-board">
              <span class="mini-cpu">CPU</span>
              <span class="mini-ram">RAM</span>
              <span class="mini-fan">FAN</span>
            </div>
          </div>
        </div>
        <div class="main-sim-grid">
          <div class="main-sim-panel">
            <h3>${bm ? "1. Pilih langkah" : "1. Choose steps"}</h3>
            <div class="sim-choice-list">
              ${steps.map(([key, title, info]) => `
                <button type="button" class="sim-choice" data-kp06-step="${key}" data-kp06-info="${info}" onclick="selectKp06Step(this)">
                  <strong>${title}</strong>
                  <small>${bm ? "Klik jika ini langkah seterusnya" : "Click if this is the next step"}</small>
                </button>
              `).join("")}
            </div>
          </div>
          <div class="main-sim-panel">
            <h3>${bm ? "2. Urutan dipilih" : "2. Selected sequence"}</h3>
            <ol id="kp06SequenceList" class="sequence-list"></ol>
            <button type="button" class="btn" onclick="resetKp06Sequence()">${bm ? "Reset urutan" : "Reset sequence"}</button>
          </div>
          <div class="main-sim-panel">
            <h3>${bm ? "3. Maklum balas" : "3. Feedback"}</h3>
            <div id="kp06MainResult" class="hotspot-result">${bm ? "Mula dengan standoff casing." : "Start with casing standoffs."}</div>
            <div id="kp06MainGuide" class="procedure-card muted">${bm ? "Progress pemasangan akan dipaparkan selepas setiap langkah betul." : "Installation progress will appear after each correct step."}</div>
            <div id="kp06MainScore" class="score-pill">${bm ? "Progress: 0/8" : "Progress: 0/8"}</div>
          </div>
        </div>
      </div>
    `;
  }

  if (mission.id === 4) {
    const bm = state.lang === "bm";
    const situations = bm
      ? [
          ["Buka skru casing", "screwdriver", "Gunakan pemutar skru Phillips yang sesuai supaya kepala skru tidak rosak.", ["Matikan komputer dan cabut kabel kuasa.", "Pilih saiz pemutar skru yang sepadan.", "Longgarkan skru dan simpan dalam tray."]],
          ["Pegang RAM / motherboard", "esd", "Gunakan anti-static wrist strap untuk kurangkan risiko ESD.", ["Sentuh bahagian logam casing untuk nyahcas statik.", "Pakai anti-static wrist strap.", "Pegang komponen pada bahagian tepi PCB."]],
          ["Skru kecil mudah hilang", "tray", "Gunakan screw tray untuk asing dan simpan skru.", ["Labelkan skru mengikut lokasi.", "Masukkan skru ke screw tray.", "Semak bilangan skru sebelum tutup casing."]],
          ["CPU perlu cooler", "paste", "Letak thermal paste sederhana antara CPU dan cooler.", ["Bersihkan permukaan CPU jika perlu.", "Letak thermal paste sebesar kacang kecil.", "Pasang cooler secara rata dan kemas."]],
          ["Kabel menghalang airflow", "tie", "Gunakan cable tie atau velcro untuk kemas kabel.", ["Susun kabel ikut laluan casing.", "Ikat kabel tanpa terlalu ketat.", "Pastikan kipas dan airflow tidak terhalang."]],
          ["Habuk pada casing/fan", "brush", "Gunakan berus lembut atau blower dengan berhati-hati.", ["Pegang fan supaya tidak berpusing laju.", "Bersihkan habuk dengan berus lembut.", "Elakkan tekanan angin terlalu kuat pada komponen kecil."]]
        ]
      : [
          ["Open casing screws", "screwdriver", "Use the correct Phillips screwdriver so the screw head is not damaged.", ["Shut down the computer and unplug the power cable.", "Choose the matching screwdriver size.", "Loosen the screws and store them in a tray."]],
          ["Handle RAM / motherboard", "esd", "Use an anti-static wrist strap to reduce ESD risk.", ["Touch the metal casing to discharge static.", "Wear an anti-static wrist strap.", "Hold the component by the PCB edges."]],
          ["Small screws can be lost", "tray", "Use a screw tray to separate and store screws.", ["Label screws by location.", "Place screws in a screw tray.", "Check the screw count before closing the casing."]],
          ["CPU needs cooler", "paste", "Apply moderate thermal paste between CPU and cooler.", ["Clean the CPU surface if needed.", "Apply a small pea-sized amount of thermal paste.", "Install the cooler evenly and firmly."]],
          ["Cables block airflow", "tie", "Use cable ties or velcro to organise cables.", ["Route cables through the casing path.", "Tie cables without over-tightening.", "Make sure fans and airflow are not blocked."]],
          ["Dust on casing/fan", "brush", "Use a soft brush or blower carefully.", ["Hold the fan so it does not spin too fast.", "Clean dust with a soft brush.", "Avoid strong air pressure on small components."]]
        ];
    const tools = bm
      ? [
          ["screwdriver", "Pemutar skru"],
          ["esd", "Anti-static strap"],
          ["tray", "Screw tray"],
          ["paste", "Thermal paste"],
          ["tie", "Cable tie"],
          ["brush", "Berus lembut"]
        ]
      : [
          ["screwdriver", "Screwdriver"],
          ["esd", "Anti-static strap"],
          ["tray", "Screw tray"],
          ["paste", "Thermal paste"],
          ["tie", "Cable tie"],
          ["brush", "Soft brush"]
        ];

    return `
      <div class="kp04-main-sim">
        <div class="sim-badge">${bm ? "SIMULASI INTERAKTIF KP04 - PILIH SITUASI DAN TOOL" : "KP04 INTERACTIVE SIMULATION - SELECT SITUATION AND TOOL"}</div>
        <div class="sim-instruction">
          ${bm ? "Latihan ini melatih pelajar memilih peralatan pemasangan perkakasan yang betul mengikut situasi kerja sebenar." : "This drill trains students to select the correct hardware installation tool based on a real work situation."}
        </div>
        <div class="kp04-workbench">
          <div class="kp04-sim-column">
            <h3>${bm ? "1. Pilih situasi kerja" : "1. Choose a work situation"}</h3>
            <div class="situation-list">
              ${situations.map(([title, answer, info, steps], index) => `
                <button type="button" class="situation-chip" data-kp04-main-situation="${title}" data-main-answer="${answer}" data-main-info="${info}" data-main-steps="${steps.join("||")}" onclick="selectKp04Situation(this)" style="--delay:${index}">
                  <span>${title}</span>
                  <small>${bm ? "Klik untuk mula latihan" : "Click to start drill"}</small>
                </button>
              `).join("")}
            </div>
          </div>
          <div class="kp04-sim-column">
            <h3>${bm ? "2. Pilih tool yang sesuai" : "2. Choose the suitable tool"}</h3>
            <div class="tool-choice-bank">
              ${tools.map(([value, label]) => `<button type="button" class="btn" data-kp04-main-tool="${value}" onclick="checkKp04Tool(this)">${label}</button>`).join("")}
            </div>
          </div>
          <div class="kp04-feedback-panel">
            <h3>${bm ? "3. Keputusan latihan" : "3. Drill result"}</h3>
            <div id="kp04MainResult" class="hotspot-result">
              ${bm ? "Belum mula. Pilih satu situasi kerja dahulu." : "Not started. Choose one work situation first."}
            </div>
            <div id="kp04ProcedureCard" class="procedure-card muted">
              ${bm ? "Langkah penggunaan selamat akan dipaparkan selepas jawapan betul." : "Safe-use steps will appear after a correct answer."}
            </div>
            <div id="kp04MainScore" class="score-pill">${bm ? "Skor latihan: 0/0" : "Drill score: 0/0"}</div>
          </div>
        </div>
      </div>
    `;
  }

  if (mission.id === 3) {
    const bm = state.lang === "bm";
    const components = bm
      ? [
          ["CPU", "process", "Memproses arahan komputer."],
          ["RAM", "temporary", "Menyimpan data sementara semasa komputer beroperasi."],
          ["SSD", "permanent", "Menyimpan OS, aplikasi dan data secara kekal."],
          ["PSU", "power", "Membekalkan kuasa stabil kepada komponen."],
          ["GPU", "graphics", "Memproses paparan grafik."],
          ["RJ45", "network", "Menyambungkan komputer ke rangkaian."]
        ]
      : [
          ["CPU", "process", "Processes computer instructions."],
          ["RAM", "temporary", "Stores temporary data while the computer is running."],
          ["SSD", "permanent", "Stores OS, applications and data permanently."],
          ["PSU", "power", "Supplies stable power to components."],
          ["GPU", "graphics", "Processes graphic display."],
          ["RJ45", "network", "Connects the computer to a network."]
        ];
    const functions = bm
      ? [
          ["process", "Proses arahan"],
          ["temporary", "Data sementara"],
          ["permanent", "Data kekal"],
          ["power", "Bekal kuasa"],
          ["graphics", "Paparan grafik"],
          ["network", "Rangkaian"]
        ]
      : [
          ["process", "Process instructions"],
          ["temporary", "Temporary data"],
          ["permanent", "Permanent data"],
          ["power", "Power supply"],
          ["graphics", "Graphics display"],
          ["network", "Network"]
        ];

    return `
      <div class="kp03-main-sim">
        <div class="sim-instruction">
          ${bm ? "Klik satu komponen, kemudian pilih fungsi yang betul." : "Click a component, then choose the correct function."}
        </div>
        <div class="sim-board-mini">
          ${components.map(([name, answer, info]) => `
            <button class="sim-chip" data-main-component="${name}" data-main-answer="${answer}" data-main-info="${info}">${name}</button>
          `).join("")}
        </div>
        <div class="sim-function-bank">
          ${functions.map(([value, label]) => `<button class="btn" data-main-function="${value}">${label}</button>`).join("")}
        </div>
        <div id="kp03MainResult" class="hotspot-result">
          ${bm ? "Belum pilih komponen." : "No component selected yet."}
        </div>
      </div>
    `;
  }

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
  activeKp01TicketItem = null;
  kp01MainStats = { attempts: 0, correct: 0 };

  document.querySelectorAll("[data-kp01-ticket-item]").forEach((button) => {
    button.onclick = () => selectKp01TicketItem(button);
  });

  document.querySelectorAll("[data-kp01-category]").forEach((button) => {
    button.onclick = () => checkKp01TicketCategory(button);
  });

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

let activeKp01TicketItem = null;
let kp01MainStats = { attempts: 0, correct: 0 };

function selectKp01TicketItem(button) {
  activeKp01TicketItem = {
    title: button.dataset.kp01TicketItem,
    answer: button.dataset.kp01Answer,
    info: button.dataset.kp01Info
  };

  document.querySelectorAll("[data-kp01-ticket-item]").forEach((item) => item.classList.remove("active"));
  document.querySelectorAll("[data-kp01-category]").forEach((item) => item.classList.remove("selected", "correct", "incorrect"));
  button.classList.add("active");

  const result = document.getElementById("kp01MainResult");
  const checklist = document.getElementById("kp01MainChecklist");
  if (result) {
    result.classList.remove("correct", "incorrect");
    result.innerHTML = `
      <strong>${activeKp01TicketItem.title}</strong>
      <span>${state.lang === "bm" ? "Pilih kategori maklumat yang betul." : "Choose the correct information category."}</span>
    `;
  }
  if (checklist) {
    checklist.classList.add("muted");
    checklist.textContent = state.lang === "bm"
      ? "Kategori yang betul akan membantu bina checklist KP02."
      : "The correct category helps build the KP02 checklist.";
  }
  return false;
}

function checkKp01TicketCategory(button) {
  const result = document.getElementById("kp01MainResult");
  const checklist = document.getElementById("kp01MainChecklist");
  const score = document.getElementById("kp01MainScore");

  document.querySelectorAll("[data-kp01-category]").forEach((item) => item.classList.remove("selected", "correct", "incorrect"));
  button.classList.add("selected");

  if (!activeKp01TicketItem) {
    if (result) {
      result.classList.remove("correct", "incorrect");
      result.innerHTML = `<strong>${state.lang === "bm" ? "Pilih maklumat dahulu" : "Choose an item first"}</strong><span>${state.lang === "bm" ? "Klik satu maklumat daripada tiket kerja." : "Click one item from the work ticket."}</span>`;
    }
    return false;
  }

  const correct = button.dataset.kp01Category === activeKp01TicketItem.answer;
  kp01MainStats.attempts += 1;
  if (correct) kp01MainStats.correct += 1;
  button.classList.toggle("correct", correct);
  button.classList.toggle("incorrect", !correct);
  if (result) {
    result.classList.toggle("correct", correct);
    result.classList.toggle("incorrect", !correct);
    result.innerHTML = `
      <strong>${correct ? (state.lang === "bm" ? "Betul" : "Correct") : (state.lang === "bm" ? "Belum tepat" : "Not yet")}: ${activeKp01TicketItem.title}</strong>
      <span>${correct ? activeKp01TicketItem.info : (state.lang === "bm" ? "Cuba kategori lain. Baca semula maksud maklumat tiket." : "Try another category. Read the ticket item meaning again.")}</span>
    `;
  }
  if (checklist) {
    checklist.classList.toggle("muted", !correct);
    checklist.innerHTML = correct
      ? `<strong>${state.lang === "bm" ? "Checklist KP02" : "KP02 Checklist"}</strong><span>${state.lang === "bm" ? "Masukkan item ini dalam senarai semakan sebelum kerja pemasangan." : "Add this item to the pre-installation checklist."}</span>`
      : (state.lang === "bm" ? "Belum boleh dimasukkan ke checklist. Padankan kategori dahulu." : "Not ready for the checklist. Match the category first.");
  }
  if (score) {
    score.textContent = state.lang === "bm"
      ? `Skor latihan: ${kp01MainStats.correct}/${kp01MainStats.attempts}`
      : `Drill score: ${kp01MainStats.correct}/${kp01MainStats.attempts}`;
  }
  return false;
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

  const inventory = bm
    ? [
        ["Tools tangan", "Pemutar skru Phillips/flat, tweezer, bekas skru, cable tie, flashlight"],
        ["Tools keselamatan", "Anti-static wrist strap, anti-static mat, glove sesuai, label keselamatan"],
        ["Tools pembersihan", "Blower, berus lembut, kain microfiber, isopropyl alcohol jika sesuai"],
        ["Tools diagnostik", "Cable tester, multimeter, POST card, spare LAN cable, spare power cable"],
        ["Hardware utama", "Motherboard, CPU, RAM, SSD/HDD/NVMe, PSU, casing, GPU jika diperlukan"],
        ["Hardware sokongan", "CPU cooler, casing fan, SATA cable, power cable, screw set, bracket"],
        ["Software asas", "OS installer, chipset driver, network driver, audio driver, graphic driver"],
        ["Software pengguna", "Office app, browser, PDF reader, antivirus, compression tool, utility tool"]
      ]
    : [
        ["Hand tools", "Phillips/flat screwdriver, tweezers, screw tray, cable ties, flashlight"],
        ["Safety tools", "Anti-static wrist strap, anti-static mat, suitable gloves, safety labels"],
        ["Cleaning tools", "Blower, soft brush, microfiber cloth, isopropyl alcohol when suitable"],
        ["Diagnostic tools", "Cable tester, multimeter, POST card, spare LAN cable, spare power cable"],
        ["Main hardware", "Motherboard, CPU, RAM, SSD/HDD/NVMe, PSU, casing, GPU when required"],
        ["Support hardware", "CPU cooler, casing fan, SATA cable, power cable, screw set, bracket"],
        ["Basic software", "OS installer, chipset driver, network driver, audio driver, graphic driver"],
        ["User software", "Office app, browser, PDF reader, antivirus, compression tool, utility tool"]
      ];

  const scenarios = bm
    ? [
        ["Komputer Pejabat", "Utamakan OS, Office, browser, PDF reader, antivirus, printer driver dan rangkaian."],
        ["Komputer Reka Bentuk Asas", "Utamakan RAM lebih tinggi, SSD/NVMe, GPU sesuai, driver graphic dan ruang storage."],
        ["Komputer Kaunter", "Utamakan printer/scanner, rangkaian stabil, aplikasi kerja, backup power dan ujian periferal."]
      ]
    : [
        ["Office Computer", "Prioritise OS, Office, browser, PDF reader, antivirus, printer driver and network."],
        ["Basic Design Computer", "Prioritise higher RAM, SSD/NVMe, suitable GPU, graphic driver and storage space."],
        ["Counter Computer", "Prioritise printer/scanner, stable network, work application, backup power and peripheral test."]
      ];

  const decisionItems = bm
    ? [
        ["Boleh guna", "Item lengkap, serasi, selamat dan menepati job request."],
        ["Perlu ganti", "Item rosak, tidak serasi, kapasiti tidak cukup atau tidak sesuai dengan skop kerja."],
        ["Perlu sahkan", "Lesen, versi OS, spesifikasi tambahan atau kelulusan penyelia belum jelas."],
        ["Tidak berkaitan", "Item tidak diminta dalam job request dan tidak menyokong kerja set-up."]
      ]
    : [
        ["Ready to use", "Item is complete, compatible, safe and matches the job request."],
        ["Need replacement", "Item is faulty, incompatible, insufficient or unsuitable for the work scope."],
        ["Need confirmation", "Licence, OS version, extra specification or supervisor approval is unclear."],
        ["Not related", "Item is not requested in the job request and does not support the setup work."]
      ];

  const activities = bm
    ? [
        "Aktiviti 1: Pelajar baca tiket KP01 dan bina checklist KP02 sendiri.",
        "Aktiviti 2: Pelajar susun item sebenar/bergambar kepada kategori tools, hardware, software dan safety.",
        "Aktiviti 3: Pelajar semak keserasian motherboard, CPU, RAM dan storage berdasarkan senario guru.",
        "Aktiviti 4: Pelajar pilih software wajib untuk komputer pejabat dan jelaskan sebab pilihan.",
        "Aktiviti 5: Pelajar buat pemeriksaan keselamatan sebelum membuka casing.",
        "Aktiviti 6: Pelajar lakon situasi melapor item tidak cukup kepada penyelia sebelum kerja diteruskan.",
        "Aktiviti 7: Pelajar pilih kit kerja untuk tiga senario: pejabat, reka bentuk asas dan kaunter.",
        "Aktiviti 8: Pelajar buat keputusan item: boleh guna, perlu ganti, perlu sahkan atau tidak berkaitan.",
        "Aktiviti 9: Pelajar semak USB bootable dan senaraikan risiko jika installer/driver tiada.",
        "Aktiviti 10: Pelajar bentangkan checklist akhir sebelum kerja pemasangan dimulakan."
      ]
    : [
        "Activity 1: Students read the KP01 ticket and create their own KP02 checklist.",
        "Activity 2: Students sort real/pictured items into tools, hardware, software and safety categories.",
        "Activity 3: Students check motherboard, CPU, RAM and storage compatibility using a teacher scenario.",
        "Activity 4: Students choose required software for an office PC and explain the reason.",
        "Activity 5: Students perform safety checks before opening the casing.",
        "Activity 6: Students role-play reporting missing items to the supervisor before continuing work.",
        "Activity 7: Students choose a work kit for three scenarios: office, basic design and counter PC.",
        "Activity 8: Students decide item status: ready to use, need replacement, need confirmation or not related.",
        "Activity 9: Students test bootable USB and list risks if installer/driver is missing.",
        "Activity 10: Students present the final checklist before installation begins."
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
        <div class="kp02-video" aria-label="${labels.video}">
          <div class="kp02-video-progress"></div>
          <div class="kp02-video-frame kf-1">
            <span>01</span>
            <strong>${bm ? "Baca Checklist KP02" : "Read KP02 Checklist"}</strong>
            <small>${bm ? "Rujuk job request sebelum ambil item." : "Refer to the job request before collecting items."}</small>
          </div>
          <div class="kp02-video-frame kf-2">
            <span>02</span>
            <strong>${bm ? "Sediakan Tools" : "Prepare Tools"}</strong>
            <small>${bm ? "Pemutar skru, anti-static strap, cable tie, thermal paste." : "Screwdriver, anti-static strap, cable ties, thermal paste."}</small>
          </div>
          <div class="kp02-video-frame kf-3">
            <span>03</span>
            <strong>${bm ? "Semak Hardware" : "Check Hardware"}</strong>
            <small>${bm ? "Motherboard, CPU, RAM, SSD, PSU dan casing." : "Motherboard, CPU, RAM, SSD, PSU and casing."}</small>
          </div>
          <div class="kp02-video-frame kf-4">
            <span>04</span>
            <strong>${bm ? "Sediakan Software" : "Prepare Software"}</strong>
            <small>${bm ? "OS installer, driver, browser, Office, antivirus." : "OS installer, drivers, browser, Office, antivirus."}</small>
          </div>
          <div class="kp02-video-frame kf-5">
            <span>05</span>
            <strong>${bm ? "Sahkan Safety & Lesen" : "Confirm Safety & Licence"}</strong>
            <small>${bm ? "ESD, ruang kerja, lesen dan kelulusan penyelia." : "ESD, work area, licence and supervisor approval."}</small>
          </div>
          <div class="kp02-video-caption">${bm ? "Animasi auto: item disediakan sebelum pemasangan komputer." : "Auto animation: items are prepared before computer installation."}</div>
        </div>
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

      <div class="panel lesson-box wide">
        <h2>${bm ? "Inventori Lengkap KP02" : "Complete KP02 Inventory"}</h2>
        <div class="inventory-grid">
          ${inventory.map(([title, detail]) => `<div><strong>${title}</strong><p>${detail}</p></div>`).join("")}
        </div>
      </div>

      <div class="panel lesson-box">
        <h2>${bm ? "Simulasi Senario Kit Kerja" : "Work Kit Scenario Simulation"}</h2>
        <div class="scenario-stack">
          ${scenarios.map(([title, detail]) => `<div><strong>${title}</strong><p>${detail}</p></div>`).join("")}
        </div>
      </div>

      <div class="panel lesson-box">
        <h2>${bm ? "Keputusan Sebelum Pemasangan" : "Pre-Installation Decision"}</h2>
        <div class="decision-grid">
          ${decisionItems.map(([title, detail]) => `<div><strong>${title}</strong><span>${detail}</span></div>`).join("")}
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
  activeKp02WorkbenchItem = null;
  kp02MainStats = { attempts: 0, correct: 0 };

  document.querySelectorAll("[data-kp02-work-item]").forEach((button) => {
    button.onclick = () => selectKp02WorkbenchItem(button);
  });

  document.querySelectorAll("[data-kp02-tray]").forEach((button) => {
    button.onclick = () => checkKp02WorkbenchTray(button);
  });

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

let activeKp02WorkbenchItem = null;
let kp02MainStats = { attempts: 0, correct: 0 };

function selectKp02WorkbenchItem(button) {
  activeKp02WorkbenchItem = {
    title: button.dataset.kp02WorkItem,
    answer: button.dataset.kp02WorkAnswer,
    info: button.dataset.kp02WorkInfo
  };

  document.querySelectorAll("[data-kp02-work-item]").forEach((item) => item.classList.remove("active"));
  document.querySelectorAll("[data-kp02-tray]").forEach((item) => item.classList.remove("selected", "correct", "incorrect"));
  button.classList.add("active");

  const result = document.getElementById("kp02MainResult");
  const note = document.getElementById("kp02WorkbenchNote");
  if (result) {
    result.classList.remove("correct", "incorrect");
    result.innerHTML = `
      <strong>${activeKp02WorkbenchItem.title}</strong>
      <span>${state.lang === "bm" ? "Pilih tray kategori yang sesuai." : "Choose the suitable category tray."}</span>
    `;
  }
  if (note) {
    note.classList.add("muted");
    note.textContent = state.lang === "bm"
      ? "Padankan item dengan kategori sebelum kerja pemasangan dimulakan."
      : "Match the item with its category before installation work begins.";
  }
  return false;
}

function checkKp02WorkbenchTray(button) {
  const result = document.getElementById("kp02MainResult");
  const note = document.getElementById("kp02WorkbenchNote");
  const score = document.getElementById("kp02MainScore");

  document.querySelectorAll("[data-kp02-tray]").forEach((item) => item.classList.remove("selected", "correct", "incorrect"));
  button.classList.add("selected");

  if (!activeKp02WorkbenchItem) {
    if (result) {
      result.classList.remove("correct", "incorrect");
      result.innerHTML = `<strong>${state.lang === "bm" ? "Pilih item dahulu" : "Choose an item first"}</strong><span>${state.lang === "bm" ? "Klik satu item pada workbench." : "Click one item on the workbench."}</span>`;
    }
    return false;
  }

  const correct = button.dataset.kp02Tray === activeKp02WorkbenchItem.answer;
  kp02MainStats.attempts += 1;
  if (correct) kp02MainStats.correct += 1;
  button.classList.toggle("correct", correct);
  button.classList.toggle("incorrect", !correct);
  if (result) {
    result.classList.toggle("correct", correct);
    result.classList.toggle("incorrect", !correct);
    result.innerHTML = `
      <strong>${correct ? (state.lang === "bm" ? "Betul" : "Correct") : (state.lang === "bm" ? "Belum tepat" : "Not yet")}: ${activeKp02WorkbenchItem.title}</strong>
      <span>${correct ? activeKp02WorkbenchItem.info : (state.lang === "bm" ? "Cuba tray lain. Bezakan antara tools, hardware, software dan safety." : "Try another tray. Separate tools, hardware, software and safety.")}</span>
    `;
  }
  if (note) {
    note.classList.toggle("muted", !correct);
    note.innerHTML = correct
      ? `<strong>${state.lang === "bm" ? "Status workbench" : "Workbench status"}</strong><span>${state.lang === "bm" ? "Item telah diasingkan dengan betul dan boleh masuk checklist kerja." : "The item has been sorted correctly and can enter the work checklist."}</span>`
      : (state.lang === "bm" ? "Item belum masuk tray yang betul." : "The item is not in the correct tray yet.");
  }
  if (score) {
    score.textContent = state.lang === "bm"
      ? `Skor latihan: ${kp02MainStats.correct}/${kp02MainStats.attempts}`
      : `Drill score: ${kp02MainStats.correct}/${kp02MainStats.attempts}`;
  }
  return false;
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
            <button class="mb-part cpu" data-kp03-hotspot="CPU Socket" data-info="${bm ? "Tempat CPU dipasang. Pastikan socket CPU serasi dengan motherboard." : "CPU installation area. Make sure CPU socket is compatible with the motherboard."}">CPU</button>
            <button class="mb-part ram" data-kp03-hotspot="RAM Slot" data-info="${bm ? "Tempat RAM dipasang. Semak jenis DDR, kapasiti dan slot yang sesuai." : "RAM installation slots. Check DDR type, capacity and suitable slots."}">RAM</button>
            <button class="mb-part m2" data-kp03-hotspot="M.2 Slot" data-info="${bm ? "Slot untuk NVMe M.2 SSD. Memberi capaian storage yang lebih laju." : "Slot for NVMe M.2 SSD. Provides faster storage access."}">M.2</button>
            <button class="mb-part pcie" data-kp03-hotspot="PCIe Slot" data-info="${bm ? "Slot untuk GPU atau expansion card seperti network/sound card." : "Slot for GPU or expansion cards such as network/sound card."}">PCIe</button>
            <button class="mb-part sata" data-kp03-hotspot="SATA Port" data-info="${bm ? "Port data untuk HDD/SSD SATA. Perlu kabel SATA data dan SATA power." : "Data port for SATA HDD/SSD. Requires SATA data cable and SATA power."}">SATA</button>
            <button class="mb-part power" data-kp03-hotspot="24-pin Power" data-info="${bm ? "Connector kuasa utama motherboard daripada PSU." : "Main motherboard power connector from PSU."}">24-pin</button>
            <div class="mb-trace t1"></div>
            <div class="mb-trace t2"></div>
            <div class="mb-trace t3"></div>
          </div>
          <div class="mb-labels">
            ${boardLabels.map(([title, detail]) => `<div><strong>${title}</strong><span>${detail}</span></div>`).join("")}
          </div>
        </div>
        <div id="kp03HotspotResult" class="hotspot-result">
          ${bm ? "Klik mana-mana bahagian pada motherboard untuk melihat fungsi komponen." : "Click any motherboard area to view the component function."}
        </div>
      </div>

      <div class="panel lesson-box">
        <h2>${labels.ports}</h2>
        <div class="port-map">
          ${portRows.map(([port, cable, use], index) => `
            <button class="port-row" data-kp03-port="${port}" data-info="${cable} - ${use}" style="--delay:${index}">
              <strong>${port}</strong>
              <span>${cable}</span>
              <small>${use}</small>
            </button>
          `).join("")}
        </div>
        <div id="kp03PortResult" class="hotspot-result">
          ${bm ? "Klik port untuk lihat kabel dan fungsi." : "Click a port to view its cable and function."}
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
  let selectedMainComponent = null;

  document.querySelectorAll("[data-main-component]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedMainComponent = {
        name: button.dataset.mainComponent,
        answer: button.dataset.mainAnswer,
        info: button.dataset.mainInfo
      };
      document.querySelectorAll("[data-main-component]").forEach((item) => item.classList.remove("active"));
      document.querySelectorAll("[data-main-function]").forEach((item) => item.classList.remove("selected"));
      button.classList.add("active");
      const result = document.getElementById("kp03MainResult");
      result.innerHTML = `<strong>${selectedMainComponent.name}</strong><span>${state.lang === "bm" ? "Sekarang pilih fungsi yang betul." : "Now choose the correct function."}</span>`;
    });
  });

  document.querySelectorAll("[data-main-function]").forEach((button) => {
    button.addEventListener("click", () => {
      const result = document.getElementById("kp03MainResult");
      document.querySelectorAll("[data-main-function]").forEach((item) => item.classList.remove("selected"));
      button.classList.add("selected");

      if (!selectedMainComponent) {
        result.innerHTML = `<strong>${state.lang === "bm" ? "Pilih komponen dahulu" : "Select a component first"}</strong><span>${state.lang === "bm" ? "Klik CPU, RAM, SSD, PSU, GPU atau RJ45." : "Click CPU, RAM, SSD, PSU, GPU or RJ45."}</span>`;
        return;
      }

      const correct = button.dataset.mainFunction === selectedMainComponent.answer;
      result.classList.toggle("correct", correct);
      result.classList.toggle("incorrect", !correct);
      result.innerHTML = `
        <strong>${correct ? (state.lang === "bm" ? "Betul" : "Correct") : (state.lang === "bm" ? "Belum tepat" : "Not yet")}: ${selectedMainComponent.name}</strong>
        <span>${correct ? selectedMainComponent.info : (state.lang === "bm" ? "Cuba pilih fungsi lain." : "Try another function.")}</span>
      `;
    });
  });

  document.querySelectorAll("[data-kp03-hotspot]").forEach((button) => {
    button.addEventListener("click", () => {
      const result = document.getElementById("kp03HotspotResult");
      document.querySelectorAll("[data-kp03-hotspot]").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      result.innerHTML = `<strong>${button.dataset.kp03Hotspot}</strong><span>${button.dataset.info}</span>`;
    });
  });

  document.querySelectorAll("[data-kp03-port]").forEach((button) => {
    button.addEventListener("click", () => {
      const result = document.getElementById("kp03PortResult");
      document.querySelectorAll("[data-kp03-port]").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      result.innerHTML = `<strong>${button.dataset.kp03Port}</strong><span>${button.dataset.info}</span>`;
    });
  });

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

function renderKp04Premium() {
  const bm = state.lang === "bm";
  const labels = bm
    ? {
        video: "Video Ringkas: Prosedur Tools Sebelum Buka Casing",
        esd: "Simulasi ESD dan Keselamatan Komponen",
        tools: "Peta Tools Pemasangan Perkakasan",
        procedure: "Urutan Kerja Selamat",
        activities: "Aktiviti Pelajar",
        game: "Mini Game: Pilih Tool Yang Betul",
        gameHelp: "Klik tool yang sesuai untuk setiap situasi kerja.",
        done: "Betul. Tool yang dipilih sesuai dengan situasi kerja.",
        wrong: "Belum tepat. Semak semula fungsi tool tersebut."
      }
    : {
        video: "Short Video: Tool Procedure Before Opening Casing",
        esd: "ESD and Component Safety Simulation",
        tools: "Hardware Installation Tool Map",
        procedure: "Safe Work Sequence",
        activities: "Student Activities",
        game: "Mini Game: Choose the Correct Tool",
        gameHelp: "Click the suitable tool for each work situation.",
        done: "Correct. The selected tool matches the work situation.",
        wrong: "Not yet. Check the tool function again."
      };

  const frames = bm
    ? [
        ["01", "Matikan Kuasa", "Shutdown, cabut kabel kuasa dan matikan suis PSU."],
        ["02", "Pakai ESD Protection", "Gunakan anti-static wrist strap atau anti-static mat."],
        ["03", "Buka Casing", "Gunakan pemutar skru yang sesuai dan simpan skru."],
        ["04", "Pasang Komponen", "Elakkan sentuh pin dan jangan guna daya berlebihan."],
        ["05", "Kemas Kabel", "Gunakan cable tie/velcro supaya airflow tidak terhalang."]
      ]
    : [
        ["01", "Turn Off Power", "Shutdown, unplug power cable and turn off PSU switch."],
        ["02", "Wear ESD Protection", "Use anti-static wrist strap or anti-static mat."],
        ["03", "Open Casing", "Use a suitable screwdriver and store screws."],
        ["04", "Install Components", "Avoid touching pins and do not use excessive force."],
        ["05", "Manage Cables", "Use cable ties/velcro so airflow is not blocked."]
      ];

  const toolMap = bm
    ? [
        ["Pemutar skru Phillips", "Membuka dan mengetatkan skru casing, motherboard, PSU dan storage."],
        ["Anti-static wrist strap", "Mengurangkan risiko ESD ketika memegang komponen sensitif."],
        ["Screw tray", "Menyimpan skru mengikut jenis supaya tidak hilang."],
        ["Thermal paste", "Membantu pemindahan haba antara CPU dan cooler."],
        ["Cable tie / velcro", "Mengemas kabel dan menjaga aliran udara casing."],
        ["Blower / berus lembut", "Membersihkan habuk tanpa merosakkan komponen."],
        ["Microfiber cloth", "Membersihkan permukaan casing atau panel dengan selamat."],
        ["Multimeter", "Membantu semakan asas bekalan kuasa jika diperlukan."]
      ]
    : [
        ["Phillips screwdriver", "Open and tighten casing, motherboard, PSU and storage screws."],
        ["Anti-static wrist strap", "Reduce ESD risk when handling sensitive components."],
        ["Screw tray", "Store screws by type so they are not lost."],
        ["Thermal paste", "Helps heat transfer between CPU and cooler."],
        ["Cable tie / velcro", "Organise cables and maintain casing airflow."],
        ["Blower / soft brush", "Clean dust without damaging components."],
        ["Microfiber cloth", "Safely clean casing surface or panels."],
        ["Multimeter", "Helps basic power supply checking when required."]
      ];

  const procedure = bm
    ? ["Sediakan tools", "Shutdown dan cabut kuasa", "Pakai ESD protection", "Buka casing", "Simpan skru", "Pasang/semak komponen", "Kemas kabel", "Semak sambungan", "Tutup casing"]
    : ["Prepare tools", "Shutdown and unplug power", "Wear ESD protection", "Open casing", "Store screws", "Install/check components", "Manage cables", "Check connections", "Close casing"];

  const activities = bm
    ? [
        "Aktiviti 1: Pelajar susun urutan kerja selamat sebelum membuka casing.",
        "Aktiviti 2: Pelajar pilih pemutar skru yang sesuai berdasarkan jenis skru.",
        "Aktiviti 3: Pelajar asingkan skru casing, motherboard, PSU dan storage dalam screw tray.",
        "Aktiviti 4: Pelajar tunjuk cara memakai anti-static wrist strap dengan betul.",
        "Aktiviti 5: Pelajar latihan meletakkan thermal paste pada model CPU secara sederhana.",
        "Aktiviti 6: Pelajar kemas kabel menggunakan cable tie/velcro tanpa menghalang airflow.",
        "Aktiviti 7: Pelajar kenal pasti kesilapan kerja seperti pegang pin RAM, guna daya berlebihan atau lupa cabut kuasa.",
        "Aktiviti 8: Pelajar buat checklist tool inspection sebelum mula kerja."
      ]
    : [
        "Activity 1: Students arrange the safe work sequence before opening the casing.",
        "Activity 2: Students select a suitable screwdriver based on screw type.",
        "Activity 3: Students separate casing, motherboard, PSU and storage screws in a screw tray.",
        "Activity 4: Students demonstrate correct anti-static wrist strap use.",
        "Activity 5: Students practise applying a moderate amount of thermal paste on a CPU model.",
        "Activity 6: Students manage cables using cable ties/velcro without blocking airflow.",
        "Activity 7: Students identify work mistakes such as touching RAM pins, using excessive force or forgetting to unplug power.",
        "Activity 8: Students complete a tool inspection checklist before starting work."
      ];

  const gameItems = bm
    ? [
        ["Buka skru casing", "screwdriver"],
        ["Pegang RAM dan motherboard", "esd"],
        ["Skru kecil mudah hilang", "tray"],
        ["CPU cepat panas selepas pasang cooler", "paste"],
        ["Kabel berselerak halang airflow", "tie"],
        ["Habuk pada casing dan fan", "brush"]
      ]
    : [
        ["Open casing screws", "screwdriver"],
        ["Handle RAM and motherboard", "esd"],
        ["Small screws can be lost", "tray"],
        ["CPU overheats after cooler installation", "paste"],
        ["Messy cables block airflow", "tie"],
        ["Dust on casing and fan", "brush"]
      ];

  const choices = bm
    ? [
        ["screwdriver", "Pemutar skru"],
        ["esd", "Anti-static strap"],
        ["tray", "Screw tray"],
        ["paste", "Thermal paste"],
        ["tie", "Cable tie"],
        ["brush", "Berus lembut"]
      ]
    : [
        ["screwdriver", "Screwdriver"],
        ["esd", "Anti-static strap"],
        ["tray", "Screw tray"],
        ["paste", "Thermal paste"],
        ["tie", "Cable tie"],
        ["brush", "Soft brush"]
      ];

  return `
    <div class="kp01-grid">
      <div class="panel lesson-box">
        <h2>${labels.video}</h2>
        <div class="kp04-video">
          <div class="kp04-video-progress"></div>
          ${frames.map(([num, title, detail], index) => `
            <div class="kp04-video-frame k4-${index + 1}">
              <span>${num}</span>
              <strong>${title}</strong>
              <small>${detail}</small>
            </div>
          `).join("")}
          <div class="kp04-tool-orbit">
            <span>ESD</span>
            <span>TOOLS</span>
            <span>SCREW</span>
          </div>
        </div>
      </div>

      <div class="panel lesson-box">
        <h2>${labels.esd}</h2>
        <div class="esd-sim">
          <div class="hand-sim">${bm ? "Tangan" : "Hand"}</div>
          <div class="spark-sim"></div>
          <div class="component-sim">RAM</div>
          <p>${bm ? "Gunakan anti-static wrist strap sebelum menyentuh komponen sensitif." : "Use an anti-static wrist strap before touching sensitive components."}</p>
        </div>
      </div>

      <div class="panel lesson-box wide">
        <h2>${labels.tools}</h2>
        <div class="tool-map-grid">
          ${toolMap.map(([title, detail]) => `<div><strong>${title}</strong><p>${detail}</p></div>`).join("")}
        </div>
      </div>

      <div class="panel lesson-box">
        <h2>${labels.procedure}</h2>
        <div class="procedure-ladder">
          ${procedure.map((item, index) => `<div><span>${index + 1}</span><strong>${item}</strong></div>`).join("")}
        </div>
      </div>

      <div class="panel lesson-box">
        <h2>${labels.activities}</h2>
        <ol class="activity-list">${activities.map((item) => `<li>${item}</li>`).join("")}</ol>
      </div>

      <div class="panel lesson-box wide">
        <h2>${labels.game}</h2>
        <p class="muted">${labels.gameHelp}</p>
        <div class="game-list">
          ${gameItems.map(([item, answer], index) => `
            <div class="game-card" data-kp04-card="${index}">
              <strong>${item}</strong>
              <div class="game-options">
                ${choices.map(([value, label]) => `<button class="btn" data-kp04-answer="${value}" data-correct="${answer}" data-card="${index}">${label}</button>`).join("")}
              </div>
            </div>
          `).join("")}
        </div>
        <div id="kp04GameResult" class="result"></div>
        <template id="kp04GameText" data-done="${labels.done}" data-wrong="${labels.wrong}"></template>
      </div>
    </div>
  `;
}

let activeKp04Situation = null;
let kp04MainStats = { attempts: 0, correct: 0 };

function selectKp04Situation(button) {
  activeKp04Situation = {
    title: button.dataset.kp04MainSituation,
    answer: button.dataset.mainAnswer,
    info: button.dataset.mainInfo,
    steps: (button.dataset.mainSteps || "").split("||").filter(Boolean)
  };

  document.querySelectorAll("[data-kp04-main-situation]").forEach((item) => item.classList.remove("active"));
  document.querySelectorAll("[data-kp04-main-tool]").forEach((item) => {
    item.classList.remove("selected", "correct", "incorrect");
  });
  button.classList.add("active");

  const result = document.getElementById("kp04MainResult");
  const procedure = document.getElementById("kp04ProcedureCard");
  if (!result) return false;
  result.classList.remove("correct", "incorrect");
  result.innerHTML = `
    <strong>${activeKp04Situation.title}</strong>
    <span>${state.lang === "bm" ? "Sekarang pilih tool yang sesuai di bawah." : "Now choose the suitable tool below."}</span>
  `;
  if (procedure) {
    procedure.classList.add("muted");
    procedure.innerHTML = state.lang === "bm"
      ? "Pilih tool dahulu. Langkah penggunaan selamat akan keluar selepas jawapan betul."
      : "Choose a tool first. Safe-use steps will appear after a correct answer.";
  }
  return false;
}

function checkKp04Tool(button) {
  const result = document.getElementById("kp04MainResult");
  const procedure = document.getElementById("kp04ProcedureCard");
  const score = document.getElementById("kp04MainScore");
  if (!result) return false;

  document.querySelectorAll("[data-kp04-main-tool]").forEach((item) => item.classList.remove("selected", "correct", "incorrect"));
  button.classList.add("selected");

  if (!activeKp04Situation) {
    result.classList.remove("correct", "incorrect");
    if (procedure) {
      procedure.classList.add("muted");
      procedure.innerHTML = state.lang === "bm"
        ? "Arahan: pilih situasi kerja dahulu."
        : "Instruction: choose a work situation first.";
    }
    result.innerHTML = `
      <strong>${state.lang === "bm" ? "Pilih situasi dahulu" : "Select a situation first"}</strong>
      <span>${state.lang === "bm" ? "Klik salah satu situasi kerja di bahagian atas, kemudian pilih tool." : "Click one work situation above, then choose a tool."}</span>
    `;
    return false;
  }

  const correct = button.dataset.kp04MainTool === activeKp04Situation.answer;
  kp04MainStats.attempts += 1;
  if (correct) kp04MainStats.correct += 1;
  button.classList.toggle("correct", correct);
  button.classList.toggle("incorrect", !correct);
  result.classList.toggle("correct", correct);
  result.classList.toggle("incorrect", !correct);
  result.innerHTML = `
    <strong>${correct ? (state.lang === "bm" ? "Betul" : "Correct") : (state.lang === "bm" ? "Belum tepat" : "Not yet")}: ${activeKp04Situation.title}</strong>
    <span>${correct ? activeKp04Situation.info : (state.lang === "bm" ? "Cuba pilih tool lain. Semak fungsi tool sebelum pemasangan." : "Try another tool. Check the tool function before installation.")}</span>
  `;
  if (procedure) {
    procedure.classList.toggle("muted", !correct);
    procedure.innerHTML = correct
      ? `
        <strong>${state.lang === "bm" ? "Langkah penggunaan selamat" : "Safe-use steps"}</strong>
        <ol>${activeKp04Situation.steps.map((step) => `<li>${step}</li>`).join("")}</ol>
      `
      : (state.lang === "bm"
        ? "Belum tepat. Pilih tool lain sehingga padanan situasi dan peralatan betul."
        : "Not yet. Choose another tool until the work situation and equipment match.");
  }
  if (score) {
    score.textContent = state.lang === "bm"
      ? `Skor latihan: ${kp04MainStats.correct}/${kp04MainStats.attempts}`
      : `Drill score: ${kp04MainStats.correct}/${kp04MainStats.attempts}`;
  }
  return false;
}

function bindKp04Game() {
  activeKp04Situation = null;
  kp04MainStats = { attempts: 0, correct: 0 };

  document.querySelectorAll("[data-kp04-main-situation]").forEach((button) => {
    button.onclick = () => selectKp04Situation(button);
  });

  document.querySelectorAll("[data-kp04-main-tool]").forEach((button) => {
    button.onclick = () => checkKp04Tool(button);
  });

  document.querySelectorAll("[data-kp04-answer]").forEach((button) => {
    button.addEventListener("click", () => {
      const card = document.querySelector(`[data-kp04-card="${button.dataset.card}"]`);
      const result = document.getElementById("kp04GameResult");
      const gameText = document.getElementById("kp04GameText");
      const correct = button.dataset.kp04Answer === button.dataset.correct;

      card.querySelectorAll("[data-kp04-answer]").forEach((item) => item.classList.remove("selected"));
      button.classList.add("selected");
      card.classList.toggle("correct", correct);
      card.classList.toggle("incorrect", !correct);
      result.innerHTML = `<div class="${correct ? "success-note" : "error"}">${correct ? gameText.dataset.done : gameText.dataset.wrong}</div>`;
    });
  });
}

function renderKp05Premium() {
  const bm = state.lang === "bm";
  const labels = bm
    ? {
        video: "Animasi Ringkas: Aliran Fungsi Komponen",
        map: "Peta Fungsi Komponen",
        scenario: "Simulasi Senario Pemilihan Komponen",
        activities: "Aktiviti Pelajar",
        game: "Mini Game: Padankan Simptom Dengan Komponen",
        gameHelp: "Klik komponen yang paling berkaitan dengan simptom yang diberi.",
        done: "Betul. Simptom itu berkait dengan komponen yang dipilih.",
        wrong: "Belum tepat. Semak semula fungsi komponen tersebut."
      }
    : {
        video: "Short Animation: Component Function Flow",
        map: "Component Function Map",
        scenario: "Component Selection Scenario Simulation",
        activities: "Student Activities",
        game: "Mini Game: Match Symptom With Component",
        gameHelp: "Click the component most related to the given symptom.",
        done: "Correct. The symptom is related to the selected component.",
        wrong: "Not yet. Check the component function again."
      };

  const flow = bm
    ? [
        ["Input", "Keyboard/mouse hantar arahan."],
        ["CPU", "CPU memproses arahan."],
        ["RAM", "RAM simpan data aktif sementara."],
        ["Storage", "SSD/NVMe simpan data kekal."],
        ["Output", "GPU/monitor papar hasil."]
      ]
    : [
        ["Input", "Keyboard/mouse sends instruction."],
        ["CPU", "CPU processes instruction."],
        ["RAM", "RAM stores active temporary data."],
        ["Storage", "SSD/NVMe stores permanent data."],
        ["Output", "GPU/monitor displays result."]
      ];

  const map = bm
    ? [
        ["CPU", "Memproses arahan", "Core/thread tinggi membantu multitasking dan aplikasi berat."],
        ["RAM", "Memori sementara", "Kapasiti RAM lebih besar membantu banyak aplikasi dibuka serentak."],
        ["SSD/NVMe", "Simpanan kekal", "Menjadikan boot OS, buka aplikasi dan salin fail lebih pantas."],
        ["Motherboard", "Pusat sambungan", "Menentukan socket CPU, jenis RAM, slot M.2, PCIe dan port I/O."],
        ["PSU", "Bekalan kuasa", "Watt dan connector mesti cukup untuk motherboard, CPU, GPU dan storage."],
        ["GPU", "Paparan grafik", "Penting untuk reka bentuk, video, 3D dan paparan resolusi tinggi."],
        ["Cooling", "Kawal suhu", "Fan, heatsink dan thermal paste mengurangkan risiko overheating."],
        ["LAN/RJ45", "Rangkaian", "Membolehkan capaian internet, printer rangkaian dan domain/network resource."]
      ]
    : [
        ["CPU", "Processes instructions", "Higher core/thread count helps multitasking and heavy applications."],
        ["RAM", "Temporary memory", "Larger RAM capacity helps multiple applications run together."],
        ["SSD/NVMe", "Permanent storage", "Improves OS boot, application loading and file transfer speed."],
        ["Motherboard", "Connection centre", "Determines CPU socket, RAM type, M.2 slot, PCIe and I/O ports."],
        ["PSU", "Power supply", "Wattage and connectors must support motherboard, CPU, GPU and storage."],
        ["GPU", "Graphics display", "Important for design, video, 3D and high-resolution output."],
        ["Cooling", "Temperature control", "Fan, heatsink and thermal paste reduce overheating risk."],
        ["LAN/RJ45", "Network", "Enables internet, network printer and domain/network resources."]
      ];

  const scenarios = bm
    ? [
        ["Komputer Pejabat", "CPU sederhana, RAM 8GB-16GB, SSD, integrated GPU, PSU stabil dan printer/network support."],
        ["Komputer Reka Bentuk", "CPU lebih kuat, RAM 16GB-32GB, NVMe, dedicated GPU, cooling baik dan PSU watt lebih tinggi."],
        ["Makmal Latihan", "Komponen tahan lasak, mudah diselenggara, storage cukup, network stabil dan kos terkawal."]
      ]
    : [
        ["Office Computer", "Moderate CPU, 8GB-16GB RAM, SSD, integrated GPU, stable PSU and printer/network support."],
        ["Design Computer", "Stronger CPU, 16GB-32GB RAM, NVMe, dedicated GPU, good cooling and higher-watt PSU."],
        ["Training Lab", "Durable components, easy maintenance, sufficient storage, stable network and controlled cost."]
      ];

  const activities = bm
    ? [
        "Aktiviti 1: Pelajar label komponen pada gambar unit sistem dan tulis fungsi setiap komponen.",
        "Aktiviti 2: Pelajar bandingkan HDD, SSD dan NVMe dari segi kelajuan, kapasiti dan kegunaan.",
        "Aktiviti 3: Pelajar tentukan komponen yang perlu dinaik taraf jika komputer perlahan.",
        "Aktiviti 4: Pelajar padankan simptom seperti no display, slow boot atau overheating dengan komponen berkaitan.",
        "Aktiviti 5: Pelajar bina cadangan spesifikasi untuk komputer pejabat, reka bentuk dan makmal latihan.",
        "Aktiviti 6: Pelajar jelaskan mengapa PSU dan cooling penting walaupun bukan komponen yang dilihat oleh pengguna.",
        "Aktiviti 7: Pelajar semak keserasian CPU, motherboard, RAM dan PSU menggunakan contoh spesifikasi.",
        "Aktiviti 8: Pelajar bentangkan fungsi komponen menggunakan ayat ringkas seolah-olah menerangkan kepada pelanggan."
      ]
    : [
        "Activity 1: Students label components in a system unit image and write each component function.",
        "Activity 2: Students compare HDD, SSD and NVMe by speed, capacity and usage.",
        "Activity 3: Students decide which component should be upgraded when a computer is slow.",
        "Activity 4: Students match symptoms such as no display, slow boot or overheating with related components.",
        "Activity 5: Students build specification suggestions for office, design and training-lab computers.",
        "Activity 6: Students explain why PSU and cooling are important even though users do not always see them.",
        "Activity 7: Students check CPU, motherboard, RAM and PSU compatibility using sample specifications.",
        "Activity 8: Students present component functions in simple customer-friendly language."
      ];

  const gameItems = bm
    ? [
        ["Komputer hidup tetapi tiada paparan untuk kerja grafik.", "gpu"],
        ["Banyak aplikasi dibuka dan sistem mula perlahan.", "ram"],
        ["Komputer restart apabila beban kerja tinggi.", "psu"],
        ["Boot Windows terlalu lambat walaupun RAM mencukupi.", "storage"],
        ["Suhu CPU tinggi selepas beberapa minit digunakan.", "cooling"],
        ["Komputer tidak dapat akses printer rangkaian.", "network"]
      ]
    : [
        ["Computer powers on but has no display for graphics work.", "gpu"],
        ["Many applications are open and the system becomes slow.", "ram"],
        ["Computer restarts under high workload.", "psu"],
        ["Windows boot is too slow even with sufficient RAM.", "storage"],
        ["CPU temperature becomes high after a few minutes.", "cooling"],
        ["Computer cannot access the network printer.", "network"]
      ];

  const choices = bm
    ? [["cpu", "CPU"], ["ram", "RAM"], ["storage", "Storage"], ["gpu", "GPU"], ["psu", "PSU"], ["cooling", "Cooling"], ["network", "Network"]]
    : [["cpu", "CPU"], ["ram", "RAM"], ["storage", "Storage"], ["gpu", "GPU"], ["psu", "PSU"], ["cooling", "Cooling"], ["network", "Network"]];

  return `
    <div class="kp01-grid">
      <div class="panel lesson-box">
        <h2>${labels.video}</h2>
        <div class="kp05-flow-animation">
          ${flow.map(([title, detail], index) => `
            <div class="flow-node node-${index + 1}" style="--delay:${index}">
              <strong>${title}</strong>
              <small>${detail}</small>
            </div>
          `).join("")}
        </div>
      </div>

      <div class="panel lesson-box wide">
        <h2>${labels.map}</h2>
        <div class="component-map-grid">
          ${map.map(([title, role, detail]) => `
            <div>
              <strong>${title}</strong>
              <span>${role}</span>
              <p>${detail}</p>
            </div>
          `).join("")}
        </div>
      </div>

      <div class="panel lesson-box">
        <h2>${labels.scenario}</h2>
        <div class="scenario-stack">
          ${scenarios.map(([title, detail]) => `<div><strong>${title}</strong><p>${detail}</p></div>`).join("")}
        </div>
      </div>

      <div class="panel lesson-box">
        <h2>${labels.activities}</h2>
        <ol class="activity-list">${activities.map((item) => `<li>${item}</li>`).join("")}</ol>
      </div>

      <div class="panel lesson-box wide">
        <h2>${labels.game}</h2>
        <p class="muted">${labels.gameHelp}</p>
        <div class="game-list">
          ${gameItems.map(([item, answer], index) => `
            <div class="game-card" data-kp05-card="${index}">
              <strong>${item}</strong>
              <div class="game-options">
                ${choices.map(([value, label]) => `<button class="btn" data-kp05-answer="${value}" data-correct="${answer}" data-card="${index}">${label}</button>`).join("")}
              </div>
            </div>
          `).join("")}
        </div>
        <div id="kp05GameResult" class="result"></div>
        <template id="kp05GameText" data-done="${labels.done}" data-wrong="${labels.wrong}"></template>
      </div>
    </div>
  `;
}

let activeKp05Component = null;
let kp05MainStats = { attempts: 0, correct: 0 };

function selectKp05Component(button) {
  activeKp05Component = {
    title: button.dataset.kp05Component,
    answer: button.dataset.kp05FunctionAnswer,
    info: button.dataset.kp05Info
  };

  document.querySelectorAll("[data-kp05-component]").forEach((item) => item.classList.remove("active"));
  document.querySelectorAll("[data-kp05-function]").forEach((item) => item.classList.remove("selected", "correct", "incorrect"));
  button.classList.add("active");

  const result = document.getElementById("kp05MainResult");
  const example = document.getElementById("kp05MainExample");
  if (result) {
    result.classList.remove("correct", "incorrect");
    result.innerHTML = `<strong>${activeKp05Component.title}</strong><span>${state.lang === "bm" ? "Pilih fungsi yang betul." : "Choose the correct function."}</span>`;
  }
  if (example) {
    example.classList.add("muted");
    example.textContent = state.lang === "bm"
      ? "Fungsi komponen akan dipaparkan selepas jawapan betul."
      : "The component function will appear after a correct answer.";
  }
  return false;
}

function checkKp05Function(button) {
  const result = document.getElementById("kp05MainResult");
  const example = document.getElementById("kp05MainExample");
  const score = document.getElementById("kp05MainScore");

  document.querySelectorAll("[data-kp05-function]").forEach((item) => item.classList.remove("selected", "correct", "incorrect"));
  button.classList.add("selected");

  if (!activeKp05Component) {
    if (result) {
      result.classList.remove("correct", "incorrect");
      result.innerHTML = `<strong>${state.lang === "bm" ? "Pilih komponen dahulu" : "Choose a component first"}</strong><span>${state.lang === "bm" ? "Klik satu komponen pada senarai." : "Click one component from the list."}</span>`;
    }
    return false;
  }

  const correct = button.dataset.kp05Function === activeKp05Component.answer;
  kp05MainStats.attempts += 1;
  if (correct) kp05MainStats.correct += 1;
  button.classList.toggle("correct", correct);
  button.classList.toggle("incorrect", !correct);
  if (result) {
    result.classList.toggle("correct", correct);
    result.classList.toggle("incorrect", !correct);
    result.innerHTML = `
      <strong>${correct ? (state.lang === "bm" ? "Betul" : "Correct") : (state.lang === "bm" ? "Belum tepat" : "Not yet")}: ${activeKp05Component.title}</strong>
      <span>${correct ? activeKp05Component.info : (state.lang === "bm" ? "Cuba fungsi lain. Ingat peranan sebenar komponen itu." : "Try another function. Remember the component's actual role.")}</span>
    `;
  }
  if (example) {
    example.classList.toggle("muted", !correct);
    example.innerHTML = correct
      ? `<strong>${state.lang === "bm" ? "Contoh aplikasi" : "Usage example"}</strong><span>${state.lang === "bm" ? "Gunakan maklumat ini untuk memilih spesifikasi komputer mengikut job request." : "Use this information to select computer specifications based on the job request."}</span>`
      : (state.lang === "bm" ? "Jawapan belum tepat. Pilih fungsi yang paling sesuai." : "Not correct yet. Choose the most suitable function.");
  }
  if (score) {
    score.textContent = state.lang === "bm"
      ? `Skor latihan: ${kp05MainStats.correct}/${kp05MainStats.attempts}`
      : `Drill score: ${kp05MainStats.correct}/${kp05MainStats.attempts}`;
  }
  return false;
}

function bindKp05Game() {
  activeKp05Component = null;
  kp05MainStats = { attempts: 0, correct: 0 };

  document.querySelectorAll("[data-kp05-component]").forEach((button) => {
    button.onclick = () => selectKp05Component(button);
  });

  document.querySelectorAll("[data-kp05-function]").forEach((button) => {
    button.onclick = () => checkKp05Function(button);
  });

  document.querySelectorAll("[data-kp05-answer]").forEach((button) => {
    button.addEventListener("click", () => {
      const card = document.querySelector(`[data-kp05-card="${button.dataset.card}"]`);
      const result = document.getElementById("kp05GameResult");
      const gameText = document.getElementById("kp05GameText");
      const correct = button.dataset.kp05Answer === button.dataset.correct;

      card.querySelectorAll("[data-kp05-answer]").forEach((item) => item.classList.remove("selected"));
      button.classList.add("selected");
      card.classList.toggle("correct", correct);
      card.classList.toggle("incorrect", !correct);
      result.innerHTML = `<div class="${correct ? "success-note" : "error"}">${correct ? gameText.dataset.done : gameText.dataset.wrong}</div>`;
    });
  });
}

function renderKp06Premium() {
  const bm = state.lang === "bm";
  const labels = bm
    ? {
        video: "Animasi Ringkas: Pemasangan Motherboard, CPU, Cooler dan RAM",
        map: "Peta Prosedur dan Keserasian",
        scenario: "Simulasi Pemeriksaan Sebelum Boot",
        activities: "Aktiviti Pelajar",
        game: "Mini Game: Kenal Pasti Kesilapan Pemasangan",
        gameHelp: "Klik tindakan pembetulan yang paling sesuai.",
        done: "Betul. Tindakan itu sesuai untuk membetulkan kesilapan pemasangan.",
        wrong: "Belum tepat. Semak semula prosedur pemasangan."
      }
    : {
        video: "Short Animation: Motherboard, CPU, Cooler and RAM Installation",
        map: "Procedure and Compatibility Map",
        scenario: "Pre-Boot Inspection Simulation",
        activities: "Student Activities",
        game: "Mini Game: Identify Installation Mistakes",
        gameHelp: "Click the most suitable corrective action.",
        done: "Correct. That action fixes the installation mistake.",
        wrong: "Not yet. Check the installation procedure again."
      };

  const frames = bm
    ? [
        ["01", "Standoff", "Padankan standoff dengan lubang motherboard."],
        ["02", "Motherboard", "Letakkan board perlahan-lahan dan skru sekata."],
        ["03", "CPU", "Ikut tanda segitiga pada CPU dan socket."],
        ["04", "Thermal Paste", "Sapuan sederhana sebelum cooler dipasang."],
        ["05", "Cooler + RAM", "Kunci cooler, sambung CPU_FAN dan tekan RAM hingga klip terkunci."]
      ]
    : [
        ["01", "Standoff", "Match standoffs with motherboard holes."],
        ["02", "Motherboard", "Place the board gently and screw evenly."],
        ["03", "CPU", "Follow the triangle mark on CPU and socket."],
        ["04", "Thermal Paste", "Moderate application before cooler installation."],
        ["05", "Cooler + RAM", "Lock cooler, connect CPU_FAN and press RAM until clips lock."]
      ];

  const map = bm
    ? [
        ["Standoff", "Elak motherboard menyentuh casing dan mengurangkan risiko short circuit."],
        ["CPU Socket", "Socket mesti sepadan dengan model/generasi CPU."],
        ["Thermal Paste", "Membantu pemindahan haba CPU kepada heatsink/cooler."],
        ["CPU_FAN Header", "Membolehkan motherboard mengesan kipas CPU."],
        ["RAM Slot", "Jenis RAM dan slot perlu serasi, contohnya DDR4 dengan DDR4."],
        ["Dual Channel", "RAM sebaiknya dipasang pada slot pasangan seperti A2/B2 jika disarankan manual."],
        ["Skru Motherboard", "Skru perlu cukup dan tidak terlalu ketat."],
        ["Semakan Akhir", "Tiada objek logam, kabel fan bebas dan semua klip terkunci."]
      ]
    : [
        ["Standoff", "Prevents motherboard from touching the casing and reduces short-circuit risk."],
        ["CPU Socket", "Socket must match the CPU model/generation."],
        ["Thermal Paste", "Helps transfer CPU heat to the heatsink/cooler."],
        ["CPU_FAN Header", "Allows the motherboard to detect the CPU fan."],
        ["RAM Slot", "RAM type and slot must be compatible, such as DDR4 with DDR4."],
        ["Dual Channel", "RAM should use paired slots such as A2/B2 when recommended by the manual."],
        ["Motherboard Screws", "Screws must be complete and not over-tightened."],
        ["Final Check", "No metal object, fan cable clear and all clips locked."]
      ];

  const scenarios = bm
    ? [
        ["Komputer tidak boot selepas RAM dipasang", "Semak RAM ditekan sekata, klip terkunci dan slot yang digunakan betul."],
        ["CPU cepat panas selepas pemasangan", "Semak thermal paste, kedudukan cooler dan sambungan CPU_FAN."],
        ["Motherboard short / tidak hidup", "Semak standoff berlebihan atau motherboard menyentuh casing."],
        ["Fan CPU tidak berpusing", "Semak kabel fan pada header CPU_FAN, bukan header lain."]
      ]
    : [
        ["Computer does not boot after RAM installation", "Check RAM is pressed evenly, clips are locked and correct slot is used."],
        ["CPU overheats after installation", "Check thermal paste, cooler position and CPU_FAN connection."],
        ["Motherboard short / no power", "Check extra standoffs or motherboard touching the casing."],
        ["CPU fan does not spin", "Check fan cable on CPU_FAN header, not another header."]
      ];

  const activities = bm
    ? [
        "Aktiviti 1: Pelajar susun kad langkah pemasangan motherboard, CPU, cooler dan RAM mengikut urutan betul.",
        "Aktiviti 2: Pelajar tunjuk kedudukan standoff pada casing menggunakan motherboard contoh.",
        "Aktiviti 3: Pelajar kenal pasti tanda segitiga CPU dan socket sebelum pemasangan.",
        "Aktiviti 4: Pelajar latihan sapuan thermal paste secara sederhana pada model CPU.",
        "Aktiviti 5: Pelajar pasang cooler dan kenal pasti header CPU_FAN pada motherboard.",
        "Aktiviti 6: Pelajar pasang RAM pada slot yang betul dan pastikan klip terkunci.",
        "Aktiviti 7: Pelajar buat pemeriksaan visual sebelum boot pertama.",
        "Aktiviti 8: Pelajar bincang punca jika komputer tidak boot selepas pemasangan RAM/CPU."
      ]
    : [
        "Activity 1: Students arrange installation step cards for motherboard, CPU, cooler and RAM in the correct sequence.",
        "Activity 2: Students show standoff positions in the casing using a sample motherboard.",
        "Activity 3: Students identify the CPU and socket triangle marks before installation.",
        "Activity 4: Students practise moderate thermal paste application on a CPU model.",
        "Activity 5: Students install a cooler and identify the CPU_FAN header on the motherboard.",
        "Activity 6: Students install RAM in the correct slot and ensure clips lock.",
        "Activity 7: Students perform a visual inspection before first boot.",
        "Activity 8: Students discuss causes if the computer does not boot after RAM/CPU installation."
      ];

  const gameItems = bm
    ? [
        ["Motherboard menyentuh casing secara terus.", "standoff"],
        ["CPU tidak duduk rata pada socket.", "align"],
        ["Thermal paste terlalu banyak dan melimpah.", "paste"],
        ["Cooler dipasang tetapi kabel fan tidak disambung.", "fan"],
        ["RAM longgar dan klip tidak terkunci.", "ram"],
        ["Skru motherboard terlalu ketat.", "screw"]
      ]
    : [
        ["Motherboard touches the casing directly.", "standoff"],
        ["CPU does not sit flat in the socket.", "align"],
        ["Too much thermal paste overflows.", "paste"],
        ["Cooler is installed but fan cable is not connected.", "fan"],
        ["RAM is loose and clips are not locked.", "ram"],
        ["Motherboard screws are over-tightened.", "screw"]
      ];

  const choices = bm
    ? [
        ["standoff", "Pasang/betulkan standoff"],
        ["align", "Angkat dan jajarkan CPU semula"],
        ["paste", "Bersihkan dan sapu semula sederhana"],
        ["fan", "Sambung ke CPU_FAN"],
        ["ram", "Tekan RAM hingga klip terkunci"],
        ["screw", "Longgarkan dan ketatkan sekata"]
      ]
    : [
        ["standoff", "Install/fix standoffs"],
        ["align", "Lift and realign CPU"],
        ["paste", "Clean and reapply moderately"],
        ["fan", "Connect to CPU_FAN"],
        ["ram", "Press RAM until clips lock"],
        ["screw", "Loosen and tighten evenly"]
      ];

  return `
    <div class="kp01-grid">
      <div class="panel lesson-box">
        <h2>${labels.video}</h2>
        <div class="kp06-install-animation">
          ${frames.map(([num, title, detail], index) => `
            <div class="install-frame install-${index + 1}">
              <span>${num}</span>
              <strong>${title}</strong>
              <small>${detail}</small>
            </div>
          `).join("")}
          <div class="install-board-visual">
            <span class="cpu-zone">CPU</span>
            <span class="ram-zone">RAM</span>
            <span class="fan-zone">FAN</span>
          </div>
        </div>
      </div>

      <div class="panel lesson-box wide">
        <h2>${labels.map}</h2>
        <div class="component-map-grid">
          ${map.map(([title, detail]) => `<div><strong>${title}</strong><p>${detail}</p></div>`).join("")}
        </div>
      </div>

      <div class="panel lesson-box">
        <h2>${labels.scenario}</h2>
        <div class="scenario-stack">
          ${scenarios.map(([title, detail]) => `<div><strong>${title}</strong><p>${detail}</p></div>`).join("")}
        </div>
      </div>

      <div class="panel lesson-box">
        <h2>${labels.activities}</h2>
        <ol class="activity-list">${activities.map((item) => `<li>${item}</li>`).join("")}</ol>
      </div>

      <div class="panel lesson-box wide">
        <h2>${labels.game}</h2>
        <p class="muted">${labels.gameHelp}</p>
        <div class="game-list">
          ${gameItems.map(([item, answer], index) => `
            <div class="game-card" data-kp06-card="${index}">
              <strong>${item}</strong>
              <div class="game-options">
                ${choices.map(([value, label]) => `<button class="btn" data-kp06-answer="${value}" data-correct="${answer}" data-card="${index}">${label}</button>`).join("")}
              </div>
            </div>
          `).join("")}
        </div>
        <div id="kp06GameResult" class="result"></div>
        <template id="kp06GameText" data-done="${labels.done}" data-wrong="${labels.wrong}"></template>
      </div>
    </div>
  `;
}

const kp06Sequence = ["standoff", "io", "board", "cpu", "lock", "paste", "cooler", "ram"];
let kp06Progress = 0;

function resetKp06Sequence() {
  kp06Progress = 0;
  document.querySelectorAll("[data-kp06-step]").forEach((item) => item.classList.remove("active", "correct", "incorrect", "disabled"));
  const list = document.getElementById("kp06SequenceList");
  const result = document.getElementById("kp06MainResult");
  const guide = document.getElementById("kp06MainGuide");
  const score = document.getElementById("kp06MainScore");
  if (list) list.innerHTML = "";
  if (result) {
    result.classList.remove("correct", "incorrect");
    result.innerHTML = state.lang === "bm" ? "Mula dengan standoff casing." : "Start with casing standoffs.";
  }
  if (guide) {
    guide.classList.add("muted");
    guide.textContent = state.lang === "bm"
      ? "Progress pemasangan akan dipaparkan selepas setiap langkah betul."
      : "Installation progress will appear after each correct step.";
  }
  if (score) score.textContent = state.lang === "bm" ? "Progress: 0/8" : "Progress: 0/8";
  return false;
}

function selectKp06Step(button) {
  const expected = kp06Sequence[kp06Progress];
  const selected = button.dataset.kp06Step;
  const result = document.getElementById("kp06MainResult");
  const guide = document.getElementById("kp06MainGuide");
  const score = document.getElementById("kp06MainScore");
  const list = document.getElementById("kp06SequenceList");
  const correct = selected === expected;

  button.classList.toggle("correct", correct);
  button.classList.toggle("incorrect", !correct);

  if (!correct) {
    if (result) {
      result.classList.add("incorrect");
      result.classList.remove("correct");
      result.innerHTML = `<strong>${state.lang === "bm" ? "Belum tepat" : "Not yet"}</strong><span>${state.lang === "bm" ? "Semak urutan. Kerja pemasangan mesti mula dengan persediaan casing/standoff." : "Check the sequence. Installation work must start with casing/standoff preparation."}</span>`;
    }
    return false;
  }

  kp06Progress += 1;
  button.classList.add("disabled");
  button.disabled = true;
  if (list) list.innerHTML += `<li>${button.querySelector("strong")?.textContent || selected}</li>`;
  if (result) {
    result.classList.add("correct");
    result.classList.remove("incorrect");
    result.innerHTML = `<strong>${state.lang === "bm" ? "Betul" : "Correct"}</strong><span>${button.dataset.kp06Info}</span>`;
  }
  if (guide) {
    guide.classList.toggle("muted", kp06Progress < kp06Sequence.length);
    guide.textContent = kp06Progress === kp06Sequence.length
      ? (state.lang === "bm" ? "Urutan lengkap. Seterusnya buat pemeriksaan visual sebelum boot pertama." : "Sequence complete. Next, perform a visual inspection before first boot.")
      : (state.lang === "bm" ? `Langkah seterusnya: ${kp06Progress + 1}.` : `Next step: ${kp06Progress + 1}.`);
  }
  if (score) score.textContent = `Progress: ${kp06Progress}/${kp06Sequence.length}`;
  return false;
}

function bindKp06Game() {
  kp06Progress = 0;

  document.querySelectorAll("[data-kp06-step]").forEach((button) => {
    button.disabled = false;
    button.onclick = () => selectKp06Step(button);
  });

  document.querySelectorAll("[data-kp06-answer]").forEach((button) => {
    button.addEventListener("click", () => {
      const card = document.querySelector(`[data-kp06-card="${button.dataset.card}"]`);
      const result = document.getElementById("kp06GameResult");
      const gameText = document.getElementById("kp06GameText");
      const correct = button.dataset.kp06Answer === button.dataset.correct;

      card.querySelectorAll("[data-kp06-answer]").forEach((item) => item.classList.remove("selected"));
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
