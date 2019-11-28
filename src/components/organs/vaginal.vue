<template>
  <div id="innerpage">
    <div class="pageLeft">
      <div class="pageLeft_inner">
        <h1 class="title">{{title}}</h1>
        <h3 class="subtitle">{{subtitle}}</h3>
        <div class="separate"></div>
        <p class="detail" v-html="detail"></p>
      </div>
    </div>
    <div class="pageRight" ref="videoRef" @click="playvideo">
      <div class="clickme"><img src="~@/assets/img/click.png"></div>
      <video id="video" ref="videoRef" src="~@/assets/video/vaginal.mp4" autoplay muted></video>
    </div>
  </div>
</template>

<script>
import mixinMethod from '@/assets/script/page_mixin.js';

export default {
  data() {
    return {
      videoElement: null,
      title: '女性生殖器',
      subtitle: 'Vaginal',
      detail: '外生殖器由陰唇、陰蒂、尿口等組成。<br>內生殖器包括陰道、子宮、輸卵管和卵巢等等。'
    }
  },
  mixins: [mixinMethod],
}
</script>


<style>
</style>