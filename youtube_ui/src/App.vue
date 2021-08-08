<template>
  <v-app>
    <Navbar />
    <Sidebar v-model="showSideModal" />
    <SidebarModal v-model="showSideModal" />
    <v-main>
      <ChipGroups />
      <v-sheet color="secondary">
        <v-row class="my-1 ml-6">
          <v-col v-for="(video, i) in videos" :key="video.creator" cols="4">
            <v-img
              :src="`https://source.unsplash.com/random/300x20${i}`"
              max-height="200"
              max-width="300"
            />
            <div class="pa-2">
              <h5>{{ video.title }}</h5>
              <p class="text-caption grey--text">
                {{ video.creator }}
                <br />
                {{ video.views }}
                .
                {{ video.publishedDate }}
              </p>
            </div>
          </v-col>
        </v-row>
      </v-sheet>
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
      return {
        showSideModal: false,
        videos: [
          {
            creator: "NetworkChuck",
            title: "Hello",
            views: "394K views",
            publishedDate: "10 months ago",
          },
          {
            creator: "NetworkChuck",
            title: "Hello",
            views: "394K views",
            publishedDate: "10 months ago",
          },
          {
            creator: "NetworkChuck",
            title: "Hello",
            views: "394K views",
            publishedDate: "10 months ago",
          },
          {
            creator: "NetworkChuck",
            title: "Hello",
            views: "394K views",
            publishedDate: "10 months ago",
          },
          {
            creator: "NetworkChuck",
            title: "Hello",
            views: "394K views",
            publishedDate: "10 months ago",
          },
          {
            creator: "NetworkChuck",
            title: "Hello",
            views: "394K views",
            publishedDate: "10 months ago",
          },
          {
            creator: "NetworkChuck",
            title: "Hello",
            views: "394K views",
            publishedDate: "10 months ago",
          },
          {
            creator: "NetworkChuck",
            title: "Hello",
            views: "394K views",
            publishedDate: "10 months ago",
          },
          {
            creator: "NetworkChuck",
            title: "Hello",
            views: "394K views",
            publishedDate: "10 months ago",
          },
          {
            creator: "NetworkChuck",
            title: "Hello",
            views: "394K views",
            publishedDate: "10 months ago",
          },
          {
            creator: "NetworkChuck",
            title: "Hello",
            views: "394K views",
            publishedDate: "10 months ago",
          },
          {
            creator: "NetworkChuck",
            title: "Hello",
            views: "394K views",
            publishedDate: "10 months ago",
          },
        ],
      };
    },
  };
</script>
