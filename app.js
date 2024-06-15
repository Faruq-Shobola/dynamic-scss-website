const root = document.documentElement;
const themeToggleButton = document.getElementById('theme-toggle-button');
const colorSchemeSelector = document.getElementById('color-scheme-selector');
const increaseFontButton = document.getElementById('increase-font-button');
const decreaseFontButton = document.getElementById('decrease-font-button');
const projectFilterInput = document.getElementById('project-filter');

const initialTheme = localStorage.getItem('theme') || 'light';
document.body.classList.add(`${initialTheme}-theme`);

// Theme toggle functionality
themeToggleButton.addEventListener('click', function() {
    if (document.body.classList.contains('light-theme')) {
        document.body.classList.replace('light-theme', 'dark-theme');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.replace('dark-theme', 'light-theme');
        localStorage.setItem('theme', 'light');
    }
});

// Color scheme change functionality
colorSchemeSelector.addEventListener('change', function() {
    const scheme = this.value;
    document.body.classList.remove('blue-theme', 'green-theme');

    if (scheme === 'blue') {
        document.body.classList.add('blue-theme');
    } else if (scheme === 'green') {
        document.body.classList.add('green-theme');
    }
});

// Font size adjustment functionality
increaseFontButton.addEventListener('click', function() {
    const currentFontSize = parseFloat(getComputedStyle(root).getPropertyValue('--font-size'));
    root.style.setProperty('--font-size', `${currentFontSize + 2}px`);
});

decreaseFontButton.addEventListener('click', function() {
    const currentFontSize = parseFloat(getComputedStyle(root).getPropertyValue('--font-size'));
    if (currentFontSize > 12) { // Minimum font size
        root.style.setProperty('--font-size', `${currentFontSize - 2}px`);
    }
});

projectFilterInput.addEventListener('input', function() {
    const filter = this.value.toLowerCase();
    document.querySelectorAll('.project').forEach(function (project) {
        const title = project.querySelector('h3').textContent.toLowerCase();
        if (title.includes(filter)) {
            project.style.display = '';
        } else {
            project.style.display = 'none';
        }
    });
})
