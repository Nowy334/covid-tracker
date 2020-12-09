export default{
  namespaced: true,
  state() {
    return {
      confirmed: [],
      date: []
    };
  },
  mutations: {
    setChart(state, data){
      state.date = [];
      state.confirmed = [];
      data.forEach((el, i) => {
        if(i > data.length-25){
           state.date.push(el.Date.slice(0, el.Date.indexOf("T")));
           state.confirmed.push(el.Confirmed);
        }
      });
    }
  },
  actions: {
    async setChart(context){
      try{
        let code = context.rootState.code.code;
        const response = await fetch(`https://api.covid19api.com/total/country/${code}`);
        const data = await response.json();
        context.commit('setChart', data);
      }catch(error){
       console.log(error);
      }
    }
  },
  getters: {
    getDate(state){
      return state.date;
    },
    getConfirmed(state){
      return state.confirmed;
    }
  }
}
