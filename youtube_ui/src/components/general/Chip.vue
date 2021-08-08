<template>
  <v-chip v-bind="$attrs" color="#3d3d3d">
    <slot />
  </v-chip>
</template>

<script>
  export default {
    name: "Chip",
  };
</script>

<style lang="scss" scoped></style>
