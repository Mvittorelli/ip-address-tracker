function idk(nb) {
    let price = 0
    let nmb = nb
    if (nb <= 10) {
        price = nmb * 0.1

    } else if (nb > 10 && nmb <= 30) {
        nmb = nmb - 10
        price = nmb * 0.08 + 1
    }



    return price
}

alert(idk(
    prompt("paper please")
));