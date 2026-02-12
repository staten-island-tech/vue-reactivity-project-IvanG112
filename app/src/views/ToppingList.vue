<template>
    <div class="topping">
        <h2>Choose Toppings</h2>
        <Toppings v-for="topping in toppings" :key="topping.name"/>
        <button>Add Topping</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Toppings from '@/components/Toppings.vue';
const toppings = [
    {name: 'Pepperoni',type: 'meat'},
    {name: 'Italian Sausage',type: 'meat'},
    {name: 'BBQ Chicken',type: 'meat'},
    {name: 'Buffalo Chicken',type: 'meat'},
    {name: 'Bacon',type: 'meat'},
    {name: 'Ham',type: 'meat'},
    {name: 'Mushrooms',type: 'vegetable'},
    {name: 'Onions',type: 'vegetable'},
    {name: "Green Bell Peppers",type: 'vegetable'},
    {name: "Red Bell Peppers",type: 'vegetable'},
    {name: 'Olives',type: 'vegetable'},
    {name: 'Jalapenos',type: 'vegetable'},
]
</script>

<style scoped>

</style>