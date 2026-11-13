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
    <main class="flex flex-col items-center justify-center px-[5%] py-5 lg:py-[60px] max-w-[1400px] mx-auto min-h-[calc(100vh-80px)]">
      <div class="w-full max-w-[800px] mx-auto text-center z-10">

        <PageHeading title="Tech Stack" />

        <div class="w-full mt-12 text-center space-y-12">

          <!-- Technology Categories -->
          <div
            v-for="category in techCategories"
            :key="category.title"
            class="w-full"
          >
            <h2 class="text-base-content text-2xl font-bold mb-6">
              {{ category.title }}
            </h2>

            <div class="flex flex-wrap justify-center gap-3 sm:gap-4 w-full">
              <!-- Technology Cards -->
              <TechCard
                v-for="tech in category.items"
                :key="tech.name"
                :tech="tech"
              />
            </div>
          </div>

        </div>
      </div>
    </main>
  </div>
</template>