import { app } from "../index.js"

app.getDomTags = function(tagNames) {
    const element = document.getElementsByTagName(tagNames);

    if (!element) {
        throw new Error(`[getDomsTag] returned (a) null tag(s): ${tagNames}`);
    }

    return element;
}