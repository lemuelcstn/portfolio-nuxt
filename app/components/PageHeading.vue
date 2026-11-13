<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <h1 class="text-[2rem] sm:text-[2.5rem] lg:text-[4.5rem] font-extrabold leading-[1.1] tracking-tight text-base-content mb-5">
    <span class="text-primary">
      <slot>{{ title }}</slot>
    </span>
  </h1>
</template>
