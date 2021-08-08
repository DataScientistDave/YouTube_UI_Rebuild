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
              <div class="d-flex">
                <v-avatar size="38">
                  <v-img
                    :src="`https://source.unsplash.com/random/200x10${i}`"
                  />
                </v-avatar>
                <h5 class="mt-2 ml-2">{{ video.title }}</h5>
              </div>
              <p class="text-caption grey--text ml-12">
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
            title: "you need to learn Kubernetes RIGHT NOW",
            views: "394K views",
            publishedDate: "10 months ago",
          },
          {
            creator: "Sky Sports Football",
            title: "Where will Messi play next? | The Transfer Show",
            views: "14K views",
            publishedDate: "3 days ago",
          },
          {
            creator: "Man City",
            title: "TOGETHER Trailer | A Film Coming soon to CITY+",
            views: "152K views",
            publishedDate: "4 days ago",
          },
          {
            creator: "SBS News",
            title: "Watch Live: NSW COVID-19 update",
            views: "83K views",
            publishedDate: "Streamed 11 hours ago",
          },
          {
            creator: "WIRED",
            title:
              "Freddie Highmore Answers the Web's Most Searched Questions | WIRED",
            views: "10M views",
            publishedDate: "2 years ago",
          },
          {
            creator: "WIRED",
            title:
              "Emily Blunt & Dwayne Johnson Answer The Web's Most Searched Questions | WIRED",
            views: "2.8M views",
            publishedDate: "5 days ago",
          },
          {
            creator: "The Graham Norton Show",
            title: "Jamie Foxx Impersonates Tom Cruise",
            views: "9M views",
            publishedDate: "7 years ago",
          },
          {
            creator: "Fireship",
            title: "10 CSS Pro Tips",
            views: "462K views",
            publishedDate: "3 months ago",
          },
          {
            creator: "Traversy Media",
            title:
              "5 Design Patterns Every Engineer Should Know | Traversy Media",
            views: "449K views",
            publishedDate: "10 months ago",
          },
          {
            creator: "PowerCert Animated Videos",
            title: "Default Gateway Explained",
            views: "60K views",
            publishedDate: "1 week ago",
          },
          {
            creator: "Ben Awad",
            title: "Fullstack React GraphQL Typescript Tutorial",
            views: "665K views",
            publishedDate: "11 months ago",
          },
          {
            creator: "Amazon Prime Video Sport",
            title: "Pep V Jose",
            views: "329K views",
            publishedDate: "2 months ago",
          },
        ],
      };
    },
  };
</script>
