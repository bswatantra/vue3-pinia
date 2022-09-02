<script setup>
import Navbar from "@/components/Navbar.vue";
</script>
<template>
  <Navbar />
  <section class="text-gray-600 body-font overflow-hidden">
    <div class="container px-5 py-24 mx-auto">
      <RouterView />
    </div>
  </section>
</template>
