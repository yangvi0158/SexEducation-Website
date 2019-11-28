<template>
  <div class="home" :class="{'backPurple':backgroundClass.isA,'backWhite':backgroundClass.isB,'backBlack':backgroundClass.isC}">
    <img id="homeImg" :src="largeImgUrl" @click="changeColor">
    <img class="changeColor" :src="smallImgUrl" :style="imgStyle" @click="changeColor">
  </div>
</template>



<script>
export default {
  name: 'Home',
  data () {
    return {
      offsetLeft: 0,
      offsetTop: 0,
      innerLeft: 0,
      innerTop: 0,
      scalePercent: 0,
      largeImgUrl: require("../assets/img/homePurple.png"),
      smallImgUrl: require("../assets/img/changeWhite.png"),
      backgroundClass:{
        isA: true,
        isB: false,
        isC: false,
      }
    }
  },

  beforeMount(){
    this.$nextTick(function(){
      window.addEventListener('load', this.getDistance);
      window.addEventListener('resize', this.getDistance);
      window.addEventListener('load',this.getscalePercent);
      window.addEventListener('resize',this.getscalePercent);

      this.getDistance()
      this.getscalePercent()
    })
  },
  methods: {
    getDistance(event){
      this.offsetLeft = homeImg.offsetLeft;
      this.offsetTop = homeImg.offsetTop;
      this.innerLeft = homeImg.clientWidth*.695;
      this.innerTop = homeImg.clientHeight*.25;
    },
    getscalePercent(event){
      this.scalePercent = homeImg.clientWidth*.075;
      console.log(this.scalePercent)
    },
    changeColor(){
      if(this.backgroundClass.isA === true){
        this.$emit("homecolor-changenav", '2');
        this.largeImgUrl = require("../assets/img/homeWhite.png");
        this.smallImgUrl = require("../assets/img/changeBlack.png");
        this.backgroundClass.isA = false;
        this.backgroundClass.isB = true;
      }else if(this.backgroundClass.isB === true){
        this.$emit("homecolor-changenav", '3');
        this.largeImgUrl = require("../assets/img/homeBlack.png");
        this.smallImgUrl = require("../assets/img/changePurple.png");
        this.backgroundClass.isB = false;
        this.backgroundClass.isC = true;
      }else if(this.backgroundClass.isC === true){
        this.$emit("homecolor-changenav", '1');
        this.largeImgUrl = require("../assets/img/homePurple.png");
        this.smallImgUrl = require("../assets/img/changeWhite.png");
        this.backgroundClass.isA = true;
        this.backgroundClass.isC = false;
      }
    },
  },
  computed: {
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">

</style>
