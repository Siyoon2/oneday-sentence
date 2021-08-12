<template>
	<div>
		<div id="demo">
			<form id="search">
				Search <input name="query" v-model="searchQuery">
			</form>
		</div>
	</div>
</template>

<script>
    //import { ref } from 'vue';
    //import WDInput from "../components/WDInput";

    export default {
        name: "Insert",
	    components: {
            //WDInput,
	    },
        setup () {
            //const isInit = ref(false);

            return {
                //isInit,

            }
        }
    }
</script>

<style scoped>

</style>