<template>
  <div class="shadow-lg h-auto p-2">
    <div class="font-semibold text-lg text-green-400">
      Share This Meal To:
    </div>
    <div class="grid grid-cols-3 sm:grid-cols-5 gap-3">
      <SocialSharingItem v-for="network of networkList" :key="network" :network="network" />
    </div>
  </div>
</template>

<script setup>
import SocialSharingItem from './SocialSharingItem.vue';

const networkList = ['Facebook', 'Email', 'Messenger', 'Skype', 'SMS', 'Reddit', 'Telegram',
'Twitter', 'Weibo', "WhatsAPP"]       
</script>