import { newElement, executeMainNavMenu } from "./nav.mjs";

import { setThemeAfterPageLoaded } from "./switch.mjs";

import { displayModalContent } from "./modal-things.mjs";

import { executeBody } from "./body.mjs";

function include(fileName, isModule = false) {
    let prefix, type;
    if (document.title !== "La classification automatique") {
        prefix = "../js/";
    } else {
        prefix = "js/";
    }

    isModule === true ? (type = "module") : (type = "text/javascript");

    document.body.appendChild(
        newElement("script", {
            src: `${prefix}${fileName}`,
            type: `${type}`,
            defer: "true",
        })
    );
}

void (function main() {
    setThemeAfterPageLoaded();
    displayModalContent();
    // executeMainNavMenu();
    executeBody();
    include("img-slide.js", false);

    document.querySelector(".burger-check").checked = false;
    document
        .querySelector(".app-table-of-content")
        .classList.add("table-of-content-closed");
})();

document.querySelector(".burger-check").addEventListener("click", (e) => {
    e.stopPropagation();

    openOrClose_tableOfContents();
});

function openOrClose_tableOfContents() {
    let burgerCheckBox = document.querySelector(".app-table-of-content");
    console.log("Ok here", burgerCheckBox.classList);

    burgerCheckBox.classList.toggle("table-of-content-closed");
}
