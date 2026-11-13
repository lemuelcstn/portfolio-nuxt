<script setup>
const siteUrl = useRuntimeConfig().public.siteUrl
const pageTitle = 'About Me | Lemuel Custan'
const pageDescription =
  'Learn about Lemuel Custan, an aspiring web developer passionate about responsive websites, problem-solving, astronomy, and youth ministry leadership.'

useHead({
  title: pageTitle,
})

useSeoMeta({
  description: pageDescription,
  ogTitle: pageTitle,
  ogDescription: pageDescription,
  ogType: 'website',
  ogUrl: `${siteUrl}/about`,
  ogImage: `${siteUrl}/Image/lemuel.jpg`,
  ogImageAlt: 'Lemuel Custan',
  ogSiteName: 'Lemuel Custan Portfolio',
  twitterCard: 'summary',
  twitterTitle: pageTitle,
  twitterDescription: pageDescription,
  twitterImage: `${siteUrl}/Image/lemuel.jpg`,
})
</script>

<template>
  <div>
    <!-- About Me Section -->
    <main class="flex flex-col items-center justify-center px-[5%] py-5 lg:py-[60px] max-w-[1400px] mx-auto min-h-[calc(100vh-80px)]">
      <div class="w-full max-w-[800px] mx-auto text-center z-10">
        <PageHeading title="About Me" />
        <AboutSection />
      </div>
    </main>
  </div>
</template>
