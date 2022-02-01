<template>
  <header class="z-50">
    <div class="flex justify-between items-center px-4 pt-8 2xl:px-0 max-w-[1280px] mx-auto">
      <!-- logo -->
      <div data-aos="fade-right" data-aos-duration="1500">
        <a href=""><img src="@/assets/images/logo.svg" alt="" /></a>
      </div>

      <!-- nav list -->
      <nav data-aos="fade-left" data-aos-duration="1500">
        <ul class="flex justify-center items-center space-x-8">
          <li class="flex flex-col justify-center items-center space-y-1 text-3xl text-[#BDBDBD] active cursor-pointer">
            <a href="#services">Services</a>
            <span class="text-transparent">
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="4" cy="4" r="4" fill="currentColor" />
              </svg>
            </span>
          </li>
          <li class="flex flex-col justify-center items-center space-y-1 text-3xl text-[#BDBDBD]">
            <a href="">Works</a>
            <span class="text-transparent">
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="4" cy="4" r="4" fill="currentColor" />
              </svg>
            </span>
          </li>
          <li class="flex flex-col justify-center items-center space-y-1 text-3xl text-[#BDBDBD]">
            <a href="">Blog</a>
            <span class="text-transparent">
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="4" cy="4" r="4" fill="currentColor" />
              </svg>
            </span>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
.active {
  @apply text-white;
}

.active span {
  color: #2f80ed;
}
</style>
