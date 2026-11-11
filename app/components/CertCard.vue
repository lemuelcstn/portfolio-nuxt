<script setup>
defineProps({
  cert: {
    type: Object,
    required: true,
  },
})

defineEmits(['select'])
</script>

<template>
  <button
    type="button"
    class="cert-card"
    @click="$emit('select', cert)"
  >
    <img
      :src="cert.badge"
      :alt="cert.title + ' Badge'"
      loading="lazy"
      class="cert-badge"
    />

    <h3 class="cert-title">
      {{ cert.title }}
    </h3>

    <span
      class="cert-btn"
      :style="{ backgroundColor: cert.color }"
    >
      View Details
    </span>
  </button>
</template>

