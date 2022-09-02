<template>
  <div v-if="Object.keys(messageStore.errors).length"
    class="bg-red-100 rounded-lg py-5 px-6 text-base text-red-700 mb-3"
    role="alert"
  >
  <div v-if="typeof messageStore.errors == 'object'">
	  <div v-for="(error, key) in messageStore.errors" :key="key">{{error}}</div>
  </div>
  <div v-else>
	  <div>{{messageStore.errors}}</div>
  </div>
  </div>

</template>

<script setup>
import { useMessageStore } from "@/stores/message";

const messageStore = useMessageStore();
</script>
