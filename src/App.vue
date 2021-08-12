<template>
	<div>
		<component :is="layout">
			<transition name="fade" mode="out-in">
				<router-view/>
			</transition>
		</component>
    <Home />
  </div>
</template>

<script>
import Home from "./views/home/Home";
import Insert from "./views/insert/Insert";
const DEFAULT_LAYOUT = "DefaultLayout";


export default {
  name: 'App',
  components: {
      Home,
	  Insert,
  },
  computed: {
      /* 레이아웃 동적으로 쓰고 싶을때 사용*/
      layout() {
          //return (this.$route.meta.layout || DEFAULT_LAYOUT);
          return DEFAULT_LAYOUT;
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
