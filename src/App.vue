<template>
  <div id="app" class="bg-gray-dark relative">
    <div class="fixed top-0 w-full z-50">
      <Header></Header>
    </div>
    <hero></hero>
    <contact></contact>
    <portfolio></portfolio>
    <Footer></Footer>
  </div>
</template>

<script>
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
import Hero from "./components/Hero.vue";
import Portfolio from "./components/Portfolio.vue";

export default {
  components: { Header, Hero, Contact, Portfolio, Footer },
};
</script>

<style>
body {
  @apply text-white;
}

button,
input,
a {
  @apply focus:outline-none cursor-pointer;
}
</style>
