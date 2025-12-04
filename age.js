document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('time.dob').forEach(el => {
    const dobStr = el.dataset.dob;
    if (!dobStr) return;

    const dob = new Date(dobStr);
    const today = new Date();

    // Calculate full years
    let years = today.getFullYear() - dob.getFullYear();
    if (today.getMonth() < dob.getMonth() ||
      (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())) {
      years--;
    }

    // Days since last birthday
    const lastBirthday = new Date(dob);
    lastBirthday.setFullYear(dob.getFullYear() + years);
    const dayDiff = Math.floor((today - lastBirthday) / (1000 * 60 * 60 * 24));

    // Birthday check
    const isBirthday = today.getMonth() === dob.getMonth() && today.getDate() === dob.getDate();

    // Build HTML
    let html = '<div>';
    if (isBirthday) html += '<span title="Happy Birthday!" class="cake cursor-pointer">🎂</span>';
    html += `${years} year${years !== 1 ? 's' : ''}`;
    if (isBirthday) html += '<span title="Happy Birthday!" class="cake cursor-pointer">🎂</span>';
    if (dayDiff > 0) html += ` ${dayDiff} day${dayDiff !== 1 ? 's' : ''}`;
    html += '</div>';

    el.querySelector('.age').innerHTML = html;
  });
});
