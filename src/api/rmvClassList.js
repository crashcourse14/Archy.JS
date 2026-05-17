import { app } from "../index.js"

app.rmvClassList = function({id, classListName}) {
    const element = document.getElementById(id);

    if (!id) {
        throw new Error(`[rmvClassList] returned an ID that is null: ${id}`);
    }

    element.classList.remove(classListName);

    return element;
}