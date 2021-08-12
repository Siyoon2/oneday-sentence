<template>
	<div>
		<div class="wrap">
			<div class="inner-wrap">
				<div class="top">
					<div class="date">
						2021년 8월 9일
					</div>
					<router-link to="/insert">등록</router-link>
				</div>

				<div class="sentence">
					There are better starters than me but I’m a strong finisher. — Usain Bolt
				</div>
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
	.top {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.date {
		color: #000;
	}
	.sentence {
		color: blue;
		font-size: 2rem;
	}
</style>