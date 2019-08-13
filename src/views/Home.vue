<template>
  <div class="home">
    <div class="col-1"></div>
    <div class="col-2"></div>
    <div class="col-3"></div>
    <div class="col-4"></div>
    <div class="col-5"></div>
    <div class="col-6"></div>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>

<style scoped lang="less">
.home {
  width: 1920px;
  margin: 0 auto;
  background: url("../assets/bg_03.jpg") center 0 no-repeat;
  background-attachment: fixed;
}
.col-1 {
  width: 1920px;
  height: 840px;
  background: url("../assets/bg_01.jpg") 0 0 no-repeat;
}
.col-2 {
  width: 1920px;
  height: 728px;
  background: url("../assets/bg_02.jpg") 0 0 no-repeat;
}
.col-3{
  width: 1920px;
  height: 1092px;
}
.col-4{
  width: 1920px;
  height: 690px;
  background-color: #1b1b1b;
}
.col-5 {
  width: 1920px;
  height: 600px;
  background: url("../assets/bg_04.jpg") 0 0 no-repeat;
}
.col-6{
  width: 1920px;
  height: 690px;
  background-color: #1b1b1b;
}
</style>
