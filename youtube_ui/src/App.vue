<template>
  <v-app>
    <Navbar />
    <Sidebar v-model="showSideModal" />
    <SidebarModal v-model="showSideModal" />
    <v-main>
      <ChipGroups />
    </v-main>
  </v-app>
</template>

<script>
  import Navbar from "./components/navigation/Navbar.vue";
  import Sidebar from "./components/navigation/Sidebar.vue";
  import SidebarModal from "./components/navigation/SidebarModal.vue";
  import ChipGroups from "./components/navigation/ChipGroups.vue";

  export default {
    name: "App",
    components: {
      Navbar,
      Sidebar,
      ChipGroups,
      SidebarModal,
    },

    data() {
      return { showSideModal: false };
    },
  };
</script>
