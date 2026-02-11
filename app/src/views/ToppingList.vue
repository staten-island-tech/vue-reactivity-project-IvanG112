<template>
    <div v-for="topping in toppings" :key="topping.meats">
        <h2>{{ topping.meats }}</h2>
        <div v-for="item in topping.meats" :key="toppings.meats.name">
            {{ toppings.meats.name }}
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Toppings from '@/components/Toppings.vue';
const toppings = [
    {name: 'Pepperoni'},
    {name: 'Italian Sausage'},
    {name: 'BBQ Chicken'},
    {name: 'Buffalo Chicken'},
    {name: 'Mushrooms'},
    {name: 'Onions'},
]
</script>

<style scoped>

</style>