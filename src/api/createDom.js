import { app } from "../index.js"

app.createDom = function({id, className }) {

    const element = document.createElement("div");

    if (id) {
        element.id = id;
    } else {
        throw new Error("[createDom] returned a null id");
    }

    if (className) {
        element.className = className;
    } else {
        throw new Error("[createDom] returned a null className");
    }

    document.body.appendChild(element);

    return element;
};