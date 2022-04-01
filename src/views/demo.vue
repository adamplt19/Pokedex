<template>
  <div>
    <h1>Pokedex Adam</h1>
    <p>{{ maVariable }}</p>

  <div class="container">
            <ul id="pokedex"></ul>
        </div>

    <div v-for="(obj, index) in pokemons" v-bind:key="index">
        <h1>
          <router-link v-bind:to="'/pokemons/' + obj.id">
      {{ obj.name }} 
        </router-link>
        </h1>

         <h2 v-for="(t, i) in obj.types" v-bind:key="i"> <!--on accede aux type des pokemons -->
            {{ t }}

        </h2>
    </div>

    <!-- index est pour le tableau, on a besoin d'une boucle -->
  </div>
</template>

<style>

body {
    margin: 0;
    font-family: rubik;
}

.container {
    padding: 40px;
    margin: -37px auto;
}

h1 {
    text-transform: uppercase;
    text-align: center;
    font-size: 54px;
}

#pokedex {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    grid-gap: 20px;
    padding-inline-start: 0;
}

.card {
    list-style: none;
    padding: 40px;
    background-color: #f4f4f4;
    color: #222;
  text-align: center;
}

.card:hover {
    animation: bounce 0.5s linear;
}

.card-title {
    text-transform: capitalize;
    margin-bottom: 0px;
    font-size: 32px;
    font-weight: normal;
}
.card-subtitle {
    margin-top: 5px;
    color: #666;
    font-weight: lighter;
}

.card-image {
    height: 180px;
}

@keyframes bounce {
    20% {
        transform: translateY(-6px);
    }
    40% {
        transform: translateY(0px);
    }

    80% {
        transform: translateY(-2px);
    }
    100% {
        transform: translateY(0);
    }
}


</style>


<script>
import { PokemonService } from '../services/pokemonService.js';

export default {
  name: "demo",

  // Tout ce qui est dans data() est réactif, que des variables
  data() {
    return {
      maVariable: " ",
      compteur: 0,
      firstName: "",
      pokemons: [],
      service: new PokemonService()
    };
  },

  // Que des fonctions dans methods
  methods: {
    direBonjour() {
      alert("Bonjour " + this.firstName);
    },
  },

  // Cette fonction sera appelée lorsuqe le composant est prêt à l'emploi
  mounted() {
    setInterval(() => {
      this.compteur++;
    }, 1000);


    this.service.getPokemons()
    .then(pokemons =>{
      this.pokemons = pokemons
    })

  }
}
</script>