<template>
  <div class="home">
    <div class="col-1">
      <div class="inner-wrap">
        <div class="word">
          <div class="tit">
            <span class="sp1">NEW</span>
            <span class="sp2">POWER&nbsp;&nbsp;&nbsp;</span>
          </div>
          <div class="con">{{$t('COL1')}}</div>
        </div>
      </div>
    </div>
    <div class="col-2">
      <div class="inner-wrap">
        <swiper :options="swiperOption" class="swiper-container">
          <swiper-slide class="box">
            <div class="img-0"></div>
            <div class="line"></div>
            <div class="word">
              <div class="tit">{{$t('SWIPER[0].tit')}}</div>
              <div class="con">{{$t('SWIPER[0].con')}}</div>
            </div>
          </swiper-slide>
          <swiper-slide class="box">
            <div class="img-1"></div>
            <div class="line"></div>
            <div class="word">
              <div class="tit">{{$t('SWIPER[1].tit')}}</div>
              <div class="con">{{$t('SWIPER[1].con')}}</div>
            </div>
          </swiper-slide>
          <swiper-slide class="box">
            <div class="img-2"></div>
            <div class="line"></div>
            <div class="word">
              <div class="tit">{{$t('SWIPER[2].tit')}}</div>
              <div class="con">{{$t('SWIPER[2].con')}}</div>
            </div>
          </swiper-slide>
          <swiper-slide class="box">
            <div class="img-3"></div>
            <div class="line"></div>
            <div class="word">
              <div class="tit">{{$t('SWIPER[3].tit')}}</div>
              <div class="con">{{$t('SWIPER[3].con')}}</div>
            </div>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
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
      <div class="inner-wrap">
        <div class="box">
          <a href="javascript:;" class="item">
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
          </a>
        </div>
      </div>
    </div>
    <div class="col-5">
      <div class="inner-wrap">
        <div class="word">
          <div class="tit">
            <span class="sp1">NEW</span>
            <span class="sp2">POWER COIN</span>
          </div>
          <div class="con">{{$t('COL5')}}</div>
        </div>
      </div>
    </div>
    <div class="col-6">
      <div class="inner-wrap">
        <link-info v-for="(item,index) in linkArr" :key="index" :item="item"></link-info>
      </div>
    </div>
  </div>
</template>

<script>
import "video.js/dist/video-js.css";
import "swiper/dist/css/swiper.css";
import { videoPlayer } from "vue-video-player";
import { swiper, swiperSlide } from "vue-awesome-swiper";
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
      ],
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
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: "video/mp4", //这里的种类支持很多种：基本视频格式、直播、流媒体等，具体可以参看git网址项目
            src: "http://www.xinnengboan.com/wp-content/mp4/xinneng.mp4" //url地址
          }
        ],
        poster: require("../assets/test.jpg"), //你的封面地址
        notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true //全屏按钮
        }
      }
    };
  },
  components: {
    swiper,
    swiperSlide,
    LinkInfo,
    videoPlayer
  }
};
</script>

<style scoped lang="less">
.home {
  max-width: 1920px;
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
  .word {
    padding-top: 360px;
    .tit {
      font-size: 80px;
      margin-bottom: 30px;
      .sp1 {
        color: #7fca70;
      }
      .sp2 {
        color: #ececec;
        border-bottom: 1px solid #7fca70;
      }
    }
    .con {
      color: #ececec;
      font-size: 40px;
    }
  }
}
.col-2 {
  height: 730px;
  background: url("../assets/bg_02.jpg") 0 0 no-repeat;
  padding-top: 120px;
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
      width: 390px;
      height: 390px;
      flex: 0 0 auto;
    }
    .img-0 {
      background: url("../assets/swiper_0.png") 0 0 no-repeat;
    }
    .img-1 {
      background: url("../assets/swiper_0.png") 0 0 no-repeat;
    }
    .img-2 {
      background: url("../assets/swiper_0.png") 0 0 no-repeat;
    }
    .img-3 {
      background: url("../assets/swiper_0.png") 0 0 no-repeat;
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
      }
      .con {
        font-size: 18px;
        text-indent: 36px;
        line-height: 1.8;
      }
    }
  }
}
.col-3 {
  height: 1092px;
  padding-top: 90px;
  .videobox {
    width: 1200px;
    height: 762px;
    background: url("../assets/videobg.png") 0 0 no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    .video-player {
      width: 1090px;
    }
  }
}
.col-4 {
  height: 690px;
  background-color: #1b1b1b;
  .inner-wrap {
    position: relative;
  }
  .box {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    position: absolute;
    top: -160px;
    a.item {
      width: 590px;
      height: 370px;
      background-color: rgba(0, 0, 0, 0.5);
      margin-bottom: 20px;
      padding: 0 35px;
      .icon {
        height: 180px;
        display: flex;
        align-items: center;
        justify-content: center;
        i {
          width: 115px;
          height: 115px;
          display: block;
          border-radius: 50%;
        }
        i.i1 {
          background: #fff url("../assets/icon1.png") 0 0 no-repeat;
        }
        i.i2 {
          background: #fff url("../assets/icon2.png") 0 0 no-repeat;
        }
        i.i3 {
          background: #fff url("../assets/icon3.png") 0 0 no-repeat;
        }
        i.i4 {
          background: #fff url("../assets/icon4.png") 0 0 no-repeat;
        }
      }
      .tit {
        font-size: 30px;
        text-align: center;
        margin-bottom: 25px;
      }
      .con {
        font-size: 18px;
        line-height: 1.8;
      }
      &:hover {
        .icon {
          i {
            background-color: #7ec76f;
            background-position: 0 -115px;
          }
        }
      }
    }
  }
}
.col-5 {
  height: 600px;
  background: url("../assets/bg_04.jpg") 0 0 no-repeat;
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
}

/deep/.video-js .vjs-big-play-button .vjs-icon-placeholder {
  display: none;
}

/deep/.vjs-button > .vjs-icon-placeholder:before {
  font-size: 22px;
}

.en {
  .col-4 .box a.item .tit {
    font-size: 20px;
    line-height: 1.2;
  }
  .col-4 .box a.item .con {
    font-size: 16px;
    line-height: 1.4;
  }
}
</style>
