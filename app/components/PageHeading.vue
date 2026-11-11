<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <h1 class="hero-title">
    <span class="highlight">
      <slot>{{ title }}</slot>
    </span>
  </h1>
</template>

