// Function to toggle the visibility of a card
function toggleCard(cardId) {
    const card = document.getElementById(cardId);
    card.style.display = (card.style.display === 'none' || card.style.display === '') ? 'block' : 'none';
}

// Event listeners for buttons
document.getElementById('aboutBtn').addEventListener('click', function() {
    toggleCard('aboutCard');
    hideOtherCards('aboutCard');
});

document.getElementById('getStartedBtn').addEventListener('click', function() {
    toggleCard('getStartedCard');
    hideOtherCards('getStartedCard');
});

document.getElementById('watchBtn').addEventListener('click', function() {
    toggleCard('watchCard');
    hideOtherCards('watchCard');
});

document.getElementById('eventsBtn').addEventListener('click', function() {
    toggleCard('eventsCard');
    hideOtherCards('eventsCard');
});

// Function to hide other cards when one is opened
function hideOtherCards(exceptCard) {
    const cards = ['aboutCard', 'getStartedCard', 'watchCard', 'eventsCard'];
    cards.forEach(cardId => {
        if (cardId !== exceptCard) {
            document.getElementById(cardId).style.display = 'none';
        }
    });
}
