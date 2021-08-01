<template>
  <v-chip v-bind="$attrs">
    <slot />
  </v-chip>
</template>

<script>
  export default {
    name: "Chip",
  };
</script>

<style lang="scss" scoped></style>
