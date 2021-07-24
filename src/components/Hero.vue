<template>
  <section class="px-4 2xl:px-0 max-w-[1280px] mx-auto relative">
    <!-- image -->
    <div class="w-full flex justify-center items-start">
      <img src="@/assets/images/profile-image-resize.png" alt="" class="" />
    </div>

    <div class="absolute -top-8 left-0 w-full h-full flex justify-between items-center px-4 2xl:px-0">
      <!-- name -->
      <div class="flex">
        <!-- name -->
        <div class="w-8/12">
          <div>
            <h1 class="flex justify-start items-start flex-col text-8xl font-bold">
              <span>Aaron</span>
              <span>Mendoza.</span>
            </h1>
            <span class="inline-block h-2 w-16 bg-primary mt-4"></span>
          </div>

          <!-- Social Media link -->
          <div class="flex justify-start items-start space-x-6 mt-28">
            <a href=""><img src="@/assets/images/dribbble.svg" alt="" /></a>
            <a href=""><img src="@/assets/images/instagram.svg" alt="" /></a>
            <a href=""><img src="@/assets/images/linkedin.svg" alt="" /></a>
          </div>
        </div>

        <!-- introduction -->
        <div class="w-4/12 flex-grow flex flex-col justify-between pl-10">
          <div>
            <h2 class="flex justify-start items-center space-x-2 text-gray-light mb-2">
              <span
                ><svg width="8" height="2" viewBox="0 0 8 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="8" height="2" rx="1" fill="#BDBDBD" />
                </svg>
              </span>
              <span>Introduction</span>
            </h2>
            <h3 class="text-4xl">Product Designer and Developer, based in California.</h3>
          </div>
          <p class="text-gray-light">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.</p>

          <button class="flex justify-start items-end space-x-4 text-xl text-primary font-semibold">
            <span>My story</span>
            <img src="@/assets/images/arrow.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style></style>
