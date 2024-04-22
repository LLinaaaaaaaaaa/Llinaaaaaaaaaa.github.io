const spinButton = document.getElementById('spinButton');
const coin = document.getElementById('coin');
const resultText = document.getElementById('result');

spinButton.addEventListener('click', () => {
    const selection = document.querySelector('input[name="selection"]:checked');
    if (!selection) {
        alert('Please select heads or tails.');
        return;
    }

    coin.classList.remove('heads', 'tails');
    resultText.innerText = '';

    setTimeout(() => {
        const randomNumber = Math.random();
        const result = randomNumber < 0.5 ? 'heads' : 'tails';
        coin.classList.add(result);
        const userSelection = selection.value;
        if (result === userSelection) {
            resultText.innerText = 'Congratulations! You won.';
        } else {
            resultText.innerText = 'Sorry! You lost.';
        }
    }, 100);

    setTimeout(() => {
        coin.classList.remove('heads', 'tails');
    }, 1200);
});
