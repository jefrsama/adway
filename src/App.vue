<template>
  <div id="app">
    <Header/>
    <router-view @hook:mounted="handleRouteMounted"></router-view>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

import {defineComponent} from "vue";
export default defineComponent({
  components: { Footer, Header},

  methods: {
    handleRouteMounted() {
      this.$nextTick(() => {
        const { hash } = this.$route;
        if (hash) {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    }
  }
})
</script>

<style>
#app {
  font-family: Monrope, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
