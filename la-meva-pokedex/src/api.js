const BASE_URL = "https://pokeapi.co/api/v2/pokemon/"

export async function getPokemon(identity) {
    try {
        const url = `${BASE_URL}${identity.toLowerCase()}`
        const response = await fetch(url)
        if (!response.ok) throw new Error("No trobat");
        return await response.json()
    } catch (error) {
        console.error("Error API:" , error);
        throw error;
    }
}