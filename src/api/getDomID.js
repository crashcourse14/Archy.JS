import { app } from "../index.js"

app.getDomID = function(id) {
    const element = document.getElementById(id)[0];

    if (!element) {
        throw new Error(`[getDomID] returned a null element: ${id}`);   
    }

    return element;
}