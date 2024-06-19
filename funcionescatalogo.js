function filtermovies(category) {
    const all = ["thetrumanshow", "10thingsihateaboutyou", "eeaao", "ted", "homealone", "themenu", "knivesout", "bullettrain", "lalaland", "arrival", "abouttime", "thelionking", "gonegirl", "nightcrawler", "babydriver", "palmsprings", "midnightinparis", "theparenttrap", "thebutterflyeffect", "focus", "scottpilgrim", "avatar", "walle", "tenet", "thedarkknight", "furyroad", "et", "theprestige", "themask", "thelordoftherings", "thehauntedmansion", "zootopia", "kungfupanda", "prisoners", "diehard", "killbill"];
    const comedia = ["thetrumanshow", "10thingsihateaboutyou", "eeaao", "ted", "homealone", "themenu", "knivesout", "bullettrain"];
    const drama = ["thetrumanshow", "lalaland", "arrival", "abouttime", "thelionking", "gonegirl", "nightcrawler", "babydriver"];
    const romance = ["10thingsihateaboutyou", "lalaland", "palmsprings", "midnightinparis", "theparenttrap", "thebutterflyeffect", "focus", "scottpilgrim"];
    const cienciaficcion = ["eeaao", "arrival", "palmsprings", "avatar", "walle", "tenet", "thedarkknight", "furyroad"];
    const fantasia = ["ted", "abouttime", "midnightinparis", "avatar", "et", "theprestige", "themask", "thelordoftherings"];
    const familiar = ["homealone", "thelionking", "theparenttrap", "walle", "et", "thehauntedmansion", "zootopia", "kungfupanda"];
    const thriller = ["themenu", "gonegirl", "thebutterflyeffect", "tenet", "theprestige", "thehauntedmansion", "prisoners", "diehard"];
    const crimen = ["knivesout", "nightcrawler", "focus", "thedarkknight", "themask", "zootopia", "prisoners", "killbill"];
    const accion = ["bullettrain", "babydriver", "scottpilgrim", "furyroad", "thelordoftherings", "kungfupanda", "diehard", "killbill"];

    document.querySelectorAll("a.categoryitem").forEach(element => {
        element.style.backgroundColor = "rgb(156, 10, 10)";
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

const peliculas = {
    "eeaao": {
        "title": "Everything Everywhere All At Once ",
        "year": "2022",
        "cartel": "images/everythingeverywhereallatonce.jpg",
        "sinopsis": " Una heroína inesperada debe usar sus nuevos poderes para luchar contra los desconcertantes peligros del multiverso y así lograr salvar su mundo.",
        "duracion": " 2h 20m",
        "fondoindividual": "eeaao_still.webp",
        "verahora": ["prime"],
        "linkprime": "https://www.primevideo.com/dp/amzn1.dv.gti.ce3a3b69-10a1-4bfc-8459-1b48bce3a53e?autoplay=0&ref_=atv_cf_strg_wb"
    },
    "ted": {
        "title": "TED ",
        "year": "2012",
        "cartel": "images/ted.jpg",
        "sinopsis": " La historia se centra en las aventuras de un hombre que ve cómo su osito de peluche de la infancia adquiere vida debido a un deseo que formuló cuando era pequeño, convirtiéndose el peluche en un gandul deslenguado que alterará por completo su vida y pondrá en peligro su relación amorosa con su pareja, debido a su comportamiento totalmente salvaje y su conducta fuera de toda norma social.",
        "duracion": " 1h 46m",
        "fondoindividual": "ted_still.jpg",
        "verahora": ["max", "prime"],
        "linkmax": "https://www.max.com/ar/es/movies/ted/bad2a869-46c9-4b29-9fab-e733fdbe14b0",
        "linkprime": "https://www.primevideo.com/detail/0SJJD3NI6UFFQ975TPVU3VCL8J/ref=atv_dl_rdr"
    },
    "thetrumanshow": {
        "title": "The Truman Show ",
        "year": "1998",
        "cartel": "images/thetrumanshow.jpg",
        "sinopsis": " Truman Burbank, un feliz agente de seguros, cree llevar una vida normal, pero no tiene idea de que las cámaras lo graban las 24 horas y que todo lo que hace se ve en televisión.",
        "duracion": " 1h 43m",
        "fondoindividual": "thetrumanshow_still.webp",
        "verahora": ["netflix"],
        "linknetflix": "https://www.netflix.com/ar-en/title/11819086"
    },
    "10thingsihateaboutyou": {
        "title": "10 Things I Hate About You ",
        "year": "1999",
        "cartel": "images/10thingsihateaboutyou.jpg",
        "sinopsis": " Las hermanas Stratford son muy distintas. La bella y popular Bianca nunca ha salido con un chico, pero lo está deseando, y Kat, su hermana mayor, es arisca y con mal genio. Su padre no deja que Bianca tenga novio hasta que Kat consiga uno.",
        "duracion": " 1h 37m",
        "fondoindividual": "10thingsihateaboutyou_still.jpg",
        "verahora": ["disneyplus"],
        "linkdisneyplus": "https://www.disneyplus.com/en-ar/movies/10-cosas-que-odio-de-ti/10OzquDiTIJB?irclickid=0uA2S62vXxyKWILTfEUlVQWeUkHSBTTqRSc-yw0&irgwc=1&cid=DSS-Affiliate-Impact-Content-JustWatch+GmbH-705874&tgclid=0f01001a-de65-4b35-a500-025166703eb9&dclid=COmD_sjj4oYDFf9LuAQdLuYIEA"
    },
    "homealone": {
        "title": "Home Alone ",
        "year": "1990",
        "cartel": "images/homealone.jpg",
        "sinopsis": " Cuando Kevin McCallister se queda atrás mientras su familia se va de viaje de Navidad, él debe defender la casa de su familia de dos ladrones torpes hasta que los familiares regresen.",
        "duracion": " 1h 43m",
        "fondoindividual": "homealone_still.png",
        "verahora": ["disneyplus"],
        "linkdisneyplus": "https://www.disneyplus.com/en-ar/movies/mi-pobre-angelito/3v4vqKPG2jSr?irclickid=0uA2S62vXxyKWILTfEUlVQWeUkHSBX2CRSc-yw0&irgwc=1&cid=DSS-Affiliate-Impact-Content-JustWatch+GmbH-705874&tgclid=0d010034-1cfc-4cc1-8f00-21bc66704128&dclid=COfD7_Hl4oYDFdJLuAQdmMAIfQ"
    },
    "themenu": {
        "title": "The Menu ",
        "year": "2022",
        "cartel": "images/themenu.jpg",
        "sinopsis": " Una joven pareja viaja a una exclusiva isla para degustar el menú de un chef mundialmente aclamado. Sin embargo, el chef ha introducido un ingrediente secreto que sorprenderá a los comensales.",
        "duracion": " 1h 46m",
        "fondoindividual": "themenu_still.jpg",
        "verahora": ["starplus"],
        "linkstarplus": "https://www.starplus.com/movies/the-menu/6qKeWn5NKzDY?irclickid=UCXysT2kcxyKT4S29dRP13eEUkHSHI1u%3A0e%3A1E0&irgwc=1&cid=DSS-Affiliate-Impact-Content-JustWatch+GmbH-1058017&tgclid=0501000b-75bd-46e8-8300-0f7366719f58&dclid=CN3ht-2z5YYDFQVcuAQdVUgH3g"
    },
    "knivesout": {
        "title": "Knives Out ",
        "year": "2019",
        "cartel": "images/knivesout.jpg",
        "sinopsis": " Benoit Blanc, un detective implacable, investiga la muerte de un anciano escritor de novelas policíacas en la mansión del difunto. Benoit tendrá que sortear las trampas y mentiras que la excéntrica familia y los sirvientes del novelista han urdido.",
        "duracion": " 2h 10m",
        "fondoindividual": "knivesout_still.jpg",
        "verahora": ["appletv"],
        "linkappletv": "https://tv.apple.com/ar/movie/entre-navajas-y-secretos/umc.cmc.21f7rjslttoalzd6o9c6cg5ml?at=1000l3V2&ct=justwatch_tv&itscg=30200&itsct=justwatch_tv&playableId=tvs.sbd.9001%3A1487717311"
    },
    "bullettrain": {
        "title": "Bullet Train ",
        "year": "2022",
        "cartel": "images/bullettrain.jpg",
        "sinopsis": " En un tren de alta velocidad que se dirige de Tokio a Morioka, cinco asesinos profesionales descubren que van tras el mismo objetivo.",
        "duracion": " 2h 6m",
        "fondoindividual": "bullettrain_still.jpg",
        "verahora": ["prime"],
        "linkprime": "https://www.primevideo.com/dp/amzn1.dv.gti.ac4ac827-43d0-4b9e-991b-1d5c74cabe0c?autoplay=0&ref_=atv_cf_strg_wb"
    },
    "lalaland": {
        "title": "La La Land ",
        "year": "2016",
        "cartel": "images/lalaland.jpg",
        "sinopsis": " Sebastian, un pianista de jazz, y Mia, una aspirante a actriz, se enamoran locamente; pero la ambición desmedida que tienen por triunfar en sus respectivas carreras, en una ciudad como Los Ángeles, repleta de competencia y carente de piedad, pone en peligro su amor.",
        "duracion": " 2h 8m",
        "fondoindividual": "lalaland_still.jpg",
        "verahora": ["prime", "starplus"],
        "linkstarplus": "https://www.starplus.com/movies/la-la-land/3XZwh9yBCvWQ",
        "linkprime": "https://www.primevideo.com/dp/amzn1.dv.gti.22b8bad0-0bd1-749b-718e-3bcd8ff1a081?autoplay=0&ref_=atv_cf_strg_wb"
    },
    "arrival": {
        "title": "Arrival ",
        "year": "2016",
        "cartel": "images/arrival.jpg",
        "sinopsis": " El gobierno contrata a la prestigiosa lingüista Louise Banks para que se comunique con unos alienígenas que han llegado a la Tierra. Conforme ella aprende su idioma, va experimentando regresiones muy intensas que desvelan la verdadera misión que les ha llevado hasta nuestro planeta.",
        "duracion": " 1h 56m",
        "fondoindividual": "arrival_still.jpg",
        "verahora": ["prime"],
        "linkprime": "https://www.primevideo.com/dp/amzn1.dv.gti.ec9ee35c-ddca-44bf-a5af-52e681627b8c?autoplay=0&ref_=atv_cf_strg_wb"
    },
    "thelionking": {
        "title": "The Lion King ",
        "year": "1994",
        "cartel": "images/thelionking2.jpg",
        "sinopsis": " El joven Simba, hijo del rey Mufasa, debe luchar contra su malvado tío Scar para ocupar el trono que dejó su padre asesinado.",
        "duracion": " 1h 28m",
        "fondoindividual": "thelionking_still.jpg",
        "verahora": ["disneyplus"],
        "linkdisneyplus": "https://www.disneyplus.com/en-ar/movies/el-rey-leon/1HqwiEcje6Nj?irclickid=0uA2S62vXxyKWILTfEUlVQWeUkHSHbw2%3A0e%3A1E0&irgwc=1&cid=DSS-Affiliate-Impact-Content-JustWatch+GmbH-705874&tgclid=0c01002f-2523-4262-a000-0e5d6671a640&dclid=COKjzbi65YYDFfBPuAQd2UIF5Q",
    },
    "abouttime": {
        "title": "About Time ",
        "year": "2013",
        "cartel": "images/abouttime.jpg",
        "sinopsis": " Cuando Tim Lake cumple 21 años, su padre le dice un secreto: los hombres de su familia pueden viajar por el tiempo. A pesar de que él no puede cambiar la historia, Tim decide mejorar su vida buscando una novia. Él conoce a Mary, se enamora y finalmente se gana su corazón con los viajes en el tiempo y un poco de astucia. Sin embargo, mientras su inusual vida progresa, Tim descubre que su habilidad especial no puede protegerlos de los problemas diarios de la vida.",
        "duracion": " 2h 3m",
        "fondoindividual": "abouttime_still.webp",
        "verahora": ["prime", "netflix"],
        "linknetflix": "https://www.netflix.com/ar-en/title/70261674",
        "linkprime": "https://www.primevideo.com/detail/0PHV9KGKLR62TWOW9GW5BZ9XAS/ref=atv_dl_rdr"
    },
    "gonegirl": {
        "title": "Gone Girl ",
        "year": "2014",
        "cartel": "images/gonegirl.jpg",
        "sinopsis": " Un hombre reporta que su esposa desapareció en su quinto aniversario de bodas, pero la imagen pública de una relación feliz empieza a desmoronarse por la presión de la policía y de los medios de comunicación.",
        "duracion": " 2h 29m",
        "fondoindividual": "gonegirl_still.webp",
        "verahora": ["starplus", "netflix"],
        "linknetflix": "https://www.netflix.com/ar-en/title/70305893",
        "linkstarplus": "https://www.starplus.com/movies/gone-girl/53SdYxRQh07B?irclickid=UCXysT2kcxyKT4S29dRP13eEUkHSHYRW%3A0e%3A1E0&irgwc=1&cid=DSS-Affiliate-Impact-Content-JustWatch+GmbH-1058017&tgclid=0c01003a-0275-47bf-be00-1e396671a792&dclid=CM7R5dm75YYDFQFbuAQd1esDtw"
    },
    "nightcrawler": {
        "title": "Nightcrawler ",
        "year": "2014",
        "cartel": "images/nightcrawler.jpg",
        "sinopsis": " Louis Bloom es un joven de Los Ángeles, sin empleo ni escrúpulos, quien, después de haber sido testigo de un accidente espeluznante, decide que quiere ganar fama y fortuna a través del periodismo sensacionalista.",
        "duracion": " 1h 57m",
        "fondoindividual": "nightcrawler_moviestill.jpg",
        "verahora": ["max"],
        "linkmax": "https://www.max.com/ar/es/movies/primicia-mortal/130a3280-93bf-4907-a6c9-de7daa8a8de7"
    },
    "babydriver": {
        "title": "Baby Driver ",
        "year": "2017",
        "cartel": "images/babydriver.jpg",
        "sinopsis": " Baby es un chofer especializado en fugas que, enamorado, pretende dejar la vida criminal y empezar de cero con la mujer que ama. Cuando el jefe de una banda de gánsters le obliga a trabajar para él y la operación fracasa, su vida y la de su chica pasan a estar en peligro.",
        "duracion": " 1h 55m",
        "fondoindividual": "babydriver_still.webp",
        "verahora": ["netflix"],
        "linknetflix": "https://www.netflix.com/ar-en/title/80142090"
    },
    "palmsprings": {
        "title": "Palm Springs ",
        "year": "2020",
        "cartel": "images/palmsprings.jpg",
        "sinopsis": " Nyles y Sarah, invitados a la boda de sus amigos Tale y Abe, entran en una cueva que emite una luz extraña y, más tarde, descubren que han quedado atrapados en el tiempo. Poco a poco, se enamoran mientras sufren juntos la repetición del mismo día.",
        "duracion": " 1h 30m",
        "fondoindividual": "palmsprings_still.jpg",
        "verahora": ["starplus"],
        "linkstarplus": "https://www.starplus.com/movies/palm-springs/10PBq3CPnwjk?irclickid=UCXysT2kcxyKT4S29dRP13eEUkHSH8zO%3A0e%3A1E0&irgwc=1&cid=DSS-Affiliate-Impact-Content-JustWatch+GmbH-1058017&tgclid=0101001a-0df7-40e0-9700-1d526671ab3a&dclid=CI69l5i_5YYDFblN3QIdT8UP-w"
    },
    "midnightinparis": {
        "title": "Midnight In Paris ",
        "year": "2011",
        "cartel": "images/midnightinparis.jpg",
        "sinopsis": " Gil Pender es un guionista y aspirante a novelista. Vacacionando en París con su prometida, realiza una gira solo por la ciudad. En una de sus excursiones nocturnas, se encuentra con un grupo extraño pero familiar que lo hacen viajar de regreso en el tiempo para tener una noche con los iconos del arte y la literatura de la era del jazz. Entre más tiempo pasa Gil con estos héroes culturales del pasado, más insatisfecho está del presente.",
        "duracion": " 1h 34m",
        "fondoindividual": "midnightinparis_still.jpg",
        "verahora": ["netflix", "max"],
        "linknetflix": "https://www.netflix.com/ar-en/title/70181730",
        "linkmax": "https://www.max.com/ar/es/movies/medianoche-en-paris/3a244546-bba1-4e94-9ef7-1cc7b55bf522"
    },
    "theparenttrap": {
        "title": "The Parent Trap ",
        "year": "1998",
        "cartel": "images/theparenttrap.jpg",
        "sinopsis": " Una niña de 11 años conoce a su gemela de California. Las dos idean un plan para reunir a sus padres divorciados.",
        "duracion": " 2h 8m",
        "fondoindividual": "theparenttrap_still.webp",
        "verahora": ["disneyplus"],
        "linkdisneyplus": "https://www.disneyplus.com/movies/the-parent-trap/5LsTU243zQ0B"
    },
    "thebutterflyeffect": {
        "title": "The Butterfly Effect ",
        "year": "2004",
        "cartel": "images/thebutterflyeffect.jpg",
        "sinopsis": " Un joven estudiante de psicología viaja en el tiempo para transformar el pasado y alterar el futuro de sus amigos.",
        "duracion": " 1h 53m",
        "fondoindividual": "thebutterflyeffect_still.jpg",
        "verahora": ["max"],
        "linkmax": "https://www.max.com/ar/es/movies/el-efecto-mariposa/db74e28a-02ba-4738-8356-7d758db351c1?utm_source=universal_search"
    },
    "focus": {
        "title": "Focus ",
        "year": "2015",
        "cartel": "images/focus.jpg",
        "sinopsis": " Un estafador veterano apoya a una joven y atractiva mujer, pero las cosas se complican cuando ellos se involucran románticamente.",
        "duracion": " 1h 45m",
        "fondoindividual": "focus_still.webp",
        "verahora": ["max"],
        "linkmax": "https://www.max.com/ar/es/movies/focus-maestros-de-la-estafa/726ef7f7-3cc0-4340-80a0-b643b455a1f0?utm_source=universal_search"
    },
    "avatar": {
        "title": "Avatar ",
        "year": "2009",
        "cartel": "images/avatar.jpg",
        "sinopsis": " En un exuberante planeta llamado Pandora viven los Na'vi, seres que aparentan ser primitivos pero que en realidad son muy evolucionados. Debido a que el ambiente de Pandora es venenoso, los híbridos humanos/Na'vi, llamados Avatares, están relacionados con las mentes humanas, lo que les permite moverse libremente por Pandora. Jake Sully, un exinfante de marina paralítico se transforma a través de un Avatar, y se enamora de una mujer Na'vi.",
        "duracion": " 2h 42m",
        "fondoindividual": "avatar_still.webp",
        "verahora": ["disneyplus"],
        "linkdisneyplus": "https://www.disneyplus.com/movies/avatar/2YOnkRN4LwZZ"
    },
    "walle": {
        "title": "Wall-E ",
        "year": "2008",
        "cartel": "images/walle.jpg",
        "sinopsis": " Luego de pasar años limpiando la Tierra desierta, el robot Wall-E conoce a EVA y la sigue por toda la galaxia.",
        "duracion": " 1h 38m",
        "fondoindividual": "walle_still.jpg",
        "verahora": ["disneyplus"],
        "linkdisneyplus": "https://www.disneyplus.com/movies/wall-e/5G1wpZC2Lb6I"
    },
    "scottpilgrim": {
        "title": "Scott Pilgrim Vs. The World ",
        "year": "2010",
        "cartel": "images/scottpilgrim.jpg",
        "sinopsis": " Después de conocer a la mujer de sus sueños, Scott Pilgrim debe enfrentarse a un ejército de exparejas que quieren deshacerse de él.",
        "duracion": " 1h 52m",
        "fondoindividual": "scottpilgrim_still.jpg",
        "verahora": ["appletv"],
        "linkappletv": "https://tv.apple.com/ar/movie/scott-pilgrim-vs-los-ex-de-la-chica-de-sus-suenos/umc.cmc.6b5c8jpqppbn6n2wpl261hose?playableId=tvs.sbd.9001%3A418849169"
    },
    "tenet": {
        "title": "Tenet ",
        "year": "2020",
        "cartel": "images/tenet.jpg",
        "sinopsis": " Un agente secreto emprende una misión que se desarrolla más allá del tiempo real, para intentar prevenir una Tercera Guerra Mundial.",
        "duracion": " 2h 30m",
        "fondoindividual": "tenet_still.jpg",
        "verahora": ["max", "prime"],
        "linkmax": "https://www.max.com/ar/es/movies/tenet/61979865-270b-460d-b209-915dd7706095?utm_source=universal_search",
        "linkprime": "https://www.primevideo.com/dp/amzn1.dv.gti.e8bb0e4e-a5af-14d4-004c-3a38fdd9ce3b?autoplay=0&ref_=atv_cf_strg_wb"
    },
    "thedarkknight": {
        "title": "The Dark Knight ",
        "year": "2008",
        "cartel": "images/thedarkknight.jpg",
        "sinopsis": " Batman tiene que mantener el equilibrio entre el heroísmo y el vigilantismo para pelear contra un vil criminal conocido como el Guasón, que pretende sumir Ciudad Gótica en la anarquía.",
        "duracion": " 2h 32m",
        "fondoindividual": "thedarkknight_still.avif",
        "verahora": ["max"],
        "linkmax": "https://www.max.com/ar/es/movies/batman-el-caballero-de-la-noche/52217243-a137-45d6-9c6a-0dfab4633034?utm_source=universal_search",
    },
    "furyroad": {
        "title": "MAD MAX: Fury Road ",
        "year": "2015",
        "cartel": "images/furyroad.jpg",
        "sinopsis": " Aunque está decidido a vagar solo por el páramo post-apocalíptico, Mad Max se une a Furiosa, una comandante fugitiva, y su banda, quienes están tratando de escapar de un señor de la guerra.",
        "duracion": " 2h",
        "fondoindividual": "furyroad_still.jpg",
        "verahora": ["max"],
        "linkmax": "https://www.max.com/ar/es/movies/mad-max-furia-en-el-camino/8cde025a-223d-4879-9336-3d5f6c9d0c55",
    },
    "et": {
        "title": "E.T. ",
        "year": "1982",
        "cartel": "images/et.jpg",
        "sinopsis": " Elliott es un niño de nueve años que se encuentra con un extraterrestre y decide esconderlo en su casa para protegerlo. Contará con la ayuda de su pequeña hermana y su hermano mayor para mantener el secreto y juntos vivirán una aventura inolvidable.",
        "duracion": " 1h 55m",
        "fondoindividual": "et_still.avif",
        "verahora": ["appletv"],
        "linkappletv": "https://tv.apple.com/ar/movie/et-el-extraterrestre/umc.cmc.y7sdg83ku22c7qmfh4v16q2e?playableId=tvs.sbd.9001%3A544128124",
    },
    "theprestige": {
        "title": "The Prestige ",
        "year": "2006",
        "cartel": "images/theprestige.jpg",
        "sinopsis": " Un encuentro durante una sesión fraudulenta provoca que dos magos del siglo XIX, Alfred Borden y Rupert Angier, se enfrenten en una intensa batalla por la supremacía. Las consecuencias son terribles cuando ambos intentan triunfar no sólo superando a su rival, sino destruyéndolo.",
        "duracion": " 2h 10m",
        "fondoindividual": "theprestige_still.jpg",
        "verahora": ["max"],
        "linkmax": "https://www.max.com/ar/es/movies/el-gran-truco/ac5e7cf1-3087-4208-a5f0-199e80b1dc30?utm_source=universal_search",
    },
    "themask": {
        "title": "The Mask ",
        "year": "1994",
        "cartel": "images/themask.jpg",
        "sinopsis": " Una máscara antigua transforma a un monótono empleado bancario en un Romeo sonriente con poderes sobrehumanos.",
        "duracion": " 1h 37m",
        "fondoindividual": "themask_still.jpg",
        "verahora": ["max"],
        "linkmax": "https://www.max.com/ar/es/movies/la-mascara/1cdd2cef-c4ce-46b0-83c8-62bb9286e5c8?utm_source=universal_search",
    },
    "thelordoftherings": {
        "title": "The Lord Of The Rings: The Two Towers ",
        "year": "2002",
        "cartel": "images/thelordoftherings.jpg",
        "sinopsis": " Gollum guía a Frodo y Sam a Mordor mientras Aragorn y sus compañeros defienden a Rohan del bestial ejército de Saruman.",
        "duracion": " 2h 59m",
        "fondoindividual": "thetwotowers_still.jpg",
        "verahora": ["max","prime"],
        "linkmax": "https://www.max.com/ar/es/movies/el-senor-de-los-anillos-las-dos-torres-edicion-extendida/1b73bd19-1229-4e5f-986a-ae38ac0f5476?utm_source=universal_search",
        "linkprime": "https://www.primevideo.com/dp/amzn1.dv.gti.a4b62a25-51e9-1095-7aa8-6541579aeeb4?autoplay=0&ref_=atv_cf_strg_wb"
    },
    "thehauntedmansion": {
        "title": "The Haunted Mansion ",
        "year": "2003",
        "cartel": "images/thehauntedmansion.jpg",
        "sinopsis": " Un agente (Eddie Murphy) de bienes raíces y su familia descubren fantasmas en una antigua casa de Nueva Orleáns.",
        "duracion": " 1h 28m",
        "fondoindividual": "thehauntedmansion_still.jpeg",
        "verahora": ["disneyplus"],
        "linkdisneyplus": "https://www.disneyplus.com/movies/the-haunted-mansion/6RcGqdevf15z"
    },
    "zootopia": {
        "title": "Zootopia ",
        "year": "2016",
        "cartel": "images/zootopia.jpg",
        "sinopsis": " La metrópoli Zootopía es una ciudad de mamíferos, donde muchos animales viven y se desarrollan. Allí, la optimista agente Judy Hopps se convierte en la primera conejita de un cuerpo policial compuesto por animales duros y enormes. Judy está decidida a demostrar su valentía y se mete en un caso con Nick Wilde, un zorro parlanchín y estafador.",
        "duracion": " 1h 48m",
        "fondoindividual": "zootopia_still.jpg",
        "verahora": ["disneyplus"],
        "linkdisneyplus": "https://www.disneyplus.com/movies/zootopia/1QOxldhm1sKg"
    },
    "kungfupanda": {
        "title": "Kung Fu Panda ",
        "year": "2008",
        "cartel": "images/kungfupanda.jpg",
        "sinopsis": " El panda Po trabaja en la tienda de fideos de su familia y sueña en convertirse en un maestro del kung-fu. Su sueño se hace una realidad cuando es inesperadamente elegido para cumplir una antigua profecía y debe estudiar artes marciales con sus ídolos, los Cinco Furiosos. Po necesitará toda la sabiduría, fortaleza y habilidades para poder proteger a su gente de Tai Lung, un maldito leopardo de nieve.",
        "duracion": " 1h 32m",
        "fondoindividual": "kungfupanda_still.jpg",
        "verahora": ["appletv"],
        "linkappletv": "https://tv.apple.com/ar/movie/kung-fu-panda/umc.cmc.34elthhr2qybuu3emdzn4d2fr?playableId=tvs.sbd.9001%3A1335434155"
    },
    "prisoners": {
        "title": "Prisoners ",
        "year": "2013",
        "cartel": "images/prisioners.jpg",
        "sinopsis": " Keller Dover se enfrenta a la peor pesadilla para un padre: la desaparición de su hija de seis años junto a una amiga. Ante la inoperancia policial, Keller empieza a investigar una casa rodante que se encontraba estacionada en su calle.",
        "duracion": " 2h 33m",
        "fondoindividual": "prisoners_still.jpg",
        "verahora": ["prime"],
        "linkprime": "https://www.primevideo.com/dp/amzn1.dv.gti.ceb226c9-c931-e8c7-8040-96cf1432250f?autoplay=0&ref_=atv_cf_strg_wb"
    },
    "diehard": {
        "title": "Die Hard ",
        "year": "1998",
        "cartel": "images/diehard.jpg",
        "sinopsis": " John McClane, policía de Nueva York, llega a Los Ángeles para celebrar la Navidad, pero se ve envuelto en una lucha contra un grupo de malhechores que toman de rehén a su esposa en un rascacielos, el Nakatomi Plaza.",
        "duracion": " 2h 11m",
        "fondoindividual": "diehard_still.jpg",
        "verahora": ["starplus"],
        "linkstarplus": "https://www.starplus.com/movies/die-hard/1NWCEanaAK2b"
    },
    "killbill": {
        "title": "Kill Bill: Vol. 1 ",
        "year": "2003",
        "cartel": "images/killbill.jpg",
        "sinopsis": " Una asesina despierta de un coma y, tras descubrir que el hijo que llevaba en el vientre ya no está, decide salir a buscar a los criminales que la traicionaron.",
        "duracion": " 1h 51m",
        "fondoindividual": "killbill_still.webp",
        "verahora": ["prime"],
        "linkprime": "https://www.primevideo.com/dp/amzn1.dv.gti.4613fb5b-4e16-428d-a892-24d67b81a859?autoplay=0&ref_=atv_cf_strg_wb"
    },
};

function guardarLS(peli) {
    peli = peli.replace("peli_", "")
    localStorage.setItem("peli", peli)
    window.open("datospelicula.html", "_self");
}

function traerLS() {
    const peli = localStorage.getItem("peli");
    const datos = peliculas[peli];

    document.getElementById("title-peli").innerText = `${datos.title} (${datos.year})`;
    document.getElementById("poster-peli").innerHTML = `<img src="${datos.cartel}" alt="${datos.titulo}" class="poster-peli">`;
    document.getElementById("sinopsis-peli").innerText = `${datos.sinopsis}`;
    document.getElementById("duracion-peli").innerText = `${datos.duracion}`;
    document.getElementById("fondo-peli").style.backgroundImage = `url('moviestills/${datos.fondoindividual}')`;

    if (datos.verahora.includes("prime")) {
        console.log("prime")
        document.getElementById("prime").href = datos.linkprime;
    } else { document.getElementById("prime").style.display = "none" }

    if (datos.verahora.includes("disneyplus")) {
        console.log("disneyplus")
        document.getElementById("disneyplus").href = datos.linkdisneyplus;
    } else { document.getElementById("disneyplus").style.display = "none" }

    if (datos.verahora.includes("max")) {
        console.log("max")
        document.getElementById("max").href = datos.linkmax;
    } else { document.getElementById("max").style.display = "none" }

    if (datos.verahora.includes("starplus")) {
        console.log("starplus")
        document.getElementById("starplus").href = datos.linkstarplus;
    } else { document.getElementById("starplus").style.display = "none" }

    if (datos.verahora.includes("netflix")) {
        console.log("netflix")
        document.getElementById("netflix").href = datos.linknetflix;
    } else { document.getElementById("netflix").style.display = "none" }

    if (datos.verahora.includes("appletv")) {
        console.log("appletv")
        document.getElementById("appletv").href = datos.linkappletv;
    } else { document.getElementById("appletv").style.display = "none" }

    document.getElementById("fondo-peli").style.backgroundImage = `url("moviestills/${datos.fondoindividual}")`;

}