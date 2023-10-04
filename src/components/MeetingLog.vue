<script setup>
import MeetingEntry from './MeetingEntry.vue'
import { meetings } from '../assets/history'
</script>

<template>
  <h1>Video Game Club Meeting History</h1>
  <div v-for="meet in meetings.slice().reverse()">
    <MeetingEntry v-bind="meet"></MeetingEntry>
  </div>
</template>
