<template>
  <div>
    <h2>{{ topping.name }}</h2>
    <h3>${{ topping.price }}</h3>
    <slot></slot>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  topping: {
    type: Object,
    required: true
  }
})

</script>

<style scoped>
div {
    display: flex;
    align-content: center;
    flex-direction: column;
    border: 5px solid #CF524E;
    border-radius: 10px;
    padding: 10px;
    margin: 5px;
    height:175px;
    width: 175px;
}
</style>