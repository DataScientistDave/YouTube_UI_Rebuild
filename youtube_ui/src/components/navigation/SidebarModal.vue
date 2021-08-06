<template>
  <v-navigation-drawer v-model="showSideModal" app floating color="primary">
    <v-list-item>
      <v-app-bar-nav-icon large class="mt-n1" @click="$emit('input', false)" />
      <v-img
        src="../../assets/YouTube.svg"
        max-height="100"
        max-width="160"
        class="ml-3"
      />
    </v-list-item>
    <v-divider />
    <v-list>
      <v-list-item v-for="item in standardItems" :key="item.title" link>
        <v-icon class="ml-2">{{ item.icon }} </v-icon>
        <v-list-item-title class="ml-8"> {{ item.title }} </v-list-item-title>
      </v-list-item>
      <v-divider class="mr-3" />
      <v-list-item v-for="item in otherItems" :key="item.title" link>
        <v-icon class="ml-2">{{ item.icon }} </v-icon>
        <v-list-item-title class="ml-8"> {{ item.title }} </v-list-item-title>
      </v-list-item>
      <v-divider class="mr-3" />
      <h4 class="mt-1 ml-6">SUBSCRIPTIONS</h4>
      <v-list-item v-for="item in otherItems" :key="item.title" link>
        <v-icon class="ml-2">{{ item.icon }} </v-icon>
        <v-list-item-title class="ml-8"> {{ item.title }} </v-list-item-title>
      </v-list-item>
      <v-divider class="mr-3" />
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    props: {
      value: Boolean,
    },
    name: "SidebarModal",
    data() {
      return {
        standardItems: [
          { icon: "mdi-home", title: "Home" },
          { icon: "mdi-compass", title: "Explore" },
          { icon: "mdi-youtube-subscription", title: "Subscription" },
        ],
        otherItems: [
          { icon: "mdi-plus-box-multiple", title: "Library" },
          { icon: "mdi-history", title: "History" },
          { icon: "mdi-clock", title: "Watch later " },
          { icon: "mdi-thumb-up", title: "Liked videos" },
        ],
        subscriptionItems: [{}],

        // <v-divider />
        // <h2>SUBSCRIPTIONS</h2>
        // <IconBtn fab> mdi-music </IconBtn>
        // <v-list-item-title> Music </v-list-item-title>
        // <IconBtn fab> mdi-trophy-variant </IconBtn>
        // <v-list-item-title> Sport </v-list-item-title>
        // <IconBtn fab> mdi-youtube-gaming</IconBtn>
        // <v-list-item-title> Gaming </v-list-item-title>
        // <IconBtn fab> mdi-filmstrip </IconBtn>
        // <v-list-item-title> Movies & shows </v-list-item-title>
      };
    },
    computed: {
      showSideModal: {
        get() {
          return this.value;
        },
        set(value) {
          this.$emit("input", value);
        },
      },
    },
  };
</script>

<style lang="scss" scoped></style>
