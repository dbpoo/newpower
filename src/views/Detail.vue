<template>
  <div class="about">
    <div class="col-1">
      <div class="inner-wrap">
        <h3>{{$t('DETAIL_Title')}}</h3>
      </div>
    </div>
    <div class="col-2">
      <div class="inner-wrap">
        <div class="infos">
          <div class="location">新闻动态 &gt; <span>新闻详情</span></div>
          <div class="time">2019-09-16</div>
        </div>
        <div class="title">光伏龙头企业竞相迈入组件4.0快车道</div>
        <div class="content">
          <p>随着平价上网的脚步越来越近，光伏发展到现阶段，可以说已经进入了光伏组件4.0阶段，光伏行业的需求在于能够真正降低LCOE的高效产品。</p>
          <p>据悉，SunPower公司宣布，2019年开始推出户用光伏市场上最高功率的光伏组件。该组件功率达400-415W，在同样面积下，与传统光伏组件相比，这款组件的发电量提升了60%，未来主要面向美国、澳大利亚和欧洲市场。</p>
          <p>另一家主打420W大功率薄膜太阳能组件的美国光伏企业First Solar，也加快了扩产进度，新建的1.2GW产能的薄膜太阳能组件工厂将于今年四季度达产。400W组件的出现，一定程度上加速了高效组件市场发展，让喜好大功率组件的美国光伏市场竞争愈加激烈。</p>
          <p>4.0时代必备技术</p>
          <p>在目前国内光伏企业普遍向海外拓展光伏业务状况下，协鑫集成产品工程师周英杰认为，针对美国市场的组件功率至少需要到达390W以上；亚洲地区如越南等土地受限的市场，需求功率基本在390W及以上，欧洲市场光伏组件需求功率也至少达到380W，才气进一步确保市场竞争力和公司盈利水平。</p>
          <p>回看国内光伏市场，2018年SNEC期间，晶科推出了功率高达400W的72片半片组件，率先开启了光伏组件“4.0时代”。同时，东方日升也推出了以“PERC+半片”为核心的420W大功率光伏组件。据集邦咨询旗下新能源研究中心集邦新能源网EnergyTrend 先进技术报告数据显示，2018年半片产能只有不到20GW，2019年  下降5%-7%。</p>
          <p>经过硅片、电池片环节后，再到光伏组件技术叠加后，以双面、半片、叠瓦、MBB等多种技术应用下，光伏组件4.0时代已呈现百家争鸣的多样性发展。</p>
          <p>2019年初，晶科能源旗下400W组件开始实现大规模商业化量产，宣告着国内光伏企业正式进入以400W输出功率为起点的光伏4.0时代。而随着光伏超低价格时代的推进，从国内外龙头企业高效产品的研究和发布来看，400W+光伏组件规模化应用正强势到来。</p>
        </div>
        <div class="source">文章来源：集邦新能源</div>
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
  color: #6c6c6c;
  .infos{
    display: flex;
    font-size: 20px;
    justify-content: space-between;
    padding: 8px 0;
    border-bottom: 1px solid #7EC76F;
    span{
      color: #7EC76F
    }
  }
  .title{
    margin-top: 80px;
    margin-bottom: 65px;
    font-size: 36px;
    text-align: center;
    color: #484848;
  }
  .content{
    padding: 0 20px;
    p{
      color: #6C6C6C;
      text-indent: 2em;
      font-size: 24px;
      line-height: 50px;
      text-align: justify;
    }
  }
  .source{
    margin: 40px 0 160px 0;
    text-align: right;
    font-size: 20px;
  }
}
</style>
