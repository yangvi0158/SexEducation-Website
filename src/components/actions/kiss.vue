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
      <video id="video" ref="videoRef" src="~@/assets/video/kiss.mp4" autoplay muted></video>
    </div>
  </div>
</template>


<script>
import mixinVideo from '@/assets/script/video_mixin.js';
export default {
  data() {
    return {
      videoElement: null,
      title: '接吻',
      subtitle: 'Kiss',
      detail: '雙方嘴唇的親密接觸，廣義則為口與何身體部位的接觸。接吻可表示親密或禮儀，也可以是含性意義的性行為。',
    }
  },
  mixins: [mixinVideo]
}
</script>
