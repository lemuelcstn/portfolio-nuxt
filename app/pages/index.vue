<template>
  <div>
    <!-- Hero Section -->
    <main class="hero-section">
      <div class="hero-content">

        <h1 class="hero-title">
          Hi, I'm <span class="highlight">Lemuel Custan</span>
        </h1>

        <h2 class="hero-subtitle">
          Aspiring Web Developer
        </h2>

        <p class="hero-description">
          I am focused on building a strong foundation in technical skills,
          logical thinking, and problem-solving. I am continuously developing
          myself through academic learning and hands-on practice.
        </p>

        <!-- Social Media Buttons -->
        <div class="hero-buttons">

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
            class="btn btn-text"
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

      <!-- Profile Image Section -->
      <div class="hero-image-container">
        <div class="circle-background"></div>

        <img
          src="/Image/lemuel.jpg"
          alt="Lemuel Custan"
          class="profile-image"
        />

        <!-- Floating Technology Labels -->
        <div class="floating-item float-1">HTML</div>
        <div class="floating-item float-2">CSS</div>
        <div class="floating-item float-3">JavaScript</div>
        <div class="floating-item float-4">Java</div>
        <div class="floating-item float-5">SQL</div>
        <div class="floating-item float-6">Python</div>
      </div>
    </main>
  </div>
</template>