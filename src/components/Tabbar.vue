<template>
  <Bgc />
  <van-tabbar v-model="active" >
    <van-tabbar-item replace to="/" icon="home-o">主页</van-tabbar-item>
    <van-tabbar-item replace to="/my" icon="search">标签</van-tabbar-item>
    <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
  </van-tabbar>
</template>

<script>
import Bgc from "./Bgc";
import { ref } from "vue";

export default {
  name: "Tabbar",
  components: {
    Bgc,
  },
  setup() {
    const active = ref(0);
    return {
      active,
    };
  },
};
</script>
<style scoped>
.van-tabbar {
  height: 80px;
  border-radius: 25px 25px 0 0;
}
.van-tabbar-item--active {
  border-radius: 25px 25px 0 0;
}
.van-hairline--top-bottom::after {
  border-radius: 25px 25px 0 0;
}
</style>
