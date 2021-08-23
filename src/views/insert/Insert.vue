<template>
	<div class="inner-wrap">
		<div class="page-insert">
			<div class="btn btn-outline-primary" @click="showModal">등록</div>
			<div class="table-wrap">
				<table class="table">
					<colgroup>
						<col style="width: 100px;">
						<col>
						<col style="width: 250px;">
						<col style="width: 150px;">
					</colgroup>
					<thead>
					<tr>
						<th scope="col">순번</th>
						<th scope="col">문장</th>
						<th scope="col">표시 일자</th>
						<th scope="col">버튼</th>
					</tr>
					</thead>
					<tbody>
					<tr v-for="(item, index) in sentenceList" :key="index">
						<td>
							{{ item.seq }}
						</td>
						<td>
							{{ item.sentence }}
						</td>
						<td v-if="item.displayDate == null">
							Not Yet
						</td>
						<td v-else>
							{{ item.displayDate }}
						</td>
						<td>
							<div class="btn-sm btn-info"
							     @click="showUpdateModal(index)">
								수정
							</div>
							<div class="btn-sm btn-danger"
							     @click="getDeleteSentence(item.seq)">
								삭제
							</div>
						</td>
					</tr>
					</tbody>
				</table>
			</div>
		</div>

		<!-- insert modal -->
		<b-modal ref="insert-modal"
		         modalClass="insert-modal"
		         :no-close-on-backdrop="true"
		         :no-close-on-esc="true"
		         hide-footer
		         centered
		         size="lg"
		         title="문장 등록">
			<template v-slot:modal-header-close>
				<b-icon icon="x"
				        font-scale="1.5" />
			</template>

			<!-- s.modal body -->
			<div class="input-box">
				<textarea name="sentence"
				          id="sentence"
				          placeholder="문장을 입력해 주세요."
				          :state="stateValidation"
				          v-model="newSentence" />
			</div>

			<b-button size="md"
			          variant="success"
			          squared
			          @click="onInsertSentence">
				등록
			</b-button>
			<!-- e.modal body -->
		</b-modal>

		<!-- update modal -->
		<b-modal ref="update-modal"
		         modalClass="update-modal"
		         :no-close-on-backdrop="true"
		         :no-close-on-esc="true"
		         hide-footer
		         centered
		         size="lg"
		         title="문장 수정">
			<template v-slot:modal-header-close>
				<b-icon icon="x"
				        font-scale="1.5" />
			</template>

			<!-- s.modal body -->
			<div class="input-box">
				<textarea name="sentence"
				          id="update-sentence"
				          placeholder="문장을 입력해 주세요."
				          :state="stateValidation"
				          v-model="updateParam.sentence" />
			</div>

			<b-button size="md"
			          variant="success"
			          squared
			          @click="getUpdateSentence">
				수정
			</b-button>
			<!-- e.modal body -->
		</b-modal>
	</div>
</template>

<script>
    //import WDInput from "../components/WDInput";
    //import WDModal from "../components/WDModal";

    export default {
        name: "Insert",
        inject: ['sentenceService'],
	    components: {
            //WDInput,
		    //WDModal,
	    },
	    data () {

            return {
                sentenceIndex: -1,
                newSentence: '',
                sentenceList: [],
                updateParam : {
                    sentence: '',
	                seq: '',
                },
            }
	    },
	    mounted() {
            this.getSentenceList();
	    },
	    created() {

	    },
	    methods: {
            showModal() {
                this.$refs['insert-modal'].show();
            },
            showUpdateModal(index) {
                console.log(index);
                this.updateParam.sentence = this.sentenceList[index].sentence;
				this.updateParam.seq = this.sentenceList[index].seq;
                this.$refs['update-modal'].show();
            },

           /* removeSentence(sentenceItem, seq) {
                localStorage.removeItem(sentenceItem);
                this.sentenceItems.splice(seq, 1);
            },*/

		    async getSentenceList() {
                const result = await this.sentenceService.getSentenceList();
                console.log('문장 목록 response', result);
                this.sentenceList = result.response;
		    },

		    async onInsertSentence() {

                await this.sentenceService.insertSentence({
	                'sentence': this.newSentence,
                });
			    alert('문장이 등록되었습니다.');

                await this.getSentenceList();

                this.newSentence = '';
                this.$refs['insert-modal'].hide();
		    },

		    async getDeleteSentence(index) {
		        if(confirm('문장을 삭제하시겠습니까?')) {

                    await this.sentenceService.deleteSentence(index);

                    alert('문장이 삭제되었습니다.');
                    await this.getSentenceList();
		        }
		    },

		    async getUpdateSentence() {

                await this.sentenceService.updateSentence(this.updateParam);

                alert('과제가 수정되었습니다.');

		        await this.getSentenceList();
                this.$refs['update-modal'].hide();1
		    },
	    },
        computed: {
            stateValidation() {
                return this.newSentence.length > 0;
            },
        }
    }
</script>

<style scoped lang="scss">
	.input-wrap {
		display: flex;
		flex-direction: column;
	}
	.input-box {
		min-width: 500px;
		textarea {
			width: 100%;
			min-height: 100px;
		}
	}
	.table-wrap {
		padding: 30px 0;
		.btn-info {
			margin-bottom: 3px;
			color: #fff;
		}
	}
	.table tr th,
	.table tr td {
		text-align: center;
		vertical-align: middle;
	}
	.table tr th {
		background-color: #ddd;
	}


	.insert-modal {
		.btn {
			width: 100%;
			margin-top: 15px;
		}
	}
	.update-modal {
		.btn {
			width: 100%;
			margin-top: 15px;
		}
	}
</style>