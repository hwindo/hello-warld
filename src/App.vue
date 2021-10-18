<template>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWarld />
</template>

<script>
import HelloWarld from "./components/HelloWarld.vue";

export default {
    name: "App",
    components: {
        HelloWarld,
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
