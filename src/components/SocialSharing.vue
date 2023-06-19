<template>
  <div class="shadow-lg h-auto p-2">
    <div class="font-semibold text-lg text-green-400">
      Share This Meal To:
    </div>
    <div class="grid grid-cols-4 sm:grid-cols-5 gap-3">
      <SocialSharingItem v-for="social of socialList" :key="social.name" :network="social.name" :social="social"/>
    </div>
  </div>
</template>

<script setup>
import SocialSharingItem from './SocialSharingItem.vue';

const socialList = [
  {'name': 'Facebook', 'icon': "fa-brands fa-facebook"}, 
  {'name': 'Email', 'icon': "fa-solide fa-envelope"}, 
  {'name': 'Messenger', 'icon': "fa-brands fa-facebook-messenger"}, 
  {'name': 'Skype', 'icon': "fa-brands fa-skype"}, 
  {'name': 'SMS', 'icon': "fa-solide fa-message"},
  {'name': 'Reddit', 'icon': "fa-brands fa-reddit"},
  {'name': 'Telegram', 'icon': "fa-brands fa-telegram"},
  {'name': 'Twitter', 'icon': "fa-brands fa-twitter"}, 
  {'name': 'Weibo', 'icon': "fa-brands fa-weibo"}, 
  {'name': 'WhatsAPP', 'icon': "fa-brands fa-whatsapp"}
]

</script>