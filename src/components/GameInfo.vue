<script setup lang="ts">
const props = defineProps({
  name: String,
  url: String,
  steamAppId: String,
  playtime: Number,
});

const roundPlaytime = (time: number): number => {
  return Math.round(time * 10) / 10;
};
</script>

<template>
  <div>
    <span v-if="url">
      <a :href="url">{{ name }}</a>
    </span>
    <span v-else>
      <span>{{ name }}</span>
    </span>
    <span v-if="playtime">
        ({{ roundPlaytime(playtime) }} hours)
    </span>
    <div v-if="steamAppId">
      <a :href="`https://store.steampowered.com/app/${steamAppId}/`">
        <img :src="`https://steamcdn-a.akamaihd.net/steam/apps/${steamAppId}/header.jpg`" />
      </a>
    </div>
  </div>
</template>
