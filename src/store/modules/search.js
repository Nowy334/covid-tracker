export default{
  namespaced: true,
  state() {
    return {
      inputValue: '',
      countries: [],
      exist: null
    };
  },
  mutations: {
    setValue(state, payload){
      state.inputValue = payload.value;
    },
    setCountry(state, data){
      data.forEach(el => {
        state.countries.push(el.Country);
      })
    },
    searchCountry(state, value){

      for(let i = 0; i < state.countries.length; i++){
        if(value === state.countries[i]){
         state.exist = true;
         break;
        }else{
          state.exist = false;
        }
      }
    }
  },

  actions: {
    setValue(context, payload){
      context.commit('setValue', payload);
    },
    async saveCountries(context){
      try{
        const response = await fetch('https://api.covid19api.com/countries');
        const data = await response.json();
        context.commit('setCountry', data);
      }catch(error){
        console.log(error);
      }
    },
    searchCountry(context, payload){
      let value;
      if(payload.value !== ''){
        value = payload.value[0].toUpperCase() + payload.value.slice(1)
      }else{
        this.exist = true;
      }
      context.commit('searchCountry', value);
    }
  },
  getters: {
    searchValue(state){
      return state.inputValue;
    },
    country(state){
      return state.countries;
    },
    getExist(state){
      return state.exist;
    }
  }
}