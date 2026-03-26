async function cercarIComparar(nom1, nom2){
    console.log("Consultant la pokedex...")
    const llistaPokemons = [
        `https://pokeapi.co/api/v2/pokemon/${nom1}`,
        `https://pokeapi.co/api/v2/pokemon/${nom2}`
    ];
    try {
    const pokemons = llistaPokemons.map(async (url) => {
        const dades = await fetch(url);
        const dadesJSON = await dades.json()
        return {
            nom: dadesJSON.name,
            xp_base: dadesJSON.base_experience
        }
    })

    const resultats = await Promise.all(pokemons);
    let guanyador
    if (resultats[0].xp_base > resultats[1].xp_base){
        guanyador = resultats[0];
    } else if (resultats[1].xp_base > resultats[0].xp_base){
        guanyador = resultats[1];
    }
    if (guanyador === resultats[0] | guanyador === resultats[1]) {
        console.log(`el guanyador es ${guanyador.nom} amb ${guanyador.xp_base} d'experiencia base`)
    } else {
        console.log(`Hi ha un empat, ${resultats[0].nom} i ${resultats[1].nom} tenen ${resultats[0].xp_base} d'experiencia base`)
    }
    

    } catch {
        console.error("No s'ha trobat algun dels dos pokemons")
    }

}

cercarIComparar("zorua", "reshiram")