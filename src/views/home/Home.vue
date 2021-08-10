<template>
	<div>
		<div class="wrap">
			<div class="inner-wrap">
				<div class="date">
					2021년 8월 9일
				</div>
				<div class="sentence"></div>
			</div>
		</div>
	</div>
</template>

<script>

import { ref } from 'vue';

export default {
  name: "Home",
  components: {

  },
  setup (){

    const isInit = ref(false);

    return {
        isInit,

    }
  }
}
</script>

<style scoped>
	.date {
		color: #000;
	}
</style>