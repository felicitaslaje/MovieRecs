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