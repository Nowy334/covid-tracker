export default{
  namespaced: true,
  state() {
    return {
      Country: {
        TotalConfirmed: '',
        NewConfirmed: '',
        TotalDeaths: '',
        NewDeaths: '',
        TotalRecovered: '',
        NewRecovered: ''
      },
    };
  },
  mutations: {
    setCountry(state, country){
     // if(country){
        state.Country.TotalConfirmed = country.TotalConfirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
        state.Country.NewConfirmed = country.NewConfirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        state.Country.TotalDeaths = country.TotalDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        state.Country.NewDeaths = country.NewDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        state.Country.TotalRecovered = country.TotalRecovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        state.Country.NewRecovered = country.NewRecovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    //  }
    },
    setGlobalData(state, data){
        state.Country.TotalConfirmed = data.Global.TotalConfirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
        state.Country.NewConfirmed = data.Global.NewConfirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        state.Country.TotalDeaths = data.Global.TotalDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        state.Country.NewDeaths = data.Global.NewDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        state.Country.TotalRecovered = data.Global.TotalRecovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        state.Country.NewRecovered = data.Global.NewRecovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
  },
  actions: {
    async setCountry(context, payload){
      try{
        const response = await fetch("https://api.covid19api.com/summary");
        const data = await response.json();
        let country = search(data.Countries, payload.value);
        context.commit('setCountry', country);

      }catch(error){
        console.log(error);
      } 
    },
    async setGlobalData(context){
      try{
        const response = await fetch("https://api.covid19api.com/summary");
        const data = await response.json();
        context.commit('setGlobalData', data);
        }catch(error){
          console.log(error);
        }
    }
  },
  getters: {
    getCountry(state){
      return state.Country;
    },
    getTotal(state){
      return state.Country.TotalConfirmed;
    }
  },
}

function search(data, searchValue){
  for( let i = 0; i < data.length; i++){
    if(searchValue === data[i].Slug || searchValue === data[i].Country){
      return(data[i]);
    }
  }
}
