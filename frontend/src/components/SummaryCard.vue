<template>
  <div class="bg-white rounded-2xl shadow-md p-6 w-64 text-center">
    <h3 class="text-gray-600 text-sm">{{ title }}</h3>
    <p class="text-2xl font-bold text-gray-800 mt-2">{{ amount }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  amount: String
});
</script>
