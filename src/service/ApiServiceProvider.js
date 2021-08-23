import {SentenceService, MockSentenceService} from './SentenceService';

const NODE_ENV = process.env.NODE_ENV;

class ApiServiceProvider {

    constructor(host) {
        this.host = host;
    }

    /*
    * 한 문장 서비스
    * @returns {MockSentenceService|SentenceService}
    * */
    getSentenceService() {
        // const NODE_ENV = 'mock';
        if(NODE_ENV === 'mock') {
            return new MockSentenceService();
        } else {
            return new SentenceService(this.host);
        }
    }

}

const API_URL_HOST = process.env.VUE_APP_API_HOST;
export default new ApiServiceProvider(API_URL_HOST);