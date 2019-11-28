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
      <video id="video" ref="videoRef" src="~@/assets/video/menstruation.mp4" autoplay muted></video>
    </div>
  </div>
</template>

<script>
import mixinMethod from '@/assets/script/page_mixin.js';

export default {
  data() {
    return {
      videoElement: null,
      title: '月經',
      subtitle: 'Menstruation',
      detail: '子宮內膜在卵巢激素作用下發生的週期性脫落及出血。<br>為女性性功能成熟的一項標記。',
    }
  },
  mixins: [mixinMethod],
}
</script>



<style>

</style>