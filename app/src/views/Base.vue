<template>
    <div>
        <h1>Make a Pizza!</h1>
        <h2 @click="goToppings" class="clickable">Get Started</h2>
    </div>
</template>

<script>
export default {
  methods: {
    goToppings() {
      // `this.$router` is injected by vue-router
      this.$router.push({ name: 'ToppingList' });
      // or: this.$router.push('/toppinglist')
    }
  }
}
</script>

<style scoped>
:global(body){    
    background-color: #f88379;
}
div{
    text-align: center;
    justify-content: center;
    padding: 40px;
    display: flex;
    flex-direction: column;
    margin:auto;
    max-width: fit-content;
}
h2{
    font-size: 25px;
    border: #f29c9c solid 4px;
    border-radius: 7.5px;
}
h1{
    font-size: 40px;
    border: #f29c9c solid 4px;
    border-radius: 10px;
}
</style>