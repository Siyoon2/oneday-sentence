<template>
	<div>
		<component :is="layout">
			<transition name="fade" mode="out-in">
				<router-view/>
			</transition>
		</component>

    <home />


  </div>
</template>

<script>
import home from "./views/home/Home";
const default_layout = "DefaultLayout";


export default {
  name: 'App',
  components: {
    home
  },
  computed: {
      layout() {
        console.log(this.$route.meta.layout || default_layout);
          return (this.$route.meta.layout || default_layout);
      }
  },

  setup () {


      return {

      }
  }

}
</script>

<style>
	@import 'assets/css/style.css';
</style>
