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
document.querySelectorAll('.dropdown-mobile > a').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault(); // Prevents jumping to top if "#" is used
        const content = this.nextElementSibling;

        if (content) {
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        }
    });
});
