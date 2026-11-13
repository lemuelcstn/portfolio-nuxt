<script setup>
import { ref } from 'vue'

const selectedCert = ref(null)

// Certification Data
const certifications = [
  {
    title: 'Microsoft Word Certification',
    description:
      'Successfully earned the Microsoft Word Certification, demonstrating proficiency in document creation, formatting, and professional word processing.',
    badge: '/Image/msword.png',
    image: '/Image/mswordcert.jpg',
    link: 'https://www.credly.com/badges/797578f0-22d9-4119-b880-ea6142aabe54/public_url',
    color: '#007bff',
  },
  {
    title: 'Microsoft PowerPoint Certification',
    description:
      'Successfully earned the Microsoft PowerPoint Certification, demonstrating proficiency in creating dynamic presentations, slide designs, and professional slideshows.',
    badge: '/Image/mspowerpoint.png',
    image: '/Image/mspowerpointcert.jpg',
    link: 'https://www.credly.com/badges/c20e4355-5381-4f27-8e46-6576989b7d1a/public_url',
    color: '#ff5722',
  },
  {
    title: 'Networking Basics Certification',
    description:
      'Successfully earned the Networking Basics Certification, demonstrating fundamental knowledge in networking concepts, protocols, and infrastructure.',
    badge: '/Image/networkingbasics.png',
    image: '/Image/networkingbasicscert.jpg',
    link: 'https://www.credly.com/badges/b9f30873-d537-486d-a6ca-573da0a4af67/public_url',
    color: '#00bcd4',
  },
  {
    title: 'Python Essentials 1 Certification',
    description:
      'Successfully earned the Python Essentials 1 Certification, demonstrating fundamental knowledge in Python programming, data structures, and problem-solving.',
    badge: '/Image/pythonessentials1.png',
    image: '/Image/pythonessentialscert.jpg',
    link: 'https://www.credly.com/badges/197dda22-987b-4cb0-bd98-9c1cc1dae055/public_url',
    color: '#00bcd4',
  },
]

// Open Modal
const openModal = (cert) => {
  selectedCert.value = cert
}

// Close Modal
const closeModal = () => {
  selectedCert.value = null
}
</script>

<template>
  <div>
    <!-- Certifications Section -->
    <main class="flex flex-col items-center justify-center px-[5%] py-5 lg:py-[60px] max-w-[1400px] mx-auto min-h-[calc(100vh-80px)]">
      <div class="w-full max-w-[800px] mx-auto text-center z-10">
        <PageHeading title="Certifications" />

        <!-- Certification Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8 mt-12 w-full">
          <CertCard
            v-for="cert in certifications"
            :key="cert.title"
            :cert="cert"
            @select="openModal"
          />
        </div>
      </div>
    </main>

    <!-- Certification Modal -->
    <CertModal
      :cert="selectedCert"
      @close="closeModal"
    />
  </div>
</template>
