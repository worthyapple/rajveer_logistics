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
function switchTab(tab) {
    // Reset all tab buttons
    document.querySelectorAll('.tab-button').forEach((button) => {
      button.classList.remove('active');
    });
  
    // Set active tab
    const activeTab = document.querySelector(`[onclick="switchTab('${tab}')"]`);
    if (activeTab) {
      activeTab.classList.add('active');
    }
  
    // Change placeholder text based on selected tab
    const inputField = document.getElementById('inputField');
    switch (tab) {
      case 'mobile':
        inputField.placeholder = 'Enter your mobile number';
        break;
      case 'awb':
        inputField.placeholder = 'Enter your AWB number';
        break;
      case 'orderId':
        inputField.placeholder = 'Enter your Order Id';
        break;
      case 'lrn':
        inputField.placeholder = 'Enter your LRN number';
        break;
      default:
        inputField.placeholder = '';
    }
  }

  document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});

  