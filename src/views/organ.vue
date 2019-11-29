<template>
  <div class="page">
    <div class="back">
      <router-link to="/"><img src="~@/assets/img/backhome.png" @click="backToHome"></router-link>
    </div>
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>
    <div class="pagination">
      <router-link to="/organ/">
        <div class="pagination_item"  @click="Selectball(1)">
          <div class="pagination_item_decoration">
            <transition name="scale">
              <div class="circle_large" v-show="showCircle === 'pageItem1'" :key="1"></div>
            </transition>
            <div class="circle_small" :class="{'circle_small_Select':showCircle === 'pageItem1'}"></div>
          </div>
          {{pageItem[0]}}
        </div>
      </router-link>
      <router-link to="/organ/vaginal">
        <div class="pagination_item" @click="Selectball(2)">
          <div class="pagination_item_decoration">
            <transition name="scale">
              <div class="circle_large" v-show="showCircle === 'pageItem2'" :key="2"></div>
            </transition>
            <div class="circle_small" :class="{'circle_small_Select':showCircle === 'pageItem2'}"></div>
          </div>
          {{pageItem[1]}}
        </div>
      </router-link>
      <router-link to="/organ/breasts">
        <div class="pagination_item" @click="Selectball(3)">
          <div class="pagination_item_decoration">
            <transition name="scale">
              <div class="circle_large" v-show="showCircle === 'pageItem3'" :key="3"></div>
            </transition>
            <div class="circle_small" :class="{'circle_small_Select':showCircle === 'pageItem3'}"></div>
          </div>
          {{pageItem[2]}}
        </div>
      </router-link>
      </div>
    </div>
  </div>
</template>


<script>
import MixinPage from '@/assets/script/page_mixin.js';

export default {
  props: ['fatherData'],
  data () {
    return {
      pageItem: ['男性生殖器','女性生殖器','乳房'],
      showCircle: this.fatherData,
    }
  },
  mixins: [MixinPage]
}
</script>
