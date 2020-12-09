import { createStore } from 'vuex';
import Search from './modules/search.js';
import Summary from './modules/summary.js';
import Code from './modules/code.js';
import Chart from './modules/chart.js';

const store = createStore({
  modules: {
    search: Search,
    summary: Summary,
    code: Code,
    chart: Chart
  },
  state() {
    return {
      
    };
  },
  mutations: {
  
  },
  getters: {
    
  },
  actions: {
    
  }
});

export default store;




