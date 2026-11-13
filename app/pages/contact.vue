<template>
  <div>
    <!-- Contact Section -->
    <main class="flex flex-col items-center justify-center px-[5%] py-5 lg:py-[60px] max-w-[1400px] mx-auto min-h-[calc(100vh-80px)]">
      <div class="w-full max-w-[800px] mx-auto text-center z-10">
        <PageHeading title="Contact" />

        <div class="card bg-base-200 rounded-2xl lg:rounded-[24px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] mt-6 lg:mt-10">
          <div class="card-body p-5 sm:p-6 lg:p-10 text-center items-center">
            <p class="text-neutral text-[0.9rem] sm:text-[0.95rem] lg:text-[1.1rem] leading-[1.8]">
              Feel free to contact me if you have any questions, opportunities,
              or would like to connect. I am always open to learning,
              collaborating, and meeting new people.
            </p>

            <!-- Social Media Buttons -->
            <SocialButtons centered />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
