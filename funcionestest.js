function recomendarpelicula() {
    const selector1 = document.getElementById("seleccionadorpelis1").value;
    const selector2 = document.getElementById("seleccionadorpelis2").value;

    let text;

if ((selector1 == "romance" && selector2 == "comedia") || (selector2 == "romance" && selector1 == "comedia")) {
        text = "10 Things I Hate About You";
    } else if ((selector1 == "drama" && selector2 == "comedia") || (selector2 == "drama" && selector1 == "comedia")) {
        text = "The Truman Show";
    } else if ((selector1 == "cienciaficcion" && selector2 == "comedia") || (selector2 == "cienciaficcion" && selector1 == "comedia")) {
        text = "Everything Everywhere All At Once";
    } else if ((selector1 == "fantasia" && selector2 == "comedia") || (selector2 == "fantasia" && selector1 == "comedia")) {
        text = "TED";
    } else if ((selector1 == "familiar" && selector2 == "comedia") || (selector2 == "familiar" && selector1 == "comedia")) {
        text = "Home Alone";
    } else if ((selector1 == "thriller" && selector2 == "comedia") || (selector2 == "thriller" && selector1 == "comedia")) {
        text = "The Menu";
    } else if ((selector1 == "crimen" && selector2 == "comedia") || (selector2 == "crimen" && selector1 == "comedia")) {
        text = "Knives Out";
    } else if ((selector1 == "accion" && selector2 == "comedia") || (selector2 == "accion" && selector1 == "comedia")) {
        text = "Bullet Train";
    } else if ((selector1 == "romance" && selector2 == "drama") || (selector2 == "romance" && selector1 == "drama")) {
        text = "La La Land";
    } else if ((selector1 == "cienciaficcion" && selector2 == "drama") || (selector2 == "cienciaficcion" && selector1 == "drama")) {
        text = "Arrival";
    } else if ((selector1 == "fantasia" && selector2 == "drama") || (selector2 == "fantasia" && selector1 == "drama")) {
        text = "About Time";
    } else if ((selector1 == "familiar" && selector2 == "drama") || (selector2 == "familiar" && selector1 == "drama")) {
        text = "The Lion King";
    } else if ((selector1 == "thriller" && selector2 == "drama") || (selector2 == "thriller" && selector1 == "drama")) {
        text = "Gone Girl";
    } else if ((selector1 == "crimen" && selector2 == "drama") || (selector2 == "crimen" && selector1 == "drama")) {
        text = "Nightcrawler";
    } else if ((selector1 == "accion" && selector2 == "drama") || (selector2 == "accion" && selector1 == "drama")) {
        text = "Baby Driver";
    } else if ((selector1 == "cienciaficcion" && selector2 == "romance") || (selector2 == "cienciaficcion" && selector1 == "romance")) {
        text = "Palm Springs";
    } else if ((selector1 == "fantasia" && selector2 == "romance") || (selector2 == "fantasia" && selector1 == "romance")) {
        text = "Midnight In Paris";
    } else if ((selector1 == "familiar" && selector2 == "romance") || (selector2 == "familiar" && selector1 == "romance")) {
        text = "The Parent Trap";
    } else if ((selector1 == "thriller" && selector2 == "romance") || (selector2 == "thriller" && selector1 == "romance")) {
        text = "The Butterfly Effect";
    } else if ((selector1 == "crimen" && selector2 == "romance") || (selector2 == "crimen" && selector1 == "romance")) {
        text = "Focus";
    } else if ((selector1 == "accion" && selector2 == "romance") || (selector2 == "accion" && selector1 == "romance")) {
        text = "Scott Pilgrim";
    } else if ((selector1 == "fantasia" && selector2 == "cienciaficcion") || (selector2 == "fantasia" && selector1 == "cienciaficcion")) {
        text = "Avatar";
    } else if ((selector1 == "familiar" && selector2 == "cienciaficcion") || (selector2 == "familiar" && selector1 == "cienciaficcion")) {
        text = "Wall-E";
    } else if ((selector1 == "thriller" && selector2 == "cienciaficcion") || (selector2 == "thriller" && selector1 == "cienciaficcion")) {
        text = "Tenet";
    } else if ((selector1 == "crimen" && selector2 == "cienciaficcion") || (selector2 == "crimen" && selector1 == "cienciaficcion")) {
        text = "The Dark Knight";
    } else if ((selector1 == "accion" && selector2 == "cienciaficcion") || (selector2 == "accion" && selector1 == "cienciaficcion")) {
        text = "MAD MAX: Fury Road";
    } else if ((selector1 == "familiar" && selector2 == "fantasia") || (selector2 == "familiar" && selector1 == "fantasia")) {
        text = "E.T.";
    } else if ((selector1 == "thriller" && selector2 == "fantasia") || (selector2 == "thriller" && selector1 == "fantasia")) {
        text = "The Prestige";
    } else if ((selector1 == "crimen" && selector2 == "fantasia") || (selector2 == "crimen" && selector1 == "fantasia")) {
        text = "The Mask";
    } else if ((selector1 == "accion" && selector2 == "fantasia") || (selector2 == "accion" && selector1 == "fantasia")) {
        text = "The Lord of the Rings: The Fellowship of the Rings";
    } else if ((selector1 == "thriller" && selector2 == "familiar") || (selector2 == "thriller" && selector1 == "familiar")) {
        text = "The Haunted Mansion";
    } else if ((selector1 == "crimen" && selector2 == "familiar") || (selector2 == "crimen" && selector1 == "familiar")) {
        text = "Zootopia";
    } else if ((selector1 == "accion" && selector2 == "familiar") || (selector2 == "accion" && selector1 == "familiar")) {
        text = "Kung Fu Panda";
    } else if ((selector1 == "crimen" && selector2 == "thriller") || (selector2 == "crimen" && selector1 == "thriller")) {
        text = "Prisioners";
    } else if ((selector1 == "accion" && selector2 == "thriller") || (selector2 == "accion" && selector1 == "thriller")) {
        text = "Die Hard";
    } else if ((selector1 == "accion" && selector2 == "crimen") || (selector2 == "accion" && selector1 == "crimen")) {
        text = "Kill Bill";
    } else if ((selector1 == "comedia" && selector2 == "comedia") || (selector2 == "comedia" && selector1 == "comedia")) {
        text = "Seleccionar dos géneros diferentes";
    } else if ((selector1 == "drama" && selector2 == "drama") || (selector2 == "drama" && selector1 == "drama")) {
        text = "Seleccionar dos géneros diferentes";
    } else if ((selector1 == "romance" && selector2 == "romance") || (selector2 == "romance" && selector1 == "romance")) {
        text = "Seleccionar dos géneros diferentes";
    } else if ((selector1 == "cienciaficcion" && selector2 == "cienciaficcion") || (selector2 == "cienciaficcion" && selector1 == "cienciaficcion")) {
        text = "Seleccionar dos géneros diferentes";
    } else if ((selector1 == "fantasia" && selector2 == "fantasia") || (selector2 == "fantasia" && selector1 == "fantasia")) {
        text = "Seleccionar dos géneros diferentes";
    } else if ((selector1 == "familiar" && selector2 == "familiar") || (selector2 == "familiar" && selector1 == "familiar")) {
        text = "Seleccionar dos géneros diferentes";
    } else if ((selector1 == "thriller" && selector2 == "thriller") || (selector2 == "thriller" && selector1 == "thriller")) {
        text = "Seleccionar dos géneros diferentes";
    } else if ((selector1 == "crimen" && selector2 == "crimen") || (selector2 == "crimen" && selector1 == "crimen")) {
        text = "Seleccionar dos géneros diferentes";
    } else if ((selector1 == "accion" && selector2 == "accion") || (selector2 == "accion" && selector1 == "accion")) {
        text = "Ha habido un error, seleccione dos géneros diferentes.";
    }


    document.getElementById("sugg").showModal();
    document.getElementById("recomendacion").innerText = text;
}

function cerrar() {
    document.getElementById("sugg").close();
}

function redireccionarapeli(){

}



