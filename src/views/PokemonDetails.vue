<template>
    <div>
          <h1>ID du Pokemon : {{ pokemonId }}</h1>
        <h2> {{onePokemon.name}} </h2>
        <img :src="onePokemon.img" alt="">
        <img :src="onePokemon.imgBack" alt="">
    </div>
</template>


<script>
import { PokemonService } from '../services/pokemonService.js'
export default {
  name: "PokemonDetails",
  data() {
    return {
      pokemonId: 0,
      onePokemon: null,
      service : new PokemonService()
    };
  },

  mounted() {
    let route = this.$route;
    this.pokemonId = route.params.id;

    this.service.getPokemon(this.pokemonId)
    .then(result => {
      this.onePokemon = result;
    })
  },
};
</script>
