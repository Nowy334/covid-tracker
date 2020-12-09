<template>
  <div class="wrapper">
    <input type="text" 
          @keyup.enter="setValue(), onEnter(), emitvalue()"
          ref="searchValue"
          v-model="search" 
          @input="onChange($event.target.value)"
          @keydown.down="onArrowDown"
          @keydown.up="onArrowUp" 
          :placeholder="placeholder">
    <div class="autoList" v-show="search && isOpen && results.length">
      <ul class="list">
        <li class="listElement"
            v-for="(result, i) in results" :key="result"
            @click="setState(result), $emit('update')"
            :class="{ 'is-active': i === arrowCounter }"
            >{{result}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

export default {
  name: "Search",
  data(){
    return{
      search: '',
      results: [],
      isOpen: false,
      arrowCounter: -1
    }
  },
  methods: {
    onChange(value) {
        this.search = value;
        this.isOpen = true;
        this.filterResults();
      },
    filterResults() {
      this.results = this.getCountry.filter( state => {
        return state.toLowerCase().startsWith(this.search.toLowerCase());
      })
    },
    doesExist(payload){
      this.$store.dispatch({
        type: 'search/searchCountry',
        value: payload
      });
    },
    emitvalue(){
      if(this.getExist || this.$refs.searchValue.value === ''){
        this.$emit('update');
      }
    },
    setValue(){
      this.isOpen = false;
      this.doesExist(this.$refs.searchValue.value);
      if(this.getExist || this.$refs.searchValue.value === ''){
        this.$store.dispatch({
          type: 'search/setValue',
          value: this.$refs.searchValue.value
        });
      }
    },
    setState(result){
      this.search = result;
      this.$refs.searchValue.value = result;
      this.doesExist(result);
      if(this.getExist || this.$refs.searchValue.value == ''){
        this.setValue();
      }
      this.search = '';
    },
     handleClickOutside(evt) {
      if (!this.$el.contains(evt.target)) {
        this.isOpen = false;
        this.arrowCounter = -1;
      }
    },
    onArrowDown() {
        if (this.arrowCounter < this.results.length) {
          this.arrowCounter = this.arrowCounter + 1;
        }
      },
      onArrowUp() {
        if (this.arrowCounter > 0) {
          this.arrowCounter = this.arrowCounter - 1;
        }
      },
      onEnter() {
        if(this.arrowCounter !== -1){
          this.search = this.results[this.arrowCounter];
          this.isOpen = false;
          this.setState(this.search);
          this.arrowCounter = -1;
        }
      },
  },
  computed: {
    placeholder(){
      if(this.search === ''){
        return 'Search';
      }
    },
    getCountry(){
      return this.$store.getters['search/country'];
    },
    getExist(){
      return this.$store.getters['search/getExist'];
    }
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside);
  },
  unmounted() {
    document.removeEventListener('click', this.handleClickOutside);
  }
  
}
</script>

<style lang="scss" scoped>
  .wrapper {
    position: relative;
    display:flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 40px;

    input {
      width: 200px;
      padding-top: 10px;
      padding-bottom: 2px;
      margin-top:30px;
      border: none;
      border-bottom: solid 1px black;
      transition: all 0.5s ease-in-out; 
      font-size: 18px;
      text-align: center;
      background-color: transparent;
      -webkit-backface-visibility: hidden;
      -webkit-transform: translateZ(0) scale(1.0, 1.0);

      &:focus {
        outline: none;
        width: 300px;
      }
      &::placeholder {
        font-family: inherit;
      }
    }
    .autoList{
      display: flex;
      justify-content: center;
      align-items: center;
      background: white;
      z-index: 1000;
      position: absolute;
      top: 100%;
      left:50%;
      transform: translate(-50%, 0);
      width: 300px;
      font-size: 18px;
      border-bottom-left-radius: 15px;
      border-bottom-right-radius: 15px;
      box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.20);
      padding: 10px 0 10px 0;

      .list{
        display: flex;
        align-items: center;
        flex-direction: column;
        list-style: none;
        background: white;
        color: #a6a6a6;
        .listElement{
          padding: 4px;

          &.is-active,
          &:hover {
            cursor: pointer;
            color: black;
          }
        }
      }
    }
    
  }
  
</style>