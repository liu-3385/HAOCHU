<template>
  <div class="all">
    <div class="all-list">
      <div class="list-first">
        <router-link to="/haishen" tag="a">
          <img :src="colument[0].img" alt />
          <div>
            <h5>{{colument[0].title}}</h5>
          </div>
          <div class="textf">{{colument[0].text}}</div>
          <div class="medal-text">{{colument[0].span}}</div>
        </router-link>
      </div>

      <div class="list-two">
        <a href>
          <img :src="colument[1].img" alt />
          <div>
            <h5>{{colument[1].title}}</h5>
          </div>
          <div class="textf">{{colument[1].text}}</div>
          <div class="medal-text">{{colument[1].span}}</div>
        </a>
      </div>

      <div class="list-three">
        <a href>
          <img :src="colument[2].img" alt />
          <div>
            <h5>{{colument[2].title}}</h5>
          </div>
          <div class="textf">{{colument[2].text}}</div>
          <div class="medal-text">{{colument[2].span}}</div>
        </a>
      </div>

      <div class="list-four">
        <a href>
          <img :src="colument[3].img" alt />
          <div>
            <h5>{{colument[3].title}}</h5>
          </div>
          <div class="textf">{{colument[3].text}}</div>
          <div class="medal-text">{{colument[3].span}}</div>
        </a>
      </div>

      <div class="list-five">
        <a href>
          <img :src="colument[4].img" alt />
          <div>
            <h5>{{colument[4].title}}</h5>
          </div>
          <div class="textf">{{colument[4].text}}</div>
          <div class="medal-text">{{colument[4].span}}</div>
        </a>
      </div>

      <div class="list-six">
        <a href>
          <img :src="colument[5].img" alt />
          <div>
            <h5>{{colument[5].title}}</h5>
          </div>
          <div class="textf">{{colument[5].text}}</div>
          <div class="medal-text">{{colument[5].span}}</div>
        </a>
      </div>

      <div class="list-seven">
        <a href>
          <img :src="colument[6].img" alt />
          <div>
            <h5>{{colument[6].title}}</h5>
          </div>
          <div class="textf">{{colument[6].text}}</div>
          <div class="medal-text">{{colument[6].span}}</div>
        </a>
      </div>

      <div class="list-eight">
        <a href>
          <img :src="colument[7].img" alt />
          <div>
            <h5>{{colument[7].title}}</h5>
          </div>
          <div class="textf">{{colument[7].text}}</div>
          <div class="medal-text">{{colument[7].span}}</div>
        </a>
      </div>

      <div class="list-nine">
        <a href>
          <img :src="colument[8].img" alt />
          <div>
            <h5>{{colument[8].title}}</h5>
          </div>
          <div class="textf">{{colument[8].text}}</div>
          <div class="medal-text">{{colument[8].span}}</div>
        </a>
      </div>

      <div class="list-ten">
        <a href>
          <img :src="colument[9].img" alt />
          <div>
            <h5>{{colument[9].title}}</h5>
          </div>
          <div class="textf">{{colument[9].text}}</div>
          <div class="medal-text">{{colument[9].span}}</div>
        </a>
      </div>
      <div class="foot">
        <div>
          <a class="foot-left">上一页</a>
          <span class="foot-con">1/49</span>
          <a class="foot-right">下一页</a>
        </div>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
