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

const resultValue = document.getElementById('result-value');
if (resultValue) {
    const params = new URLSearchParams(window.location.search);
    const meow = params.get('meow') || '5';
    resultValue.textContent = `${meow} мяу в минуту`;
}