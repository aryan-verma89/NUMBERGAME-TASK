
document.addEventListener('DOMContentLoaded', () => {
    const guessInput = document.getElementById('guess-input');
    const submitBtn = document.getElementById('submit-btn');
    const feedback = document.getElementById('feedback');
    const attemptsElement = document.getElementById('attempts');
    const restartBtn = document.getElementById('restart-btn');
    
    let targetNumber;
    let attempts;

    function startNewGame() {
        targetNumber = Math.floor(Math.random() * 100) + 1;
        attempts = 0;
        guessInput.value = '';
        feedback.textContent = '';
        attemptsElement.textContent = 'Attempts: 0';
        submitBtn.disabled = false;
        restartBtn.style.display = 'none';
    }

    function checkGuess() {
        const userGuess = parseInt(guessInput.value, 10);

        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            feedback.textContent = 'Please enter a number between 1 and 100.';
            feedback.style.color = 'red';
            return;
        }

        attempts++;
        if (userGuess === targetNumber) {
            feedback.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
            feedback.style.color = 'green';
            submitBtn.disabled = true;
            restartBtn.style.display = 'inline-block';
        } else if (userGuess < targetNumber) {
            feedback.textContent = 'Too low! Try again.';
            feedback.style.color = 'orange';
        } else {
            feedback.textContent = 'Too high! Try again.';
            feedback.style.color = 'orange';
        }

        attemptsElement.textContent = `Attempts: ${attempts}`;
    }

    submitBtn.addEventListener('click', checkGuess);
    restartBtn.addEventListener('click', startNewGame);

    startNewGame(); // Initialize the game when the page loads
});
