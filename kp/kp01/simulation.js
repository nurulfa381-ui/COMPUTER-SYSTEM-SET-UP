function selectRecommendedComputer(choice) {
  const correct = choice === 'desktop';
  kp01State.technicianCompleted = correct;
  document.getElementById('analysisScore').textContent = correct ? '100%' : '40%';
  document.getElementById('accuracyScore').textContent = correct ? '100%' : '0%';
  document.getElementById('professionalScore').textContent = correct ? '100%' : '30%';
  document.getElementById('technicianFeedback').innerHTML = correct
    ? '<strong>✅ Cadangan tepat.</strong><p>Desktop sesuai untuk lokasi tetap, monitor besar dan mudah dinaik taraf.</p>'
    : '<strong>❌ Cadangan belum sesuai.</strong><p>Semak keperluan pelanggan.</p>';
  if (correct && typeof C01Storage !== 'undefined') {
    C01Storage.saveWorkPerformance({moduleId:'kp01',scores:{analysis:100,accuracy:100,professionalism:100}});
  }
  updateKPProgress();
}
