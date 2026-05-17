import { app } from "../index.js"

app.getDomClass = function(className) {
    const element = document.getElementsByClassName(className)[0];

    if (!element) {
        throw new Error(`[getDomClass] returned a null className: ${className}`);
    }
    
    return element;
}