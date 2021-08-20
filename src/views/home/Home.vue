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
			<!-- v-for="sentenceItem in sentenceItems" :key="sentenceItem.seq" -->
			<div class="sentence">
				<!--{{ sentence }}-->
				There are better starters than me but I’m a strong finisher.
			</div>
		</div>
	</div>
</template>

<script>
    import {EventBus} from "@/util/EventBus";
    export default {
        name: "Home",
	    components: {

	    },
        inject: ['sentenceService'],
	    data() {
			return {
				dateValue: '',
                sentenceList: [],
				sentenceItems: [
			        {
			            seq: 0,
			            sentence: 'There are better starters than me but I’m a strong finisher.',
			            displayDate: '2021-08-19',
			        },
			        {
		  	            seq: 1,
			            sentence: 'There are better starters than me but I’m a strong finisher.',
			            displayDate: '',
			        },
			    ],
			}
	    },
	    methods: {

            async getTodaySentenceList() {

                const result = await this.sentenceService.getTodaySentenceList({
                    /*'displayDate': this.dateValue.split('-').join('')*/
	                /*'displayDate': '20210820',*/
                });

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
			EventBus.$on('event-get-sentence-list', this.getTodaySentenceList);
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