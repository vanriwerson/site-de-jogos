<template>
  <v-app>
    <NavBar />

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",

  components: {
    NavBar,
  },
};
</script>

<style>
.jan-ken-pon, .jogo-da-velha {
    text-align: center;
}

.gameboard {
  background-image: url("./assets/img/caderno.jpg");
  background-size: 100%;
  height: 90vh;
  width: 90vw;
  margin: 10px auto;
}
</style>