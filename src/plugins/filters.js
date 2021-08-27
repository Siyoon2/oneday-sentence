import Vue from "vue";
import moment from "moment";


/**
 * from 'YYYYMMDD'
 * to 'YYYY/MM/DD' ,  'YYYY년 MM월 DD일', ....
 */
Vue.filter('formatDate', (val = '', formatString = 'YYYY/MM/DD') => {
    if(!val || val.length < 8){
        return val;
    }
    val = val.substr(0, 8);
    return moment(String(val)).format(formatString);
});