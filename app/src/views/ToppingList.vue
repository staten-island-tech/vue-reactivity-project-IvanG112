<template>
    <div class="pizza">
        <div class="base">
            <img src="/pizzabase.png" alt="PizzaBase">
            <img src="/sauceandcheese.png" alt="PizzaSauceandCheese">
        </div>
        <div class="toppingList">
            <Toppings v-for="topping in toppinglist" :key="topping.name" :topping="topping">
                <button>Add To Pizza</button>
            </Toppings>
        </div>
    </div>

</template>

<script setup>
import { reactive } from 'vue';
import Toppings from '@/components/Toppings.vue';
const toppinglist = reactive([
    { name: 'Pepperoni', type: 'meat', price: 2.50 },
    { name: 'Italian Sausage', type: 'meat', price: 2.50 },
    { name: 'BBQ Chicken', type: 'meat', price: 2.50 },
    { name: 'Buffalo Chicken', type: 'meat', price: 2.50 },
    { name: 'Bacon', type: 'meat', price: 2.50 },
    { name: 'Ham', type: 'meat', price: 2.50 },
    { name: 'Mushrooms', type: 'vegetable', price: 1.50 },
    { name: 'Onions', type: 'vegetable', price: 1.50 },
    { name: "Bell Peppers", type: 'vegetable', price: 1.50 },
    { name: 'Olives', type: 'vegetable', price: 1.50 },
    { name: 'Jalapenos', type: 'vegetable', price: 1.50 },
])

</script>

<style scoped>
.toppingList {
    display: flex;
    flex-wrap: wrap;
    width: 60%;
    position: relative;
    left: 400px;

}

button {
    margin-top: 10px;
    margin-bottom: 20px;
    padding: 5px;
    width: 100px;
}

img {
    width: 250px;
    height: 250px;
    position: absolute;
}
</style>