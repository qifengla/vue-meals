<template>
  <div
    class="bg-white shadow rounded-xl hover:scale-105 transition-all"
  >
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="rounded-t-xl w-full h-48 object-cover"
      />
      <div v-if="meal.strInstructions" class="p-3 flex-grow h-48">
        <h3 class="font-bold text-red-500">{{ meal.strMeal }}</h3>
        <p class="mb-3">
          {{ $filters.truncateWords(meal.strInstructions, 20) || 'Please click me to get more detail'}}
        </p>
      </div>
      <div v-else class="p-3 flex-grow h-32">
        <h3 class="font-bold text-red-500">{{ meal.strMeal }}</h3>
        <p class="py-3 text-zinc-400">
          Please click me to get more detail...
        </p>
      </div>
    </router-link>
    <div class="p-3 flex-grow">
      <div class="flex items-center justify-between">
        <YouTubeButton :href="meal.strYoutube" />
      </div>
    </div>
  </div>
</template>

<script setup>
import YouTubeButton from './YouTubeButton.vue';

const { meal } = defineProps({
  meal: {
    required: true,
    type: Object
  }
})

</script>
