
<script setup>
const props = defineProps({
  error: Object,
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="error-page">
    <div class="error-content">
      <h1>{{ error?.statusCode || 500 }}</h1>

      <h2>
        {{ error?.statusCode === 404 ? 'Page Not Found' : 'Something Went Wrong' }}
      </h2>

      <p>
        {{
          error?.statusCode === 404
            ? "Sorry, the page you're looking for doesn't exist."
            : 'An unexpected error occurred. Please try again.'
        }}
      </p>

      <button @click="handleError">
        Back to Home
      </button>
    </div>
  </div>
</template>

<style scoped>
.error-page {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
  text-align: center;
}

.error-content h1 {
  font-size: 100px;
  font-weight: 800;
  color: #333;
  margin: 0;
}

.error-content h2 {
  font-size: 28px;
  margin: 10px 0;
}

.error-content p {
  color: #666;
  margin-bottom: 25px;
}

.error-content button {
  padding: 12px 25px;
  background: #333;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.error-content button:hover {
  background: #555;
}
</style>
