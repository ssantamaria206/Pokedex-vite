import { getPokemon } from "./api.js"
import * as db from "./storage.js"
import { createCard, GetInput }  from "./ui.js"

const Buscar = document.getElementById("BotoBuscar");
const missatges = document.getElementById("missatges");
Buscar.addEventListener("click", async () => {
    const NomPokemon = await GetInput()
    missatges.innerHTML = `Cercant a ${NomPokemon}...`
    const DadesPokemon = await getPokemon(NomPokemon)
    createCard(DadesPokemon)
});