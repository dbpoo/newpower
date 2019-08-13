<template>
  <div id="app">
    <header>
      <ul>
        <li
          v-for="(item,index) in Lang"
          :key="index"
          @click="changeLanguage(item.key)"
        >{{item.name}}</li>
      </ul>
    </header>
    <router-view />
    <footer></footer>
  </div>
</template>

<script>
import storage from "good-storage";

export default {
  name: "App",
  data() {
    return {
      Lang: [
        {
          name: "中文",
          key: "zh"
        },
        {
          name: "English",
          key: "en"
        }
      ]
    };
  },
  methods: {
    changeLanguage(key) {
      this.$i18n.locale = key;
      storage.set("LANG", key);
    }
  }
};
</script>

<style lang="less">
@import "css/reset";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #fff;
}
header {
  max-width: 1000px;
  height: 96px;
  padding: 0 30px;
  margin: 0 auto;
}
footer {
  min-width: 1000px;
  .footer-1 {
    height: 63px;
    line-height: 63px;
    color: #6f6f6f;
    text-align: center;
    font-size: 16px;
    border-bottom: 1px solid #ababab;
  }
  .footer-2 {
    max-width: 600px;
    margin: 0 auto;
    ul {
      display: flex;
      height: 108px;
      justify-content: space-between;
      align-items: center;
      li {
        width: auto;
      }
    }
  }
  .footer-3 {
    color: #6f6f6f;
    font-size: 16px;
    text-align: center;
    padding-bottom: 30px;
  }
}

@media screen and (max-width: 640px) {
  header {
    min-width: 100%;
    height: 60px;

    img {
      height: 100%;
    }
  }
  footer {
    min-width: 100%;
    .footer-2 {
      min-width: 100%;
      ul {
        width: 100%;
        height: auto;
        padding: 20px 50px;
        flex-wrap: wrap;
        li {
          width: 33%;
          text-align: center;
          margin-bottom: 10px;
        }
      }
    }
  }
}
</style>
