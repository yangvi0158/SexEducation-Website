<template>
  <div id="app">
    <div class="main">
      <transition name="fade" mode="out-in">
        <router-view @sendtoAppVue="getfromPage" @homecolor-changenav="changeNav" :father-data="showCircle"></router-view>
      </transition>
    </div>
    <nav class="nav" :class="{'navclass':isPurpleBack,'navclass2':isBlackBack}">
      <div class="navbtn" data-name="nav1" :class="{'navBtnclass1':isPurpleBack_btn,'navBtnclass':navBtn.isNav1}" @click="navBtnColor">
        <router-link class="navtext" :class="{'navBtnclass1':isPurpleBack_btn,'navBtnclass':navBtn.isNav1}" to="/organ">器</router-link>
      </div>
      <div class="navbtn" data-name="nav2" :class="{'navBtnclass1':isPurpleBack_btn,'navBtnclass':navBtn.isNav2}" @click="navBtnColor">
        <router-link class="navtext" :class="{'navBtnclass1':isPurpleBack_btn,'navBtnclass':navBtn.isNav2}" to="/status">況</router-link>
      </div>
      <div class="navbtn" data-name="nav3" :class="{'navBtnclass1':isPurpleBack_btn,'navBtnclass':navBtn.isNav3}" @click="navBtnColor">
        <router-link class="navtext" :class="{'navBtnclass1':isPurpleBack_btn,'navBtnclass':navBtn.isNav3}" to="/action">合</router-link>
      </div>
      <div class="logo" data-name="logo" @click="navBtnColor">
        <router-link to="/udstand"><img src="./assets/img/udLogo.png"></router-link>
      </div>
    </nav>
  </div>
</template>

<script>
import '@/assets/css/app.sass';
export default {
  name: 'App',
  data(){
    return{
      isPurpleBack: true,
      isBlackBack: false,
      isPurpleBack_btn: true,
      showCircle: '',
      navBtn: {
        isNav1: false,
        isNav2: false,
        isNav3: false,
      },
    }
  },
  methods: {
    getfromPage(){
      this.navBtn.isNav1 = false;
      this.navBtn.isNav2 = false;
      this.navBtn.isNav3 = false;
      this.isPurpleBack = true;
      this.isBlackBack = false;
      this.isPurpleBack_btn = true;
    },
    changeNav(arg){
      if(arg === '1'){
        this.isPurpleBack = true;
        this.isPurpleBack_btn = true;
        this.isBlackBack = false;
      }else if(arg === '2'){
        this.isPurpleBack = false;
        this.isPurpleBack_btn = false;
        this.isBlackBack = false;
      }else if(arg === '3'){
        this.isPurpleBack = false;
        this.isPurpleBack_btn = false;
        this.isBlackBack = true;
      }
    },
    navBtnColor(e){
      this.showCircle = 'pageItem1';
      let name = e.currentTarget.dataset.name;
      if(name === 'nav1'){
        this.isPurpleBack_btn = false;
        this.isPurpleBack = false;
        this.isBlackBack = false;
        this.navBtn.isNav1 = true;
        this.navBtn.isNav2 = false;
        this.navBtn.isNav3 = false;
      }else if(name === 'nav2'){
        this.isPurpleBack_btn = false;
        this.isPurpleBack = false;
        this.isBlackBack = false;
        this.navBtn.isNav1 = false;
        this.navBtn.isNav2 = true;
        this.navBtn.isNav3 = false;
      }else if(name === 'nav3'){
        this.isPurpleBack_btn = false;
        this.isPurpleBack = false;
        this.isBlackBack = false;
        this.navBtn.isNav1 = false;
        this.navBtn.isNav2 = false;
        this.navBtn.isNav3 = true;
      }else if(name === 'logo'){
        this.isPurpleBack_btn = false;
        this.isPurpleBack = false;
        this.isBlackBack = false;
        this.navBtn.isNav1 = false;
        this.navBtn.isNav2 = false;
        this.navBtn.isNav3 = false;
      }
    },
  }
}
</script>
