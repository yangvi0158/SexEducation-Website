<template>
  <div class="page">
    <div class="back" >
      <router-link to="/"><img src="~@/assets/img/backhome.png" @click="backToHome"></router-link>
    </div>
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>
    <div class="pagination">
      <router-link to="/action/">
        <div class="pagination_item"  @click="Selectball(1)">
          <div class="pagination_item_decoration">
            <transition name="scale">
              <div class="circle_large" v-show="showCircle === 'pageItem1'"></div>
            </transition>
            <div class="circle_small" :class="{'circle_small_Select':showCircle === 'pageItem1'}"></div>
          </div>
          {{pageItem[0]}}
        </div>
      </router-link>
      <router-link to="/action/anal">
        <div class="pagination_item" @click="Selectball(2)">
          <div class="pagination_item_decoration">
            <transition name="scale">
              <div class="circle_large" v-show="showCircle === 'pageItem2'"></div>
            </transition>
            <div class="circle_small" :class="{'circle_small_Select':showCircle === 'pageItem2'}"></div>
          </div>
          {{pageItem[1]}}
        </div>
      </router-link>
      <router-link to="/action/kiss">
        <div class="pagination_item" @click="Selectball(3)">
          <div class="pagination_item_decoration">
            <transition name="scale">
              <div class="circle_large" v-show="showCircle === 'pageItem3'"></div>
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
      pageItem: ['陰道性交','肛門性交','接吻'],
      showCircle: this.fatherData,
    }
  },
  mixins: [MixinPage],
}
</script>
