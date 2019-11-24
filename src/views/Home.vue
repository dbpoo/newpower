<template>
  <div class="home">
    <div class="col-1">
      <div class="inner-wrap">
        <div class="word">
          <div class="tit">
            <span class="sp1">NEW</span>
            <span class="sp2">POWER&nbsp;&nbsp;&nbsp;</span>
          </div>
          <div :class="'con con-' + lang">{{ $t("COL1") }}</div>
        </div>
      </div>
    </div>
    <div class="col-2">
      <div class="canvas-bg">
        <vue-particles
          id="canvabg1"
          color="#5e6f7e"
          :particleOpacity="0.7"
          :particlesNumber="50"
          shapeType="circle"
          :particleSize="4"
          linesColor="#dedede"
          :linesWidth="1"
          :lineLinked="true"
          :lineOpacity="0.4"
          :linesDistance="150"
          :moveSpeed="3"
          :hoverEffect="true"
          hoverMode="grab"
          :clickEffect="true"
          clickMode="push"
        ></vue-particles>
      </div>
      <div class="inner-wrap">
        <div class="col-tit">
          <span>NEWPOWER</span>
          {{ $t("COL2_tit") }}
        </div>
        <div class="col-desc">
          {{ $t("COL2_desc") }}
        </div>
        <swiper :options="swiperOption" class="swiper-container">
          <swiper-slide class="box">
            <div class="img-0">
              <i></i>
            </div>
            <!-- <div class="line"></div> -->
            <div class="word">
              <div class="tit" :class="lang" v-html="$t('SWIPER[0].tit')"></div>
              <div class="con" :class="lang">{{ $t("SWIPER[0].con") }}</div>
            </div>
          </swiper-slide>
          <swiper-slide class="box">
            <div class="img-1">
              <i></i>
            </div>
            <!-- <div class="line"></div> -->
            <div class="word">
              <div class="tit" :class="lang" v-html="$t('SWIPER[1].tit')"></div>
              <div class="con" :class="lang">{{ $t("SWIPER[1].con") }}</div>
            </div>
          </swiper-slide>
          <swiper-slide class="box">
            <div class="img-2">
              <i></i>
            </div>
            <!-- <div class="line"></div> -->
            <div class="word">
              <div class="tit" :class="lang" v-html="$t('SWIPER[2].tit')"></div>
              <div class="con" :class="lang">{{ $t("SWIPER[2].con") }}</div>
            </div>
          </swiper-slide>
          <!-- <swiper-slide class="box">
            <div class="img-3">
              <i></i>
            </div>
            <div class="line"></div>
            <div class="word">
              <div class="tit">{{$t('SWIPER[3].tit')}}</div>
              <div class="con">{{$t('SWIPER[3].con')}}</div>
            </div>
          </swiper-slide> -->
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
    </div>
    <div class="col-2-1">
      <div class="col-tit">
        <div class="txt-bg">
          <span>NEWPOWER</span>
          {{ $t("COL2_1_tit") }}
        </div>
      </div>
      <div class="box">
        <div
          class="cj-list"
          v-for="(item, index) in $t('COL2_List')"
          :key="index"
        >
          <img v-if="index === 0" src="../assets/cj_icon1.png" alt="" />
          <img v-if="index === 1" src="../assets/cj_icon2.png" alt="" />
          <img v-if="index === 2" src="../assets/cj_icon3.png" alt="" />
          <img v-if="index === 3" src="../assets/cj_icon4.png" alt="" />
          <h3 v-html="item.title"></h3>
          <p v-html="item.con"></p>
        </div>
      </div>
    </div>
    <div class="col-3">
      <div class="inner-wrap">
        <div class="videobox">
          <video-player
            class="video-player vjs-custom-skin vjs-big-play-centered"
            ref="videoPlayer"
            :playsinline="true"
            :options="playerOptions"
          ></video-player>
        </div>
      </div>
    </div>
    <div class="col-4">
      <!-- <div class="bg"></div> -->
      <div class="inner-wrap">
        <div class="col-tit">
          <div class="txt-bg">
            <span>NEWPOWER</span>
            {{ $t("COL4_tit") }}
          </div>
        </div>
        <div class="box">
          <div class="desc">{{ $t("COL4_DESC") }}</div>
          <div
            class="tech-box"
            :class="{ show: this.scrollTop > 2400 }"
            ref="techBox1"
          >
            <img src="../assets/tech_icon1.png" alt="" />
            <div class="text">
              <h3>{{ $t("COL4[0].tit") }}</h3>
              <div class="desc">{{ $t("COL4[0].desc") }}</div>
              <p>{{ $t("COL4[0].con") }}</p>
            </div>
          </div>
          <div
            class="tech-box"
            :class="{ show: this.scrollTop > 2700 }"
            ref="techBox2"
          >
            <div class="text">
              <h3>{{ $t("COL4[1].tit") }}</h3>
              <div class="desc">{{ $t("COL4[1].desc") }}</div>
              <p>{{ $t("COL4[1].con") }}</p>
            </div>
            <img src="../assets/tech_icon2.png" alt="" />
          </div>
          <div
            class="tech-box"
            :class="{ show: this.scrollTop > 3000 }"
            ref="techBox3"
          >
            <img src="../assets/tech_icon3.png" alt="" />
            <div class="text">
              <h3>{{ $t("COL4[2].tit") }}</h3>
              <div class="desc">{{ $t("COL4[2].desc") }}</div>
              <p>{{ $t("COL4[2].con") }}</p>
            </div>
          </div>
          <!-- <a href="javascript:;" class="item">
            <div class="icon">
              <i class="i1"></i>
            </div>
            <div class="tit">{{$t('COL4[0].tit')}}</div>
            <div class="con">{{$t('COL4[0].con')}}</div>
          </a>
          <a href="javascript:;" class="item">
            <div class="icon">
              <i class="i2"></i>
            </div>
            <div class="tit">{{$t('COL4[1].tit')}}</div>
            <div class="con">{{$t('COL4[1].con')}}</div>
          </a>
          <a href="javascript:;" class="item">
            <div class="icon">
              <i class="i3"></i>
            </div>
            <div class="tit">{{$t('COL4[2].tit')}}</div>
            <div class="con">{{$t('COL4[2].con')}}</div>
          </a>
          <a href="javascript:;" class="item">
            <div class="icon">
              <i class="i4"></i>
            </div>
            <div class="tit">{{$t('COL4[3].tit')}}</div>
            <div class="con">{{$t('COL4[3].con')}}</div>
          </a> -->
        </div>
      </div>
    </div>
    <!-- <div class="col-5">
      <div class="canvas-bg">
        <vue-particles
          id="canvabg2"
          color="#5e6f7e"
          :particleOpacity="0.7"
          :particlesNumber="50"
          shapeType="circle"
          :particleSize="4"
          linesColor="#dedede"
          :linesWidth="1"
          :lineLinked="true"
          :lineOpacity="0.4"
          :linesDistance="150"
          :moveSpeed="3"
          :hoverEffect="true"
          hoverMode="grab"
          :clickEffect="true"
          clickMode="push"
        ></vue-particles>
      </div>
      <div class="inner-wrap">
        <div class="word">
          <div class="tit">
            <span class="sp1">NEW</span>
            <span class="sp2">POWER COIN</span>
          </div>
          <div class="con">{{$t('COL5')}}</div>
        </div>
      </div>
    </div> -->
    <div class="col-6">
      <div class="inner-warp">
        <div class="col-tit">
          <div class="txt-bg">
            <span>{{ $t("COL6_tit") }}</span>
          </div>
        </div>
      </div>
      <div class="inner-wrap flex-1">
        <link-info
          v-for="(item, index) in $t('linkArr1')"
          :key="index"
          :item="item"
          :class="`item item-` + index"
        ></link-info>
      </div>
      <div class="inner-wrap flex-1">
        <link-info
          v-for="(item, index) in $t('linkArr2')"
          :key="index"
          :item="item"
          :class="`item item-` + index"
        ></link-info>
      </div>
      <div class="inner-warp">
        <div class="col-tit">
          <div class="txt-bg">
            <span>{{ $t("COL6_tit_1") }}</span>
          </div>
        </div>
      </div>
      <div class="inner-wrap flex-1">
        <link-info
          v-for="(item, index) in $t('linkArr3')"
          :key="index"
          :item="item"
          :class="`item item-` + index"
        ></link-info>
      </div>
      <div class="inner-wrap flex-1">
        <link-info
          v-for="(item, index) in $t('linkArr4')"
          :key="index"
          :item="item"
          :class="`item item-` + index"
        ></link-info>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import VueParticles from "../components/vue-particles";
