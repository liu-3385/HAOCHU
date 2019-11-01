<template>
  <div class="top-head">
    <div class="top-head-left">
      <a onclick="javascript:history.back(-1);" class="top-head-link">
        <i class="top-head-icon">&lt;</i>
      </a>
    </div>

    <div class="top-connent">
      <span>健康养生</span>
    </div>

    <div class="top-head-right">
      <a onclick="javascript:history.back(-1);" class="top-head-link">
        <i class="top-head-icon">
          <img src="../images/fangdajing.png" alt="">
        </i>
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.top-head {
  width: 100%;
  height: 43px;
  border-bottom: 2px solid orange;
  .top-head-left {
    width: 20%;
    height: 43px;
    float: left;

    .top-head-link {
      width: 100%;
      height: 43px;
      display: block;
      .top-head-icon {
        width: 100%;
        height: 100%;
        display: block;
        font-size: 30px;
        text-align: center;
        line-height: 43px;
      }
    }
  }

  .top-connent {
    width: 60%;
    height: 100%;
    color: #ff3300;
    line-height: 45px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    float: left;
    font-size: 22px;
    text-align: center;
  }

  .top-head-right {
    width: 20%;
    height: 43px;
    float: right;

    .top-head-link {
      width: 100%;
      height: 43px;
      display: block;
      .top-head-icon {
        width: 100%;
        height: 100%;
        display: block;
        font-size: 10px;
        text-align: center;
        line-height: 43px;
        img{
          width: 25px;
          height: 25px;
          margin-top: 10px;
          margin-left: 20px;
        }
      }
    }
  }
}
</style>