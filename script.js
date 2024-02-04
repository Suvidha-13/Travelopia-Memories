document.getElementById('clickButton').addEventListener('click', function() {
    alert('Hello, World');
});

function closeNavOnOutsideClick(event) {
    const rightSection = document.querySelector('.right-section');

    if (!event.target.closest('.right-section') && rightSection.classList.contains('active')) {
        toggleNav();
    }
}

// Added this event listener for smaller screens to show/hide the nav-links
document.querySelector('.hamburger').addEventListener('click', function (event) {
    event.stopPropagation();
    const navList = document.querySelector('.nav-list');
    navList.style.display = navList.style.display === 'flex' ? 'none' : 'flex';
});

// Added an event listener for each navigation link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        setTimeout(() => {
            window.location.href = '#';
        }, 300);
        const navList = document.querySelector('.nav-list');
        navList.style.display = 'none';
    });
});

function toggleNav() {
    const navLinks = document.querySelector('.nav-links');
    const rightSection = document.querySelector('.right-section');
    const centeredContent = document.querySelector('.centered-content');
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const hamburger = document.querySelector('.hamburger');

    rightSection.classList.toggle('active');

    if (rightSection.classList.contains('active')) {
        navLinks.style.display = 'flex';
        centeredContent.style.position = 'relative';
        header.style.height = '100px';
        header.style.background = 'rgb(255, 255, 255)';
        header.style.textAlign = 'center';
        header.style.color = '#000';
        header.style.lineHeight = '100px';
        footer.style.display = 'none';
        hamburger.style.display = 'block';
        document.addEventListener('click', closeNavOnOutsideClick);
    } else {
        navLinks.style.display = 'none';
        centeredContent.style.position = 'fixed';
        header.style.height = '100px';
        header.style.background = 'rgba(0, 0, 0, 0.692)';
        header.style.color = 'white';
        header.style.textAlign = 'center';
        header.style.lineHeight = '100px';
        footer.style.visibility = 'visible';
        footer.style.height = '100px';
        footer.style.background = 'rgba(0, 0, 0, 0.692)';
        footer.style.textAlign = 'center';
        footer.style.color = 'white';
        footer.style.lineHeight = '100px';
        document.removeEventListener('click', closeNavOnOutsideClick);
    }
}



