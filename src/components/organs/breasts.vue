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
      <video id="video" ref="videoRef" src="~@/assets/video/breasts.mp4" autoplay muted></video>
    </div>
  </div>
</template>


<script>
import mixinVideo from '@/assets/script/video_mixin.js';
export default {
  data() {
    return {
      videoElement: null,
      title: '乳房',
      subtitle: 'Breasts',
      detail: '乳房主要由乳腺、脂肪、結締組織構成。<br>主要功能為製造母乳哺育嬰兒。'
    }
  },
  mixins: [mixinVideo]
}
</script>
