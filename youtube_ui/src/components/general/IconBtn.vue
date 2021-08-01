<template>
  <v-btn v-bind="$attrs" icon>
    <v-icon>
      <slot />
    </v-icon>
  </v-btn>
</template>

<script>
  export default {
    name: "IconBtn",
  };
</script>

<style lang="scss" scoped></style>
