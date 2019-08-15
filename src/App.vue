<template>
  <div id="app" :class="lang">
    <header>
      <div class="inner-wrap">
        <a href="javascript:;" class="logo"></a>
        <div class="menu">
          <a href="javascript:;" class="menuHome">{{$t('NAV.Home')}}</a>
          <a href="javascript:;" class="menuWhitePager">{{$t('NAV.WhitePager')}}</a>
          <div class="menuLanguage">
            {{$t('NAV.Language')}}
            <ul>
              <li :class="lang == 'zh'?'active' :''">
                <a href="./index.html">中文</a>
              </li>
              <li :class="lang == 'en'?'active' :''">
                <a href="./index_en.html">English</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
    <router-view />
    <footer>
      <span>Copyright © 2019 the NewPower Team</span>
    </footer>
  </div>
</template>

<script>
import storage from "good-storage";

export default {
  name: "App",
  data() {
    return {
      menuShow: false,
      lang: window.LANG
    };
  },
  methods: {
    changeLanguage(key, index) {
      this.menuShow = false;
    }
  }
};
</script>

<style lang="less">
@import "css/reset";
#app {
  font-family: system, -apple-system, "Microsoft YaHei", "STHeiti", Arial,
    sans-serif;
  color: #fff;
}

header {
  width: 100%;
  position: fixed;
  height: 90px;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: #000;
  .inner-wrap {
    max-width: 1200px;
    height: 90px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    .logo {
      width: 65px;
      height: 65px;
      display: block;
      background: url("./assets/logo.png") 0 0 no-repeat;
    }
    .menu {
      height: 90px;
      position: relative;
      display: flex;
      align-items: center;
      a {
        height: 63px;
        line-height: 63px;
        text-align: center;
        display: inline-block;
        border-radius: 10px;
        margin-left: 10px;
        font-size: 24px;
        &.menuHome {
          width: 150px;
          background-color: #1f1f1e;
        }
        &.menuWhitePager {
          width: 210px;
          background-color: #1f1f1e;
        }
      }
      .menuLanguage {
        width: 210px;
        height: 63px;
        line-height: 63px;
        text-align: center;
        display: inline-block;
        border-radius: 10px;
        margin-left: 10px;
        font-size: 24px;
        background: #1f1f1e url("./assets/icon_arrow.png") 178px center
          no-repeat;
        position: relative;
        ul {
          background-color: #8b8b89;
          border-radius: 10px;
          position: absolute;
          top: 63px;
          right: 0;
          overflow: hidden;
          display: none;
          li {
            width: 120px;
            height: 38px;
            line-height: 38px;
            text-align: center;
            a {
              width: 100%;
              font-size: 18px;
              height: 38px;
              line-height: 38px;
              text-align: center;
              display: inline-block;
              border-radius: 0;
              margin-left: 0;
            }
            &.active {
              background-color: #678d5c;
            }
          }
        }
        &:hover {
          ul {
            display: block;
          }
        }
      }
    }
  }
}
footer {
  height: 128px;
  background-color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}
</style>
