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
    <span v-if="url">
      <a :href="url">{{ name }}</a>
    </span>
    <span v-else>
      <span>{{ name }}</span>
    </span>
    <span v-if="playtime">
        ({{ roundPlaytime(playtime) }} hours)
    </span>
    <div class="gameart">
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
  </div>
</template>

<style scoped>
.gameart img {
  filter: drop-shadow(5px 5px 2px rgba(84, 84, 84, 0.65));
  border-radius: 5px;
  width: 200px;
}
</style>
