// This script finds the time element and updates it every 100 milliseconds.
// This ensures the time is live and accurate.
document.addEventListener("DOMContentLoaded", () => {
  const timeElement = document.querySelector('[data-testid="test-user-time"]');

  if (timeElement) {
    // Set initial time immediately
    timeElement.textContent = Date.now();

    // Update the time every 100ms for a "live" feel
    setInterval(() => {
      timeElement.textContent = Date.now();
    }, 100);
  }
});
