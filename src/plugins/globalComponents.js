import Vue from "vue";

// plugin setup
import { BootstrapVue, /*IconsPlugin*/ } from "bootstrap-vue";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//다음지도
//import VueDaumPostcode from "vue-daum-postcode";

Vue.use(BootstrapVue)
//Vue.use(IconsPlugin)

/*
import WDCheckBox from "../views/components/WDCheckBox";
import WDInput from "../views/components/WDInput";
import WDNumberInput from "../views/components/WDNumberInput";
import WDRadioGroup from "../views/components/WDRadioGroup";
import WDSelectBox from "../views/components/WDSelectBox";


import {EventBus} from "../util/EventBus";
import WDModal from "../views/components/WDModal";*/



const GlobalComponents = {
    /* install(Vue, options) {
      Vue.use(VueDaumPostcode);
      Vue.component(WDCheckBox.name, WDCheckBox);
      Vue.component(WDInput.name, WDInput);
      Vue.component(WDNumberInput.name, WDNumberInput);
      Vue.component(WDSelectBox.name, WDSelectBox);
      Vue.component(WDRadioGroup.name, WDRadioGroup);
      Vue.component(WDModal.name, WDModal);
      Vue.prototype.$showAlert = function({title, content, callback}){
        EventBus.$emit("@showAlert", {title, content, callback});
      }
      Vue.prototype.$showConfirm = function({title, content, callback, cancelBtnName}){
        EventBus.$emit("@showConfirm", {title, content, callback, cancelBtnName});
      }
      Vue.prototype.$showLoading = function(  ){
        EventBus.$emit("@showLoading" );
      }
      Vue.prototype.$hideLoading = function(){
        EventBus.$emit("@hideLoading" );
      }


  }*/
};

export default GlobalComponents;
