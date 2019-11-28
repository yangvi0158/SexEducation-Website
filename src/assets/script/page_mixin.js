export default {
  methods:{
    ballStyle(num){
      this.showCircle = 'pageItem'+num;
      this.$emit("update-ball",this.showCircle);
    },
    backToHome(){
      this.$emit("sendtoAppVue");
    }
  }
}