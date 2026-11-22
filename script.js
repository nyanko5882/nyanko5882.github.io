const UI = {
    tablist: document.getElementById('tablist'),
    openmenu: document.getElementById('openmenu')
};

function openmenu() {
    UI.tablist.classList.toggle("opened");
}
