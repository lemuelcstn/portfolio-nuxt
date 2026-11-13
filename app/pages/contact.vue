<script setup>
const siteUrl = useRuntimeConfig().public.siteUrl
const pageTitle = 'Contact | Lemuel Custan'
const pageDescription =
  'Connect with Lemuel Custan on GitHub and LinkedIn for questions, web development opportunities, or collaboration. Always open to learning and connecting.'

useHead({
  title: pageTitle,
})

useSeoMeta({
  description: pageDescription,
  ogTitle: pageTitle,
  ogDescription: pageDescription,
  ogType: 'website',
  ogUrl: `${siteUrl}/contact`,
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
    <!-- Contact Section -->
    <main class="flex flex-col items-center justify-center px-[5%] py-5 lg:py-[60px] max-w-[1400px] mx-auto min-h-[calc(100vh-80px)]">
      <div class="w-full max-w-[800px] mx-auto text-center z-10">
        <PageHeading title="Contact" />

        <div class="card bg-base-200 rounded-2xl lg:rounded-[24px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] mt-6 lg:mt-10 transition-all duration-300 motion-safe:hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)]">
          <div class="card-body p-5 sm:p-6 lg:p-10 text-center items-center">
            <p class="text-neutral text-[0.9rem] sm:text-[0.95rem] lg:text-[1.1rem] leading-[1.8]">
              Feel free to contact me if you have any questions, opportunities,
              or would like to connect. I am always open to learning,
              collaborating, and meeting new people.
            </p>

            <!-- Social Media Buttons -->
            <SocialButtons centered />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
