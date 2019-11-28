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
      <video id="video" ref="videoRef" src="~@/assets/video/intercourse.mp4" autoplay muted></video>
    </div>
  </div>
</template>

<script>

import mixinMethod from '@/assets/script/page_mixin.js';

export default {
  data() {
    return {
      videoElement: null,
      title: '陰道性交',
      subtitle: 'Intercourse',
      detail: '勃起狀態的陰莖跟陰道互相接合及在內磨擦的過程，主要目的是為了令自身獲得性快感、繁殖下一代。',
    }
  },
  mixins: [mixinMethod],
}
</script>


<style>

</style>