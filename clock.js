  function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    let ampm = '';

    if (hours > 12) {
      hours -= 12;
      ampm = 'PM';
    } else if (hours === 0) {
      hours = 12;
      ampm = 'AM';
    } else if (hours === 12) {
      ampm = 'PM';
    } else {
      ampm = 'AM';
    }

    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    document.getElementById('ampm').textContent = ampm;
  }

  setInterval(updateTime, 1000);
  