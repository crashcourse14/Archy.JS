import { app } from "../index.js"

app.setClassList = function({id, classList}) {
    const element = document.getElementById(id);

    if (!id) {
        throw new Error(`[setClassList] returned an ID that is null: ${id}`);
    }

    element.classList.add(classList);

    return element;
}