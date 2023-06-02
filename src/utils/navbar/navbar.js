export const openMenu = () => {
    const menu = document.querySelector("#menu");
    const openMenuIcon = document.querySelector(".open-menu-icon");
    const closeMenuIcon = document.querySelector(".close-menu-icon");
    menu.style.display = "flex";
    openMenuIcon.style.display = "none";
    closeMenuIcon.style.display = "block";
};
export const closeMenu = () => {
    const menu = document.querySelector("#menu");
    const openMenuIcon = document.querySelector(".open-menu-icon");
    const closeMenuIcon = document.querySelector(".close-menu-icon");
    menu.style.display = "none";
    openMenuIcon.style.display = "block";
    closeMenuIcon.style.display = "none";
};