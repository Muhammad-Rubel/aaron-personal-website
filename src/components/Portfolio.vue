<template>
  <section class="bg-gray-dark pt-60 pb-32">
    <div class="max-w-[1280px] mx-auto px-4">
      <!-- Clients logo -->
      <div class="flex justify-center max-w-[950px] mx-auto">
        <div class="flex flex-wrap justify-between items-center">
          <div v-for="(client, i) in clients" :key="i" class="text-white flex justify-start items-center mt-8">
            <img :src="client" alt="" />
          </div>
        </div>
      </div>

      <div class="mt-28 grid grid-cols-2 gap-40">
        <!-- text -->
        <div class="">
          <div class="w-2/3">
            <div>
              <h3 class="flex justify-start items-center space-x-2 text-gray-light mb-2">
                <span
                  ><svg width="8" height="2" viewBox="0 0 8 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="8" height="2" rx="1" fill="#BDBDBD" />
                  </svg>
                </span>
                <span>Portfolio</span>
              </h3>
              <h3 class="text-4xl">All Creative Works, Selected projects.</h3>
              <p class="text-gray-light mt-6">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</p>
            </div>

            <a href="" class="flex justify-start items-end space-x-4 text-xl text-primary font-semibold mt-16">
              <span>Explore more</span>
              <img src="@/assets/images/arrow.svg" alt="" />
            </a>
          </div>
        </div>

        <!-- images -->
        <div v-for="(item, i) in 3" :key="i" :class="i === 1 && 'transform translate-y-[-50%]'">
          <img src="@/assets/images/portfolio-image.png" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      clients: [
        require("@/assets/images/clients-logo/ibm.svg"),
        require("@/assets/images/clients-logo/ibm-watson.svg"),
        require("@/assets/images/clients-logo/economist.png"),
        require("@/assets/images/clients-logo/longread.svg"),
        require("@/assets/images/clients-logo/bbc-america.svg"),
        require("@/assets/images/clients-logo/medium.svg"),
        require("@/assets/images/clients-logo/dribbble.svg"),
        require("@/assets/images/clients-logo/tumblr.svg"),
      ],
    };
  },
};
</script>

<style></style>
