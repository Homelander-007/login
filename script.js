document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const message = document.getElementById('message');

    // Check if user data is already stored in localStorage
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (storedUsername && storedPassword) {
        message.textContent = `Welcome back, ${storedUsername}! You are already logged in.`;
        loginForm.style.display = 'none';
    }

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Store the user data in localStorage
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        message.textContent = `Welcome, ${username}! You are now logged in.`;
        loginForm.style.display = 'none';
    });
});
