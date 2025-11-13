<template>
  <div class="min-h-screen bg-gray-100">
    <Navbar />

    <div class="p-6">
      <h2 class="text-2xl font-semibold mb-4">Welcome Back!</h2>
      <p class="text-gray-600 mb-8">Here’s your financial summary for this month:</p>

      <div class="flex flex-wrap gap-6">
        <SummaryCard title="Total Income" amount="$5,200" />
        <SummaryCard title="Total Expenses" amount="$3,100" />
        <SummaryCard title="You Saved" amount="$2,100 🎉" />
      </div>

      <div class="mt-10 bg-white shadow-md p-8 rounded-xl">
        <h3 class="text-lg font-semibold mb-4">Next Steps</h3>
        <ul class="list-disc pl-5 text-gray-700 space-y-2">
          <li>Add your recent expenses</li>
          <li>View analytics and monthly charts</li>
          <li>Set saving goals and track progress</li>
        </ul>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import SummaryCard from '@/components/SummaryCard.vue'
</script>
