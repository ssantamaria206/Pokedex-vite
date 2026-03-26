import { getPokemon } from "./api.js"
import * as db from "./storage.js"
import { createCard, GetInput }  from "./ui.js"

const Buscar = document.getElementById("BotoBuscar");
const missatges = document.getElementById("missatges");
const PokemonBuscado = document.getElementById("pokemonEncontrado");
const AddFav = document.getElementsByClassName("btn-fav");
Buscar.addEventListener("click", async () => {
    try {
        PokemonBuscado.innerHTML = ""
        const NomPokemon = GetInput()
        missatges.innerHTML = `Cercant a ${NomPokemon}...`
        const DadesPokemon = await getPokemon(NomPokemon);
        const CartaPokemon = createCard(DadesPokemon);
        missatges.innerHTML = ""
        PokemonBuscado.appendChild(CartaPokemon)
    } catch (error) {
        missatges.innerHTML = "Pokemon no trobat"
    }
});
AddFav.addEventListener("click", async () => {
    MoveCard()
});