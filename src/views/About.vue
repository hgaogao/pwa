<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Tabbar/>
  </div>
</template>
<script>
import Tabbar from "@/components/Tabbar.vue";
export default {
  name: "About",
  components: {
    Tabbar,
  },
  setup() {},
};
</script>