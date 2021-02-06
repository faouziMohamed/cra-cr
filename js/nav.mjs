function openMenu() {
    document.querySelector("ul#main-list").style.display = "block";
}

function closeMenu() {
    document.querySelector("ul#main-list").style.display = "none";
}

function handleOpenedMenu() {
    let article = document.querySelector("article.main-article");
    article.addEventListener("touchstart", closeMenu);
    article.addEventListener("click", closeMenu);
}

function displayMenuAnyway() {
    let article = document.querySelector("article.main-article");
    article.removeEventListener("touchstart", closeMenu);
    article.removeEventListener("click", closeMenu);
    document.querySelector("ul#main-list").style.display = "block";
}

function toggleOpenAndCloseMenu() {
    document
        .querySelector("#menu-icon-wrapper>i")
        .addEventListener("click", function openCloseMenu() {
            /*Use of media query to control responsive layout for the menubar"s layout*/
            let x = window.matchMedia("(max-width: 536px)"); //width<=536px
            if (x.matches) {
                handleOpenedMenu(); //some events to handle the closing of menu
                if (
                    document.querySelector("ul#main-list").style.display ===
                    "block"
                ) {
                    closeMenu();
                } else {
                    openMenu();
                }
            } else {
                //width >536px
                displayMenuAnyway(); //remove for some events to handle the closing of menu
            }
            x.addEventListener("change", openCloseMenu);
        });
}

function newTxtNode(text) {
    return document.createTextNode(text);
}

function newElement(name, attributes = {}, text = "") {
    let node = document.createElement(name);
    const keys = Object.getOwnPropertyNames(attributes);
    keys.forEach((key) => {
        node.setAttribute(`${key}`, attributes[`${key}`]);
    });

    if (text) {
        node.appendChild(newTxtNode(text));
    }
    return node;
}

function tweakTableOfCOntent() {
    let toc = newElement("i", {
        class: "fas fa-stream fa-chevron-right",
        id: "open-toc",
        title: "Appuyez pour ouvrir le sommaire",
    });
    document.body.insertBefore(toc, document.querySelector("main"));
    sessionStorage.setItem("asideLeftOpen", "closed");
    toc.addEventListener("click", function (e) {
        if (sessionStorage.getItem("asideLeftOpen") === "oppened") {
            document.querySelector("aside#left-aside").style.transform =
                "translateX(0)";
            sessionStorage.setItem("asideLeftOpen", "closed");
        } else {
            document.querySelector("aside#left-aside").style.transform =
                "translateX(-200%)";
            sessionStorage.setItem("asideLeftOpen", "oppened");
        }
    });
}

function executeMainNavMenu() {
    /*Displaying or hidden submenus */
    //toggleOpenAndCloseMenu();

    preventDefaultToEmptyLink();
    tweakTableOfCOntent();
}

export { newTxtNode, newElement, executeMainNavMenu };

/*
if (window.matchMedia("(prefers-color-scheme)").media !== "not all") {
    console.log("🎉 Dark mode is supported");
}
*/