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
  <div>
    <div v-if="coverArt">
      <img :src="coverArt" />
    </div>
    <div v-else-if="steamAppId">
      <a :href="`https://store.steampowered.com/app/${steamAppId}/`">
        <img :src="`https://steamcdn-a.akamaihd.net/steam/apps/${steamAppId}/library_600x900.jpg`" />
      </a>
    </div>
    <div v-else>
      <img src="../assets/missing.svg" />
    </div>
  </div>
</template>

<style scoped>
img {
  width: 200px;
  border-radius: 5px;
  margin: 0px 10px 10px 0px;
  box-shadow: 5px 5px 5px 0px rgba(84, 84, 84, 0.65);
}
</style>
