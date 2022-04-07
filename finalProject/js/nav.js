const toggleButton = document.querySelector("#smallMenu")

toggleButton.addEventListener("click", toggleMenu)

function toggleMenu() {
    let navMenu = document.querySelectorAll(".navItem")
    
    for (let i =0; i <  navMenu.length; ++i) {
        if (navMenu[i].classList.contains("navHidden")) {
            navMenu[i].classList.remove("navHidden");
        } else {
            navMenu[i].classList.add("navHidden");
        }
    }
}

document.querySelector("#modified").textContent = document.lastModified;