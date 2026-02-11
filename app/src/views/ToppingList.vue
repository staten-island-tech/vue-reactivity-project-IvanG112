<template>
    <div>

    </div>
</template>

<script setup>
import { ref } from 'vue';
import Toppings from '@/components/Toppings.vue';
const toppings = [
    {meats: [
        {name: 'Pepperoni'},
        {name: 'Italian Sausage'},
        {name: 'BBQ Chicken'},
        {name: 'Buffalo Chicken'}

    ]},
    {vegetables: [
        {name: 'Mushrooms'},
        {name: 'Onions'},
        {name: 'Bell Peppers'},
        {name: 'Black Olives'},
    ]},
]
</script>

<style scoped>

</style>