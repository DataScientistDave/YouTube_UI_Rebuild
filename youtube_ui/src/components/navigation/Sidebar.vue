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
      <v-app-bar-nav-icon large class="mt-2" @click="$emit('input', !value)" />
    </v-list-item>
    <v-list>
      <v-list-item v-for="item in items" :key="item.title" link class="mt-5">
        <v-list-item-content>
          <v-icon> {{ item.icon }} </v-icon>
          <v-list-item-subtitle class="text-center">
            {{ item.title }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    props: { value: Boolean },
    name: "Sidebar",
    data() {
      return {
        items: [
          { icon: "mdi-home", title: "Home" },
          { icon: "mdi-compass", title: "Explore" },
          { icon: "mdi-youtube-subscription", title: "Subscription" },
          { icon: "mdi-plus-box-multiple", title: "Library" },
        ],
      };
    },
  };
</script>

<style scoped>
  .v-navigation-drawer {
    margin-right: 10%;
  }
</style>
