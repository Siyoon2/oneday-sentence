<template>
	<div class="inner-wrap">
		<div class="top">
			<div class="date">
				<span>
					{{ dateValue }}
				</span>
			</div>
		</div>
		<div class="content">
			<div class="sentence">
				{{ getTodaySentenceList.sentence }}
			</div>
		</div>
	</div>
</template>

<script>
    export default {
        name: "Home",
	    components: {
	    },
        inject: ['sentenceService'],
	    data() {
			return {
				dateValue: '',
                sentenceList: [],
				todaySentence: {
				  displayDate: '',
				},
			}
	    },
	    methods: {

            async getTodaySentenceList(displayDate) {
                const result = await this.sentenceService.getTodaySentenceList(displayDate);

                console.log('하루 문장 response', result);
                this.sentenceList = result.response;
            },

            //날짜 형식 포맷 YYYY-MM-DD
		    dateFormat() {
		        let date = new Date();

		        let year = date.getFullYear();
		        let month = date.getMonth() + 1;
		        let day = date.getDate();

                month = month >= 10 ? month : '0'+month;
                day = day >= 10 ? day : '0'+day;

		        return year + '-' + month + '-' + day;
		    },
	    },
		mounted () {
			// 현재 선택된 날짜 초기화
			this.dateValue = this.dateFormat(new Date());
            this.getTodaySentenceList();
		},
		created() {

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
		/*padding: 30px 0;*/
	}
	.sentence {
		color: blue;
		font-size: 2rem;
	}
</style>