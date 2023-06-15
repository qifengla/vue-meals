<template>
  <header class="bg-white shadow-lg h-16 items-stretch flex justify-between items-stretch">
    <router-link
      :to="{ name: 'home' }"
      class="inline-flex items-center h-full px-5 text-pink-700 font-bold text-xl transition-colors hover:bg-orange-500 hover:text-white"
    >
      Home
    </router-link>
    <div class="inline-flex items-center text-purple-300">
      <p>Meals, are about nutirtion, mood, life, culture, art, and ...</p>
    </div>
    <div class="inline-flex items-center gap-1">
      <router-link
        :to="{ name: 'byName' }"
        class="flex items-center text-pink-700 px-3 h-full transition-colors hover:bg-orange-500 hover:text-white"
      >
        Search Meals
      </router-link>
      <router-link
        :to="{ name: 'byLetter' }"
        class="inline-flex items-center text-pink-700 px-3 h-full transition-colors hover:bg-orange-500 hover:text-white"
      >
        Meals By Letter
      </router-link>
      <router-link
        :to="{ name: 'ingredients' }"
        class="inline-flex items-center text-pink-700 px-3 h-full transition-colors hover:bg-orange-500 hover:text-white"
      >
        Meals By Ingredients
      </router-link>
    </div>
  </header>
</template>
