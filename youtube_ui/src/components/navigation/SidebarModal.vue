<template>
  <v-navigation-drawer v-model="showSideModal" app floating color="primary">
    <v-list-item>
      <div class="d-flex justify-space-between">
        <v-app-bar-nav-icon
          large
          class="mt-n1"
          @click="$emit('input', false)"
        />
        <v-img
          src="../../assets/YouTube.svg"
          max-height="100"
          max-width="160"
        />
      </div>
    </v-list-item>
    <v-list
      <IconBtn> mdi-home </IconBtn>
      <v-list-item-title> Home </v-list-item-title>
      <IconBtn> mdi-compass </IconBtn>
      <v-list-item-title> Explore </v-list-item-title>
      <IconBtn> mdi-youtube-subscription </IconBtn>
      <v-list-item-title> Subscription </v-list-item-title>
      <v-divider />
      <IconBtn> mdi-plus-box-multiple </IconBtn>
      <v-list-item-title> Library </v-list-item-title>
      <IconBtn> mdi-history </IconBtn>
      <v-list-item-title> History </v-list-item-title>
      <IconBtn> mdi-clock </IconBtn>
      <v-list-item-title> Watch later </v-list-item-title>
      <IconBtn> mdi-thumb-up </IconBtn>
      <v-list-item-title> Liked videos </v-list-item-title>
      <v-divider />
      <h2>SUBSCRIPTIONS</h2>
      <IconBtn fab> mdi-music </IconBtn>
      <v-list-item-title> Music </v-list-item-title>
      <IconBtn fab> mdi-trophy-variant </IconBtn>
      <v-list-item-title> Sport </v-list-item-title>
      <IconBtn fab> mdi-youtube-gaming</IconBtn>
      <v-list-item-title> Gaming </v-list-item-title>
      <IconBtn fab> mdi-filmstrip </IconBtn>
      <v-list-item-title> Movies & shows </v-list-item-title>
    </v-list-item>
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
        items: [{}],
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