import "video.js/dist/video-js.css";
import "swiper/dist/css/swiper.css";
import { videoPlayer } from "vue-video-player";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import LinkInfo from "../components/LinkInfo";

Vue.use(VueParticles);

export default {
  name: "home",
  data() {
    return {
      scrollTop: 0,
      lang: sessionStorage.getItem("LANG"),
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      playerOptions: {
        autoplay: false, // 如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: "video/mp4", // 这里的种类支持很多种：基本视频格式、直播、流媒体等，具体可以参看git网址项目
            src: "http://www.xinnengboan.com/wp-content/mp4/xinneng.mp4" // url地址
          }
        ],
        poster: require("../assets/test.jpg"), // 你的封面地址
        notSupportedMessage: "此视频暂无法播放，请稍后再试", // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true // 全屏按钮
        }
      }
    };
  },
  components: {
    swiper,
    swiperSlide,
    LinkInfo,
    videoPlayer
  },
  mounted() {
    window.onscroll = () => {
      this.scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
    };
  }
};
</script>

<style scoped lang="less">
.home {
  width: 100%;
  margin: 0 auto;
  background: url("../assets/bg_03.jpg") center 0 no-repeat;
  background-attachment: fixed;
}

.col-1 {
  overflow: hidden;
  height: 840px;
  background: #090908 url("../assets/bg_01.jpg") center 0 no-repeat;
  .word {
    height: 244px;
    width: 1100px;
    margin-top: 324px;
    background: url("../assets/txtbg.png") 0 0 repeat-y;
    background-size: 100%;
    padding-left: 10px;
    .tit {
      font-size: 110px;
      .sp1 {
        color: #7fca70;
      }
      .sp2 {
        color: #ececec;
        border-bottom: 3px solid #7fca70;
      }
    }
    .con {
      color: #ececec;
      font-size: 40px;
    }
    .con-zh {
      font-size: 50px;
    }
  }
}
.col-2 {
  height: 915px;
  background-color: #090908;
  position: relative;
  .canvas-bg {
    width: 100%;
    height: 730px;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
  }
  .col-desc {
    margin: 30px 0 50px 0;
    padding: 0 20px;
    line-height: 30px;
    font-size: 18px;
    text-align: center;
    letter-spacing: 1px;
  }
  .swiper-container {
    padding-bottom: 100px;
  }
  .box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 110px 0 120px;
    .img-0,
    .img-1,
    .img-2,
    .img-3 {
      width: 420px;
      height: 420px;
      flex: 0 0 auto;
      display: flex;
      justify-content: center;
      padding-top: 60px;
      transition: all 0.5s;
    }
    .img-0 {
      background: url("../assets/swiper_0.png") 0 0 no-repeat;
    }
    .img-1 {
      background: url("../assets/swiper_1.png") 0 0 no-repeat;
    }
    .img-2 {
      background: url("../assets/swiper_2.png") 0 0 no-repeat;
    }
    .img-3 {
      background: url("../assets/swiper_3.png") 0 0 no-repeat;
    }

    .line {
      margin: 0 54px;
      width: 10px;
      height: 174px;
      background-color: #7fca70;
      flex: 0 0 auto;
    }
    .word {
      .tit {
        font-size: 30px;
        text-align: center;
        color: #7ec76f;
        margin-bottom: 40px;
        white-space: nowrap;
        &.en {
          text-align: left;
          font-size: 26px;
        }
      }
      .con {
        font-size: 18px;
        line-height: 1.8;
        &.en {
          width: 80%;
        }
      }
    }
    .img-0 {
      &:hover {
        background: url("../assets/swiper_0_hover.png") 0 0 no-repeat;
      }
    }
    .img-1 {
      &:hover {
        background: url("../assets/swiper_1_hover.png") 0 0 no-repeat;
      }
    }
    .img-2 {
      &:hover {
        background: url("../assets/swiper_2_hover.png") 0 0 no-repeat;
      }
    }
    .img-3 {
      &:hover {
        background: url("../assets/swiper_3_hover.png") 0 0 no-repeat;
      }
    }
  }
}
.col-2-1 {
  height: 550px;
  padding-top: 90px;
  .box {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .cj-list {
      padding-top: 20px;
      width: 286px;
      min-height: 318px;
      display: flex;
      flex-direction: column;
      border-radius: 8px;
      cursor: pointer;
      &:hover {
        background-color: rgba(72, 115, 64, 0.8);
      }
      img {
        margin: 0 auto;
      }
      h3 {
        font-size: 22px;
        font-weight: bold;
        text-align: center;
        margin-bottom: 20px;
      }
      p {
        font-size: 18px;
        line-height: 30px;
        text-align: center;
      }
    }
  }
}
.col-3 {
  height: 900px;
  padding-top: 90px;
  .videobox {
    width: 1200px;
    height: 714px;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    .video-player {
      width: 1137px;
    }
  }
}
.col-4 {
  position: relative;
  .inner-wrap {
    position: relative;
  }
  // .bg {
  //   position: absolute;
  //   top: 180px;
  //   left: 0;
  //   bottom: 0;
  //   right: 0;
  //   background-color: #1b1b1b;
  //   z-index: 0;
  // }
  .txt-bg {
    display: inline-block;
    background-color: rgba(0, 0, 0, 0.8);
    padding: 10px 20px;
  }
  .box {
    z-index: 1;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-bottom: 100px;
    > .desc {
      margin-bottom: 110px;
      padding: 0 20px;
      font-size: 18px;
      line-height: 40px;
      text-align: center;
    }
    .tech-box {
      margin-bottom: 110px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      &.show {
        opacity: 0;
        animation: changePos 0.5s 0s ease-in forwards;
      }
      &:last-child {
        margin-bottom: 0;
      }
      img {
        width: 454px;
        height: 223px;
      }
      &:nth-child(3) {
        .text .desc::after {
          left: 130px;
          width: 480px;
        }
      }
      &:nth-child(4) {
        .text .desc::after {
          left: 130px;
          width: 480px;
        }
      }
      .text {
        width: 643px;
        h3 {
          font-size: 30px;
          color: #7fca70;
          line-height: 34px;
        }
        .desc {
          position: relative;
          font-size: 24px;
          margin-top: 10px;
          margin-bottom: 30px;
          &::after {
            position: absolute;
            content: "";
            left: 190px;
            top: -20px;
            width: 290px;
            height: 4px;
            background-color: #7fca70;
          }
        }
        p {
          text-align: justify;
          font-size: 18px;
        }
      }
    }
    // a.item {
    //   width: 590px;
    //   background-color: rgba(0, 0, 0, 0.7);
    //   margin-bottom: 20px;
    //   padding: 0 35px;
    //   transition: all 0.5s;
    //   &:hover {
    //     color: #fff;
    //     box-shadow: 0px 0px 40px #7fca70;
    //   }
    //   .icon {
    //     height: 180px;
    //     display: flex;
    //     align-items: center;
    //     justify-content: center;
    //     i {
    //       width: 330px;
    //       height: 180px;
    //       display: block;
    //       border-radius: 50%;
    //     }
    //     i.i1 {
    //       background: url("../assets/icon1.png") 0 0 no-repeat;
    //     }
    //     i.i2 {
    //       background: url("../assets/icon2.png") 0 0 no-repeat;
    //     }
    //     i.i3 {
    //       background: url("../assets/icon3.png") 0 0 no-repeat;
    //     }
    //     i.i4 {
    //       background: url("../assets/icon4.png") 0 0 no-repeat;
    //     }
    //   }
    //   .tit {
    //     font-size: 30px;
    //     text-align: center;
    //     margin-bottom: 25px;
    //   }
    //   .con {
    //     font-size: 18px;
    //     line-height: 1.8;
    //     padding-bottom: 50px;
    //     text-align: justify;
    //     text-justify: newspaper;
    //   }
    // }
  }
}
.col-5 {
  height: 600px;
  position: relative;
  background: #000000 url("../assets/bg_04.jpg") center 0 no-repeat;
  .canvas-bg {
    width: 100%;
    height: 600px;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
  }
  .word {
    width: 600px;
    padding-top: 220px;
    float: right;
    .tit {
      font-size: 30px;
      color: #7ec76f;
      margin-bottom: 30px;
      .sp1 {
        border-bottom: 1px solid #7ec76f;
        margin-right: 10px;
      }
      .sp2 {
        border-bottom: 1px solid #ffffff;
      }
    }
    .con {
      font-size: 18px;
    }
  }
}
.col-6 {
  padding: 100px 0 110px 0;
  .flex-1 {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    // .item {
    // z-index: 9;
    // }
  }
  .flex-2 {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    .item {
      z-index: 8;
      margin: 0 28px;
    }
  }
}

