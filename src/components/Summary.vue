<template>
  <div class="container">
    <div class="summary card-1" :class="{ loading: loader }">
      <div v-show="!loader" class="summary-2">
        <div class="title">TOTAL CASES</div>
        <div class="value">{{getCountry.TotalConfirmed}}</div>
        <div class="value2">+ {{getCountry.NewConfirmed}}</div>
      </div>
    </div>
    <div class="summary card-2" :class="{ loading: loader }">
      <div  class="summary-2" v-show="!loader">
        <div class="title">TOTAL DEATHS</div>
        <div class="value">{{getCountry.TotalDeaths}}</div>
        <div class="value2">+ {{getCountry.NewDeaths}}</div>
      </div>
    </div>
    <div class="summary card-3" :class="{ loading: loader }">
      <div  class="summary-2" v-show="!loader">
        <div class="title">TOTAL RECOVERED</div>
        <div class="value">{{getCountry.TotalRecovered}}</div>
        <div class="value2">+ {{getCountry.NewRecovered}}</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Summary",
   data(){
      return{
        loader: false
      }
    },
  computed: {
    getCountry(){
      return this.$store.getters['summary/getCountry'];
    },
    getTotal(){
      return this.$store.getters['summary/getTotal'];
    }
  },
  watch:{
    getTotal(){
      this.loader = true;
      setTimeout(() => {
        this.loader = false;
      }, 250);
    }
  },
}
</script>

<style lang="scss" scoped>

  .container {
    margin-top: 20px;
    display:flex;
    height: 200px;
    justify-content:center;
    align-items: center;
    //flex-wrap: wrap;

    @media only screen and (max-width: 840px){
      flex-direction: column;
      margin-top: 150px;
    }

   .summary{
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: space-around;
     margin: 0 30px 0 30px;
     height: 130px;
     width: 250px;
     border-radius: 15px;
     background-color:white;
     box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.20);
     border: 2px solid transparent;
     box-sizing: inherit;

    @media only screen and (max-width: 940px){
      margin: 0 15px 0 15px;
    }
     @media only screen and (max-width: 840px){
      margin: 15px 0 15px 0;
    }

     &-2{
       display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        margin: 0 30px 0 30px;
        height: 130px;
        width: 250px;
     }

     .value {
       font-weight: 700;
       font-size: 30px;

      &2{
         font-weight: 700;
      }
     }

     .title{
       font-size: 15px;
       margin-top:15px;
       color: #a6a6a6;
     }
   }
   .card{
     &-1{
       transition: all 0.2s ease-in-out;
       color: #7c58f7;
       &:hover{
         border-color: #7c58f7;
         box-shadow: 0px 0px 10px 0px rgba(#7c58f7,0.40);
       }
       &.loading:after{
          border: 6px solid #7c58f7;
          border-color:#7c58f7 transparent #7c58f7 transparent;
       }
     }

     &-2{
       transition: all 0.2s ease-in-out;
       color: red;
       &:hover{
         border-color: red;
         box-shadow: 0px 0px 10px 0px rgba(red,0.40);
       }
       &.loading:after{
          border: 6px solid red;
          border-color:red transparent red transparent;
       }
     }

     &-3{
       transition: all 0.2s ease-in-out;
        color: #34be2e;
       &:hover{
         border-color: #34be2e;
         box-shadow: 0px 0px 10px 0px rgba(#34be2e,0.40);
       }
        &.loading:after{
          border: 6px solid #34be2e;
          border-color:#34be2e transparent #34be2e transparent;
       }
     }
   }
  }
.loading {
  display: inline-block;
  width: 80px;
  height: 80px;
}
.loading:after {
  content: " ";
  display: block;
  width: 32px;
  height: 32px;
  margin: 8px;
  border-radius: 50%;
  //border: 6px solid #7c58f7;
 // border-color:#7c58f7 transparent #7c58f7 transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>