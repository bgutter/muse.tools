document.querySelectorAll('.menu-folder').forEach(item => {
    item.addEventListener('click', (event) => {
        event.stopPropagation();
        const content = item.firstElementChild;
        content.classList.toggle('menu-folder-items-collapsed');
    });
});

function setApp(calculatorName) {
    fetch(`calculators/${calculatorName}.html`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('app').innerHTML = data;

            // Dynamically load and execute the associated JS file
            const script = document.createElement('script');
            script.src = `calculators/${calculatorName}-script.js`;
            script.onload = () => {
                if (typeof initializeCalculator === 'function') {
                    initializeCalculator();
                }
            };
            document.body.appendChild(script);
        })
        .catch(error => console.error('Error loading calculator:', error));
}
