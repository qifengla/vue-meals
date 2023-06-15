<template>
  <div class="max-w-[800px] mx-auto p-8">
    <h1 class="text-4xl font-bold mb-5 text-orange-500">{{ meal.strMeal }}</h1>
    <img :src="meal.strMealThumb" :alt="meal.strMeal" class="max-w-[100%]">
    <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
      <div>
        <strong class="font-bold text-red-400">Category:</strong> {{ meal.strCategory }}
      </div>
      <div>
        <strong class="font-bold text-red-400">Area:</strong> {{ meal.strArea }}
      </div>
      <div>
        <strong class="font-bold text-red-400">Tags:</strong> {{ meal.strTags }}
      </div>
    </div>

    <div class="my-3 text-slate-600 first-letter:text-5xl first-letter:mr-3 first-letter:float-left" >
      {{ meal.strInstructions }}
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2">
      <div>
        <h2 class="text-2xl font-semibold mb-2 text-red-400">Ingredients</h2>
        <ul>
          <template v-for="(el, ind) of new Array(20)">
            <li v-if="meal[`strIngredient${ind + 1}`]">
            <span class="text-lime-600">{{ ind + 1 }}.</span> <span class="text-violet-400">{{ meal[`strIngredient${ind + 1}`] }}</span>
            </li>
          </template>
        </ul>
      </div>
      <div>
        <h2 class="text-2xl font-semibold mb-2 text-red-400">Measures</h2>
        <ul>
          <template v-for="(el, ind) of new Array(20)">
            <li v-if="meal[`strIngredient${ind + 1}`]">
            <span class="text-lime-600">{{ ind + 1 }}.</span> <span class="text-violet-400">{{ meal[`strMeasure${ind + 1}`].trim() || "Suit Yourself" }}</span>
            </li>
          </template>
        </ul>
      </div>
      <div class="mt-4">
        <YouTubeButton :href="meal.strYoutube" />
        <a
          :href="meal.strSource"
          target="_blank"
          class="ml-3 px-3 py-2 rounded border-2 border-transparent text-indigo-600 transition-colors"
        >
          View Original Source
        </a>
      </div>
    </div>


  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router';
import axiosClient from '../axiosClient';
import YouTubeButton from '../components/YouTubeButton.vue';

const route = useRoute();
const meal = ref({})

onMounted(() => {
  axiosClient.get(`lookup.php?i=${route.params.id}`)
    .then(({ data }) => {
      meal.value = data.meals[0] || {}
    })
})

</script>