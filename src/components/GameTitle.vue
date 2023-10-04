<script setup lang="ts">
const props = defineProps({
  name: String,
  url: String,
  steamAppId: String,
  coverArt: String,
  playtime: Number,
});

const roundPlaytime = (time: number): number => {
  return Math.round(time * 10) / 10;
};
</script>

<template>
  <span v-if="playtime" class="playtime">
      {{ roundPlaytime(playtime) }}
  </span>
  <span v-if="url">
    <a :href="url">{{ name }}</a>
  </span>
  <span v-else>
    {{ name }}
  </span>
</template>

<style scoped>
.playtime {
  color: #808080;
  padding-right: 1em;
}
.playtime::before {
  content: "🕑";
  font-size: 85%;
}
</style>
