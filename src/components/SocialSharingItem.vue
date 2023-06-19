<template>
    <div class="font-bold items-center bg-stone-200 rounded text-center text-cyan-500 hover:bg-green-300 hover:text-orange-500 hover:scale-110">
        <ShareNetwork 
            :network="social.name"
            url="https://news.vuejs.org/issues/180"
            title="Would you like to try this meal"
            description="The world of meals"
            hashtags="vue js, vite"
        >
            <p>{{ social.name }}</p>
            <font-awesome-icon :icon="social.icon" size="2x" />
        </ShareNetwork>
    </div>
</template>

<script setup>
const { social } = defineProps({
  social: {
    required: true,
    type: Object
  }
})
</script>

