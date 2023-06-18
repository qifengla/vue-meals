<template>
    <div class="font-bold bg-stone-200 rounded text-center text-cyan-500 hover:bg-green-300 hover:text-orange-500 hover:scale-110">
        <ShareNetwork 
            :network="network"
            url="https://news.vuejs.org/issues/180"
            title="The world of meals"
            description="How about trying this meal"
            hashtags="vue js, vite"
        >
            {{ network }}
        </ShareNetwork>
    </div>
</template>

<script setup>
const { network } = defineProps({
  network: {
    required: true,
    type: String
  }
})
</script>

