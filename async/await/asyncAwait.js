// Request sequenciais
// const get3Pokemon = async () =>{
//     const pokemon1 = axios.get('https://pokeapi.co/api/v2/pokemon/1')
//     const pokemon4 = axios.get('https://pokeapi.co/api/v2/pokemon/4')
//     const pokemon7 = axios.get('https://pokeapi.co/api/v2/pokemon/7')

//     console.log(pokemon1.data);
//     console.log(pokemon4.data);
//     console.log(pokemon7.data);
// }

const getPokemonUrl = pokemonNumber =>
`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`

const get3Pokemon = async () =>{
    const promisePokemon1 = axios.get(getPokemonUrl(1))
    const promisePokemon4 = axios.get(getPokemonUrl(4))
    const promisePokemon7 = axios.get(getPokemonUrl(7))

    const pokemons = await Promise.all([
        promisePokemon1, 
        promisePokemon4, 
        promisePokemon7])
 
    console.log(pokemons);
}

get3Pokemon()









// const url = 'https://jsonplaceholder.typicode.com/users'

// const getPosts = async () => {
//     try {
//         const response =  axios.get(url)
//         console.log(response.data);
        
//     } catch (error) {
//         console.log(`Peguei você ${error}`);
//     }
// }

// getPosts()
// //     .catch(error => {
// //         console.log(`Peguei você ${error}`);
// //     })