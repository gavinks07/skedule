// Sample data to simulate user and admin profiles
let users = [];
let admins = [{ username: 'mom', password: '1234' }];

// Function to switch between sections
function showSection(sectionId) {
    document.querySelectorAll('section').forEach((section) => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

// User login logic
document.getElementById('login-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;

    // Check if the admin is logging in
    const isAdmin = admins.some((admin) => admin.username === username && admin.password === password);

    if (isAdmin) {
        // If admin login is successful, show the admin section
        showSection('admin-section');
    } else {
        // For demonstration, show the user profile section after successful login (assuming the user login logic is implemented elsewhere)
        showSection('profile-section');
    }
});

// User registration logic
document.getElementById('registration-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;

    // Implement registration logic here

    // For demonstration, show the user profile section after successful registration
    showSection('profile-section');
});

// Display user profile
document.getElementById('profile-link').addEventListener('click', () => {
    // Implement user profile retrieval logic here
    showSection('profile-section');
});

// Display admin panel
document.getElementById('admin-link').addEventListener('click', () => {
    // Implement admin panel logic here
    showSection('admin-section');
});

// Initial setup: Show the login section
showSection('login-section');
