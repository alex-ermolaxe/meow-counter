const slider = document.getElementById('meow-slider');
const meowValue = document.querySelector('.meow-value');
const calculateButton = document.getElementById('calculate-button');

if (slider && meowValue) {
    const updateValue = () => {
        meowValue.textContent = `${slider.value} мяу в минуту`;
    };

    slider.addEventListener('input', updateValue);
    updateValue();
}

if (calculateButton && slider) {
    calculateButton.addEventListener('click', () => {
        const query = new URLSearchParams({ meow: slider.value });
        window.location.href = `result.html?${query}`;
    });
}

const resultSpeed = document.getElementById('result-speed');
const remainingMeows = document.getElementById('remaining-meows');
const footerCount = document.getElementById('footer-count');

if (resultSpeed && remainingMeows && footerCount) {
    const params = new URLSearchParams(window.location.search);
    const selectedMeow = Number(params.get('meow')) || 5;

    const now = new Date();
    const utc = now.getTime() + now.getTimezoneOffset() * 60000;
    const tbilisiNow = new Date(utc + 4 * 60 * 60000);
    const targetTbilisi = new Date(Date.UTC(2026, 3, 25, 11, 0, 0));

    const diffMinutes = Math.max(0, Math.ceil((targetTbilisi.getTime() - tbilisiNow.getTime()) / 60000));
    const remaining = selectedMeow > 0 ? Math.max(0, Math.ceil(diffMinutes / selectedMeow)) : 0;

    resultSpeed.textContent = selectedMeow;
    remainingMeows.textContent = remaining;
    footerCount.textContent = remaining;
}