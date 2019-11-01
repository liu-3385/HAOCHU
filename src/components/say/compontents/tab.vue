<template>
  <div>
    <div class="content">
      <ul class="nav">
        <router-link tag="li" to="/says/jiankang">健康养生</router-link>
        <router-link tag="li" to="/says/baike">生活百科</router-link>
        <router-link tag="li" to="/says/ketang">好厨课堂</router-link>

        <router-view></router-view>

      </ul>
    </div>
  </div>
</template>

<script>
import { jiankang } from "./table/jiankang.vue";
import { baike } from "./table/baike.vue";
import { ketang } from "./table/ketang.vue";
export default {
  components:{
    jiankang,
    baike,
    ketang
  }
};
</script>


<style lang="less" scoped>
.content{
    width: 100%;
    height: 100%;
}
.nav {
  width: 100%;
  height: 43px;
  border-bottom: 1px solid #cccccc;
  margin-bottom: 20px;
  li {
    width: 33.3%;
    height: 100%;
    float: left;
    text-align: center;
    line-height: 43px;
  }
}

</style>