import { haishen } from "./haishen";
export default {
  data() {
    return {
      colument: [
        {
          img:
            "https://cdn.haochu.com/uploads/fengmian/20181120/15426968409549.jpg",
          title: "活海参保存方法与食",
          text:
            "1、活海参嘴部剪开一个小口，将内脏挤出。 2、水加热到约40度，...",
          span: "9619  阅读"
        },
        {
          img:
            "https://cdn.haochu.com/uploads/fengmian/20181120/15426966951950.jpg",
          title: "春天吃什么蔬菜好",
          text:
            "春天是大家认为开始恋爱的季节，但是春天也是积攒了一冬天的毒素...",
          span: "14911  阅读"
        },
        {
          img:
            "https://cdn.haochu.com/uploads/fengmian/20181120/15426968391840.jpg",
          title: "3款秋日出游三明治",
          text:
            "做好假期出行计划的你是不是已经在收拾行李啦，如果你还在发愁出...",
          span: "970  阅读"
        },
        {
          img:
            "https://cdn.haochu.com/uploads/fengmian/20181120/15426967834879.png",
          title: "常吃紫菜能增强免疫",
          text:
            "说到紫菜相信大家都不陌生，他是一种营养价值非常高的食物，那么...",
          span: "7672  阅读"
        },
        {
          img:
            "https://cdn.haochu.com/uploads/fengmian/20181120/15426967838030.png",
          title: "常吃西瓜能帮助降血",
          text:
            "西瓜是日常生活中非常常见的一种水果，他的营养价值非常高，那么...",
          span: "7672  阅读"
        },
        {
          img:
            "https://cdn.haochu.com/uploads/fengmian/20181120/15426967838030.png",
          title: "夏天食用西瓜有利于",
          text:
            "西瓜是一种营养价值非常高的水果，他对我们的身体健康好处非常多...",
          span: "6761  阅读"
        },
        {
          img:
            "https://cdn.haochu.com/uploads/fengmian/20181120/1542696783698.png",
          title: "常吃佛手瓜竟能预防",
          text:
            "佛手瓜是一种营养价值非常高的蔬菜，他对我们的身体健康好处非常...",
          span: "6814  阅读"
        },
        {
          img:
            "https://cdn.haochu.com/uploads/fengmian/20181120/1542696783698.png",
          title: "夏季预防白癜风要常",
          text:
            "夏季是白癜风的高发病季节，大约有80%的白癜风复发都是发生在春...",
          span: "6615  阅读"
        },
        {
          img:
            "https://cdn.haochu.com/uploads/fengmian/20181120/1542696783698.png",
          title: "佛手瓜能舒肝止呕",
          text:
            "夏季是白癜风的高发病季节，大约有80%的白癜风复发都是发生在春...",
          span: "8777  阅读"
        },
        {
          img:
            "https://cdn.haochu.com/uploads/fengmian/20181120/15426967848620.png",
          title: "多吃圣女果能促进生",
          text:
            "圣女果是非常受欢迎的一种水果，他对我们的身体健康好处非常多，...",
          span: "393454  阅读"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.all {
  width: 100%;
  height: 96px;
  display: flex;
  margin-left: 7px;

  .all-list {
    width: 96%;
    height: 100%;
    padding-top: 10px;
    // display: flex;
    // overflow: hidden;
    .list-first {
      width: 100%;
      height: 100%;
      position: relative;
      border-bottom: 1px solid #cccccc;
      img {
        width: 102px;
        height: 78px;
        float: left;
      }
      h5 {
        margin-top: 5px;
        font-size: 18px;
        color: black;
        margin-left: 25px;
        float: left;
      }
      .textf {
        position: absolute;
        top: 30px;
        left: 127px;
      }
      .medal-text {
        position: absolute;
        top: 65px;
        right: 20px;
      }
    }

    .list-two {
      margin-top: 10px;
      width: 100%;
      height: 100%;
      position: relative;
      border-bottom: 1px solid #cccccc;
      img {
        width: 102px;
        height: 78px;
        float: left;
      }
      h5 {
        margin-top: 5px;
        font-size: 18px;
        color: black;
        margin-left: 25px;
        float: left;
      }
      .textf {
        position: absolute;
        top: 30px;
        left: 127px;
      }
      .medal-text {
        position: absolute;
        top: 65px;
        right: 20px;
      }
    }

    .list-three {
      margin-top: 10px;
      width: 100%;
      height: 100%;
      position: relative;
      border-bottom: 1px solid #cccccc;
      img {
        width: 102px;
        height: 78px;
        float: left;
      }
      h5 {
        margin-top: 5px;
        font-size: 18px;
        color: black;
        margin-left: 25px;
        float: left;
      }
      .textf {
        position: absolute;
        top: 30px;
        left: 127px;
      }
      .medal-text {
        position: absolute;
        top: 65px;
        right: 20px;
      }
    }
    .list-four {
      margin-top: 10px;
      width: 100%;
      height: 100%;
      position: relative;
      border-bottom: 1px solid #cccccc;
      img {
        width: 102px;
        height: 78px;
        float: left;
      }
      h5 {
        margin-top: 5px;
        font-size: 18px;
        color: black;
        margin-left: 25px;
        float: left;
      }
      .textf {
        position: absolute;
        top: 30px;
        left: 127px;
      }
      .medal-text {
        position: absolute;
        top: 65px;
        right: 20px;
      }
    }
    .list-five {
      margin-top: 10px;
      width: 100%;
      height: 100%;
      position: relative;
      border-bottom: 1px solid #cccccc;
      img {
        width: 102px;
        height: 78px;
        float: left;
      }
      h5 {
        margin-top: 5px;
        font-size: 18px;
        color: black;
        margin-left: 25px;
        float: left;
      }
      .textf {
        position: absolute;
        top: 30px;
        left: 127px;
      }
      .medal-text {
        position: absolute;
        top: 65px;
        right: 20px;
      }
    }

    .list-six {
      margin-top: 10px;
      width: 100%;
      height: 100%;
      position: relative;
      border-bottom: 1px solid #cccccc;
      //   margin-bottom: 50px;
      img {
        width: 102px;
        height: 78px;
        float: left;
      }
      h5 {
        margin-top: 5px;
        font-size: 18px;
        color: black;
        margin-left: 25px;
        float: left;
      }
      .textf {
        position: absolute;
        top: 30px;
        left: 127px;
      }
      .medal-text {
        position: absolute;
        top: 65px;
        right: 20px;
      }
    }

    .list-seven {
      margin-top: 10px;
      width: 100%;
      height: 100%;
      position: relative;
      border-bottom: 1px solid #cccccc;
      //   margin-bottom: 50px;
      img {
        width: 102px;
        height: 78px;
        float: left;
      }
      h5 {
        margin-top: 5px;
        font-size: 18px;
        color: black;
        margin-left: 25px;
        float: left;
      }
      .textf {
        position: absolute;
        top: 30px;
        left: 127px;
      }
      .medal-text {
        position: absolute;
        top: 65px;
        right: 20px;
      }
    }

    .list-eight {
      margin-top: 10px;
      width: 100%;
      height: 100%;
      position: relative;
      border-bottom: 1px solid #cccccc;
      //   margin-bottom: 50px;
      img {
        width: 102px;
        height: 78px;
        float: left;
      }
      h5 {
        margin-top: 5px;
        font-size: 18px;
        color: black;
        margin-left: 25px;
        float: left;
      }
      .textf {
        position: absolute;
        top: 30px;
        left: 127px;
      }
      .medal-text {
        position: absolute;
        top: 65px;
        right: 20px;
      }
    }
    .list-nine {
      margin-top: 10px;
      width: 100%;
      height: 100%;
      position: relative;
      border-bottom: 1px solid #cccccc;
      //   margin-bottom: 50px;
      img {
        width: 102px;
        height: 78px;
        float: left;
      }
      h5 {
        margin-top: 5px;
        font-size: 18px;
        color: black;
        margin-left: 25px;
        float: left;
      }
      .textf {
        position: absolute;
        top: 30px;
        left: 127px;
      }
      .medal-text {
        position: absolute;
        top: 65px;
        right: 20px;
      }
    }

    .list-ten {
      margin-top: 10px;
      width: 100%;
      height: 100%;
      position: relative;
      border-bottom: 1px solid #cccccc;
      margin-bottom: 60px;
      img {
        width: 102px;
        height: 78px;
        float: left;
      }
      h5 {
        margin-top: 5px;
        font-size: 18px;
        color: black;
        margin-left: 25px;
        float: left;
      }
      .textf {
        position: absolute;
        top: 30px;
        left: 127px;
      }
      .medal-text {
        position: absolute;
        top: 65px;
        right: 20px;
      }
    }
  }

  .foot {
    width: 100%;
    height: 100px;
    text-align: center;
    margin-bottom: 50px;
    .foot-left {
      width: 30%;
      float: left;
      margin-left: 10px;
      height: 40px;
      line-height: 40px;
      border: 1px solid orange;
      font-size: 18px;
    }
    .foot-con {
      width: 30%;
      float: left;
      height: 40px;
      line-height: 40px;
      font-size: 18px;
    }
    .foot-right {
      width: 30%;
      margin-right: 10px;
      float: right;
      height: 40px;
      line-height: 40px;
      font-size: 18px;
      background-color: orange;
      color: white;
    }
  }
}
</style>