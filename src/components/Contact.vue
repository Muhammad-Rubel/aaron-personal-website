<template>
  <section id="services" class="bg-gray-darker w-full relative pb-48">
    <div class="px-4 2xl:px-0 max-w-[1280px] mx-auto pt-24 pb-36">
      <div class="flex justify-between items-start">
        <!-- Left -->
        <div class="flex flex-col justify-between w-7/12 self-stretch">
          <div class="w-1/2 h-full flex flex-col justify-between items-start">
            <div>
              <h3 class="flex justify-start items-center space-x-2 text-gray-light mb-2">
                <span
                  ><svg width="8" height="2" viewBox="0 0 8 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="8" height="2" rx="1" fill="#BDBDBD" />
                  </svg>
                </span>
                <span>Contact</span>
              </h3>
              <h3 class="text-4xl">Any Type Of Query & Discussion.</h3>
              <p class="text-gray-light mt-6">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed .</p>
            </div>

            <a href="" class="flex justify-start items-end space-x-4 text-xl text-primary font-semibold">
              <span>hi@aaron.com</span>
              <img src="@/assets/images/arrow.svg" alt="" />
            </a>
          </div>
        </div>
        <!-- right -->
        <div class="w-5/12 pl-8">
          <h3 class="text-4xl mb-6">You can’t use up creativity, the more you use, more you have in your significsnt mind.</h3>
          <p class="text-gray-light mb-10 pr-24">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.</p>

          <div class="flex justify-between items-center space-x-12">
            <div class="space-x-4 flex justify-start items-end">
              <span class="text-7xl text-primary font-bold">14</span>
              <span>Years of Experience.</span>
            </div>
            <div class="space-x-4 flex justify-start items-end">
              <span class="text-7xl text-primary font-bold">187</span>
              <span>Satisfied Clients.</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- box links -->
    <div class="absolute bottom-0 w-full transform translate-y-[45%] px-4">
      <div class="flex justify-between items-start space-x-10 max-w-[1280px] mx-auto">
        <div v-for="(item, i) in experiences" :key="i" class="bg-[#434759] flex justify-center items-start space-x-10 px-20 pt-52 pb-16">
          <img :src="item.image" alt="" class="mt-2" />
          <div>
            <h3 class="text-4xl font-semibold">{{ item.title }}</h3>
            <p class="text-gray-light mt-4">{{ item.totalProject }}</p>
          </div>
        </div>
      </div>
    </div>

    <!--  corner image -->
    <div class="absolute top-0 left-0 transform translate-y-[-50%]">
      <img src="@/assets/images/left-dots.png" alt="" />
    </div>
    <div class="absolute bottom-0 right-0 transform translate-y-[50%]">
      <img src="@/assets/images/right-dots.png" alt="" />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      experiences: [
        {
          title: "Product Designer.",
          totalProject: "124 Projects",
          image: require("@/assets/images/box.svg"),
        },
        {
          title: "Branding Designer.",
          totalProject: "37 Projects",
          image: require("@/assets/images/pen.svg"),
        },
        {
          title: "Full Stack Developer.",
          totalProject: "62 Projects",
          image: require("@/assets/images/pc.svg"),
        },
      ],
    };
  },
};
</script>

<style></style>
