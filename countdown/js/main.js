const countdown = document.querySelector(".countdown");

//Set Launch Date in milliseconds

const launchDate = new Date("Jan 1, 2019 13:00:00").getTime();

// Update every second

const intvl = setInterval(() => {
    // Get todays date and time in milliseconds
    const now = new Date().getTime();

    //Distance from now to launchdate in milliseconds

    const distance = launchDate - now;

    // time calculations

    const days = Math.floor(distance/(1000*60*60*24));
    const hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
    const minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
    const seconds = Math.floor((distance % (1000*60)) / 1000);

    // Display Result

    countdown.innerHTML = `
    <div>${days}<span>Days</span></div>
    <div>${hours}<span>Hours</span></div>
    <div>${minutes}<span>Minutes</span></div>
    <div>${seconds}<span>Seconds</span></div>
    `;

    // if launchdate passed

    if (distance < 0) {
        // Stop Countdown

        clearInterval(intvl);

        // style and output text

        countdown.style.color = "#17a2b8";
        countdown.innerHTML = "Launched!"
    }
}, 1000);