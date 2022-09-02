<template>
  <header class="text-gray-600 body-font">
    <div
      class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
    >
      <a
        class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
          viewBox="0 0 24 24"
          style="--darkreader-inline-stroke: currentColor"
          data-darkreader-inline-stroke=""
        >
          <path
            d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
          ></path>
        </svg>
        <span class="ml-3 text-xl">Tailblocks</span>
      </a>
      <nav
        class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center"
      >
        <div
          class="mr-5 hover:text-gray-900 cursor-pointer"
          @click="$router.push({ name: link.name })"
          v-for="(link, key) in linksList"
          :key="key"
        >
          {{ link.title }}
        </div>
      </nav>

      <div v-if="!authStore.token && !authStore.isAuthenticated">
        <div
          class="inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:text-gray-900 rounded text-base mt-4 md:mt-0 cursor-pointer"
          @click="
            $router.push({ name: 'register' }), messageStore.clearMessage()
          "
        >
          Register
        </div>
        <div
          class="inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:text-gray-900 rounded text-base mt-4 md:mt-0 cursor-pointer"
          @click="$router.push({ name: 'login' }), messageStore.clearMessage()"
        >
          login
        </div>
      </div>
      <div v-else>
        <div
          class="inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:text-gray-900 rounded text-base mt-4 md:mt-0 cursor-pointer"
          @click="$router.push({ name: 'login' }), authStore.logout()"
        >
          Logout
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useAuthStore } from "@/stores/auth";
import { useMessageStore } from "@/stores/message";

const linksList = [
  {
    title: "Home",
    caption: "home",
    icon: "home",
    link: "/",
    name: "home",
  },
  {
    title: "About",
    caption: "orders list",
    icon: "list",
    link: "/about",
    name: "about",
  },
];

const messageStore = useMessageStore();
const authStore = useAuthStore();
</script>
