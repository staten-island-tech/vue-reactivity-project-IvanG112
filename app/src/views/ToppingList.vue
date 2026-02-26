<template>
    <div class="container">
        <Toppings v-for="topping in toppinglist" :key="topping.name" :topping="topping"/>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Toppings from '@/components/Toppings.vue';
const toppinglist = ref([
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
])
</script>

<style scoped>

</style>