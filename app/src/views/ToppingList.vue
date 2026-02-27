<template>
    <div class = "base">

    </div>
    <div class="container">
        <Toppings v-for="topping in toppinglist" :key="topping.name" :topping="topping">
            <button>Add To Pizza</button>
        </Toppings>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Toppings from '@/components/Toppings.vue';
const toppinglist = ref([
    {name: 'Pepperoni',type: 'meat',price: 2.50},
    {name: 'Italian Sausage',type: 'meat',price: 2.50},
    {name: 'BBQ Chicken',type: 'meat',price: 2.50},
    {name: 'Buffalo Chicken',type: 'meat',price: 2.50},
    {name: 'Bacon',type: 'meat',price: 2.50},
    {name: 'Ham',type: 'meat',price: 2.50},
    {name: 'Mushrooms',type: 'vegetable',price: 1.50},
    {name: 'Onions',type: 'vegetable',price: 1.50},
    {name: "Bell Peppers",type: 'vegetable',price: 1.50},
    {name: 'Olives',type: 'vegetable',price: 1.50},
    {name: 'Jalapenos',type: 'vegetable',price: 1.50},
])
</script>

<style scoped>
.container{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: flex-end;    
    
}
button {
    margin-top: 10px;
    margin-bottom: 20px;
    padding: 5px;
    width: 100px;
}
</style>