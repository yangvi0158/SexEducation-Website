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
      <video id="video" ref="videoRef" src="~@/assets/video/fertilization.mp4" autoplay muted></video>
    </div>
  </div>
</template>

<script>
import mixinMethod from '@/assets/script/page_mixin.js';

export default {
  data() {
    return {
      videoElement: null,
      title: '受精',
      subtitle: 'Fertilization',
      detail: '精子進入卵子的過程稱為受精。<br>新生命的開始。',
    }
  },
  mixins: [mixinMethod],
}
</script>


<style>

</style>