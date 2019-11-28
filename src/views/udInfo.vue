<template>
  <div class="page">
    <div class="back">
      <router-link to="/"><img src="~@/assets/img/backhome.png" @click="backToHome"></router-link>
    </div>
    <div class="logoInnerpage">
      <div class="logoInnerpage_Img">
        <img src="../assets/img/udLogo_large.png">
      </div>
      <p class="logoInnerpage_Cxt" v-html="detail"></p>
    </div>

  </div>
</template>

<script>
import MixinPage from '@/assets/script/page_mixin.js';
export default {
  data () {
    return {
      detail: '<span>本團隊為跨領域整合創新設計團隊，從創立至今便專注於性別及教育等相關議題的研究，希望以多媒體互動設計作為媒介，與社會大眾溝通傳達不同面向的想法與觀點。</span><br>現今社會應以理性的態度看待性教育，不應認為是尷尬、需要遮掩或快速帶過的事情。我們將上述理念轉換為簡約的幾何圖像，延伸設計相關應用網站、文宣品，使大眾對「性知識的傳播」有新的認知及感受。'
    }
  },
  mixins: [MixinPage],
}
</script>
