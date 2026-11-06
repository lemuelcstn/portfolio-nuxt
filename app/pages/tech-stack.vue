<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)

// Tech Stack Data
const techCategories = [
  {
    title: 'Languages',
    spacing: '',
    items: [
      {
        name: 'Java',
        image: '/Image/new_java.png',
      },
      {
        name: 'Python',
        image: '/Image/new_python.png',
      },
      {
        name: 'HTML',
        image: '/Image/new_html.png',
      },
      {
        name: 'CSS',
        image: '/Image/new_css.png',
      },
      {
        name: 'JavaScript',
        image: '/Image/new_javascript.png',
      },
    ],
  },

  {
    title: 'Databases',
    spacing: 'mt-12',
    items: [
      {
        name: 'MySQL',
        image: '/Image/new_mysql.png',
      },
      {
        name: 'PostgreSQL',
        image: '/Image/new_postgresql.png',
      },
      {
        name: 'MongoDB',
        image: '/Image/new_mongodb.png',
      },
      {
        name: 'Oracle APEX',
        image: '/Image/new_oracleapex.png',
      },
    ],
  },

  {
    title: 'Tools',
    spacing: 'mt-12',
    items: [
      {
        name: 'Git',
        image: '/Image/new_git.png',
      },
      {
        name: 'GitHub',
        image: '/Image/new_github.png',
        transparent: true,
      },
      {
        name: 'Android Studio',
        image: '/Image/new_androidstudio.png',
      },
      {
        name: 'VS Code',
        image: '/Image/new_vscode.png',
      },
      {
        name: 'SSMS',
        image: '/Image/new_sqlms22.png',
      },
    ],
  },
]
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

    <!-- Tech Stack Section -->
    <main class="hero-section">
      <div class="hero-content max-w-[800px] mx-auto text-center">

        <h1 class="hero-title">
          <span class="highlight">Tech Stack</span>
        </h1>

        <div class="tech-container mt-12 text-center">

          <!-- Technology Categories -->
          <div
            v-for="category in techCategories"
            :key="category.title"
            class="tech-category"
            :class="category.spacing"
          >
            <h2 class="tech-category-title text-main text-2xl font-bold mb-6">
              {{ category.title }}
            </h2>

            <div class="tech-grid flex flex-wrap justify-center gap-4">

              <!-- Technology Cards -->
              <div
                v-for="tech in category.items"
                :key="tech.name"
                class="tech-card flex items-center gap-3 bg-circle py-2.5 pr-5 pl-2.5 rounded-2xl border border-black/5 transition-transform duration-200 hover:-translate-y-1"
              >
                <img
                  :src="tech.image"
                  :alt="tech.name"
                  loading="lazy"
                  class="tech-icon w-[46px] h-[46px] rounded-xl object-contain"
                  :class="{ 'bg-transparent': tech.transparent }"
                />

                <span class="tech-name text-main font-semibold text-base pr-2">
                  {{ tech.name }}
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </main>
  </div>
</template>