function countdownTimer() {
    const eventDate = new Date('February 8, 2025 11:00:00').getTime();
    const interval = setInterval(() => {
        let now = new Date().getTime();
        let timeLeft = eventDate - now;

        if (timeLeft <= 0) {
            document.getElementById("countdown").innerText = "Event Started!";
            clearInterval(interval);  // Stops the countdown
            return;
        }

        let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerText = `Countdown: ${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
}
countdownTimer();
