<script setup>
import GameEntry from './GameEntry.vue'
import { meetings } from '../assets/history'
</script>

<template>
  <h1>Video Game Club Meeting History</h1>
  <div v-for="meet in meetings">
    <GameEntry v-bind="meet"></GameEntry>
  </div>
</template>
