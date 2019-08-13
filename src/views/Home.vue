<template>
  <div class="home">
    <div class="col-1"></div>
    <div class="col-2"></div>
    <div class="col-3"></div>
    <div class="col-4"></div>
    <div class="col-5">
      <div class="inner-wrap">{{$t('COL.TXT5')}}</div>
    </div>
    <div class="col-6">
      <div class="inner-wrap">
        <link-info v-for="(item,index) in linkArr" :key="index" :item="item"></link-info>
      </div>
    </div>
  </div>
</template>

<script>
import LinkInfo from "../components/LinkInfo";

export default {
  name: "home",
  data() {
    return {
      linkArr: [
        {
          avatarImg: "https://avatars2.githubusercontent.com/u/4?s=158&v=4",
          name: "Dr.Xxxxxx Xxxx ",
          position: "CEO"
        },
        {
          avatarImg: "https://avatars2.githubusercontent.com/u/4?s=158&v=4",
          name: "Dr.Xxxxxx Xxxx ",
          position: "CEO"
        },
        {
          avatarImg: "https://avatars2.githubusercontent.com/u/4?s=158&v=4",
          name: "Dr.Xxxxxx Xxxx ",
          position: "CEO"
        },
        {
          avatarImg: "https://avatars2.githubusercontent.com/u/4?s=158&v=4",
          name: "Dr.Xxxxxx Xxxx ",
          position: "CEO"
        },
        {
          avatarImg: "https://avatars2.githubusercontent.com/u/4?s=158&v=4",
          name: "Dr.Xxxxxx Xxxx ",
          position: "CEO"
        },
        {
          avatarImg: "https://avatars2.githubusercontent.com/u/4?s=158&v=4",
          name: "Dr.Xxxxxx Xxxx ",
          position: "CEO"
        }
      ]
    };
  },
  components: {
    LinkInfo
  }
};
</script>

<style scoped lang="less">
.home {
  width: 1920px;
  margin: 0 auto;
  background: url("../assets/bg_03.jpg") center 0 no-repeat;
  background-attachment: fixed;
}
.inner-wrap {
  width: 1200px;
  margin: 0 auto;
}
.col-1 {
  height: 840px;
  background: url("../assets/bg_01.jpg") 0 0 no-repeat;
}
.col-2 {
  height: 730px;
  background: url("../assets/bg_02.jpg") 0 0 no-repeat;
}
.col-3 {
  height: 1092px;
}
.col-4 {
  height: 690px;
  background-color: #1b1b1b;
}
.col-5 {
  height: 600px;
  background: url("../assets/bg_04.jpg") 0 0 no-repeat;
}
.col-6 {
  background-color: #1b1b1b;
  padding: 130px 0 110px 0;
  .inner-wrap {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    &:after {
      width: 30%;
    }
  }
}
</style>
