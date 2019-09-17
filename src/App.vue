<template>
  <v-app>
    <app-bar></app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import AppBar from './partials/AppBar.vue';

export default {
  name: 'App',
  data: () => ({
    //
  }),

  components: {
    'app-bar': AppBar,
  },
};
</script>
