<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import Home from './view/Home.vue';
</script>

<template>
  <header class="bg-blue-600 text-white">
  <div class="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
    
    <!-- Logo -->
    <div class="text-2xl font-bold">
      PesaTrack
    </div>
    
    <!-- Navigation buttons -->
    <div class="space-x-4">
      <a href="/login" class="px-4 py-2 bg-white text-blue-600 rounded hover:bg-gray-100 transition">
        Login
      </a>
      <a href="/register" class="px-4 py-2 border border-white rounded hover:bg-white hover:text-blue-600 transition">
        Register
      </a>
    </div>
  </div>
</header>

  <main>
    <Home />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
