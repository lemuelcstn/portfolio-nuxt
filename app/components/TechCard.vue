<script setup>
defineProps({
  tech: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="card card-side items-center gap-2 sm:gap-3 bg-base-200 py-2 px-3 sm:py-2.5 sm:pr-5 sm:pl-2.5 rounded-2xl border border-base-content/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)]">
    <img
      :src="tech.image"
      :alt="tech.name"
      loading="lazy"
      class="shrink-0 w-[38px] h-[38px] sm:w-[46px] sm:h-[46px] rounded-xl object-contain"
      :class="{ 'bg-transparent': tech.transparent }"
    />

    <span class="text-base-content font-semibold text-[0.9rem] sm:text-base sm:pr-2">
      {{ tech.name }}
    </span>
  </div>
</template>
