<template>
  <transition name="chart">
    <apexchart type="bar" :options="options" :series="series"></apexchart>
  </transition>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";

export default {
  components: {
    apexchart: VueApexCharts,
  },
 data(){  
   return {
     windowHeight: '',
     width:700,
     series: [],
      options: {
        chart: {
          type: "bar",
          height: 400,
          //width: '100%',
          stacked: true
        },
        plotOptions: {
          bar: {
            horizontal: false
          }
        },
        dataLabels: {
          enabled: false
        },
        tooltip: {
          shared: true,
          followCursor: true
        },
        stroke: {
          width: 1,
          colors: ["#fff"],
          curve: 'smooth'
        },
        fill: {
          opacity: 1
        },
        legend: {
          position: "top",
          horizontalAlign: "center",
          offsetX: 40
        },
        colors: ["rgb(95, 193, 215)"],
        title: {
        text: 'CONFIRMED INFECTIONS CHART',
        align: 'center',
        margin: 10,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
          fontSize:  '15px',
          fontWeight:  'bold',
          fontFamily:  "'Lato', sans-serif'",
          color:  ' #a6a6a6'
        },
      },
      }
    };
 },
 computed: {
   getDate(){
     return this.$store.getters['chart/getDate'];
   },
   getConfirmed(){
    return this.$store.getters['chart/getConfirmed'];
   }
 },
watch:{
   getDate:{
     handler(newVal){
      this.options = {
        xaxis: {
          categories: this.getDate
        }
      }
      deep:true
     },
  },
 getConfirmed:{
   handler(newVal){
    this.series = [
         {
           name: 'Confirmed',
           data: this.getConfirmed
         }
       ];
 },
  deep:true
 }
},

}
</script>
