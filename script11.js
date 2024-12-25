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
function toggleAnswer(faqItem) {
    const answer = faqItem.querySelector('.answer');
    const verticalLine = faqItem.querySelector('.vertical-line');
    
    // Toggle answer visibility
    if (answer.style.display === 'block') {
      answer.style.display = 'none';
      verticalLine.style.height = '20px';
      verticalLine.style.backgroundColor = 'black';
    } else {
      answer.style.display = 'block';
      verticalLine.style.height = answer.scrollHeight + 20 + 'px';
      verticalLine.style.backgroundColor = 'orange';
    }
  }
  