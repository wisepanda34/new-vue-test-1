<template>
  <select name="mySelect" @change="changeOption">
    <option disabled value="">Choose from list</option>
    <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
    >
      {{option.name}}
    </option>
  </select>
</template>

<script>
export default {
  name: "my-select",
  props:{
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default:()=>[]
    }

  },
  methods:{
    changeOption(event){
      this.$emit('update:modelValue', event.target.value)
    }
  }

}
</script>

<style scoped>
  select{
    height: 42px;
    margin: 10px 0;
    outline: none;
    padding: 0 0 0 10px;

  }
  option{
  }
</style>