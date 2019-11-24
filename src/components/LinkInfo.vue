<template>
  <div class="linkinfo">
    <div class="linkinfo-avatar">
      <img :src="item.avatarImg" alt srcset />
    </div>
    <div class="linkinfo-txt">
      <ul>
        <li class="li1">{{item.name}}</li>
        <li class="li2">{{item.position}}</li>
      </ul>
    </div>
    <div class="infohover">
      <div class="infohover-t"></div>
      <div class="infohover-c" v-html="item.info"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item']
};
</script>

<style scoped lang="less">
.linkinfo {
  width: 365px;
  height: 297px;
  background-color: rgba(8, 8, 8, 0.8);
  margin-bottom: 50px;
  position: relative;
  cursor: pointer;
  .infohover {
    display: none;
  }
  &:hover {
    .infohover {
      display: block;
    }
  }
}

.linkinfo-avatar {
  height: 227px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(37, 37, 37, 0.8);
  img {
    border-radius: 50%;
  }
}

.linkinfo-txt {
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px 0 20px;
  ul {
    li.li1 {
      font-size: 20px;
    }
    li.li2 {
      font-size: 14px;
      color: #6cbb80;
    }
  }
  .icon-linkin {
    width: 56px;
    height: 56px;
    background: url("../assets/icon_linkin.png");
  }
}

.infohover {
  width: 363px;
  position: absolute;
  top: 270px;
  z-index: 10;
  left: 0;
  .infohover-t {
    width: 363px;
    height: 23px;
    background: url("../assets/hoverinfo.png") 0 0 no-repeat;
  }
  .infohover-c {
    background-color: rgba(73, 113, 65, 0.8);
    padding: 20px;
  }
}
</style>
