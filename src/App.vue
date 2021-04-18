<template>
  <div class="home">
    <!-- 头像 -->
    <div class="header__top">
      <div class="user-name">leepool</div>
      <div class="user-img">
        <img
          src="https://avatars.githubusercontent.com/u/47255125?v=4"
          alt=""
        />
      </div>
    </div>
    <router-view />

    <Bgc />
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">主页</van-tabbar-item>
      <van-tabbar-item icon="search">标签</van-tabbar-item>
      <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import HelloWorld from "@/components/HelloWorld.vue";
import Bgc from "@/components/Bgc.vue";
import { ref } from "vue";
export default {
  name: "Home",
  components: {
    HelloWorld,
    Bgc,
  },
  setup() {
    const active = ref(0);
    return { active };
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.header__top{
width: 100%;
height: 80px;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 20px;
box-sizing: border-box;
}
.user-name{
  font-size: 25px;
  font-weight: bold;
}
.user-img img{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid #dedede;
}
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
