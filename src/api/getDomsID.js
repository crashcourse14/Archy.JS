import { app } from "../index.js"

app.getDomID = function(id) {
    const element = document.getElementById(id);

    if (!element) {
        throw new Error(`[getDomsID] returned (a) null id(s): ${id}`);   
    }

    return element;
}