<template>
  <div class="about">
    <div class="col-1">
      <div class="inner-wrap">
        <h3>{{ $t("NEWS_Title") }}</h3>
      </div>
    </div>
    <div class="col-2">
      <div class="inner-wrap">
        <router-link
          tag="div"
          class="news"
          v-for="(item, index) in listArr"
          :key="index"
          :to="`/detail/${item.id}`"
        >
          <img
            :src="item.better_featured_image.source_url"
            alt=""
            v-if="item.better_featured_image"
          />
          <div class="text">
            <h3>{{ item.title.rendered }}</h3>
            <p v-html="item.excerpt.rendered"></p>
            <div class="infos">
              <div class="time">[{{ _filterTime(item.date) }}]</div>
              <div class="more">{{ $t("NEWS_MORE") }} &gt;&gt;</div>
            </div>
          </div>
        </router-link>
        <div class="loadmore">
          <span v-if="isLoading">{{ $t("NEWS_LOADING") }}</span>
          <a
            href="javascript:;"
            @click="getMore"
            :class="isOver ? 'isOver' : ''"
            v-else
            >{{ isOver ? $t("NEWS_END") : $t("NEWS_LOADMORE") }}</a
          >
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
      lang: sessionStorage.getItem("LANG"),
      isLoading: false,
      isOver: false,
      page: 1,
      categories: sessionStorage.getItem("LANG") === "zh" ? 4 : 5,
      listArr: []
    };
  },
  methods: {
    getCms(page) {
      this.isLoading = true;
      this.$aixos
        .get(
          "http://api.newpower.io/wp-json/wp/v2/posts?categories=" +
            this.categories +
            "&page=" +
            page
        )
        .then(res => {
          this.isLoading = false;
          this.listArr = [...this.listArr, ...res.data];
        })
        .catch(err => {
          if (err.isAxiosError) {
            this.isLoading = false;
            this.isOver = true;
          }
        });
    },
    getMore() {
      if (this.isOver) return;
      this.page++;
      this.getCms(this.page);
    },
    _filterTime(t) {
      return t.split("T")[0];
    }
  },
  mounted() {
    this.getCms(this.page);
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
  .news {
    position: relative;
    display: flex;
    color: #6c6c6c;
    cursor: pointer;
    padding: 36px 28px;
    margin-bottom: 72px;
    &::after {
      position: absolute;
      content: "";
      width: 100%;
      height: 0;
      left: 0;
      bottom: -36px;
      border-top: 1px solid #c9c9c9;
    }
    &:nth-last-child(2)::after {
      border-top: 0;
    }
    img {
      margin-right: 40px;
      width: 224px;
      height: 143px;
    }
    .text {
      flex: 1;
      h3 {
        font-size: 24px;
      }
      p {
        text-indent: 2em;
        font-size: 18px;
        color: #6c6c6c;
        line-height: 40px;
        text-align: justify;
      }
      .infos {
        display: flex;
        justify-content: space-between;
        .time {
          font-size: 14px;
        }
        .more {
          font-size: 18px;
          font-weight: bold;
        }
      }
    }
    &:hover {
      background-color: #f7f7f7;
      .text {
        h3 {
          color: #7ec76f;
        }
      }
      .infos {
        .time,
        .more {
          color: #7ec76f;
        }
      }
    }
  }
  .pages {
    margin: 110px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000;
    .prev,
    .next {
      margin: 0 10px;
      width: 26px;
      height: 26px;
      color: #fff;
      text-align: center;
      background-color: #7ec76f;
    }
    > div {
      cursor: pointer;
      width: 26px;
      text-align: center;
      &.active {
        color: #7ec76f;
      }
    }
  }
  .loadmore {
    padding: 50px 0;
    text-align: center;
    a {
      border: 1px solid #333;
    }
    a,
    span {
      padding: 10px 30px;
      font-size: 30px;
      color: #333;
    }
    a.isOver {
      border: 0;
      color: #ccc;
    }
  }
}

@media screen and (max-width: 640px) {
  .col-1 {
    height: 400px;
    background: #090908 url("../assets/news_banner.jpg") center center no-repeat;
    h3 {
      width: 300px;
      font-size: 40px;
    }
  }
  .col-2{
    padding-top: 0px;
  }
  .inner-wrap{
    width: 100vw;
    overflow: hidden;
    .news{
      padding-bottom: 0;
      margin-bottom: 36px;
      align-items: center;
      img{
        width: 100px;
        height: 70px;
        margin-right: 20px;
      }
      .text{
        overflow: hidden;
        h3{
          font-weight: bold;
          width: 100%;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          font-size: 12px;
        }
        p{
          font-size: 12px;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          overflow: hidden;
          line-height: 20px;
        }
        .infos{
          .time,
          .more{
            font-size: 12px;
          }
        }
      }
    }
    .loadmore{
      padding: 36px 0;
      a{
        padding: 10px 30px;
        font-size: 16px;
      }
    }
  }
}
</style>
