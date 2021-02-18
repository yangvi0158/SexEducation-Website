<template>
  <div class="home" 
  @click="changeColor"
  :class="{
  'backPurple':backgroundClass.isA,
  'backWhite':backgroundClass.isB,
  'backBlack':backgroundClass.isC}"
  >
    <vue-element-loading :active="isDelay" color="#FFFFFF" background-color="#CCAFEF" spinner="line-wave"/>
    <img id="homeImg" ref="homeImg" :src="largeImgUrl">
    <img class="changeColor" :src="smallImgUrl" :style="imgStyle">
  </div>
</template>

<script>
import VueElementLoading from "vue-element-loading";
export default {
  name: 'Home',
  components: {
    VueElementLoading
  },
  data () {
    return {
      isDelay: true,
      offsetLeft: 0,
      offsetTop: 0,
      innerLeft: 0,
      innerTop: 0,
      scalePercent: 0,
      largeImgUrl: require("../assets/img/homePurple.png"),
      smallImgUrl: require("../assets/img/changeWhite.png"),
      img: {
        backgroundA: {
          large: require("../assets/img/homeWhite.png"),
          small: require("../assets/img/changeBlack.png")
        },
        backgroundB: {
          large: require("../assets/img/homeBlack.png"),
          small: require("../assets/img/changePurple.png")
        },
        backgroundC: {
          large: require("../assets/img/homePurple.png"),
          small: require("../assets/img/changeWhite.png")
        }
      },
      backgroundClass:{
        isA: true,
        isB: false,
        isC: false,
      }
    }
  },
  methods: {
    //取得圈圈定位
    getDistance(event){
      this.offsetLeft = homeImg.offsetLeft;
      this.offsetTop = homeImg.offsetTop;
      this.innerLeft = homeImg.clientWidth*.695;
      this.innerTop = homeImg.clientHeight*.25;
    },
    //取得圈圈大小
    getscalePercent(event){
      this.scalePercent = homeImg.clientWidth*.075;
      this.isDelay = false
    },
    //首頁與圈圈換圖
    changeColor(){
      if(this.backgroundClass.isA === true){
        this.$emit("homecolor-changenav", '2');
        this.largeImgUrl = this.img.backgroundA.large
        this.smallImgUrl = this.img.backgroundA.small
        this.backgroundClass.isA = false;
        this.backgroundClass.isB = true;
      }else if(this.backgroundClass.isB === true){
        this.$emit("homecolor-changenav", '3');
        this.largeImgUrl = this.img.backgroundB.large
        this.smallImgUrl = this.img.backgroundB.small
        this.backgroundClass.isB = false;
        this.backgroundClass.isC = true;
      }else if(this.backgroundClass.isC === true){
        this.$emit("homecolor-changenav", '1');
        this.largeImgUrl = this.img.backgroundC.large
        this.smallImgUrl = this.img.backgroundC.small
        this.backgroundClass.isA = true;
        this.backgroundClass.isC = false;
      }
    },
  },
  mounted(){
    //圈圈位置與大小變動監聽
    this.isDelay = true;
    setTimeout(()=>{
        this.$nextTick(function(){
          window.addEventListener('resize', this.getDistance);
          window.addEventListener('load', this.getDistance);
          window.addEventListener('resize',this.getscalePercent);
          window.addEventListener('load',this.getscalePercent);

          this.getDistance();
          this.getscalePercent();
        })
    }, 500)
  },
  beforeDestroy(){
      // window.removeEventListener('load', this.getDistance);
      // window.removeEventListener('resize', this.getDistance);
      // window.removeEventListener('load',this.getscalePercent);
      // window.removeEventListener('resize',this.getscalePercent);
  },
  computed: {
    //設定圈圈位置
    imgStyle: function(){
      return {
        left: this.offsetLeft+ this.innerLeft +'px',
        top: this.offsetTop+ this.innerTop +'px',
        width: this.scalePercent +'px',
      }
    }
  },
}
</script>
