<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)
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

    <!-- Contact Section -->
    <main class="hero-section">
      <div class="hero-content max-w-[800px] mx-auto text-center">

        <h1 class="hero-title">
          <span class="highlight">Contact</span>
        </h1>

        <div class="content-box text-center">
          <p>
            Feel free to contact me if you have any questions, opportunities,
            or would like to connect. I am always open to learning,
            collaborating, and meeting new people.
          </p>

          <!-- Social Media Buttons -->
          <div class="hero-buttons mt-[30px] mb-0 justify-center">

            <!-- GitHub -->
            <a
              href="https://github.com/lemuelcstn"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-secondary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                />
              </svg>
              GitHub
            </a>

            <!-- LinkedIn -->
            <a
              href="https://www.linkedin.com/in/lemuel-custan-5240b1270/?skipRedirect=true"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              LinkedIn
            </a>

          </div>
        </div>
      </div>
    </main>
  </div>
</template>