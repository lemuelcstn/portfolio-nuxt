<script setup>
const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About Me', to: '/about' },
  { label: 'Tech Stack', to: '/tech-stack' },
  { label: 'Certifications', to: '/certifications' },
  { label: 'Contact', to: '/contact' },
]

const closeDropdown = () => {
  if (document.activeElement instanceof HTMLElement) {
    document.activeElement.blur()
  }
}
</script>

<template>
  <header class="navbar flex items-center justify-between max-w-[1400px] mx-auto px-[5%] py-4 sm:py-5 relative z-[100]">
    <!-- Logo -->
    <div class="flex-1">
      <NuxtLink
        to="/"
        class="inline-flex items-center gap-3 text-[1.7rem] sm:text-[2rem] font-bold text-base-content rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
      >
        <span>LDC</span>
      </NuxtLink>
    </div>

    <!-- Desktop Pill Tab Bar (md and up) -->
    <nav
      aria-label="Main navigation"
      class="hidden md:flex flex-none"
    >
      <ul class="menu menu-horizontal flex-nowrap items-center gap-1 rounded-full bg-base-200 p-1.5 shadow-sm">
        <li v-for="item in navItems" :key="item.to">
          <NuxtLink
            :to="item.to"
            exact-active-class="bg-primary !text-primary-content shadow-sm hover:!bg-primary focus:!bg-primary focus:!text-primary-content"
            class="rounded-full px-4 lg:px-5 py-2 text-sm lg:text-[0.95rem] font-medium whitespace-nowrap text-neutral transition-colors duration-300 hover:bg-base-300 hover:text-base-content focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            {{ item.label }}
          </NuxtLink>
        </li>
      </ul>
    </nav>

    <!-- Mobile Dropdown Navigation (below md) -->
    <div class="flex-none md:hidden">
      <div class="dropdown dropdown-end">
        <button
          type="button"
          tabindex="0"
          aria-label="Open navigation menu"
          class="btn btn-ghost btn-square rounded-full text-base-content hover:bg-base-200 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content mt-3 z-[100] p-2.5 shadow-lg bg-base-200 border border-base-300 rounded-3xl w-56 gap-1.5"
        >
          <li v-for="item in navItems" :key="item.to">
            <NuxtLink
              :to="item.to"
              exact-active-class="bg-primary !text-primary-content shadow-sm hover:!bg-primary focus:!bg-primary focus:!text-primary-content"
              class="rounded-full px-4 py-2.5 text-[0.95rem] font-medium text-neutral transition-colors duration-300 hover:bg-base-300 hover:text-base-content focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              @click="closeDropdown"
            >
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>
