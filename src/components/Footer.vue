<template>
  <footer class="bg-gray-darker relative">
    <div class="max-w-[1280px] mx-auto py-20 px-4 2xl:px-0">
      <!-- Text & form -->
      <div class="flex justify-between items-start">
        <!-- text -->
        <div class="">
          <div class="w-2/3">
            <div>
              <h3 class="text-4xl">All Creative Works, Selected projects.</h3>
              <p class="text-gray-light mt-6">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</p>
            </div>

            <a href="" class="flex justify-start items-end space-x-4 text-xl text-primary font-semibold mt-16">
              <span>hi@aaron.com</span>
              <img src="@/assets/images/arrow.svg" alt="" />
            </a>
          </div>
        </div>

        <!-- input -->
        <div>
          <h3 class="text-4xl w-2/3 mb-12">All Creative Works, Selected projects.</h3>

          <form action="" class="space-y-10">
            <div class="flex flex-col justify-start">
              <label for="name" class="text-2xl">What’s your name?</label>
              <input type="text" id="name" name="name" class="bg-transparent border-b py-2" style="border-color: rgba(189, 189, 189, 0.16)" />
            </div>
            <div class="flex flex-col justify-start">
              <label for="name" class="text-2xl">Your fancy email</label>
              <input type="email" id="name" name="name" class="bg-transparent border-b py-2" style="border-color: rgba(189, 189, 189, 0.16)" />
            </div>

            <div class="flex justify-between items-center pb-8 border-b" style="border-color: rgba(189, 189, 189, 0.16)">
              <label for="name" class="text-2xl">Tell me about your project</label>

              <div class="flex justify-between items-center space-x-4">
                <div class="w-12 relative">
                  <input type="file" id="name" name="name" class="w-12 border relative z-20 opacity-0 cursor-pointer" style="border-color: rgba(189, 189, 189, 0.16)" />
                  <img src="@/assets/images/attach.svg" alt="" class="absolute top-0 left-0 right-0 w-full h-full bg-gray-darker z-10" />
                </div>

                <button type="submit" class="p-1">
                  <img src="@/assets/images/arrow.svg" alt="" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <!-- bottom -->
      <div class="flex justify-center items-center flex-col space-y-12 mt-28">
        <!-- logo -->
        <img src="@/assets/images/logo.svg" alt="" />
        <p class="text-lg">
          <span class="font-bold">Thanks for scrolling,</span>
          <span class="text-gray-light"> that’s all folk’s</span>
        </p>

        <div class="flex justify-center items-center space-x-8">
          <img src="@/assets/images/dribbble.svg" alt="" />
          <img src="@/assets/images/instagram.svg" alt="" />
          <img src="@/assets/images/linkedin.svg" alt="" />
        </div>
      </div>
    </div>

    <div class="absolute top-0 left-0 transform translate-y-[-50%]">
      <img src="@/assets/images/left-dots.png" alt="" />
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped></style>
