<template>
    <div class="wrapper">
<!--        <notifications />-->

        <div class="main-content">
            <!-- common menu -->
<!--            <WDNavBar />-->
            디폴트 레이아웃!!
            <!-- content -->
            <router-view/>

            <!-- footer -->
            <!--<content-footer v-if="!$route.meta.hideFooter"></content-footer>-->
        </div>
    </div>
</template>

<script>
  //import ContentFooter from './Footer';
  //import { FadeTransition } from 'vue2-transitions';

  //import WDNavBar from "../../components/common/WDNavBar";

  export default {
    components: {

    //  WDNavBar,
    },
    methods: {

    }
  };
</script>
