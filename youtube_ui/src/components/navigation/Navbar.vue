<template>
  <div>
    <v-app-bar flat class="px-5">
      <v-app-bar-nav-icon />
      <v-icon large class="pl-5"> mdi-youtube </v-icon>
      <h2> YouTube </h2>
      <v-spacer />
      <v-btn icon> <v-icon> mdi-microphone </v-icon> </v-btn>
      <v-icon> mdi-video-plus </v-icon>
      <v-icon> mdi-apps </v-icon>
      <v-icon> mdi-bell </v-icon>
    </v-app-bar>
  </div>
</template>

<script>
  export default {
    name:'Navbar',
  };
  
</script>

<style lang="scss" scoped></style>
