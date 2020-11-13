<template>
  <div class="wrapper">
    <input type="text" :value="modelValue" @keyup.enter="$emit('update:modelValue', $event.target.value)" placeholder="Search" >
    
  </div>
</template>

<script>

export default {
  name: "Search",
  props: {
    modelValue: String
  },
  
}
</script>

<style lang="scss" scoped>
  .wrapper {
    position: relative;
    display:flex;
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

      &:focus {
        outline: none;
        width: 300px;
      }
      &::placeholder {
        font-family: inherit;
      }
    }
  }
  
</style>