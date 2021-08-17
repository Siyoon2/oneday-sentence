<template>
	<div class="inner-wrap">
		<div class="top">
			<div class="date">
				<span>
					{{ dateValue }}
				</span>
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
	  data() {
          return {
              dateValue: '',
          }
	  },
	  methods: {

          /*todayValue () {
              let date = new Date();

              let year = date.getFullYear();
              let month = date.getMonth() + 1;
              let day = date.getDate();

              return date[year,month,day].join('-');
          },
*/
          //날짜 형식 포맷 YYYY-MM-DD
		  dateFormat(date) {
		      let year = date.getFullYear();
		      let month = date.getMonth() + 1;
		      let day = date.getDate();

		      return [year,month,day].join('-');
		  },
	  },
      mounted () {
          // 현재 선택된 날짜 초기화
          this.dateValue = this.dateFormat(new Date());
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