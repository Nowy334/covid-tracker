export default{
  namespaced: true,
  state() {
    return {
      code: ''
    };
  },
  mutations: {
    counterCode(state, payload){
      state.code = payload;
      //console.log('tutaj ' + state.code);
    }
  },
  actions: {
    async counterCode(context, payload){
      try{
        const response = await fetch('https://api.covid19api.com/countries');
        const data = await response.json();
        const code = await findCode(data, payload.value);
        context.commit('counterCode', code);
      }catch(error){
        console.log(error);
      }
    }
  },
  getters: {
    getCode(state){
      return state.code.toLowerCase();
    }
  }
}

async function findCode(data, input){
  for( let i = 0; i < data.length; i++){
    if(input === data[i].Slug || input === data[i].Country){
      return(data[i].ISO2);
    }
  }
}  