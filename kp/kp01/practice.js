// =============================
// KP01 - PRACTICE MODE
// =============================

let currentStep = 0;

const correctOrder = [
    "input",
    "process",
    "output",
    "storage"
];

window.onload = function () {

    // =============================
    // AKTIVITI 1
    // =============================

    const buttons =
        document.querySelectorAll("#sequenceButtons button");

    buttons.forEach((button) => {

        button.onclick = function () {

            const value =
                this.getAttribute("data-value");

            if (value === correctOrder[currentStep]) {

                this.style.background = "#2fd27a";
                this.style.color = "#000";
                this.disabled = true;

                currentStep++;

                if (currentStep === correctOrder.length) {

                    document.getElementById("sequenceResult").innerHTML =
                        "<h3 style='color:#2fd27a;'>✅ Betul!</h3><p>Urutan yang betul ialah <b>INPUT → PROCESS → OUTPUT → STORAGE</b></p>";

                    kp01State.sequenceCompleted = true;

                    if (typeof updateKP01Progress === "function") {
                        updateKP01Progress();
                    }

                } else {

                    document.getElementById("sequenceResult").innerHTML =
                        "<p style='color:#2fd27a;'>✔ Betul, teruskan.</p>";

                }

            } else {

                document.getElementById("sequenceResult").innerHTML =
                    "<p style='color:#ff5c69;'>❌ Salah. Cuba semula bermula dengan INPUT.</p>";

                currentStep = 0;

                buttons.forEach((btn) => {

                    btn.disabled = false;
                    btn.style.background = "";
                    btn.style.color = "";

                });

            }

        };

    });

};


// =============================
// AKTIVITI 2
// =============================

function checkKP01Classification() {

    const laptop =
        document.getElementById("classificationLaptop").value;

    const desktop =
        document.getElementById("classificationDesktop").value;

    const tablet =
        document.getElementById("classificationTablet").value;

    if (
        laptop === "portable" &&
        desktop === "fixed" &&
        tablet === "portable"
    ) {

        document.getElementById("classificationResult").innerHTML =
            "<h3 style='color:#2fd27a;'>✅ Tahniah!</h3><p>Semua jawapan adalah betul.</p>";

        kp01State.classificationCompleted = true;

        if (typeof updateKP01Progress === "function") {
            updateKP01Progress();
        }

    } else {

        document.getElementById("classificationResult").innerHTML =
            "<h3 style='color:#ff5c69;'>❌ Masih Salah</h3><p>Sila semak semula jawapan anda.</p>";

    }

}
