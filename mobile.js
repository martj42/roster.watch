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

document.querySelectorAll('.dropdown > a').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();
        const content = this.nextElementSibling;
        if (content) {
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        }

        event.stopPropagation();
    });
});


document.querySelectorAll('.dropdown-mobile > a').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();
        const content = this.nextElementSibling;
        if (content) {
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        }

        event.stopPropagation();
    });
});


document.addEventListener('click', function(event) {

    if (!event.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown-content').forEach(dropdown => {
            dropdown.style.display = 'none';
        });
    }
    
    if (!event.target.closest('.dropdown-mobile')) {
        document.querySelectorAll('.dropdown-content-mobile').forEach(dropdown => {
            dropdown.style.display = 'none';
        });
    }
});