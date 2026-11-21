const UI = {
    tablist: document.getElementById('tablist')
};

const isMenuOpened = false;
function openmenu() {
    console.log("open");
    if (isMenuOpened === false) {
        UI.tablist.style = "transform: translateX(0);"
        isMenuOpened = true;
    } else {
        UI.tablist.style = "transform: translateX(-100%);"
        isMenuOpened = false;
    }
};