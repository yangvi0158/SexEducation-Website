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
      <video id="video" ref="videoRef" src="~@/assets/video/anal.mp4" autoplay muted></video>
    </div>
  </div>
</template>

<script>
import mixinVideo from '@/assets/script/video_mixin.js';
export default {
  data() {
    return {
      videoElement: null,
      title: '肛門性交',
      subtitle: 'Anal intercourse',
      detail: '一般指將勃起的陰莖與肛門、直腸互相接合並彼此摩擦的過程，主要目的是為了獲得性快感。'
    }
  },
  mixins: [mixinVideo],
}
</script>
