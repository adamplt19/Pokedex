
import axios from 'axios';
// import { resolve } from 'core-js/library/es6/promise';
 import { Pokemon } from '../models/pokemon';
//import { reject, resolve } from 'core-js/fn/promise';



export class PokemonService {

    getPokemon(id) {
        return new Promise((resolve, reject) => {
            axios.get('https://pokeapi.co/api/v2/pokemon/' + id)
                .then(response => {
                    // console.log(response.data.sprites.versions["generation-v"] ["black-white"].animated.front_default);
                    // //pokemonData n'est pas un tableau mais un objet(json)
                    // let pokemonData = response.data
                    // let pokemonType = response.data.types;

                    // let typeTable = [];

                    // for (let t = 0; t < pokemonType.length; t++) {
                    //     typeTable.push(response.data.types[t].type.name);
                    // }

                    // let pokemon = new Pokemon()

                    let pokemonNumber = response.data.id
                    let pokemonWeight = response.data.weight
                    let pokemonName = response.data.name
                    let pokemonHeight = response.data.height
                    let pokemonTypes = response.data.types
                    let pokemonImgFront = response.data.sprites.front_default
                    let pokemonImgBack = response.data.sprites.back_default

                    let result = new Pokemon(
                        pokemonNumber,
                        pokemonName,
                        pokemonHeight,
                        pokemonTypes,
                        pokemonWeight,
                        pokemonImgFront,
                        pokemonImgBack
                    )


                    resolve(result)
                })

                .catch(reason => {
                    reject("Erreur lors de la récupération des pokémons" + reason)
                })

        })
    }



    //Cette méthode retourne un tableau de pokemon
    getPokemons() {

        return new Promise((resolve, reject) => {

            let pokemons = []

            axios.get('https://pokeapi.co/api/v2/pokemon?limit=100')
                .then(response => {

                    console.log(response.data.results)
                    let result = response.data.results;
                    result.forEach(p => {


                        let substrings = p.url.split("/");
                        let id = substrings[substrings.length - 2];

                        p.id = id
                        p.image = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/" + id + ".gif"
                        pokemons.push(p)
                    })
                    resolve(pokemons)
                })
                .catch(reason => {
                    reject("Erreur lors de la récupération des pokémons" + reason)
                })

        })





    }



}