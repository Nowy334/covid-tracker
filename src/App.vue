<template>
  <div class="main">
    <Search @update="handleInput"/>
    <HeaderCountry></HeaderCountry>
    <Summary></Summary>
  </div>
  <transition name="chart">
    <LineChart :value="getSearchValue" class="chart" v-if="getSearchValue"></LineChart>
  </transition>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";
import Search from './components/Search.vue'    
import Summary from './components/Summary.vue'
import LineChart from './components/LineChart.vue'
import HeaderCountry from './components/HeaderCountry.vue'

export default {
  name: 'App',
  components: {
    Search,
    Summary,
    HeaderCountry,
    LineChart
  },
  methods: {
    setCountries(){
      this.$store.dispatch({type:'search/saveCountries'});
    },
   async setCode(){
      await this.$store.dispatch({
        type:'code/counterCode',
        value: this.getSearchValue
      });
    },
    setChart(){
      this.$store.dispatch({type:'chart/setChart'});
    },

    setCountry(){
      this.$store.dispatch({
        type:'summary/setCountry',
        value: this.getSearchValue
      });
    },
    setGlobalData(){
      this.$store.dispatch({type : 'summary/setGlobalData'});
    },
     async handleInput(){
        if(this.getSearchValue){
          await this.setCode();
          //console.log("tam" + this.getCode);
          this.setCountry();
          this.setChart();
        }else{
          this.setGlobalData();
        }
    },
  },
  async mounted(){
    await this.setGlobalData();
    await this.setCountries()
  },
  computed: {
    getSearchValue(){
      return this.$store.getters['search/searchValue'];
    },
    getCode(){
      return this.$store.getters['code/getCode'];
    }
  }
}
</script>

<style lang="scss">
 @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');

 *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 }
  body {
    background-color: #F2F2F2;
    font-family: 'Lato', sans-serif;
  }
  #app{
    display: flex;
    //justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .chart {
    //display: flex;
    //flex-direction: column;
    //align-items: center;
    background-color: #fff;
    border-radius:15px;
    width:870px;
    min-height: 400px;
    padding: 30px;
    margin: 15px auto 15px auto;
    box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.20);

    @media only screen and (max-width: 840px){
      margin-top:150px;
      width:500px;
    }

    @media only screen and (max-width: 500px){
      width:360px;
      padding: 0;
    }

     
  }
  .chart-enter-from,
  .chart-leave-to{
    opacity: 0;
  }
  .chart-enter-active,
  .chart-leave-active{
    transition: all 0.1s ease-in-out;
  }
  .chart-enter-to,
  .chart-leave-from{
    opacity: 1;
  }


</style>
