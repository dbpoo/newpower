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
      <span class="icon-linkin"></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: {}
    }
  }
};
</script>

<style scoped lang="less">
.linkinfo {
  width: 30%;
  height: 297px;
  background-color: #080808;
  margin-bottom: 50px;
}

.linkinfo-avatar {
  height: 227px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #252525;
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
</style>