
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

    // Function to show/hide tab content
    function showTab(tabId, event) {
        event.preventDefault(); // Prevent default link behavior
        var tabs = document.querySelectorAll('.tab-content');
        for (var i = 0; i < tabs.length; i++) {
            tabs[i].style.display = 'none'; // Hide all tab contents
        }
        document.getElementById(tabId).style.display = 'block'; // Show selected tab content
    }
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('text-gray-300');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('text-gray-300');
        }
    });
});

function myEmail() {
    window.location.href = "mailto:pamulaavinash003@.com";
}

function myLinkedin() {
    window.open("https://www.linkedin.com/in/p-avinash-28b623301/", "_blank");
}

function myGithub() {
    window.open("https://github.com/Avinash-Dev-001", "_blank");
}
function myMessage(){
    window.location.href ="mailto:pamulaavinash003@.com";
}





