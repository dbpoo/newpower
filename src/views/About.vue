<template>
  <div class="about">
    <div class="col-1">
      <div class="inner-wrap">
        <h3>NEWPOWER</h3>
        <p>{{$t('ABOUT.TITLE')}}</p>
      </div>
    </div>
    <div class="col-2">
      <div class="inner-wrap">
        <div class="title">
          <div class="con" v-if="lang === 'zh'"><span>NEWPOWER</span> {{$t('ABOUT.Introduce_tit')}}</div>
          <div class="con" v-else>{{$t('ABOUT.Introduce_tit')}} <span>NEW POWER</span></div>
        </div>
        <div class="col_con">
          <img src="../assets/about_01.png" alt="">
          <div class="text">
            <p v-for="(item, index) in $t('ABOUT.Introduce')" :key="index">{{item}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="col-3">
      <div class="inner-wrap">
        <div class="title">
          <div class="con" v-if="lang === 'zh'"><span>NEWPOWER</span> {{$t('ABOUT.Line_tit')}}</div>
          <div class="con" v-else>{{$t('ABOUT.Line_tit')}} <span>NEW POWER</span></div>
        </div>
        <div class="col_con">
          <div class="timeline">
            <div class="time_infos" :class="{'en': lang==='en'}">
              <div class="time">{{$t('ABOUT.Line_Infos[0].time')}}</div>
              <div class="con" v-html="$t('ABOUT.Line_Infos[0].con')"></div>
            </div>
            <div class="time_infos down" :class="{'en': lang==='en'}">
              <div class="con" v-html="$t('ABOUT.Line_Infos[1].con')"></div>
              <div class="time">{{$t('ABOUT.Line_Infos[1].time')}}</div>
            </div>
            <div class="time_infos" :class="{'en': lang==='en'}">
              <div class="time">{{$t('ABOUT.Line_Infos[2].time')}}</div>
              <div class="con" v-html="$t('ABOUT.Line_Infos[2].con')"></div>
            </div>
            <div class="time_infos down" :class="{'en': lang==='en'}">
              <div class="con" v-html="$t('ABOUT.Line_Infos[3].con')"></div>
              <div class="time">{{$t('ABOUT.Line_Infos[3].time')}}</div>
            </div>
            <div class="time_infos" :class="{'en': lang==='en'}">
              <div class="time">{{$t('ABOUT.Line_Infos[4].time')}}</div>
              <div class="con" v-html="$t('ABOUT.Line_Infos[4].con')"></div>
            </div>
            <div class="time_infos down" :class="{'en': lang==='en'}">
              <div class="con" v-html="$t('ABOUT.Line_Infos[5].con')"></div>
              <div class="time">{{$t('ABOUT.Line_Infos[5].time')}}</div>
            </div>
            <div class="time_infos" :class="{'en': lang==='en'}">
              <div class="time">{{$t('ABOUT.Line_Infos[6].time')}}</div>
              <div class="con" v-html="$t('ABOUT.Line_Infos[6].con')"></div>
            </div>
            <div class="time_infos down" :class="{'en': lang==='en'}">
              <div class="con" v-html="$t('ABOUT.Line_Infos[7].con')"></div>
              <div class="time">{{$t('ABOUT.Line_Infos[7].time')}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-4">
      <div class="inner-wrap">
        <div class="title">
          <div class="con" v-if="lang === 'zh'"><span>NEWPOWER</span> {{$t('ABOUT.Yuanjing_tit')}}</div>
          <div class="con" v-else>{{$t('ABOUT.Yuanjing_tit')}} <span>NEW POWER</span></div>
        </div>
        <div class="col_con" v-html="$t('ABOUT.Yuanjing_text')"></div>
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
.title {
  position: relative;
  z-index: 1;
  font-size: 30px;
  text-align: center;
  color: #000;
  .con{
    position: absolute;
    z-index: 1;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    span{
      color: #7ec76f;
    }
  }
  &::before{
    position: absolute;
    content: 'NEWPOWER';
    font-size: 96px;
    color: #f9f9f9;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    z-index: 0;
  }
}
.col-1 {
  overflow: hidden;
  height: 630px;
  background: #090908 url("../assets/about_banner.jpg") center 0 no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  h3 {
    font-size: 100px;
    text-align: center;
  }
  p {
    font-size: 58px;
    text-align: center;
  }
}
.col-2 {
  overflow: hidden;
  height: 820px;
  padding-top: 134px;
  background-color: #fff;
  .col_con{
    width: 100%;
    padding-top: 80px;
    display: flex;
    align-items: center;
    img{
      width: 529px;
      height: 529px;
    }
    .text{
      width: 670px;
      p {
        text-indent: 2em;
        font-size: 18px;
        color: #000;
        line-height: 40px;
        text-align: justify;
      }
    }
  }
}
.col-3 {
  overflow: hidden;
  height: 817px;
  padding-top: 134px;
  background-color: #fcfcfc;
  .col_con{
    position: relative;
    top: 30px;
    width: 100%;
    display: flex;
    align-items: center;
    background-image: url(../assets/about_02.png);
    height: 640px;
    .timeline{
      display: flex;
      width: 100%;
      justify-content: space-between;
      &::before{
        position: absolute;
        content: "";
        top: 41%;
        width: 100%;
        height: 10px;
        border: 4px solid #96d28a;
        border-radius: 4px;
      }
      .time_infos{
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        position: relative;
        top: 6px;
        color: #000;
        &.en{
          width: 152px;
          top: 17px;
          &.down{
            top: -126px;
          }
        }
        .con{
          text-align: center;
          white-space: nowrap;
        }
        .time{
          text-align: center;
          position: relative;
          color: #96d28a;
          margin-bottom: 60px;
          &::after{
            position: absolute;
            content: '';
            top: 30px;
            left: 50%;
            transform: translateX(-50%);
            height: 26px;
            width: 26px;
            border: 4px solid #96d28a;
            border-radius: 50%;
            background-color: #fff;
          }
          &::before{
            position: absolute;
            content: '';
            top: 60px;
            left: 50%;
            transform: translateX(-50%);
            height: 20px;
            width: 0;
            border: 1px dashed #96d28a;
          }
        }
        &.down{
          position: relative;
          justify-content: flex-end;
          top: -112px;
          .time{
            position: relative;
            color: #96d28a;
            margin-top: 60px;
            margin-bottom: 0;
            &::after{
              position: absolute;
              content: '';
              top: -32px;
              left: 50%;
              transform: translateX(-50%);
              height: 26px;
              width: 26px;
              border: 4px solid #96d28a;
              border-radius: 50%;
              background-color: #fff;
            }
            &::before{
              position: absolute;
              content: '';
              top: -58px;
              left: 50%;
              transform: translateX(-50%);
              height: 20px;
              width: 0;
              border: 1px dashed #96d28a;
            }
          }
        }
      }
    }
  }
}
.col-4 {
  overflow: hidden;
  height: 585px;
  padding-top: 134px;
  background-color: #fff;
  .col_con{
    width: 100%;
    position: relative;
    top: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000;
    text-align: center;
    line-height: 50px;
  }
}
</style>
