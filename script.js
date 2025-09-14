document.querySelectorAll('.collapsible').forEach(item => {
    item.addEventListener('click', () => {
        const content = item.nextElementSibling;
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    });
});

function setApp(calculatorName) {
    const appDiv = document.getElementById('app');
    appDiv.innerHTML = ''; // Clear previous content
    // Load relevant calculator content
    if (calculatorName === 'investment-growth') {
        appDiv.innerHTML = '<h1>Under Construction</h1>'; // Replace with actual HTML
    } else {
        appDiv.innerHTML = '<h1>Unknown Item</h1>'; // Replace with actual HTML
    }
}
