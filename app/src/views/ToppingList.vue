<template>
    <div class="container">
        <div class="pizzaSection">
            <div class="base">
                <img src="/pizzabase.png" alt="PizzaBase">
                <img src="/sauceandcheese.png" alt="PizzaSauceandCheese">
                <div class="selectedToppings">
                    <span v-for="topping in selectedToppings" :key="topping.id" class="topping-badge">
                        {{ topping.name }}
                    </span>
                </div>
            </div>
            <button class="clearButton" @click="clearToppings">Clear Toppings</button>
        <div class="Total">
            <h2>Total: ${{ selectedToppings.reduce((total, topping) => total + topping.price, 0).toFixed(2) }}</h2>
        </div>
        </div>
        <div class="toppingListSection">
            <div class="toppingList">
                <Toppings v-for="topping in toppinglist" :key="topping.name" :topping="topping">
                    <button class="addTopping" @click="addTopping(topping)">Add To Pizza</button>
                </Toppings>
            </div>
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

const selectedToppings = reactive([])

function addTopping(topping) {
    selectedToppings.push({ ...topping, id: Date.now() + Math.random() })
}

function clearToppings() {
    selectedToppings.length = 0
}

</script>

<style scoped>
.container {
    display: flex;
    height: 100vh;
    width: 100%;
    display: flex;
}

.pizzaSection {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f88379;
}

.toppingListSection {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    overflow-y: auto;
    padding: 20px;
    background-color: #f88379;
}

.base {
    position: relative;
    width: 250px;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.selectedToppings {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -750%);
    display: flex;
    flex-wrap: wrap;
    width: 200px;
    gap: 8px;
    justify-content: center;
    align-items: center;
    z-index: 2;
}

.topping-badge {
    background-color: rgba(207, 82, 78, 0.8);
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 12px;
    font-weight: bold;
}

.toppingList {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    max-width: 100%;
}

button {
    margin-top: 10px;
    margin-bottom: 20px;
    padding: 5px;
    width: 100px;
}

.clearButton {
    margin-top: 20px;
    background-color: #CF524E;
    color: white;
    border: none;
    padding: 10px 20px;
    font-weight: bold;
    cursor: pointer;
    border-radius: 5px;
    width: auto;
}
.addTopping {
    background-color: #CF524E;
    color: white;
    border: none;
    padding: 5px 10px;
    font-weight: bold;
    cursor: pointer;
    border-radius: 5px;
}
img {
    width: 250px;
    height: 250px;
    position: absolute;
}

img:first-of-type {
    z-index: 1;
}

img:last-of-type {
    z-index: 2;
}
.Total {
    margin: 20px;
    border: 5px solid #CF524E;
    border-radius: 25px;
    height: 75px;
    width: 200px;
    text-align: center;
}
</style>