function sugerirpelicula() {
    const accion = document.getElementById("accion").checked ? true : false;
    console.log(accion);
    const drama = document.getElementById("drama").checked ? true : false;
    console.log(drama);
    const comedia = document.getElementById("comedia").checked ? true : false;
    console.log(comedia);
    const thriller = document.getElementById("thriller").checked ? true : false;
    console.log(thriller);
    const romance = document.getElementById("romance").checked ? true : false;
    console.log(romance);
    const familiar = document.getElementById("familiar").checked ? true : false;
    console.log(familiar);
    const crimen = document.getElementById("crimen").checked ? true : false;
    console.log(crimen);
    const fantasia = document.getElementById("fantasia").checked ? true : false;
    console.log(fantasia);
    const cienciaficcion = document.getElementById("cienciaficcion").checked ? true : false;
    console.log(cienciaficcion);
    if (romance && comedia) {
        alert("Te recomendamos 10 Cosas que odio de ti")
    }
    if (comedia && drama) {
        alert("Te recomendamos El show de Truman")
    }
    if (comedia && cienciaficcion) {
        alert("Te recomendamos Todo en todas partes al mismo tiempo")
    }
    if (comedia && fantasia) {
        alert("Te recomendamos TED")
    }
    if (comedia && familiar) {
        alert("Te recomendamos Mi pobre angelito")
    }
    if (comedia && thriller) {
        alert("Te recomendamos el Menú")
    }
    if (comedia && crimen) {
        alert("Te recomendamos Knives out")
    }
    if (drama && romance) {
        alert("Te recomendamos Lalaland")
    }
    if (drama && cienciaficcion) {
        alert("Te recomendamos Arrival")
    }
    if (drama && fantasia) {
        alert("Te recomendamos About time")
    }
    if (drama && familiar) {
        alert("Te recomendamos El rey león")
    }
    if (drama && thriller) {
        alert("Te recomendamos Gone Girl")
    }
    if (drama && crimen) {
        alert("Te recomendamos Night crawler")
    }
    if (drama && accion) {
        alert("Te recomendamos Baby driver")
    }
    if (romance && cienciaficcion) {
        alert("Te recomendamos Palm Springs")
    }
    if (romance && fantasia) {
        alert("Te recomendamos Midnight in Paris")
    }
    if (romance && familiar) {
        alert("Te recomendamos Juego de gemelas")
    }
    if (romance && thriller) {
        alert("Te recomendamos El efecto mariposa")
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
        alert("Te recomendamos Wall-e")
    }
    if (cienciaficcion && thriller) {
        alert("Te recomendamos Tenet")
    }
    if (cienciaficcion && crimen) {
        alert("Te recomendamos The Dark Knight")
    }
    if (cienciaficcion && accion) {
        alert("Te recomendamos Fury Road")
    }
    if (fantasia && familiar) {
        alert("Te recomendamos ET")
    }
    if (fantasia && thriller) {
        alert("Te recomendamos The prestige")
    }
    if (fantasia && crimen) {
        alert("Te recomendamos The mask")
    }
    if (fantasia && accion) {
        alert("Te recomendamos El señor de los anillos")
    }
    if (familiar && thriller) {
        alert("Te recomendamos Haunted mansion")
    }
    if (familiar && crimen) {
        alert("Te recomendamos Zootopia")
    }
    if (familiar && accion) {
        alert("Te recomendamos Kung fu panda")
    }
    if (thriller && crimen) {
        alert("Te recomendamos Prisioneros")
    }
    if (thriller && accion) {
        alert("Te recomendamos Duro de matar")
    }
    if (crimen && accion) {
        alert("Te recomendamos Kill Bill")
    }
}

