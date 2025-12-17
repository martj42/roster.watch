const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});

// Desktop dropdown
document.querySelectorAll('.dropdown > a').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();
        const content = this.nextElementSibling;
        if (content) {
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        }
        // Stop the click from propagating to document
        event.stopPropagation();
    });
});

// Mobile dropdown
document.querySelectorAll('.dropdown-mobile > a').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();
        const content = this.nextElementSibling;
        if (content) {
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        }
        // Stop the click from propagating to document
        event.stopPropagation();
    });
});

// Close dropdowns when clicking outside
document.addEventListener('click', function(event) {
    // Only close desktop dropdowns when in desktop view
    if (!event.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown-content').forEach(dropdown => {
            dropdown.style.display = 'none';
        });
    }
    
    // Only close mobile dropdowns when in mobile view
    if (!event.target.closest('.dropdown-mobile')) {
        document.querySelectorAll('.dropdown-content-mobile').forEach(dropdown => {
            dropdown.style.display = 'none';
        });
    }
});