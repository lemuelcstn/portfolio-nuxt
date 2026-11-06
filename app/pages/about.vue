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

    <!-- About Me Section -->
    <main class="hero-section">
      <div class="hero-content max-w-[800px] mx-auto text-center">

        <h1 class="hero-title">
          <span class="highlight">About Me</span>
        </h1>

        <div class="content-box">
          <p>
            I am Lemuel Custan, an aspiring web developer who enjoys
            creating responsive and user-friendly websites. I am
            continuously improving my skills in web development,
            problem-solving, and logical thinking through hands-on
            practice and personal projects. I also have a strong
            interest in astronomy, which reflects my curiosity and
            passion for learning. Outside of technology, I serve as
            the President of our church's District Youth Ministry,
            where I have developed leadership and communication skills.
          </p>

          <p>
            My professional aspiration is to become a skilled web
            developer who creates innovative and impactful digital
            solutions. I aim to contribute to projects that solve
            real-world problems and improve the way people interact
            with technology. I also hope to continuously expand my
            knowledge and grow into a well-rounded IT professional
            who can make a meaningful contribution to both the
            technology industry and the community.
          </p>
        </div>

      </div>
    </main>
  </div>
</template>