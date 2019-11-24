<template>
  <div class="about">
    <div class="col-1">
      <div class="inner-wrap">
        <h3>{{ $t("DETAIL_Title") }}</h3>
      </div>
    </div>
    <div class="col-2">
      <div class="inner-wrap">
        <div class="infos">
          <div class="location">新闻动态 &gt; <span>新闻详情</span></div>
          <div class="time">{{newsDate}}</div>
        </div>
        <div class="title">{{newsTit}}</div>
        <div class="content" v-html="newsCon"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      id: this.$route.params.id,
      newsTit: "",
      newsCon: "",
      newsDate: ""
    };
  },
  methods: {
    getCms() {
      this.$aixos
        .get("http://api.newpower.io/wp-json/wp/v2/posts/" + this.id)
        .then(res => {
          this.newsTit = res.data.title.rendered;
          this.newsCon = res.data.content.rendered;
          this.newsDate = this._filterTime(res.data.date);
        });
    },
    _filterTime(t) {
      return t.split("T")[0];
    }
  },
  mounted() {
    this.getCms();
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
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.1)
    );
  }
}
.col-2 {
  overflow: hidden;
  padding-top: 132px;
  background-color: #fff;
  color: #6c6c6c;
  .infos {
    display: flex;
    font-size: 20px;
    justify-content: space-between;
    padding: 8px 0;
    border-bottom: 1px solid #7ec76f;
    span {
      color: #7ec76f;
    }
  }
  .title {
    margin-top: 80px;
    margin-bottom: 65px;
    font-size: 36px;
    text-align: center;
    color: #484848;
  }
  .content {
    padding: 0 20px;
    margin-bottom: 160px;
    /deep/ p {
      color: #6c6c6c;
      text-indent: 2em;
      font-size: 24px;
      line-height: 50px;
      text-align: justify;
    }
  }
  .source {
    margin: 40px 0 160px 0;
    text-align: right;
    font-size: 20px;
  }
}
</style>
