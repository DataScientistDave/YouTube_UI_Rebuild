<template>
  <div>
    <v-app-bar dense flat class="px-5">
      <v-app-bar-nav-icon />
      <v-icon large class="pl-5"> mdi-youtube </v-icon>
      <h2> YouTube </h2>
      <v-spacer />
      <IconBtn> mdi-microphone </IconBtn>
      <IconBtn> mdi-video-plus </IconBtn>
      <IconBtn> mdi-apps </IconBtn>
      <IconBtn> mdi-bell </IconBtn>
      
    </v-app-bar>
  </div>
</template>

<script>
import IconBtn from '../general/IconBtn.vue';
  export default {
  components: { IconBtn },
    name:'Navbar',
  };
  
</script>

<style lang="scss" scoped></style>
