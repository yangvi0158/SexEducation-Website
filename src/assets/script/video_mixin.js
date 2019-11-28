export default {
  methods: {
    playvideo(){
      this.videoElement = event.target;
      //console.log(event.target);
      this.videoElement.play();
    }
  }
}