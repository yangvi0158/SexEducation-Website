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
      <video id="video" ref="videoRef" src="~@/assets/video/ejaculation.mp4" autoplay muted></video>
    </div>
  </div>
</template>

<script>
import mixinMethod from '@/assets/script/page_mixin.js';

export default {
  data() {
    return {
      videoElement: null,
      title: '射精',
      subtitle: 'Ejaculation',
      detail: '陰莖等雄性器官受刺激而興奮至極致時，使精液隨著生殖系統管道強烈收縮，並射出體外的過程。'
    }
  },
  mixins: [mixinMethod],
}
</script>


<style>

</style>