<script setup>
const siteUrl = useRuntimeConfig().public.siteUrl
const pageTitle = 'Lemuel Custan | Aspiring Web Developer'
const pageDescription =
  'Portfolio of Lemuel Custan, an aspiring web developer focused on building a strong foundation in technical skills, logical thinking, and problem-solving.'

useHead({
  title: pageTitle,
})

useSeoMeta({
  description: pageDescription,
  ogTitle: pageTitle,
  ogDescription: pageDescription,
  ogType: 'website',
  ogUrl: siteUrl,
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
    <HeroSection />
  </div>
</template>
