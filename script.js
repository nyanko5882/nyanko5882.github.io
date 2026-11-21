const UI = {
    tablist: document.getElementById('tablist'),
    openmenu: document.getElementById('openmenu')
};

const isMenuOpened = false;
UI.openmenu.addEventListener("click", () => {
    console.log("open");
    if (isMenuOpened === false) {
        UI.tablist.style = "transform: translateX(0);"
        isMenuOpened = true;
    } else {
        UI.tablist.style = "transform: translateX(-100%);"
        isMenuOpened = false;
    }
});