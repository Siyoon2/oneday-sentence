<template>
	<component :is="layout" v-if="state.isInit">
		<transition name="fade" mode="out-in">
			<router-view/>
		</transition>
	</component>
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

  data () {


      return {

      }
  }

}
</script>

<style>
	@import 'assets/css/style.css';
</style>
