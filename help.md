# HELP
Use this as a reference if you want to learn, or simply forget how to do something.

## DOM API
```javascript

const a = app.getDomID(id);
const b = app.getDomsID(id);
const c = app.getDomClass(class);
const d = app.getDomsClass(class);
const e = app.getDomsTag(tag);

app.addClassList({
    id: "id",
    classList: "class"
});

app.rmvClassList({
    id: "id"
    classList: "class"
});

```

## SCAFFOLDING

```javascript

app.const("Human", {
    name: "John",
    age: "30" 
    //add more things about this constant
});

app.function("name", (name) => {
    //function
});
 
app.function.name(arg);  //if you want to use the app.const constant, use: ${app.constant.name.argument}

```

