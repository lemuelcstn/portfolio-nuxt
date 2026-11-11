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
  <header class="navbar max-w-[1400px] mx-auto px-[5%] py-5 relative z-[100]">
    <div class="navbar-start">
      <NuxtLink to="/" class="logo text-[2rem] font-bold text-[#1a1f36]">
        <span class="logo-text">LDC</span>
      </NuxtLink>
    </div>

    <!-- Desktop Navigation -->
    <nav class="navbar-end hidden lg:flex w-auto">
      <ul class="flex items-center gap-8">
        <li v-for="item in navItems" :key="item.to">
          <NuxtLink
            :to="item.to"
            exact-active-class="!text-[#0006b5] !bg-[#635bff]/10"
            class="block px-4 py-2 rounded-lg text-[0.95rem] font-medium text-[#4f566b] transition-all duration-300 hover:text-[#0006b5] hover:bg-[#635bff]/5"
          >
            {{ item.label }}
          </NuxtLink>
        </li>
      </ul>
    </nav>

    <!-- Mobile Dropdown Navigation -->
    <div class="navbar-end lg:hidden w-auto">
      <div class="dropdown dropdown-end">
        <div
          tabindex="0"
          role="button"
          aria-label="Open navigation menu"
          class="btn btn-ghost btn-square text-[#1a1f36]"
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
        </div>

        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content mt-3 z-[100] p-3 shadow-lg bg-white rounded-2xl w-56 gap-1"
        >
          <li v-for="item in navItems" :key="item.to">
            <NuxtLink
              :to="item.to"
              exact-active-class="!text-[#0006b5] !bg-[#635bff]/10"
              class="block px-4 py-2 rounded-lg text-[0.95rem] font-medium text-[#4f566b] transition-all duration-300 hover:text-[#0006b5] hover:bg-[#635bff]/5"
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
