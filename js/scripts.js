// Function to toggle the visibility of a card
function toggleCard(cardId) {
    const card = document.getElementById(cardId);
    card.style.display = (card.style.display === 'none' || card.style.display === '') ? 'block' : 'none';
}

// Function to hide other cards when one is opened
function hideOtherCards(exceptCard) {
    const cards = ['aboutCard', 'getStartedCard', 'watchCard', 'eventsCard'];
    cards.forEach(cardId => {
        const card = document.getElementById(cardId);
        if (cardId !== exceptCard && card) {
            card.style.display = 'none';
        }
    });
}

// Initialize button listeners for header buttons
document.addEventListener("DOMContentLoaded", function() {
    const aboutBtn = document.getElementById('aboutBtn');
    const getStartedBtn = document.getElementById('getStartedBtn');
    const watchBtn = document.getElementById('watchBtn');
    const eventsBtn = document.getElementById('eventsBtn');

    // Add event listeners if the buttons exist in the DOM
    if (aboutBtn) {
        aboutBtn.addEventListener('click', function() {
            toggleCard('aboutCard');
            hideOtherCards('aboutCard');
        });
    }

    if (getStartedBtn) {
        getStartedBtn.addEventListener('click', function() {
            toggleCard('getStartedCard');
            hideOtherCards('getStartedCard');
        });
    }

    if (watchBtn) {
        watchBtn.addEventListener('click', function() {
            toggleCard('watchCard');
            hideOtherCards('watchCard');
        });
    }

    if (eventsBtn) {
        eventsBtn.addEventListener('click', function() {
            toggleCard('eventsCard');
            hideOtherCards('eventsCard');
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const countdownElement = document.getElementById("countdown");
    const liveText = "Live Now!";
    const serviceDuration = 80 * 60 * 1000; // 1 hour and 20 minutes in milliseconds

    function updateCountdown() {
        const now = new Date();
        let nextSunday = new Date();
        nextSunday.setDate(now.getDate() + (7 - now.getDay())); // Set to next Sunday
        nextSunday.setHours(10, 45, 0, 0); // Set to 10:45 AM

        if (now.getDay() === 0 && now >= nextSunday && now <= new Date(nextSunday.getTime() + serviceDuration)) {
            countdownElement.innerHTML = liveText;
        } else {
            if (now.getDay() === 0 && now > new Date(nextSunday.getTime() + serviceDuration)) {
                nextSunday.setDate(nextSunday.getDate() + 7); // If it's Sunday after service, set to next Sunday
            }

            const timeDifference = nextSunday - now;
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            countdownElement.innerHTML =
                `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }
    }

    updateCountdown();
    setInterval(updateCountdown, 1000); // Use setInterval to continuously update every second
});

