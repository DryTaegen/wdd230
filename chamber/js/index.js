const currentDate = new Date();
document.querySelector("#headerDate").textContent = new Intl.DateTimeFormat("en-UK", { dateStyle: "full"}).format(currentDate);

document.querySelector("#copyWright").textContent = currentDate.getFullYear();

document.getElementById("lastTouch").textContent = document.lastModified;