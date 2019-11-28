export default {
  methods:{
    ballStyle(num){
      this.showCircle = 'pageItem'+num;
      this.$emit("update-ball",this.showCircle);
    },
    test(){
      this.$emit("sayhi");
      console.log('1');
    }
  }
}