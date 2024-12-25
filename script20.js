// Toggle the sidebar visibility
function toggleNav() {
    const sidebar = document.getElementById('nav-sidebar');
    sidebar.classList.toggle('active');
}

// Open the sub-menu
function showSubMenu(subMenuId) {
    const primaryMenu = document.getElementById('primary-menu');
    const subMenu = document.getElementById(subMenuId);
    const backButton = document.getElementById('back-button');

    primaryMenu.style.display = 'none'; // Hide the primary menu
    subMenu.style.display = 'block'; // Show the sub-menu
    backButton.style.display = 'block'; // Show the back button
}

// Go back to the main menu
function returnToMainMenu() {
    const primaryMenu = document.getElementById('primary-menu');
    const subMenus = document.querySelectorAll('.sub-list');
    const backButton = document.getElementById('back-button');

    subMenus.forEach(menu => menu.style.display = 'none'); // Hide all sub-menus
    primaryMenu.style.display = 'block'; // Show the primary menu
    backButton.style.display = 'none'; // Hide the back button
}
document.addEventListener('DOMContentLoaded', () => {
    const shipmentOptions = document.querySelectorAll('.shipment-option');
    const faqSections = document.querySelectorAll('.faq-section');
    const faqItems = document.querySelectorAll('.faq-item');

   // Sidebar category toggle functionality
shipmentOptions.forEach(option => {
    option.addEventListener('click', () => {
        const category = option.getAttribute('data-category');

        // Toggle sidebar arrow
        option.querySelector('.arrow').classList.toggle('collapsed');

        // Highlight the active category
        shipmentOptions.forEach(opt => opt.classList.remove('active'));
        option.classList.add('active');

        // Display the corresponding FAQ section
        faqSections.forEach(section => {
            if (section.getAttribute('data-category') === category) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    });
});

// Open the default sidebar option on page load
window.addEventListener('DOMContentLoaded', () => {
    // Set the index of the default category (e.g., 0 for the first category)
    const defaultIndex = 0;
    shipmentOptions[defaultIndex].click(); // Simulates a click on the default option
});

    // FAQ toggle functionality
    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            const answer = item.querySelector('.faq-answer');
            const faq = item.closest('.faq');

            item.classList.toggle('open');
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
                faq.style.borderColor = 'black';
            } else {
                answer.style.display = 'block';
                faq.style.borderColor = 'orange';
            }
        });
    });
});
