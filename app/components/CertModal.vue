<script setup>
import { onMounted, onUnmounted } from 'vue'

defineProps({
  cert: {
    type: Object,
    default: null,
  },
})

const emit = defineEmits(['close'])

const handleEscape = (event) => {
  if (event.key === 'Escape') {
    emit('close')
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleEscape)
})
</script>

<template>
  <div
    v-if="cert"
    class="modal-overlay"
    @click.self="emit('close')"
  >
    <div
      role="dialog"
      aria-modal="true"
      :aria-label="cert.title"
      class="modal-dialog"
    >
      <!-- Close Button -->
      <button
        type="button"
        class="modal-close"
        aria-label="Close modal"
        @click="emit('close')"
      >
        &times;
      </button>

      <!-- Certificate Image -->
      <img
        :src="cert.image"
        :alt="cert.title"
        class="modal-image"
      />

      <!-- Certificate Information -->
      <h2 class="modal-title">
        {{ cert.title }}
      </h2>

      <p class="modal-description">
        {{ cert.description }}
      </p>

      <!-- Credly Link -->
      <a
        :href="cert.link"
        target="_blank"
        rel="noopener noreferrer"
        class="modal-verify-btn"
      >
        Verify Certificate
      </a>
    </div>
  </div>
</template>

