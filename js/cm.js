function toggleDarkMode() {
    const body = document.body;
    const toggleButton = document.querySelector('.toggle-mode');
    body.classList.toggle('dark-mode');
    toggleButton.classList.toggle('dark');
}