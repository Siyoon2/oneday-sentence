import axios from 'axios';
import ResponseUtil from "../util/ResponseUtil";

export class SentenceService {

    constructor(host) {
        this.host = host;
    }

    /*
    * 문장 목록
    * @params params
    * @returns {Promise<AxiosResponse<any>>}
    * */
    getSentenceList(params) {
        console.log('문장 목록 request', params);

        return axios
            .get(`/api/sentence/list`, params)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                console.log(error);
            })
    }

    /*
    * 하루 문장
    * @params params
    * @returns {Promise<AxiosResponse<any>>}
    * */
    getTodaySentenceList(displayDate) {
        console.log('문장 목록 request', displayDate);

        return axios
            .get(`/api/sentence/today/${displayDate}`)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                console.log(error);
            })
    }



    /*
    * 문장 등록
    * @params params
    * @returns {Promise<AxiosResponse<any>>}
    */
    insertSentence(params) {
        console.log('문장 등록 request', params);

        return axios
            .get(`/api/sentence/insert`, params)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                console.log(error);
            })
    }

    /**
     * 문장 수정
     * @param params
     * @returns {Promise<AxiosResponse<any>>}
     */
    updateSentence(params) {
        console.log('문장 수정 request', params);

        return axios
            .put(`/api/sentence/update/${params.seq}`, params)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                console.log('error', error);
            })
    }

    /**
     * 문장 삭제
     * @param params
     * @returns {Promise<AxiosResponse<any>>}
     */
    deleteSentence(seq) {
        console.log('문장 삭제 request', seq);

        return axios
            .delete(`/api/sentence/delete/${seq}`)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                console.log(error);
            })
    }

}

export class MockSentenceService {

    constructor() {}

    /*
    * 문장 목록
    * @returns {Promise<AxiosResponse<any>>}
    * */
    getSentenceList() {
        return new Promise((resolve) => {
            const mockSuccess = {
                sentenceList: [
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
                    {
                        seq: 2,
                        sentence: 'There are better starters than me but I’m a strong finisher.',
                        displayDate: '20210819',
                    },
                    {
                        seq: 3,
                        sentence: 'There are better starters than me but I’m a strong finisher.',
                        displayDate: '20210819',
                    },
                    {
                        seq: 4,
                        sentence: 'There are better starters than me but I’m a strong finisher.',
                        displayDate: '',
                    },
                ]
            }

            const response = ResponseUtil.mockupResultSuccess(mockSuccess, true);
            resolve(response);
        });
    }

}