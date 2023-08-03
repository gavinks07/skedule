// Sample data to simulate user and admin profiles
let users = [];
let admins = [{ username: 'mom', password: '1234' }];

// Shared calendar events
const sharedEvents = [
    {
        title: 'Meeting with Team',
        start: '2023-08-05 10:00:00',
        end: '2023-08-05 11:30:00',
    },
    {
        title: 'Lunch Break',
        start: '2023-08-05 12:30:00',
        end: '2023-08-05 13:30:00',
    },
    // Add more events as needed
];

// Function to initialize and display the shared calendar
function showSharedCalendar() {
    const calendarEl = document.getElementById('calendar');

    // Initialize the FullCalendar
    const calendar = new FullCalendar.Calendar(calendarEl, {
        plugins: ['interaction', 'dayGrid'],
        defaultView: 'dayGridMonth',
        editable: false, // Set to true to allow users to interact with the calendar (e.g., drag events)
        events: sharedEvents,
    });

    // Render the calendar
    calendar.render();
}

// Function to switch between sections
function showSection(sectionId) {
    document.querySelectorAll('section').forEach((section) => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';

    // Show shared calendar when displaying the profile section
    if (sectionId === 'profile-section') {
        showSharedCalendar();
    }
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
