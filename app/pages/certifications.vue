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
    <main class="hero-section page-section">
      <div class="hero-content page-content">

        <h1 class="hero-title">
          <span class="highlight">Certifications</span>
        </h1>

        <!-- Certification Cards -->
        <div class="certifications-container">
          <button
            v-for="cert in certifications"
            :key="cert.title"
            type="button"
            @click="openModal(cert)"
            class="cert-card"
          >
            <img
              :src="cert.badge"
              :alt="cert.title + ' Badge'"
              loading="lazy"
              class="cert-badge"
            />

            <h3 class="cert-title">
              {{ cert.title }}
            </h3>

            <span
              class="cert-btn"
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
      class="modal-overlay"
      @click.self="closeModal"
    >
      <div
        role="dialog"
        aria-modal="true"
        :aria-label="selectedCert.title"
        class="modal-dialog"
      >
        <!-- Close Button -->
        <button
          type="button"
          @click="closeModal"
          class="modal-close"
          aria-label="Close modal"
        >
          &times;
        </button>

        <!-- Certificate Image -->
        <img
          :src="selectedCert.image"
          :alt="selectedCert.title"
          class="modal-image"
        />

        <!-- Certificate Information -->
        <h2 class="modal-title">
          {{ selectedCert.title }}
        </h2>

        <p class="modal-description">
          {{ selectedCert.description }}
        </p>

        <!-- Credly Link -->
        <a
          :href="selectedCert.link"
          target="_blank"
          rel="noopener noreferrer"
          class="modal-verify-btn"
        >
          Verify Certificate
        </a>
      </div>
    </div>

  </div>
</template>