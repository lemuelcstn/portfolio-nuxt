<script setup>
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="footer footer-horizontal footer-center bg-base-200/80 text-neutral p-8 mt-12 border-t border-base-300">
    <aside>
      <p class="font-bold text-lg text-base-content">
        Lemuel Custan
      </p>
      <p class="text-sm text-neutral">
        Aspiring Web Developer
      </p>
      <p class="text-xs mt-1">
        &copy; {{ currentYear }} Lemuel Custan. All rights reserved.
      </p>
    </aside>

    <nav>
      <div class="grid grid-flow-col gap-6">
        <a
          href="https://github.com/lemuelcstn"
          target="_blank"
          rel="noopener noreferrer"
          class="link link-hover inline-flex items-center gap-2 font-medium text-neutral hover:text-primary transition-colors duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
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
          <span>GitHub</span>
        </a>

        <a
          href="https://www.linkedin.com/in/lemuel-custan-5240b1270/?skipRedirect=true"
          target="_blank"
          rel="noopener noreferrer"
          class="link link-hover inline-flex items-center gap-2 font-medium text-neutral hover:text-primary transition-colors duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
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
          <span>LinkedIn</span>
        </a>
      </div>
    </nav>
  </footer>
</template>
