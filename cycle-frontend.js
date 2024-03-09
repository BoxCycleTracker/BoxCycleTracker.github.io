// dismiss welcome msg
document.getElementById("dismiss-btn").addEventListener("click", () => DismissInfo());
// close prev cycles
document.getElementById("close-btn").addEventListener("click", () => DismissPrevCycles());
// back to maps
document.getElementById("back-btn").addEventListener("click", () => ReturnToMapSelector());
// show previous cycles
document.getElementById("show-prev-btn").addEventListener("click", () => ShowPrevCycles());
// reset current cycle
document.getElementById("reset-cycle-btn").addEventListener("click", () => ClearCurrentCycle());

const UpdateCycleFrontend = (element, skip) => {
    let IsTracked = hasClass(element, "tracked") || hasClass(element, "skip-tracked");

    if (IsTracked) {
        RemoveTracked(element);
    } else {
        AddTracked(element, skip);
    }
}

const ClearFrontendCycle = () => {
    const trackerItems = document.querySelector(".location-tracker").children;
    for (let i = 0; i < trackerItems.length; i++) {
        RemoveTracked(trackerItems[i]);
    }
}

const AddPrevCycle = (cycle) => {
    let cycleStr = "";

    cycle.forEach(element => {
        cycleStr += element + (element == cycle[cycle.length - 1] ? "" : ", ");
    });
    
    document.getElementById("prev-cycles").innerHTML += `${cycleStr}<br><br>`;
}

const DismissPrevCycles = () => {
    document.querySelector(".prev-cycles").style.display = "none";
}

const ShowPrevCycles = () => {
    document.querySelector(".prev-cycles").style.display = "block";
}

const AddTracked = (element, skip) => {
    if (skip == true) {
        element.classList.add("skip-tracked");
    } else {
        element.classList.add("tracked");
    }
}

const RemoveTracked = (element) => {
    let trackSkipped = "skip-tracked";

    if (hasClass(element, trackSkipped)) {
        element.classList.remove("skip-tracked");
    } else {
        element.classList.remove("tracked");
    }
}

const GetLocElement = (map) => {
    const trackerItems = document.querySelector(".location-tracker").children;
    for (let i = 0; i < trackerItems.length; i++) {
        let location = trackerItems[i].id;
        if (location == map) {
            return trackerItems[i];
        }
    }
}

const hasClass = (element, className) => {
    return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
}