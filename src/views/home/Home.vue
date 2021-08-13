<template>
	<div class="inner-wrap">
		<div class="top">
			<div class="date">
				2021년 8월 9일
			</div>
			<router-link to="/insert" class="btn btn-primary">등록</router-link>

		</div>
		<div class="content">
			<div class="sentence">
				There are better starters than me but I’m a strong finisher. — Usain Bolt
			</div>
		</div>
	</div>
</template>

<script>


  export default {
      name: "Home",
      components: {
      },

  }
</script>

<style scoped>
	.top {
		padding: 30px 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.date {
		color: #000;
	}
	.content {
		padding: 30px 0;
	}
	.sentence {
		color: blue;
		font-size: 2rem;
	}
</style>