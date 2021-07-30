<template>
  <div>
    <v-app-bar dense flat class="px-5">
      <v-app-bar-nav-icon />
      <v-icon large class="ml-5"> mdi-youtube </v-icon>
      <h2>YouTube</h2>
      <v-text-field dense outlined label="Search" class="pt-7 ml-10" />
      <v-btn depressed color="grey darken-3" class="my-1">
        <v-icon text color="grey darken-1">mdi-magnify</v-icon>
      </v-btn>
      <IconBtn> mdi-microphone </IconBtn>
      <IconBtn class="ml-3"> mdi-video-plus </IconBtn>
      <IconBtn> mdi-apps </IconBtn>
      <IconBtn> mdi-bell </IconBtn>
      <v-avatar color="purple lighten-1" size="26" class="ml-2">N </v-avatar>
    </v-app-bar>
  </div>
</template>

<script>
  import IconBtn from "../general/IconBtn.vue";
  export default {
    components: { IconBtn },
    name: "Navbar",
  };
</script>

<style lang="scss" scoped></style>
