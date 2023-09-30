<script setup>
const props = defineProps({
  name: String,
  url: String,
  steamAppId: String,
  playtime: Number,
});

// TODO: icons would be better than just word links
</script>

<template>
  <li>
    <span>{{ name }}</span>
    <span v-if="url">
      <a :href="url">web</a>
    </span>
    <span v-if="steamAppId">
      <a :href="`https://store.steampowered.com/app/${steamAppId}/`">steam</a>
    </span>
    <span v-if="playtime">
      ({{ Math.floor(playtime * 10) / 10 }} hours)
    </span>
  </li>
</template>

<style scoped>
span {
  margin-right: 4px;
}
</style>
