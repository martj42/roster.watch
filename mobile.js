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
// Toggle mobile dropdown
document.querySelectorAll('.dropdown > a').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault(); // Prevents jumping to top if "#" is used
        const content = this.nextElementSibling;

        // Close all other dropdowns first (optional, for better UX)
        document.querySelectorAll('.dropdown-content').forEach(drop => {
            if (drop !== content) drop.style.display = 'none';
        });

        // Toggle this one
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});
