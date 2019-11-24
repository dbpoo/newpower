<template>
  <div id="app" :class="lang">
    <header>
      <div class="inner-wrap">
        <a href="javascript:;" class="logo"></a>
        <div class="menu">
          <router-link
            to="/"
            tag="a"
            class="menuHome hvr-underline-from-left"
            >{{ $t("NAV.Home") }}</router-link
          >
          <a
            :href="$t('NAV.WhitePagerLink')"
            class="menuWhitePager hvr-underline-from-left"
            target="_blank"
            >{{ $t("NAV.WhitePager") }}</a
          >
          <router-link
            to="/news"
            tag="a"
            class="menuWhitePager hvr-underline-from-left"
            >{{ $t("NAV.News") }}</router-link
          >
          <router-link
            to="/about"
            tag="a"
            class="menuWhitePager hvr-underline-from-left"
            >{{ $t("NAV.About") }}</router-link
          >
          <div class="menuLanguage">
            {{ $t("NAV.Language") }}
            <ul>
              <li
                :class="lang == 'zh' ? 'active' : ''"
                @click="changeLanguageVal"
              >
                中文
              </li>
              <li
                :class="lang == 'en' ? 'active' : ''"
                @click="changeLanguageVal"
              >
                English
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
    <router-view />
    <footer>
      <div class="inner-wrap">
        <div class="footer-logo">
          <!-- <a href="#" class="logo"></a> -->
        </div>
        <div class="footer-link">
          <div class="footer-link-icon">
            <a href="javascript:;" target="_blank" class="icon-weixin">
              <span></span>
            </a>
            <a
              href="https://weibo.com/newpowerchain?sudaref=s.weibo.com&display=0&retcode=6102"
              target="_blank"
              class="icon-weibo"
            ></a>
            <a
              href="https://www.facebook.com/power.new.399"
              target="_blank"
              class="icon-facebook"
            ></a>
            <a
              href="https://twitter.com/NewPower2019"
              target="_blank"
              class="icon-twitter"
            ></a>
            <a href="javascript:;" target="_blank" class="icon-ln"></a>
          </div>
          <div class="footer-link-copyright">
            Copyright © 2019 the NewPower Team
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      menuShow: false,
      lang: sessionStorage.getItem("LANG")
    };
  },
  methods: {
    changeLanguage(key, index) {
      this.menuShow = false;
    },
    changeLanguageVal() {
      if (this.lang == "zh") {
        this.lang = "en";
        this.$i18n.locale = this.lang; //关键语句
        sessionStorage.setItem("LANG", this.lang);
      } else {
        this.lang = "zh";
        this.$i18n.locale = this.lang; //关键语句
        sessionStorage.setItem("LANG", this.lang);
      }
      location.reload();
    },
    addCookie(val) {
      sessionStorage.setItem("LANG", val);
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

.inner-wrap {
  width: 1200px;
  margin: 0 auto;
}

header {
  width: 100%;
  position: fixed;
  height: 90px;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.8);
  .inner-wrap {
    max-width: 1200px;
    height: 90px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    .logo {
      width: 299px;
      height: 90px;
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
        background: url("./assets/icon_arrow.png") right center no-repeat;
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
  .inner-wrap {
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .footer-logo {
    width: 81px;
    height: 81px;
    a {
      width: 81px;
      height: 81px;
      display: block;
      background: url("./assets/logo_ft.png") 0 0 no-repeat;
    }
  }
  .footer-link {
    display: flex;
    flex-direction: column;
    .footer-link-icon {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin-bottom: 10px;
      a {
        width: 40px;
        height: 40px;
        display: block;
        margin: 0 15px;
      }
      a.icon-weixin {
        background: url("./assets/icon_weixin.png") 0 0 no-repeat;
        position: relative;
        span {
          position: absolute;
          top: -220px;
          left: -80px;
          display: none;
          width: 200px;
          height: 200px;
          background: url("./assets/qr.jpg") 0 0 no-repeat;
          background-size: contain;
        }
        &:hover {
          span {
            display: block;
          }
        }
      }
      a.icon-weibo {
        background: url("./assets/icon_weibo.png") 0 0 no-repeat;
      }
      a.icon-facebook {
        background: url("./assets/icon_facebook.png") 0 0 no-repeat;
      }
      a.icon-twitter {
        background: url("./assets/icon_twitter.png") 0 0 no-repeat;
      }
      a.icon-ln {
        background: url("./assets/icon_ln.png") 0 0 no-repeat;
      }
    }
    .footer-link-copyright {
      text-align: right;
      font-size: 20px;
      color: #b0b0b0;
    }
  }
}
</style>
