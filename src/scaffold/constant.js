import { app } from "../index.js";

app.constStore = app.constStore || {};

app.const = function(name, value) {

    if (app.constStore[name]) {
        throw new Error(`[const] duplicate constant: ${name}`);
    }

    app.constStore[name] = value;

    Object.defineProperty(app.const, name, {
        value: value,
        writable: false,
        configurable: false
    });

};