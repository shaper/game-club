<script setup>
import { gameList } from '../assets/history'
import GameTitle from './GameTitle.vue'
import GameCover from './GameCover.vue'

// FIXME: get this from Meeting type directly
// See: https://github.com/vuejs/core/issues/4294
// See: https://github.com/wheatjs/vite-plugin-vue-type-imports
const props = defineProps({
  title: String,
  date: String,
  location: String,
  games: Array
})
</script>

<template>
  <div class="item">
    <div class="details">
      <h3>{{ title }}</h3>
      <div class="when-and-where">
        <span class="date">
          {{ Intl.DateTimeFormat('default', {dateStyle: 'long'}).format(new Date(date)) }}
        </span>
        <span v-if="location" class="location">
          at {{ location }}
        </span>
      </div>
      <div v-for="game in games">
        <GameTitle v-bind="gameList[game]" />
      </div>
    </div>
    <div class="covers">
      <div v-for="game in games">
        <GameCover v-bind="gameList[game]" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.item {
  display: flex;
  margin-top: 2rem;
}
.details {
  min-width: 200px;
  max-width: 200px;
  text-align: right;
  margin-right: 10px;
}
h3 {
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--color-heading);
}
.when-and-where {
  color: #808080;
  font-size: 70%;
  margin-bottom: 0.4rem;
}
.covers {
  display: flex;
  gap: 20px;
  overflow-y: hidden;
  margin-left: 10px;
  border-left: 1px solid black;
  padding-left: 20px;
}
</style>
