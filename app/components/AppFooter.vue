<script setup>
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="footer footer-horizontal footer-center bg-base-200/80 text-neutral px-[5%] py-6 sm:py-8 mt-12 border-t border-base-300">
    <aside class="items-center text-center">
      <p class="font-bold text-lg text-base-content">
        Lemuel Custan
      </p>
      <p class="text-sm text-neutral">
        Aspiring Web Developer
      </p>
      <p class="text-xs mt-1">
        &copy; {{ currentYear }} Lemuel Custan. All rights reserved.
      </p>
    </aside>
  </footer>
</template>
