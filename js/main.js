import { enableThemes } from "./themes.js";

import { displayModalContent } from "./modals.js";

import { executeBody, newElement } from "./body.js";

function include(fileName, isModule = false) {
    let addJsNodeToHTML = async (file) => {
        fetch(file)
            .then((resolve) => {
                return resolve.text();
            })
            .then((htmlDoc) => {
                appendScriptToBody(htmlDoc, fileName, isModule);
            });
    };
    return addJsNodeToHTML("../index.html");
}

void (function main() {
    // include("modals.js", true);
    enableThemes();
    displayModalContent();
    executeBody();
})();
function appendScriptToBody(htmlDoc, fileName, isModule) {
    let doc = new DOMParser().parseFromString(htmlDoc, "text/html");

    let prefix = null,
        type = null;

    if (document.title !== doc.title) {
        prefix = "../js/";
    } else {
        prefix = "js/";
    }

    type = isModule === true ? "module" : "text/javascript";

    document.body.appendChild(
        newElement("script", {
            src: `${prefix}${fileName}`,
            type: `${type}`,
            defer: "true",
        })
    );
}
