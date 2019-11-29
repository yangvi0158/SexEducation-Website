<template>
  <div id="app">
    <div class="main">
      <transition name="fade" mode="out-in">
        <router-view @sendtoAppVue="getfromPage" @homecolor-changenav="changeNav" :father-data="showCircle" :resetNav="navBtnColor"></router-view>
      </transition>
    </div>
    <nav class="nav" :class="{'whiteNavBar':navbarInMenu,'whiteBorderNavBar':navbarWhiteBorder}">
    
      <router-link to="/organ" :class="{'defaultNavBtn':navBtnInMenu,'SelectNavBtn':navBtn.isNav1}">
        <div class="navbtn" data-name="organBtn" @click="navBtnColor">
          <div class="navtext">器</div>
        </div>
      </router-link>

      <router-link to="/status" :class="{'defaultNavBtn':navBtnInMenu,'SelectNavBtn':navBtn.isNav2}">
        <div class="navbtn" data-name="statusBtn" @click="navBtnColor">
          <div class="navtext">況</div>
        </div>
      </router-link>
      
      <router-link to="/action" class="last-a" :class="{'defaultNavBtn':navBtnInMenu,'SelectNavBtn':navBtn.isNav3}">
        <div class="navbtn" data-name="actionBtn" @click="navBtnColor">
          <div class="navtext">合</div>
        </div>
      </router-link>
      <div class="logo" data-name="logoBtn" @click="navBtnColor">
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
      navbarInMenu: true,
      navbarWhiteBorder: false,
      navBtnInMenu: true,
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
      this.navbarInMenu = true;
      this.navbarWhiteBorder = false;
      this.navBtnInMenu = true;
    },
    changeNav(arg){
      if(arg === '1'){
        this.navbarInMenu = true;
        this.navBtnInMenu = true;
        this.navbarWhiteBorder = false;
      }else if(arg === '2'){
        this.navbarInMenu = false;
        this.navBtnInMenu = false;
        this.navbarWhiteBorder = false;
      }else if(arg === '3'){
        this.navbarInMenu = false;
        this.navBtnInMenu = false;
        this.navbarWhiteBorder = true;
      }
    },
    navBtnColor(e){
      this.showCircle = 'pageItem1';
      let name = e.currentTarget.dataset.name;
      if(name === 'organBtn'){
        this.navBtnInMenu = false;
        this.navbarInMenu = false;
        this.navbarWhiteBorder = false;
        this.navBtn.isNav1 = true;
        this.navBtn.isNav2 = false;
        this.navBtn.isNav3 = false;
      }else if(name === 'statusBtn'){
        this.navBtnInMenu = false;
        this.navbarInMenu = false;
        this.navbarWhiteBorder = false;
        this.navBtn.isNav1 = false;
        this.navBtn.isNav2 = true;
        this.navBtn.isNav3 = false;
      }else if(name === 'actionBtn'){
        this.navBtnInMenu = false;
        this.navbarInMenu = false;
        this.navbarWhiteBorder = false;
        this.navBtn.isNav1 = false;
        this.navBtn.isNav2 = false;
        this.navBtn.isNav3 = true;
      }else if(name === 'logoBtn'){
        this.navBtnInMenu = false;
        this.navbarInMenu = false;
        this.navbarWhiteBorder = false;
        this.navBtn.isNav1 = false;
        this.navBtn.isNav2 = false;
        this.navBtn.isNav3 = false;
      }
    },
  }
}
</script>
