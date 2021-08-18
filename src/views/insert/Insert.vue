<template>
	<div class="inner-wrap">
		<div class="page-insert">
			<div class="input-wrap">
				<div class="input-box">
					<WDInput placeholder="문장을 입력해 주세요." v-model="newSentence" :state="stateValidation" />
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
					<tr v-for="sentenceItem in sentenceItems" :key="sentenceItem">
						<td>12</td>
						<td>There are better starters than me but I’m a strong finisher.</td>
						<td>Not yet</td>
						<td>
							<div class="btn-sm btn-danger" @click="removeSentence(sentenceItem, index)">삭제</div>
						</td>
					</tr>
					<tr>
						<td>11</td>
						<td>There are better starters than me but I’m a strong finisher.</td>
						<td>Not yet</td>
						<td>
							<div class="btn-sm btn-danger">삭제</div>
						</td>
					</tr>
					<tr>
						<td>10</td>
						<td>There are better starters than me but I’m a strong finisher.</td>
						<td>Not yet</td>
						<td>
							<div class="btn-sm btn-danger">삭제</div>
						</td>
					</tr>
					<tr>
						<td>9</td>
						<td>There are better starters than me but I’m a strong finisher.</td>
						<td>2021-08-13</td>
						<td>
							<div class="btn-sm btn-danger">삭제</div>
						</td>
					</tr>
					<tr>
						<td>8</td>
						<td>There are better starters than me but I’m a strong finisher.</td>
						<td>2021-08-13</td>
						<td>
							<div class="btn-sm btn-danger">삭제</div>
						</td>
					</tr>
					<tr>
						<td>7</td>
						<td>There are better starters than me but I’m a strong finisher.</td>
						<td>2021-08-13</td>
						<td>
							<div class="btn-sm btn-danger">삭제</div>
						</td>
					</tr>
					<tr>
						<td>6</td>
						<td>There are better starters than me but I’m a strong finisher.</td>
						<td>2021-08-13</td>
						<td>
							<div class="btn-sm btn-danger">삭제</div>
						</td>
					</tr>
					<tr>
						<td>5</td>
						<td>There are better starters than me but I’m a strong finisher.</td>
						<td>2021-08-13</td>
						<td>
							<div class="btn-sm btn-danger">삭제</div>
						</td>
					</tr>
					<tr>
						<td>4</td>
						<td>There are better starters than me but I’m a strong finisher.</td>
						<td>2021-08-13</td>
						<td>
							<div class="btn-sm btn-danger">삭제</div>
						</td>
					</tr>
					<tr>
						<td>3</td>
						<td>There are better starters than me but I’m a strong finisher.</td>
						<td>2021-08-13</td>
						<td>
							<div class="btn-sm btn-danger">삭제</div>
						</td>
					</tr>
					<tr>
						<td>2</td>
						<td>There are better starters than me but I’m a strong finisher.</td>
						<td>2021-08-13</td>
						<td>
							<div class="btn-sm btn-danger">삭제</div>
						</td>
					</tr>
					<tr>
						<td>1</td>
						<td>There are better starters than me but I’m a strong finisher.</td>
						<td>2021-08-13</td>
						<td>
							<div class="btn-sm btn-danger">삭제</div>
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
                sentenceItems: [],
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
            removeSentence(sentenceItem, index) {
                localStorage.removeItem(sentenceItem);
                this.sentenceItems.splice(index, 1);
            },
            addSentence(){
                //console.log(this.newSentence);
	            if(this.newSentence !== '') {
	                let value = this.newSentence && this.newSentence.trim();
	                localStorage.setItem(value, value);
	            }
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