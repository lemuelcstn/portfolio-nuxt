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
    class="modal modal-open bg-black/60 p-4 z-[200]"
    @click.self="emit('close')"
  >
    <div
      role="dialog"
      aria-modal="true"
      :aria-label="cert.title"
      class="modal-box relative w-full max-w-lg max-h-[90vh] rounded-[24px] bg-base-100 p-6 sm:p-8 text-center shadow-2xl"
    >
      <!-- Close Button -->
      <button
        type="button"
        class="btn btn-sm btn-circle btn-ghost absolute right-4 top-4 text-xl text-neutral hover:text-base-content"
        aria-label="Close modal"
        @click="emit('close')"
      >
        &times;
      </button>

      <!-- Certificate Image -->
      <img
        :src="cert.image"
        :alt="cert.title"
        class="mx-auto mb-6 max-h-[300px] w-full object-contain"
      />

      <!-- Certificate Information -->
      <h2 class="mb-4 text-xl font-bold text-base-content">
        {{ cert.title }}
      </h2>

      <p class="mb-6 text-neutral leading-relaxed">
        {{ cert.description }}
      </p>

      <!-- Credly Link -->
      <div class="modal-action justify-center mt-0">
        <a
          :href="cert.link"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-primary rounded-[30px] h-auto px-7 py-3 font-semibold text-primary-content"
        >
          Verify Certificate
        </a>
      </div>
    </div>
  </div>
</template>
