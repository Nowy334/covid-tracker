<template>
  <div v-if="flag" class="container">
    <img :src="url" alt="country flag">
    <div class="data">
      <h2>{{capitalizeFirstLetter}}</h2>
      <p>12.11.2020</p>
    </div>
  </div>
  <div v-else class="container">
    <img src="https://icons.iconarchive.com/icons/dtafalonso/modern-xp/512/ModernXP-73-Globe-icon.png" alt="world">
    <div class="data">
      <h2>Global</h2>
      <p>{{currentData}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderCountry",
  props: {
    flag: String,
    country: String
  },
  data(){
    return {
      search: ''
    }
  },
  computed: {
    capitalizeFirstLetter(){
      if(this.country){
        return this.country[0].toUpperCase() + this.country.slice(1)
      }else {
        return '';
      }
    },
    url(){
      return `https://www.countryflags.io/${this.flag}/shiny/64.png`;
    },
    currentData(){
     const now = new Date();
     return `${now.getDate()} . ${now.getMonth()+1} . ${now.getFullYear()}`;
    }
  }
}
</script>

<style lang="scss" scoped>
  .container{
    height:70px;
    width:250px;
    background-color: white;
    border-radius: 15px;
    box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.20);
    display:flex;
    justify-content: center;
    align-items: center;

    img{
      width: 52px;
      height: 52px;
    }

    .data{
      margin-left: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      h2{
        font-size: 18px;
        margin-bottom: 2px;
      }
      p{
        font-size: 12px;
      }

    }
  }
</style>