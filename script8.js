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
function toggleShipping(option) {
    const domesticButton = document.getElementById('domestic');
    const internationalButton = document.getElementById('international');

    if (option === 'domestic') {
        domesticButton.classList.add('active');
        domesticButton.classList.remove('inactive');
        internationalButton.classList.remove('active');
        internationalButton.classList.add('inactive');
    } else if (option === 'international') {
        internationalButton.classList.add('active');
        internationalButton.classList.remove('inactive');
        domesticButton.classList.remove('active');
        domesticButton.classList.add('inactive');
    }
}

const testimonials = [
    {
        image: "image1.jpg",
        text: "My overall experience with Delhivery has been good. I had to send a package to my mother in Punjab, and the order was delivered within the allotted time. Particularly for long-distance and important packages, I need not look further than Delhivery.",
        author: "Khushi Kundwani,",
        location: "Mumbai, Maharashtra"
    },
    {
        image: "image2.jpg",
        text: "Delhivery has made my business logistics smooth. They are reliable and always on time, which is critical for my ecommerce store.",
        author: "Mohammed Shaban,",
        location: "Delhi, India"
    },
    {
        image: "image3.jpg",
        text: "The tracking feature of Delhivery is excellent, and customer service is very helpful. I can trust them with important packages.",
        author: "Mitanshi Jain,",
        location: "Bengaluru, Karnataka"
    },
    {
        image: "image4.jpg",
        text: "For safe and secure delivery across India, I rely on Delhivery. They have never disappointed me with their service.",
        author: "Sujal Thakur",
        location: "Chennai, Tamil Nadu"
    }
];

let currentIndex = 0;

function showTestimonial(index) {
    const testimonial = testimonials[index];
    document.getElementById("sliderImage").src = testimonial.image;
    document.getElementById("testimonialText").textContent = testimonial.text;
    document.getElementById("author").textContent = testimonial.author;
    document.getElementById("location").textContent = testimonial.location;
}

function prevSlide() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : testimonials.length - 1;
    showTestimonial(currentIndex);
}

function nextSlide() {
    currentIndex = (currentIndex < testimonials.length - 1) ? currentIndex + 1 : 0;
    showTestimonial(currentIndex);
}