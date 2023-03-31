// button name navbar
let navToggle = document.querySelector("#navToggle")
let nav = document.querySelector("#nav-links")




navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav-open')
})



//searchbar filter
// Regelt de functionaliteit van de zoekbalk
const searchBar = document.querySelector("#site-search");

searchBar.addEventListener("keyup", search);
itemResults = document.querySelectorAll("article");

function search() {
    const searchValue = this.value.toLowerCase();

    if (this.value === "") {
        itemResults.forEach((itemResult) => {
            itemResult.hidden = false;
        });

    } else {
        itemResults.forEach((itemResult) => {
            itemResult.hidden = !itemResult.textContent
                .toLowerCase()
                .includes(searchValue);
        });
    }
}