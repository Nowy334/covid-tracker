<template>
  <div v-if="getSearchValue" class="container">
    <img :src="url" alt="country flag">
    <div class="data">
      <h2>{{capitalizeFirstLetter}}</h2>
      <p>{{currentData}}</p>
    </div>
  </div>
  <div v-else class="container">
    <div class="container-2">
      <img class="world" src="https://icons.iconarchive.com/icons/dtafalonso/modern-xp/512/ModernXP-73-Globe-icon.png" alt="world">
      <div class="data">
        <h2>Global</h2>
        <p>{{currentData}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderCountry",
  data(){
    return{
      loader: false
    }
  },
  computed: {
    capitalizeFirstLetter(){
      let nameCountry = this.$store.getters['search/searchValue'];
      if(nameCountry){
        return nameCountry[0].toUpperCase() + nameCountry.slice(1)
      }else {
        return '';
      }
    },
    url(){
      if(this.getCode){
       // return `https://www.countryflags.io/${this.getCode}/shiny/64.png`;
        return `http://www.geonames.org/flags/x/${this.getCode}.gif`;
      }
    },
    currentData(){
     const now = new Date();
     return `${now.getDate()} . ${now.getMonth()+1} . ${now.getFullYear()}`;
    },
    getCode(){
      return this.$store.getters['code/getCode'];
    },
    getSearchValue(){
     return this.$store.getters['search/searchValue']
    },
    getTotal(){
      return this.$store.getters['summary/getTotal'];
    },
    getExist(){
      return this.$store.getters['search/getExist'];
    }
  },
  watch:{
      getTotal(){
        this.loader = true;
        setTimeout(() => {
          this.loader = false;
        }, 250);
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

    &-2{
      display:flex;
      justify-content: center;
      align-items: center;
    }

    img{
      width: 60px;
      height: 40px;
      box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.20);
    }
    .world{
      width: 52px;
      height: 52px;
      box-shadow: none;
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
.loading {
  display: flex;
}
.loading:after {
  content: " ";
  display: block;
  width: 30px;
  height: 30px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #F2F2F2;
  border-color:#F2F2F2 transparent #F2F2F2 transparent;
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

.fade-enter-from{
  opacity:0;
}
.fade-enter-active{
  transition: all 0.5s ease-in-out;
}
.fade-enter-to{
   opacity:1;
}
</style>