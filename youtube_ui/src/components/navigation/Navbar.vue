<template>
  <div>
    <v-app-bar app dense flat color="primary" class="px-2">
      <v-img src="../../assets/YouTube.svg" max-height="100" max-width="160" />
      <v-text-field
        v-show="$vuetify.breakpoint.md"
        dense
        outlined
        label="Search"
        class="pt-7 ml-10"
      />
      <v-btn
        v-show="$vuetify.breakpoint.md"
        depressed
        color="grey darken-3"
        class="my-1"
      >
        <v-icon text color="grey darken-1">mdi-magnify</v-icon>
      </v-btn>
      <v-btn
        v-show="$vuetify.breakpoint.sm"
        depressed
        color="grey darken-3"
        class="my-1 ml-2"
      >
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
  export default {
    name: "Navbar",
  };
</script>

<style lang="scss" scoped></style>
