<template>
  <div id="nav-bar">
    <v-app-bar color="orange darken-2" app dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Jogos Casuais</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav>
        <v-list-item-group v-model="group" active-class="orange--text text--darken-2">
          <router-link to="/">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/jogodavelha">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>#</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Jogo da Velha</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/jankenpon">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>#</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Janken</v-list-item-title>
            </v-list-item>
          </router-link>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "NavBar",

  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>

<style scoped>
.nav-bar {
  text-decoration: none;
}
</style>
