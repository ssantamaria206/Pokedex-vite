import { getPokemon } from "./api.js"
import * as db from "./storage.js"
import { createCard }  from "./ui.js"

const Buscar = document.getElementById("BotoBuscar");
const missatges = document.getElementById("missatges");
Buscar.addEventListener("click", async () => {
    missatges.innerHTML = `Cercant dades...`
    const NomPokemon = GetInput()
    const DadesPokemon = await getPokemon(NomPokemon)
    createCard(DadesPokemon)
});