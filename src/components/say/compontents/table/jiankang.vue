<template>
  <div class="all">
    <div class="all-list">
      <div class="list-first">
        <router-link to="/yuhan" tag="a">
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
import { yuhan } from "./yuhan";
export default {
  
  data() {
    return {
      colument: [
        {
          img:
            "https://cdn.haochu.com/uploads/fengmian/20181120/15426967027736.png",
          title: "冬天里面御寒的食物",
          text:
            "冬季天气寒冷，所以保暖是非常必要的事情，那么冬天御寒的食物有...",
          span: "17235  阅读"
        },
        {
          img:
            "https://cdn.haochu.com/uploads/fengmian/20181211/15444990223361.png",
          title: "如何从耳朵中就看到",
          text:
            "健康与长寿可以通过什么方式来自我判断的吗？有人说通过耳朵就可... ",
          span: "436420  阅读"
        },
        {
          img:
            "https://cdn.haochu.com/uploads/fengmian/20181120/15426968409320.jpg",
          title: "4招开启滋润秋梨季",
          text:
            "白露要到啦，吃梨正当时，可只会啃怎么能体会秋梨的滋润，小厨特...",
          span: "4518  阅读"
        },
        {
          img:
            "https://cdn.haochu.com/uploads/fengmian/20181120/15426966123334.png",
          title: "女人竟然比男人长寿",
          text:
            "女人比男人长寿，这可就稀奇了。但是这却是千真万确的。你想知道...",
          span: "264119  阅读"
        },
        {
          img:
            "https://cdn.haochu.com/uploads/fengmian/20181120/15426966135786.png",
          title: "五大妙招帮你赶走职",
          text:
            "怎么赶走职场压力？据最新公布的一份数据显示，中国职场人士面临...",
          span: "393052  阅读"
        },
        {
          img:
            "https://cdn.haochu.com/uploads/fengmian/20181120/15426966136860.png",
          title: "单身贵族不“潇洒”",
          text: "“单身贵族”、“丁克一族”等新新人类潇洒地打破传统，张扬个性...",
          span: "397259  阅读"
        },
        {
          img:
            "https://cdn.haochu.com/uploads/fengmian/20181120/15426966133205.png",
          title: "谨记6原则让白领坐",
          text: "您知道吗?“坐”其实是会致命的!研究显示，每天多坐1小时，6年后...",
          span: "209367  阅读"
        },
        {
          img:
            "https://cdn.haochu.com/uploads/fengmian/20181120/15426966222489.png",
          title: "提高男性“职商”的",
          text: "何为“职商”我们通常意义上讲“职商”主要包括自我职业意识和自...",
          span: "348848  阅读"
        },
        {
          img:
            "https://cdn.haochu.com/uploads/fengmian/20181120/15426966222029.png",
          title: "同事和睦相处让事业",
          text:
            "同事之间关系相处的好坏，不仅仅影响个人情绪还会影响到工作。一...",
          span: "165015  阅读"
        },
        {
          img:
            "https://cdn.haochu.com/uploads/fengmian/20181120/15426966236160.png",
          title: "如何成为令女性心仪",
          text:
            "第一招用餐后，将你的钱包交给她，由她来买单。在用餐之后，别自...",
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