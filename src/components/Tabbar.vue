<template>
  <div class="tabbar tabbar-fixed">123</div>
</template>

<script>
export default {};
</script>

<style>
.tabbar {
  height: 100px;
  width: 100%;
  margin: 0;
  background-color: #fff;
  z-index: 1;
  display: flex;
  box-sizing: content-box;
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
  border-radius: 20px 20px 0 0;
  /* box-shadow:  0px -1px 100px 2px #d2d2d297; */
  justify-content: center;
}
/* 添加tabbar阴影效果 */
.tabbar::before {
  border-radius: 20px 20px 0 0;
  height: 100px;
  width: 100%;
  box-shadow: 0px -10px 50px 3px #d2d2d297;
  content: "";
  z-index: -1;
  position: fixed;
  bottom: 0;
  left: 0;
}
.tabbar-fixed {
  position: fixed;
  bottom: 0;
  left: 0;
}

</style>