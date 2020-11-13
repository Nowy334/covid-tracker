<template>
  <div class="main">
    <Search v-model="searchValue" @update:modelValue="handleInput"/>
    <HeaderCountry :flag="code" :country="searchValue"></HeaderCountry>
    <Summary :land="Country" :search="searchValue"></Summary>
  </div>
</template>

<script>
import debounce from 'lodash.debounce';
import {counterCode} from "./store/index.js";
import Search from './components/Search.vue'    
import Summary from './components/Summary.vue'
import HeaderCountry from './components/HeaderCountry.vue'


export default {
  name: 'App',
  components: {
    Search,
    Summary,
    HeaderCountry
  },
  data() {
    return {
      searchValue: '',
      code: '',
      data: {},
      Country: {
        TotalConfirmed: '',
        NewConfirmed: '',
        TotalDeaths: '',
        NewDeaths: '',
        TotalRecovered: '',
        NewRecovered: ''
      }
    }
  },
  methods: {
    async handleInput(){
        this.code = await counterCode(this.searchValue);
        this.getCountry();
    },
    search(data){
      for( let i = 0; i < data.length; i++){
        //console.log(this.searchValue);
        if(this.searchValue === data[i].Slug){
          return(data[i]);
        }   
      }
    },

    async getCountry(){
      try{
        const response = await fetch("https://api.covid19api.com/summary");
        const data = await response.json();
        this.Country.TotalConfirmed =this.search(data.Countries).TotalConfirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        this.Country.NewConfirmed =this.search(data.Countries).NewConfirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        this.Country.TotalDeaths =this.search(data.Countries).TotalDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        this.Country.NewDeaths =this.search(data.Countries).NewDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        this.Country.TotalRecovered =this.search(data.Countries).TotalRecovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        this.Country.NewRecovered =this.search(data.Countries).NewRecovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      }catch(error){
         //console.log(error);
         this.begin();
      } 
    },
    async begin(){
      try{
      const response = await fetch("https://api.covid19api.com/summary");
      const data = await response.json();
        this.Country.TotalConfirmed = data.Global.TotalConfirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        this.Country.NewConfirmed = data.Global.NewConfirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        this.Country.TotalDeaths = data.Global.TotalDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        this.Country.NewDeaths = data.Global.NewDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        this.Country.TotalRecovered = data.Global.TotalRecovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        this.Country.NewRecovered = data.Global.NewRecovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      }catch(error){
        //console.log(error);
      }
    }
  },
  async mounted(){
    try{
      const response = await fetch("https://api.covid19api.com/summary");
      const data = await response.json();
        this.Country.TotalConfirmed = data.Global.TotalConfirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        this.Country.NewConfirmed = data.Global.NewConfirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        this.Country.TotalDeaths = data.Global.TotalDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        this.Country.NewDeaths = data.Global.NewDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        this.Country.TotalRecovered = data.Global.TotalRecovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        this.Country.NewRecovered = data.Global.NewRecovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }catch(error){
      console.log(error);
    }
  },
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

  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

</style>
