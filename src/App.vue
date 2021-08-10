<template>
	<div v-if="state.isInit">
		<component :is="layout">
			<transition name="fade" mode="out-in">
				<router-view/>
			</transition>
		</component>
	</div>
</template>

<script>
const default_layout = "DefaultLayout";


export default {
  name: 'App',
  computed: {
      layout() {
          return (this.$route.meta.layout || default_layout);
      }
  },
  components: {
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
