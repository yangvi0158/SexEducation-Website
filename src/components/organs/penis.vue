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
    <div class="pageRight"  @click="playvideo">
      <div class="clickme"><img src="~@/assets/img/click.png"></div>
      <video id="video"  src="~@/assets/video/penis.mp4" autoplay muted></video>
    </div>
  </div>
</template>

<script>
import mixinVideo from '@/assets/script/video_mixin.js';
export default {
  data() {
    return {
      videoElement: null,
      title: '男性生殖器',
      subtitle: 'Penis',
      detail: '男性生殖器大多位於體外。<br>包括陰莖、陰囊、尿道等；'
    }
  },
  mixins: [mixinVideo]
}
</script>
