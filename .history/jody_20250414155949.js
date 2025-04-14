function idk(hour, min, sec) {
    return (`Hours in one sec will be ${hour} : ${min} : ${sec + 1}`);
}

alert(idk(
    prompt("hour pls"),
    prompt("minute pls"),
    prompt("sec pls")
));