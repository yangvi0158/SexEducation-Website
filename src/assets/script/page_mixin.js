export default {
  methods: {
    playvideo() {
      this.videoElement = event.target;
      console.log(event.target)
      this.videoElement.play();
    }
  }
}


// export default {
//   data() {
//     return {
//       videoElement: null,     
//     }
//   },
//   methods: {
//     playvideo() {
//       this.videoElement = event.target;
//       console.log(event.target)
//       this.videoElement.play();
//     }
//   },
//   beforeDestroy() {
//     this.videoElement = null;
//   }
// }



// var pageExtend = Vue.Extend({
//   data() {
//     return {
//       videoElement: null,
//       //showCircle: this.data,
//     }
//   },
//   methods: {
//     playvideo() {
//       this.videoElement = event.target;
//       console.log(event.target)
//       this.videoElement.play();
//     }
//   },
//   beforeDestroy() {
//     this.videoElement = null;
//   }
// })