<script setup>
const floatingItems = [
  {
    label: 'HTML',
    positionClass: 'top-[5%] lg:top-[20%] left-0 sm:left-[2%] [animation-delay:0s]',
  },
  {
    label: 'CSS',
    positionClass: 'bottom-[5%] lg:bottom-[20%] left-0 sm:left-[2%] [animation-delay:2s]',
  },
  {
    label: 'JavaScript',
    positionClass: '-top-[5%] lg:-top-[2%] left-[calc(50%-32.5px)] sm:left-[calc(50%-40px)] lg:left-[calc(50%-55px)] [animation-delay:4s]',
  },
  {
    label: 'Java',
    positionClass: 'top-[5%] lg:top-[20%] right-0 sm:right-[2%] [animation-delay:1.5s]',
  },
  {
    label: 'SQL',
    positionClass: 'bottom-[5%] lg:bottom-[20%] right-0 sm:right-[2%] [animation-delay:3s]',
  },
  {
    label: 'Python',
    positionClass: '-bottom-[5%] lg:-bottom-[2%] left-[calc(50%-32.5px)] sm:left-[calc(50%-40px)] lg:left-[calc(50%-55px)] [animation-delay:5s]',
  },
]
</script>

<template>
  <main class="flex flex-col-reverse lg:flex-row items-center justify-between px-[5%] py-5 lg:py-[60px] max-w-[1400px] mx-auto min-h-[calc(100vh-80px)] text-center lg:text-left">
    <div class="flex-1 max-w-[600px] z-10 mb-5 lg:mb-0">
      <h1 class="text-[2rem] sm:text-[2.5rem] lg:text-[4.5rem] font-extrabold leading-[1.1] text-base-content mb-5 tracking-[-0.5px] lg:tracking-[-1px]">
        Hi, I'm <span class="text-primary">Lemuel Custan</span>
      </h1>

      <h2 class="text-[1.1rem] sm:text-[1.2rem] lg:text-[1.5rem] font-medium text-neutral mb-2.5 lg:mb-6">
        Aspiring Web Developer
      </h2>

      <p class="text-[0.9rem] sm:text-[0.95rem] lg:text-[1.1rem] text-neutral mb-5 lg:mb-10 leading-[1.7] lg:leading-[1.8]">
        I am focused on building a strong foundation in technical skills,
        logical thinking, and problem-solving. I am continuously developing
        myself through academic learning and hands-on practice.
      </p>

      <!-- Social Media Buttons -->
      <SocialButtons />
    </div>

    <!-- Profile Image Section -->
    <div class="flex-1 relative flex justify-center items-center w-full min-h-[320px] sm:min-h-[400px] lg:min-h-[600px] mt-5 mb-10 sm:mt-[30px] sm:mb-[60px] lg:my-0">
      <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] sm:w-[clamp(260px,50vw,700px)] sm:h-[clamp(260px,50vw,700px)] bg-base-200 rounded-full -z-10"></div>

      <div class="avatar z-[5]">
        <div class="w-[220px] h-[220px] sm:w-[clamp(200px,35vw,300px)] sm:h-[clamp(200px,35vw,300px)] lg:w-[clamp(200px,30vw,350px)] lg:h-[clamp(200px,30vw,350px)] rounded-full overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.15)] transition-all duration-300 motion-safe:hover:scale-105 hover:shadow-2xl hover:ring-4 hover:ring-primary/30">
          <img
            src="/Image/lemuel.jpg"
            alt="Lemuel Custan"
            class="object-cover"
          />
        </div>
      </div>

      <!-- Floating Technology Labels -->
      <span
        v-for="item in floatingItems"
        :key="item.label"
        class="badge h-auto border-none bg-base-100 text-neutral font-semibold rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] z-10 absolute justify-center text-[0.6rem] sm:text-[0.7rem] lg:text-[0.9rem] w-[65px] sm:w-[80px] lg:w-auto py-1.5 px-0.5 sm:py-1.5 sm:px-1 lg:py-4 lg:px-6 animate-float cursor-pointer transition-all duration-300 motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)]"
        :class="item.positionClass"
      >
        {{ item.label }}
      </span>
    </div>
  </main>
</template>
