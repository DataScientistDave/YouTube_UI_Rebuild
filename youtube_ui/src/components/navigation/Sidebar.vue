<template>
  <v-navigation-drawer
    app
    floating
    mini-variant
    mini-variant-width="120"
    permanent
    color="primary"
  >
    <v-list-item>
      <v-list-item-content>
        <v-app-bar-nav-icon
          large
          class="mt-n1"
          @click="$emit('input', !value)"
        />
        <IconBtn large class="mt-4"> mdi-home </IconBtn>
        <v-list-item-subtitle class="text-center"> Home </v-list-item-subtitle>
        <IconBtn large class="mt-7"> mdi-compass </IconBtn>
        <v-list-item-subtitle class="text-center mb-7">
          Explore
        </v-list-item-subtitle>
        <IconBtn large> mdi-youtube-subscription </IconBtn>
        <v-list-item-subtitle class="text-center mb-7">
          Subscription
        </v-list-item-subtitle>
        <IconBtn large> mdi-plus-box-multiple </IconBtn>
        <v-list-item-subtitle class="text-center">
          Library
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-navigation-drawer>
</template>

<script>
  export default {
    props: { value: Boolean },
    name: "Sidebar",
  };
</script>

<style scoped>
  .v-navigation-drawer {
    margin-right: 10%;
  }
</style>
