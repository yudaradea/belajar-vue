<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <nav class="bg-gray-800">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <img
              class="w-8 h-8"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
              alt="Workflow"
            />
          </div>
          <div class="md:block">
            <div class="flex items-baseline ml-10 space-x-4">
              <RouterLink to="/" exact-active-class="active" class="text-white"
                >Home</RouterLink
              >
              <RouterLink
                to="/calculator"
                exact-active-class="active"
                class="text-white"
                >About</RouterLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
