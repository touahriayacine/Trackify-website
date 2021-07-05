function expandCollapsSideBar() {
    let Icon = document.getElementById("exp-coll");
    let logOut = document.getElementById("log-out");
    let logOutString = logOut.childNodes[1].childNodes[1];
    let sideBar = document.getElementById("side-menu");
    let body = document.body;
    Icon.addEventListener("click", function () {
        if (Icon.classList.contains("expand")) {
            body.style.gridTemplateColumns = "1fr 25fr";
            logOutString.style.display = "none";
            Icon.src = "../assets/icons/expand.svg";
            let dashboard = document.getElementsByClassName("function")[0].childNodes[3];
            let settings = document.getElementsByClassName("function")[1].childNodes[3];
            dashboard.style.display = "none";
            settings.style.display = "none";
            sideBar.style.width = "40px";
            Icon.classList.remove("expand");
            Icon.classList.toggle("collaps");
        }
        else {
            body.style.gridTemplateColumns = "1fr 15fr";
            logOutString.style.display = "inline-block";
            Icon.src = "../assets/icons/collaps.svg";
            let dashboard = document.getElementsByClassName("function")[0].childNodes[3];
            let settings = document.getElementsByClassName("function")[1].childNodes[3];
            dashboard.style.display = "block";
            settings.style.display = "block";
            sideBar.style.width = "120px";
            Icon.classList.remove("collaps");
            Icon.classList.toggle("expand");
        }
    });
}
expandCollapsSideBar();

function showDetails() {
    let icon = document.getElementById("show-details");
    let details = document.getElementById("car-details");
    icon.addEventListener("click", function () {
        if (details.classList.contains("showen")) {
            details.style.display = "none";
            details.classList.toggle("showen");
        }
        else {
            details.style.display = "flex";
            details.classList.add("showen");
        }
    })
}
showDetails();
// function expandSearch() {
//     // let bar = document.getElementById("search-bar");
//     let icon = document.getElementById("search-icon");
//     let searchBar = document.getElementById("search");
//     let title = document.getElementById("title");
//     if (window.innerWidth <= 678) {
//         icon.addEventListener("click", function () {
//             if (searchBar.style.width == "0") {
//                 searchBar.style.width = "250px";
//                 title.style.display = "none";
//                 searchBar.style.borderRadius = "10px";
//             }
//             else {
//                 searchBar.style.width = "0px";
//                 title.style.display = "block";
//                 searchBar.style.borderRadius = "30px";
//             }
//         });
//         searchBar.addEventListener("blur", function () {
//             searchBar.style.width = "0";
//             title.style.display = "block";
//             searchBar.style.borderRadius = "30px";
//         });
//     }
//     else {
//         searchBar.style.width = "250px";
//         title.style.display = "block";

//     }
// }
// expandSearch();

function cancelAddCar() {
    let cancelBtn = document.getElementById("cancel-btn");
    let formAddContainer = document.getElementById("add-car-form");
    cancelBtn.addEventListener("click", function () {
        formAddContainer.style.display = "none";
    });
}
cancelAddCar();
function addCar() {
    let addCarBtn = document.getElementById("add-car");
    let formAddContainer = document.getElementById("add-car-form");
    addCarBtn.addEventListener("click", function () {
        formAddContainer.style.display = "flex";
    });
}
addCar();

function showDeleteCarForm() {
    let confirmeDeleteMssg = document.getElementById("delete-mssg");
    confirmeDeleteMssg.style.display = "block";
}
function cancelDelete() {
    let confirmeDeleteMssg = document.getElementById("delete-mssg");
    let cancelDelete = document.getElementById("cancel-delete");
    cancelDelete.addEventListener("click", function () {
        confirmeDeleteMssg.style.display = "none";
    });
}
cancelDelete();
function confirmDelete() {
    let confirmDelete = document.getElementById("confirm-delete");
    let confirmeDeleteMssg = document.getElementById("delete-mssg");
    confirmDelete.addEventListener("click", function () {
        confirmeDeleteMssg.style.display = "none";
    })
}
confirmDelete();

function showSearchBar() {
    let searchBtn = document.getElementById("search-icon");
    let input = document.getElementById("search");
    let title = document.getElementById("title");
    let cross = document.getElementById("cross");
    searchBtn.addEventListener("click", function () {
        title.style.display = "none";
        input.style.display = "block";
        cross.style.display = "block"
        searchBtn.style.display = "none"
    });
    cross.addEventListener("click", function () {
        searchBtn.style.display = "block"
        title.style.display = "block";
        input.style.display = "none";
        cross.style.display = "none"
    });
}
showSearchBar();