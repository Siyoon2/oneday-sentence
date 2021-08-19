<template>
	<div class="inner-wrap">
		<div class="page-insert">
			<div class="input-wrap">
				<div class="input-box">
					<WDInput placeholder="문장을 입력해 주세요." v-model="newSentence" />
				</div>
				<div class="btn btn-outline-primary" @click="addSentence">등록</div>
			</div>

			<div class="table-wrap">
				<table class="table">
					<colgroup>
						<col style="width: 100px;">
						<col>
						<col style="width: 250px;">
						<col style="width: 100px;">
					</colgroup>
					<thead>
					<tr>
						<th scope="col">순번</th>
						<th scope="col">문장</th>
						<th scope="col">표시 일자</th>
						<th scope="col"></th>
					</tr>
					</thead>
					<tbody>
					<tr v-for="(sentenceItem, seq) in sentenceItems" :key="sentenceItem.seq">
						<td>
							{{ sentenceItem.seq }}
						</td>
						<td>
							{{ sentenceItem.sentence }}
						</td>
						<td>
							{{ sentenceItem.displayDate }}
						</td>
						<td>
							<div class="btn-sm btn-danger" @click="removeSentence(sentenceItem, seq)">삭제</div>
						</td>
					</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>

<script>
    import WDInput from "../components/WDInput";

    export default {
        name: "Insert",
	    components: {
            WDInput,
	    },
	    data () {

            return {
                newSentence: '',
                sentenceItems: [
	                {
	                    seq: 0,
		                sentence: 'There are better starters than me but I’m a strong finisher.',
		                displayDate: '20210819',
	                },
                    {
                        seq: 1,
                        sentence: 'There are better starters than me but I’m a strong finisher.',
                        displayDate: '',
                    },
                ],
                sentenceList: [],
            }
	    },
	    created() {
            if(localStorage.length > 0) {
                for(let i = 0; i < localStorage.length; i++) {
                    this.sentenceItems.push(localStorage.key(i));
                }
            }
	    },
	    methods: {
            removeSentence(sentenceItem, seq) {
                localStorage.removeItem(sentenceItem);
                this.sentenceItems.splice(seq, 1);
            },
            addSentence(){
                //console.log(this.sentenceItems);
	            if(this.newSentence !== '') {
	                let value = this.newSentence && this.newSentence.trim();
	                localStorage.setItem(value, value);
                    this.sentenceItems.unshift({sentence: value, displayDate: '20210819'});
	            }
                this.newSentence = '';
            },
	    },
        computed: {
            stateValidation() {
                let value = '';
                for (let i = 0; i < this.sentenceList.length; i++) {
                    if (this.sentenceList[i].seq === this.sentenceIndex) {
                        value = this.sentenceList[i].title;
                    }
                }
                return value.length > 0;
            },
        }
    }
</script>

<style scoped>
	.input-wrap {
		display: flex;
		justify-content: space-between;
	}
	.input-box {
		min-width: 500px;
	}
	.table-wrap {
		padding: 30px 0;
	}
	.table tr th,
	.table tr td {
		text-align: center;
	}
	.table tr th {
		background-color: #ddd;
	}
</style>