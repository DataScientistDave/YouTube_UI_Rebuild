<template>
  <v-card color="primary" class="pt-2">
    <v-divider class="py-1" />
    <v-chip-group show-arrows mandatory class="pb-1">
      <Chip v-for="tag in tags" :key="tag">
        {{ tag }}
      </Chip>
    </v-chip-group>
    <v-divider />
  </v-card>
</template>

<script>
  export default {
    name: "ChipGroups",
    data() {
      return {
        tags: [
          "All",
          "Manchester City F.C.",
          "Docker",
          "Computer Application",
          "Sports leagues",
          "Graham Norton",
          "Computer progam",
          "Comedy",
          "Science fiction",
          "Marvel Cinematic Universe",
          "Cryptocurrency",
          "Sales",
          "Humans",
          "Live",
          "Hot Ones",
          "Music",
          "Recentyl uploaded",
          "Watched",
          "New to you",
        ],
      };
    },
  };
</script>

<style lang="scss" scoped></style>
