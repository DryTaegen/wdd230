const currentDate = new Date();
document.querySelector("#headerDate").textContent = new Intl.DateTimeFormat("en-UK", { dateStyle: "full"}).format(currentDate);

document.querySelector("#copyWright").textContent = currentDate.getFullYear();

document.getElementById("lastTouch").textContent = document.lastModified;


// const classToggle = document.getElementsByClassName("smallMenu");
// const navBar = document.getElementsByClassName("navbar");

// classToggle.addEventListener("click", () => {navBar.classList.toggle("extended")}, false)

// window.onresize = () => {if (window.innerWidth > 760) navBar.classList.remove("extended")};


function toggleMenu(){
    document.getElementById("navbar").classList.toggle("extendedBar");
    document.getElementById("smallMenu").classList.toggle("extend");
}
const toggle = document.getElementById("smallMenu");


function setSmall(){
    document.getElementById("navbar").classList.remove("extendedBar");
    document.getElementById("smallMenu").classList.remove("extend");
}

function setWide(){
    document.getElementById("navbar").classList.add("extendedBar");
    document.getElementById("smallMenu").classList.add("extend");
}
toggle.onclick = toggleMenu;

window.onresize = () => {
    if (window.innerWidth > 760) setWide();
    else setSmall();
}

function displayBanner() {
    const banner= document.getElementById("datedBanner");
    banner.classList.remove("noDateBanner");
    banner.classList.add("dateBanner");
}

today = currentDate.getDay();
console.log(today)
if(today == 1) {
    displayBanner();
}
else if(today == 2) {
    displayBanner();
}
else {
    const banner= document.getElementById("datedBanner");
    banner.classList.remove("dateBanner");
    banner.classList.add("noDateBanner");
}


