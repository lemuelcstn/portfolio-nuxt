<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const menuOpen = ref(false)
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

// Close Modal Using Escape Key
const handleEscape = (event) => {
  if (event.key === 'Escape') {
    closeModal()
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
  <div>
    <!-- Navigation Bar -->
    <header class="navbar">
      <NuxtLink to="/" class="logo" @click="menuOpen = false">
        <span class="logo-text">LDC</span>
      </NuxtLink>

      <input
        id="menu-toggle"
        v-model="menuOpen"
        type="checkbox"
        class="menu-toggle"
      />

      <label for="menu-toggle" class="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </label>

      <nav class="nav-links">
        <ul>
          <li>
            <NuxtLink to="/" active-class="active" @click="menuOpen = false">
              Home
            </NuxtLink>
          </li>

          <li>
            <NuxtLink to="/about" active-class="active" @click="menuOpen = false">
              About Me
            </NuxtLink>
          </li>

          <li>
            <NuxtLink to="/tech-stack" active-class="active" @click="menuOpen = false">
              Tech Stack
            </NuxtLink>
          </li>

          <li>
            <NuxtLink to="/certifications" active-class="active" @click="menuOpen = false">
              Certifications
            </NuxtLink>
          </li>

          <li>
            <NuxtLink to="/contact" active-class="active" @click="menuOpen = false">
              Contact
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </header>

    <!-- Certifications Section -->
    <main class="hero-section">
      <div class="hero-content max-w-[800px] mx-auto text-center">

        <h1 class="hero-title">
          <span class="highlight">Certifications</span>
        </h1>

        <!-- Certification Cards -->
        <div
          class="certifications-container grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8 mt-12"
        >
          <button
            v-for="cert in certifications"
            :key="cert.title"
            type="button"
            @click="openModal(cert)"
            class="group cursor-pointer flex flex-col items-center gap-6 p-8 bg-circle rounded-[24px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,123,255,0.15)]"
          >
            <img
              :src="cert.badge"
              :alt="cert.title + ' Badge'"
              loading="lazy"
              class="max-w-[180px] h-auto drop-shadow-[0_4px_10px_rgba(0,0,0,0.3)] pointer-events-none"
            />

            <h3
              class="text-main font-semibold text-lg text-center transition-colors duration-300 group-hover:text-primary"
            >
              {{ cert.title }}
            </h3>

            <span
              class="inline-block py-[0.8rem] px-[1.8rem] text-white rounded-[30px] font-semibold text-base transition-all duration-300 pointer-events-none group-hover:scale-105"
              :style="{ backgroundColor: cert.color }"
            >
              View Details
            </span>
          </button>
        </div>

      </div>
    </main>

    <!-- Certification Modal -->
    <div
      v-if="selectedCert"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      @click.self="closeModal"
    >
      <div
        role="dialog"
        aria-modal="true"
        :aria-label="selectedCert.title"
        class="relative w-full max-w-lg rounded-[24px] bg-white p-8 text-center shadow-2xl"
      >
        <!-- Close Button -->
        <button
          type="button"
          @click="closeModal"
          class="absolute right-5 top-4 text-2xl text-gray-500 hover:text-black"
          aria-label="Close modal"
        >
          &times;
        </button>

        <!-- Certificate Image -->
        <img
          :src="selectedCert.image"
          :alt="selectedCert.title"
          class="mx-auto mb-6 max-h-[300px] w-full object-contain"
        />

        <!-- Certificate Information -->
        <h2 class="mb-4 text-xl font-bold text-gray-800">
          {{ selectedCert.title }}
        </h2>

        <p class="mb-6 text-gray-600">
          {{ selectedCert.description }}
        </p>

        <!-- Credly Link -->
        <a
          :href="selectedCert.link"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-block rounded-[30px] bg-[#007bff] px-7 py-3 font-semibold text-white transition hover:bg-[#0056b3]"
        >
          Verify Certificate
        </a>
      </div>
    </div>

  </div>
</template>