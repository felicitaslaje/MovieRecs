function sugerirpelicula() {
    const accion = document.getElementById("accion_si").checked ? true : false;
    console.log(accion);
    const drama = document.getElementById("drama_si").checked ? true : false;
    console.log(drama);
    const comedia = document.getElementById("comedia_si").checked ? true : false;
    console.log(comedia);
    const thriller = document.getElementById("thriller_si").checked ? true : false;
    console.log(thriller);
    const romance = document.getElementById("romance_si").checked ? true : false;
    console.log(romance);
    const familiar = document.getElementById("familiar_si").checked ? true : false;
    console.log(familiar);
    const crimen = document.getElementById("crimen_si").checked ? true : false;
    console.log(crimen);
    const fantasia = document.getElementById("fantasia_si").checked ? true : false;
    console.log(fantasia);
    const cienciaficcion = document.getElementById("cienciaficcion_si").checked ? true : false;
    console.log(cienciaficcion);
    if (romance && comedia) {
        alert("Te recomendamos 10 Things I Hate About You")
    }
    if (comedia && drama) {
        alert("Te recomendamos The Truman Show")
    }
    if (comedia && cienciaficcion) {
        alert("Te recomendamos Everything Everywhere All At Once")
    }
    if (comedia && fantasia) {
        alert("Te recomendamos TED")
    }
    if (comedia && familiar) {
        alert("Te recomendamos Home Alone")
    }
    if (comedia && thriller) {
        alert("Te recomendamos The Menu")

    }
    if (comedia && crimen) {
        alert("Te recomendamos Knives Out")
    }
    if (comedia && accion) {
        alert("Te recomendamos Bullet Train")

    }
    if (drama && romance) {
        alert("Te recomendamos La La Land")
    }
    if (drama && cienciaficcion) {
        alert("Te recomendamos Arrival")
    }
    if (drama && fantasia) {
        alert("Te recomendamos About Time")
    }
    if (drama && familiar) {
        alert("Te recomendamos The Lion King")
    }
    if (drama && thriller) {
        alert("Te recomendamos Gone Girl")
    }
    if (drama && crimen) {
        alert("Te recomendamos Nightcrawler")
    }
    if (drama && accion) {
        alert("Te recomendamos Baby Driver")
    }
    if (romance && cienciaficcion) {
        alert("Te recomendamos Palm Springs")
    }
    if (romance && fantasia) {
        alert("Te recomendamos Midnight in Paris")
    }
    if (romance && familiar) {
        alert("Te recomendamos The Parent Trap")
    }
    if (romance && thriller) {
        alert("Te recomendamos The Butterfly Effect")
    }
    if (romance && crimen) {
        alert("Te recomendamos Focus")
    }
    if (romance && accion) {
        alert("Te recomendamos Scott Pilgrim")
    }
    if (cienciaficcion && fantasia) {
        alert("Te recomendamos Avatar")
    }
    if (cienciaficcion && familiar) {
        alert("Te recomendamos Wall-E")
    }
    if (cienciaficcion && thriller) {
        alert("Te recomendamos Tenet")
    }
    if (cienciaficcion && crimen) {
        alert("Te recomendamos The Dark Knight")
    }
    if (cienciaficcion && accion) {
        alert("Te recomendamos MAD MAX: Fury Road")
    }
    if (fantasia && familiar) {
        alert("Te recomendamos E.T.")
    }
    if (fantasia && thriller) {
        alert("Te recomendamos The Prestige")
    }
    if (fantasia && crimen) {
        alert("Te recomendamos The Mask")
    }
    if (fantasia && accion) {
        alert("Te recomendamos The Lord of the Rings: The Fellowship of the Ring")
    }
    if (familiar && thriller) {
        alert("Te recomendamos The Haunted Mansion")
    }
    if (familiar && crimen) {
        alert("Te recomendamos Zootopia")
    }
    if (familiar && accion) {
        alert("Te recomendamos Kung Fu Panda")
    }
    if (thriller && crimen) {
        alert("Te recomendamos Prisioners")
    }
    if (thriller && accion) {
        alert("Te recomendamos Die Hard")
    }
    if (crimen && accion) {
        alert("Te recomendamos Kill Bill")
    }
}

