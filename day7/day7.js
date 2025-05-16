const menuButton = document.querySelector("[data-menu-button]");
const menu = document.querySelector("[data-menu]");
const notifications = document.querySelector("[data-notifications]");

menuButton.addEventListener("click", () => {
    menu.classList.toggle("open");
    notifications.classList.toggle("menu-open");

});

const searchInput = document.querySelector("[data-search-input]");
const searchLabel = document.querySelector("[data-search-label]");

searchLabel.addEventListener("click", () => {
    searchInput.classList.toggle("show");
});