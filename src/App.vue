<template>
  <div id="app" :class="lang">
    <header>
      <div class="inner-wrap">
        <a href="javascript:;" class="logo"></a>
        <div class="menu">
          <a href="javascript:;" class="menuHome hvr-underline-from-left">{{$t('NAV.Home')}}</a>
          <a href="javascript:;" class="menuWhitePager hvr-underline-from-left">{{$t('NAV.WhitePager')}}</a>
          <a href="javascript:;" class="menuWhitePager hvr-underline-from-left">{{$t('NAV.News')}}</a>
          <a href="javascript:;" class="menuWhitePager hvr-underline-from-left">{{$t('NAV.About')}}</a>
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
@import "css/hover";
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
        text-align: center;
        display: inline-block;
        margin: 0 10px;
        padding: 10px;
        font-size: 18px;
      }
      .menuLanguage {
        height: 90px;
        line-height: 90px;
        margin: 0 30px 0 10px;
        padding-right: 30px;
        text-align: center;
        display: inline-block;
        font-size: 18px;
        background: url("./assets/icon_arrow.png") right center
          no-repeat;
        position: relative;
        ul {
          background-color: #8b8b89;
          border-radius: 10px;
          position: absolute;
          top: 90px;
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
              font-size: 16px;
              height: 38px;
              line-height: 38px;
              text-align: center;
              display: inline-block;
              border-radius: 0;
              margin: 0;
              padding: 0;
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
