/* Esfera para sacar información*/
const getPokemonApi = async (nameorId="ditto")=>{
    return fetch(`https://pokeapi.co/api/v2/pokemon/${nameOrId}`)
        .then(resp=>json)
        .then((data)=>{return data})
        .catch(()=>[]); // Ejemplo básico de cómo se utiliza la promesa
}

const getPokemonSprites = (data) => {
    return data.sprites
}