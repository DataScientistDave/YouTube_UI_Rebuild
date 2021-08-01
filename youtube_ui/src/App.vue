<template>
  <v-app>
    <Navbar />
    <Sidebar />
    <v-main>
      <ChipGroups />
    </v-main>
  </v-app>
</template>

<script>
  import Navbar from "./components/navigation/Navbar.vue";
  import Sidebar from "./components/navigation/Sidebar.vue";
  import ChipGroups from "./components/navigation/ChipGroups.vue";

  export default {
    name: "App",
    components: {
      Navbar,
      Sidebar,
      ChipGroups,
    },

    data: () => ({
      //
    }),
  };
</script>
