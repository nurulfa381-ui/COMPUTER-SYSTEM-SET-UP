let sequenceExpected = 1;

document.querySelectorAll('#sequenceButtons button').forEach((button) => {
  button.addEventListener('click', () => {
    const selectedStep = Number(button.dataset.step || 0);
    const resultBox = document.getElementById('sequenceResult');
    if (selectedStep === sequenceExpected) {
      button.classList.add('selected');
      button.disabled = true;
      sequenceExpected += 1;
      if (sequenceExpected === 5) {
        kp01State.sequenceCompleted = true;
        resultBox.innerHTML = '<strong>✅ Betul!</strong><p>Input → Process → Output → Storage.</p>';
        updateKPProgress();
      } else {
        resultBox.textContent = 'Betul. Pilih langkah seterusnya.';
      }
    } else {
      resultBox.innerHTML = '<strong>❌ Belum tepat.</strong><p>Mulakan dengan input.</p>';
    }
  });
});

function checkClassification() {
  const correct = document.getElementById('classificationLaptop')?.value === 'portable' &&
    document.getElementById('classificationDesktop')?.value === 'fixed' &&
    document.getElementById('classificationTablet')?.value === 'portable';
  const resultBox = document.getElementById('classificationResult');
  kp01State.classificationCompleted = correct;
  resultBox.innerHTML = correct
    ? '<strong>✅ Semua jawapan betul.</strong>'
    : '<strong>❌ Masih ada jawapan yang salah.</strong>';
  updateKPProgress();
}
