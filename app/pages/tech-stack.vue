<script setup>
// Tech Stack Data
const techCategories = [
  {
    title: 'Languages',
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
    <!-- Tech Stack Section -->
    <main class="hero-section page-section">
      <div class="hero-content page-content">

        <h1 class="hero-title">
          <span class="highlight">Tech Stack</span>
        </h1>

        <div class="tech-container">

          <!-- Technology Categories -->
          <div
            v-for="category in techCategories"
            :key="category.title"
            class="tech-category"
          >
            <h2 class="tech-category-title">
              {{ category.title }}
            </h2>

            <div class="tech-grid">

              <!-- Technology Cards -->
              <div
                v-for="tech in category.items"
                :key="tech.name"
                class="tech-card"
              >
                <img
                  :src="tech.image"
                  :alt="tech.name"
                  loading="lazy"
                  class="tech-icon"
                  :class="{ 'bg-transparent': tech.transparent }"
                />

                <span class="tech-name">
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