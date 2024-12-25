// Handle tracking options button click
document.querySelectorAll('.tracking-options button').forEach(button => {
    button.addEventListener('click', function() {
        // Remove the active class from all buttons
        document.querySelectorAll('.tracking-options button').forEach(btn => btn.classList.remove('active'));

        // Add the active class to the clicked button
        this.classList.add('active');
    });
});

// Handle tab (Track order, Ship order) click
document.querySelectorAll('.tabs span').forEach(tab => {
    tab.addEventListener('click', function() {
        // Remove the active class from all tabs
        document.querySelectorAll('.tabs span').forEach(t => t.classList.remove('active'));

        // Add the active class to the clicked tab
        this.classList.add('active');
    });
});
document.querySelector('.tab-track').addEventListener('click', function() {
    // Remove active class from both tabs
    document.querySelectorAll('.tabs span').forEach(tab => tab.classList.remove('active'));

    // Hide Ship Order content, show Track Order content
    document.getElementById('track-order-content').classList.add('active');
    document.getElementById('ship-order-content').classList.remove('active');

    // Add active class to Track Order tab
    this.classList.add('active');
});

document.querySelector('.tab-ship').addEventListener('click', function() {
    // Remove active class from both tabs
    document.querySelectorAll('.tabs span').forEach(tab => tab.classList.remove('active'));

    // Hide Track Order content, show Ship Order content
    document.getElementById('track-order-content').classList.remove('active');
    document.getElementById('ship-order-content').classList.add('active');

    // Add active class to Ship Order tab
    this.classList.add('active');
});
// Handle shipping options button click (Domestic & International)
document.querySelectorAll('.shipping-options button').forEach(button => {
    button.addEventListener('click', function() {
        // Remove the active class from all buttons
        document.querySelectorAll('.shipping-options button').forEach(btn => btn.classList.remove('active'));

        // Add the active class to the clicked button
        this.classList.add('active');

        // Perform the specific action for Domestic or International shipping
        if (this.classList.contains('domestic')) {
            console.log("Domestic Shipping selected");
            // Add functionality for Domestic Shipping
        } else if (this.classList.contains('international')) {
            console.log("International Shipping selected");
            // Add functionality for International Shipping
        }
    });
});
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
