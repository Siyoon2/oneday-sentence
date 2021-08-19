<template>
	<div class="header-wrap">
		<div class="inner-wrap">
			<div class="cont">
				<router-link to="/home" class="btn-home">
					<img src="../../assets/img/home.png" alt="홈 아이콘">
				</router-link>
				<router-link to="/insert" class="btn btn-primary">문장 등록</router-link>

			</div>
		</div>
	</div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
	.cont {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.btn-home {
		/*background: url("../../assets/img/home.png");*/
		width: 35px;
		height: 35px;
	}

</style>