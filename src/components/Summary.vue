<template>
  <div class="container">
    <div class="summary card-1">
      <div class="title">TOTAL CASES</div>
      <div class="value">{{land.TotalConfirmed}}</div>
      <div class="value2">+ {{land.NewConfirmed}}</div>
    </div>
    <div class="summary card-2">
      <div class="title">TOTAL DEATHS</div>
      <div class="value">{{land.TotalDeaths}}</div>
      <div class="value2">+ {{land.NewDeaths}}</div>
    </div>
    <div class="summary card-3">
      <div class="title">TOTAL RECOVERED</div>
      <div class="value">{{land.TotalRecovered}}</div>
      <div class="value2">+ {{land.NewRecovered}}</div>
    </div>
  </div>
</template>

<script>
import {summary} from "../store/index.js";
import debounce from 'lodash.debounce';

export default {
  name: "Summary",
  props: {
    land:{
      type: Object,
    },
    search: String
  },

  data(){
    return {
      Country: {},
      TotalConfirmed: this.land.TotalConfirmed,
      NewConfirmed: this.land.NewConfirmed,
      TotalDeaths: this.land.TotalDeaths,
      NewDeaths: this.land.TNewDeaths,
      TotalRecovered: this.land.TotalRecovered,
      NewRecovered: this.land.NewRecovered
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
    flex-wrap: wrap;

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
     }

     &-2{
       transition: all 0.2s ease-in-out;
       color: red;
       &:hover{
         border-color: red;
         box-shadow: 0px 0px 10px 0px rgba(red,0.40);
       }
     }

     &-3{
       transition: all 0.2s ease-in-out;
        color: #34be2e;
       &:hover{
         border-color: #34be2e;
         box-shadow: 0px 0px 10px 0px rgba(#34be2e,0.40);
       }
     }
   }
  }
</style>