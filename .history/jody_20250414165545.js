function idk(nb) {
    let price = 0
    let nmb = nb

    if (nmb <= 10) {
        price = nmb * 0.1
    } else if (nmb > 10 && nmb <= 30) {
        nmb = nmb - 10
        price = nmb * 0.09 + 1
    } else {
        price = nmb 
    }



    return price
}

alert(idk(
    prompt("paper please")
));