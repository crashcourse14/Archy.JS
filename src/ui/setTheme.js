import { app } from "../index.js";

app.themeStore = app.themeStore || {};

app.createTheme = function(name, values) {

    if (app.themeStore[name]) {
        throw new Error(`[setTheme] App has a duplicate theme: ${name}`);
    }

    app.themeStore[name] = values;

};