.col-tit {
  text-align: center;
  font-size: 30px;
  padding: 50px 0;
  span {
    color: #7ec76f;
  }
}

/deep/.swiper-button-prev,
.swiper-button-next {
  width: 70px;
  height: 70px;
  margin-top: -35px;
  background-size: contain;
}

/deep/.swiper-button-prev,
.swiper-container-rtl .swiper-button-next {
  background-image: url("../assets/arrow_l.png");
  outline: none;
}

/deep/.swiper-button-next,
.swiper-container-rtl .swiper-button-prev {
  background-image: url("../assets/arrow_r.png");
  outline: none;
}

/deep/.swiper-pagination-bullet {
  width: 20px;
  height: 20px;
  background-color: #b4b4b4;
  opacity: 1;
}

/deep/.swiper-pagination-bullet-active {
  background-color: #7ec76f;
}

/deep/.swiper-container-horizontal
  > .swiper-pagination-bullets
  .swiper-pagination-bullet {
  margin: 0 12px;
}

/deep/.vjs-poster {
  background-size: cover;
}

/deep/.video-js .vjs-big-play-button {
  width: 186px;
  height: 186px;
  background: url("../assets/icon_play.png") 0 0 no-repeat;
  border: 0;
  margin-top: -93px;
  margin-left: -93px;
  outline: none;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
}

/deep/.video-js .vjs-big-play-button:hover {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

/deep/.video-js .vjs-big-play-button .vjs-icon-placeholder {
  display: none;
}

/deep/.vjs-button > .vjs-icon-placeholder:before {
  font-size: 22px;
}
@keyframes changePos {
  from {
    opacity: 0;
    transform: translateY(100px);
  }
  to {
    opacity: 1;
  }
}
</style>
