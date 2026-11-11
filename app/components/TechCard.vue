<script setup>
defineProps({
  tech: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="tech-card">
    <img
      :src="tech.image"
      :alt="tech.name"
      loading="lazy"
      class="tech-icon"
      :class="{ 'bg-transparent': tech.transparent }"
    />

    <span class="tech-name">
      {{ tech.name }}
    </span>
  </div>
</template>

