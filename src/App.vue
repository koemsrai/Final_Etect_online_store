<script setup>
    import BottonBar from './components/BottonBar.vue';
    import Header from './components/header.vue';
    import Footer from './components/Footer.vue';
    import { RouterView } from 'vue-router';
</script>
<template>
    <header>
        <Header/>
    </header>
    <main >
        <RouterView />
    </main>
    <footer>
        <Footer/>
    </footer>
    <BottonBar/>
</template>
<style lang="scss" scoped> 

</style>