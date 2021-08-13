<template>
	<div id="app">
		<component :is="layout"></component>
	</div>
</template>

<script>

const default_layout = "DefaultLayout";


export default {
    name: 'App',
    computed: {
        layout() {
           // return (this.$route.meta.layout || default_layout);
	        return default_layout;
        }
    },
    created() {
        //console.log(`>>== process.env.NODE_ENV = ${process.env.NODE_ENV}`);
        //console.log(`>>== process.env.VUE_APP_API_HOST = ${process.env.VUE_APP_API_HOST}`);
    }
}
</script>

<style>
	@import 'assets/css/style.css';
</style>
