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
        <v-icon color="grey" class="ml-2">{{ item.icon }} </v-icon>
        <v-list-item-title class="ml-8"> {{ item.title }} </v-list-item-title>
      </v-list-item>
      <v-divider class="mr-3 mt-1" />
      <v-list-item
        v-for="item in otherItems"
        :key="item.title"
        link
        class="mt-1"
      >
        <v-icon color="grey" class="ml-2">{{ item.icon }} </v-icon>
        <v-list-item-title class="ml-8"> {{ item.title }} </v-list-item-title>
      </v-list-item>
      <v-divider class="mr-3 mt-1" />
      <h4 class="mt-2 ml-6">SUBSCRIPTIONS</h4>
      <v-list-item v-for="item in subscriptionItems" :key="item.title" link>
        <v-btn depressed fab x-small color="grey darken-3" class="ml-2">
          <v-icon small>{{ item.icon }} </v-icon>
        </v-btn>
        <v-list-item-title class="ml-6"> {{ item.title }} </v-list-item-title>
      </v-list-item>
      <v-divider class="mr-3 mt-1" />
      <h4 class="mt-2 ml-6">MORE FROM YOUTUBE</h4>
      <v-list-item v-for="item in moreFromYouTubeItems" :key="item.title" link>
        <v-icon color="grey" class="ml-2">{{ item.icon }} </v-icon>
        <v-list-item-title class="ml-8"> {{ item.title }} </v-list-item-title>
      </v-list-item>
      <v-divider class="mr-3" />
      <v-list-item v-for="item in settingsItems" :key="item.title" link>
        <v-icon color="grey" class="ml-2">{{ item.icon }} </v-icon>
        <v-list-item-title class="ml-8"> {{ item.title }} </v-list-item-title>
      </v-list-item>
      <v-divider class="mr-3" />
      <v-list-item color="grey" class="my-2">
        About &nbsp; Press &nbsp; Copyright <br />
        Contact us Creator Advertise Developers
        <br />
        <br />
        Terms Privacy Policy & Safety How YouTube works Test new features 2021
        <br />
        <br />
        Google LLC
      </v-list-item>
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
        subscriptionItems: [
          { icon: "mdi-music", title: "Music" },
          { icon: "mdi-trophy-variant", title: "Sport" },
          { icon: "mdi-youtube-gaming", title: "Gaming" },
          { icon: "mdi-filmstrip", title: "Movies & shows" },
        ],
        moreFromYouTubeItems: [
          { icon: "mdi-youtube", title: "YouTube Premium" },
          { icon: "mdi-filmstrip", title: "Movies & shows" },
          { icon: "mdi-youtube-gaming", title: "Gaming" },
          { icon: "mdi-access-point", title: "Live" },
          { icon: "mdi-hanger", title: "Fashion & beauty " },
          { icon: "mdi-lightbulb", title: "Learning" },
          { icon: "mdi-trophy-variant", title: "Sport" },
        ],
        settingsItems: [
          { icon: "mdi-cog", title: "Settings" },
          { icon: "mdi-flag", title: "Report history" },
          { icon: "mdi-help-circle", title: "Help" },
          { icon: "mdi-message-alert", title: "Send feedback" },
        ],
        copyright: "mdi-copyright",
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
