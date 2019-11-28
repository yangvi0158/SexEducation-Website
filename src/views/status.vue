<template>
  <div class="page">
    <div class="back">
      <router-link to="/"><img src="~@/assets/img/backhome.png" @click="backToHome"></router-link>
    </div>
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>
    <div class="pagination">
      <router-link to="/status/">
        <div class="pagination_item"  @click="ballStyle(1)">
          <div class="pagination_item_decoration">
            <transition name="scale">
              <div class="circle_large" v-if="showCircle === 'pageItem1'"></div>
            </transition>
            <div class="circle_small" :class="{'circle_small_Select':showCircle === 'pageItem1'}"></div>
          </div>
          {{pageItem[0]}}
        </div>
      </router-link>
      <router-link to="/status/fertilization">
        <div class="pagination_item" @click="ballStyle(2)">
          <div class="pagination_item_decoration">
            <transition name="scale">
              <div class="circle_large" v-if="showCircle === 'pageItem2'"></div>
            </transition>
            <div class="circle_small" :class="{'circle_small_Select':showCircle === 'pageItem2'}"></div>
          </div>
          {{pageItem[1]}}
        </div>
      </router-link>
      <router-link to="/status/menstruation">
        <div class="pagination_item" @click="ballStyle(3)">
          <div class="pagination_item_decoration">
            <transition name="scale">
              <div class="circle_large" v-if="showCircle === 'pageItem3'"></div>
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
      pageItem: ['射精','受精','月經'],
      showCircle: this.fatherData,
    }
  },
  mixins: [MixinPage],
}
</script>
