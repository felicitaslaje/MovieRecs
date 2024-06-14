function filtermovies(category) {
    const all = ["thetrumanshow", "10thingsihateaboutyou", "eeaao", "ted", "homealone", "themenu", "knivesout", "bullettrain", "lalaland", "arrival", "abouttime", "thelionking", "gonegirl", "nightcrawler", "babydriver", "palmsprings", "midnightinparis", "theparenttrap", "thebutterflyeffect", "focus", "scottpilgrim", "avatar", "walle", "tenet", "thedarkknight", "furyroad", "et", "theprestige", "themask", "thelordoftherings", "thehauntedmansion", "zootopia", "kungfupanda", "prisioners", "diehard", "killbill"];
    const comedia = ["thetrumanshow", "10thingsihateaboutyou", "eeaao", "ted", "homealone", "themenu", "knivesout", "bullettrain"];
    const drama = ["thetrumanshow", "lalaland", "arrival", "abouttime", "thelionking", "gonegirl", "nightcrawler", "babydriver"];
    const romance = ["10thingsihateaboutyou", "lalaland", "palmsprings", "midnightinparis", "theparenttrap", "thebutterflyeffect", "focus", "scottpilgrim"];
    const cienciaficcion = ["eeaao", "arrival", "palmsprings", "avatar", "walle", "tenet", "thedarkknight", "furyroad"];
    const fantasia = ["ted", "abouttime", "midnightinparis", "avatar", "et", "theprestige", "themask", "thelordoftherings"];
    const familiar = ["homealone", "thelionking", "theparenttrap", "walle", "et", "thehauntedmansion", "zootopia", "kungfupanda"];
    const thriller = ["themenu", "gonegirl", "thebutterflyeffect", "tenet", "theprestige", "thehauntedmansion", "prisioners", "diehard"];
    const crimen = ["knivesout", "nightcrawler", "focus", "thedarkknight", "themask", "zootopia", "prisioners", "killbill"];
    const accion = ["bullettrain", "babydriver", "scottpilgrim", "furyroad", "thelordoftherings", "kungfupanda", "diehard", "killbill"];

    document.querySelectorAll("a.categoryitem").forEach(element => {
        element.style.backgroundColor="rgb(156, 10, 10)";
    })
    document.querySelector(`[category="${category}"]`).style = "background-color:  rgba(156, 10, 10, 0.388)";

    all.forEach(element => {
        document.getElementById(element).style.display = "none";
    })


    if (category == "comedia") {
        comedia.forEach(element => {
            document.getElementById(element).style.display = "block";
        })

    } else if (category == "drama") {
        drama.forEach(element => {
            document.getElementById(element).style.display = "block";
        })
    } else if (category == "romance") {
        romance.forEach(element => {
            document.getElementById(element).style.display = "block";
        })
    } else if (category == "cienciaficcion") {
        cienciaficcion.forEach(element => {
            document.getElementById(element).style.display = "block";
        })
    } else if (category == "fantasia") {
        fantasia.forEach(element => {
            document.getElementById(element).style.display = "block";
        })
    } else if (category == "familiar") {
        familiar.forEach(element => {
            document.getElementById(element).style.display = "block";
        })
    } else if (category == "thriller") {
        thriller.forEach(element => {
            document.getElementById(element).style.display = "block";
        })
    } else if (category == "crimen") {
        crimen.forEach(element => {
            document.getElementById(element).style.display = "block";
        })
    } else if (category == "accion") {
        accion.forEach(element => {
            document.getElementById(element).style.display = "block";
        })
    } else if (category == "all") {
        all.forEach(element => {
            document.getElementById(element).style.display = "block";
        })
    }

}

function guardarLS(peli){
    peli = peli.replace("peli_","")
    const peliculas={
        "eeaao":{
            "title": "Everything Everywhere All At Once ",
            "year": "2022",
            "cartel": "images/everythingeverywhereallatonce.jpg",
            "sinopsis": " Una heroína inesperada debe usar sus nuevos poderes para luchar contra los desconcertantes peligros del multiverso y así lograr salvar su mundo.",
            "duracion": " 2h 20m",
            "fondoindividual": "eeaao_still.webp",
            "verahora": "prime",
            "link": "https://www.primevideo.com/dp/amzn1.dv.gti.ce3a3b69-10a1-4bfc-8459-1b48bce3a53e?autoplay=0&ref_=atv_cf_strg_wb"
        }
    };

    const datos = peliculas[peli];

    localStorage.setItem("titulo", datos.title);
    localStorage.setItem("anio", datos.year);
    localStorage.setItem("cartel", datos.cartel);
    localStorage.setItem("sinopsis", datos.sinopsis);
    localStorage.setItem("duracion", datos.duracion);
    localStorage.setItem("fondoindividual", datos.fondoindividual);
    localStorage.setItem("verahora", datos.verahora);
    localStorage.setItem("link", datos.link);

    window.open("datospelicula.html");
}

function traerLS(){
    const titulo = localStorage.getItem("titulo");
    const anio = localStorage.getItem("anio");
    const cartel = localStorage.getItem("cartel");
    const sinopsis = localStorage.getItem("sinopsis");
    const duracion = localStorage.getItem("duracion");
    const fondoindividual = localStorage.getItem("fondoindividual");
    const verahora = localStorage.getItem("verahora");
    const link = localStorage.getItem("link");

    document.getElementById("title-peli").innerText=`${titulo} (${anio})`;
    document.getElementById("poster-peli").innerHTML=`<img src="${cartel}" alt="${titulo}" class="poster-peli">`;
    document.getElementById("sinopsis-peli").innerText=`${sinopsis}`;
    document.getElementById("duracion-peli").innerText=`${duracion}`;
    document.getElementById("duracion-peli").innerText=`${duracion}`;

    if(verahora==="prime"){
        document.getElementById("prime").href=link;
    }else{
        document.getElementById("prime").style.display = "none";
    }
    
    document.getElementById("fondo-peli").style.backgroundImage=`url("moviestills/${fondoindividual}")`;
    
}