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
    class="card group cursor-pointer w-full items-center justify-between gap-6 p-8 bg-base-200 rounded-[24px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,123,255,0.15)] focus-visible:outline-3 focus-visible:outline-primary focus-visible:outline-offset-4"
    @click="$emit('select', cert)"
  >
    <img
      :src="cert.badge"
      :alt="cert.title + ' Badge'"
      loading="lazy"
      class="max-w-[180px] w-full h-auto drop-shadow-[0_4px_10px_rgba(0,0,0,0.3)] pointer-events-none"
    />

    <h3 class="text-base-content font-semibold text-lg text-center transition-colors duration-300 group-hover:text-primary">
      {{ cert.title }}
    </h3>

    <span
      class="btn border-none text-primary-content rounded-[30px] h-auto py-[0.8rem] px-[1.8rem] font-semibold text-base transition-all duration-300 pointer-events-none group-hover:scale-105"
      :style="{ backgroundColor: cert.color }"
    >
      View Details
    </span>
  </button>
</template>
