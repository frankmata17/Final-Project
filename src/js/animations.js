export function initializeAnimations() {
    document.querySelectorAll('.movie-card').forEach(card => {
        card.style.transition = 'transform 0.3s';
        card.addEventListener('mouseover', () => {
            card.style.transform = 'scale(1.05)';
        });
        card.addEventListener('mouseout', () => {
            card.style.transform = 'scale(1)';
        });
    });
}
