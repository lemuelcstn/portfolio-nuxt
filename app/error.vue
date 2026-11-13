
<script setup>
import { computed } from 'vue'

const props = defineProps({
  error: Object,
})

const is404 = computed(() => props.error?.statusCode === 404)

useHead({
  htmlAttrs: { lang: 'en' },
  link: [{ rel: 'icon', href: '/favicon.ico' }],
  title: computed(() =>
    is404.value
      ? '404 - Page Not Found | Lemuel Custan'
      : 'Error | Lemuel Custan',
  ),
})

useSeoMeta({
  description: computed(() =>
    is404.value
      ? "Sorry, the page you're looking for doesn't exist on Lemuel Custan's portfolio."
      : 'An unexpected error occurred. Please return to the home page.',
  ),
  robots: 'noindex, nofollow',
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <NuxtLayout>
    <main class="hero min-h-[calc(100vh-80px)] px-[5%] py-10 max-w-[1400px] mx-auto">
      <div class="hero-content text-center w-full max-w-[600px]">
        <div class="card w-full bg-base-200 rounded-2xl lg:rounded-[24px] shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
          <div class="card-body items-center text-center p-8 sm:p-12 gap-4">
            <h1 class="text-primary text-6xl sm:text-8xl font-extrabold leading-none tracking-tight">
              {{ error?.statusCode || 500 }}
            </h1>

            <h2 class="text-base-content text-2xl sm:text-3xl font-bold mt-2">
              {{ error?.statusCode === 404 ? 'Page Not Found' : 'Something Went Wrong' }}
            </h2>

            <p class="text-neutral text-base sm:text-lg leading-relaxed max-w-md">
              {{
                error?.statusCode === 404
                  ? "Sorry, the page you're looking for doesn't exist."
                  : 'An unexpected error occurred. Please try again.'
              }}
            </p>

            <div class="card-actions justify-center mt-4">
              <button
                type="button"
                class="btn btn-primary h-auto py-3.5 px-8 rounded-lg font-semibold text-base text-primary-content shadow-md transition-all duration-300 hover:-translate-y-0.5"
                @click="handleError"
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  </NuxtLayout>
</template>
