<template>
	<div class="inner-wrap">
		<div class="top">
			<div class="date">
				{{ dateValue | formatDate}}
			</div>
		</div>
		<div class="content">
			<div class="sentence">
				{{ todaySentence.sentence }}
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
				todaySentence: '',
			}
	    },
	    methods: {

            async getTodaySentence() {
                const param = {
                    displayDate: this.dateValue
                };
                const result = await this.sentenceService.getTodaySentenceList(param);

                console.log('하루 문장 response', result);
                this.todaySentence = result.response;
            },
	    },
		mounted () {
			// 현재 선택된 날짜 초기화
			this.dateValue = this.dateFormat(new Date());
            this.getTodaySentence();
		},
	    filters: {

	    },
		created() {

		},

  }
</script>

<style scoped lang="scss">
	.top {
		padding: 30px 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		.date {
			color: #000;
			font-size: 20px;
			font-weight: 600;
			font-family: 'santana', sans-serif;
		}
	}

	.sentence {
		color: blue;
		font-size: 2rem;
		font-family: 'Roboto Mono', monospace;
	}
</style>