<template>
  <div class="about">
    <div class="col-1">
      <div class="inner-wrap">
        <h3>{{$t('NEWS_Title')}}</h3>
      </div>
    </div>
    <div class="col-2">
      <div class="inner-wrap">
        <router-link tag="div" class="news" v-for="(item, index) in $t('NEWS')" :key="index" :to="`/detail/${index + 1}`">
          <img :src="item.img" alt="">
          <div class="text">
            <h3>{{item.title}}</h3>
            <p>{{item.infos}}</p>
            <div class="infos">
              <div class="time">[{{item.time}}]</div>
              <div class="more">更多详情 &gt;&gt;</div>
            </div>
          </div>
        </router-link>
        <div class="pages">
          <div class="prev">&lt;</div>
          <div class="active">1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div class="next">&gt;</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      lang: window.LANG
    };
  }
};
</script>

<style scoped lang="less">
.about {
  width: 100%;
  margin: 0 auto;
}
.col-1 {
  overflow: hidden;
  height: 555px;
  background: #090908 url("../assets/news_banner.jpg") center 0 no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  h3 {
    margin: 0 auto;
    width: 444px;
    font-size: 60px;
    font-weight: normal;
    text-align: center;
    background: linear-gradient(to right, rgba(0,0,0,.1), rgba(0,0,0,.6), rgba(0,0,0,.1));
  }
}
.col-2 {
  overflow: hidden;
  padding-top: 132px;
  background-color: #fff;
  .news{
    position: relative;
    display: flex;
    color: #6C6C6C;
    cursor: pointer;
    padding: 36px 28px;
    margin-bottom: 72px;
    &::after{
      position: absolute;
      content: '';
      width: 100%;
      height: 0;
      left: 0;
      bottom: -36px;
      border-top: 1px solid #C9C9C9;
    }
    &:nth-last-child(2)::after{
      border-top: 0;
    }
    img{
      margin-right: 40px;
      width: 224px;
      height: 143px;
    }
    .text{
      flex: 1;
      h3{
        font-size: 24px;
      }
      p {
        text-indent: 2em;
        font-size: 18px;
        color: #6C6C6C;
        line-height: 40px;
        text-align: justify;
      }
      .infos {
        display: flex;
        justify-content: space-between;
        .time{
          font-size: 14px;
        }
        .more{
          font-size: 18px;
          font-weight: bold;
        }
      }
    }
    &:hover {
      background-color: #f7f7f7;
      .text{
        h3 {
          color: #7EC76F;
        }
      }
      .infos {
        .time,.more{
          color: #7EC76F;
        }
      }
    }
  }
  .pages{
    margin: 110px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000;
    .prev, .next{
      margin: 0 10px;
      width: 26px;
      height: 26px;
      color: #fff;
      text-align: center;
      background-color: #7EC76F;
    }
    > div{
      cursor: pointer;
      width: 26px;
      text-align: center;
      &.active{
        color: #7EC76F;
      }
    }

  }
}
</style>
