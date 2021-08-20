<!--
    용도 : Modal

    Animation Effects : https://codepen.io/antoncabon/pen/WxQLbM
-->
<template>

    <b-modal ref="modal-container"
             :modalClass="modalClass"
             :hide-footer="!$slots.footer"
             :size="scale"
             @shown="onShown"
             @close="onClose"
             centered
    >
        <!-- Header with close button -->
        <template v-slot:modal-header>
            <h3 v-if="!$slots.header">
                {{ title }}
            </h3>
            <slot name="header"/>
            <button type="button"
                    class="close"
                    @click="close"
                    data-dismiss="modal"
                    aria-label="Close">
                <img src="../../assets/img/ico-close.svg" alt="닫기">
            </button>
        </template>

        <!-- Body -->
        <slot name="body"/>

        <!-- Footer -->
        <template v-slot:modal-footer>
            <slot name="footer"/>
        </template>
    </b-modal>

</template>

<script>
export default {
    name: "WDModal",
    components:{
    },
    data() {
        return {
        }
    },
    props: {
        modalClass: {
            type: String,
            default: ''
        },
        title:{
            type: String,
            default: ''
        },
        options: {
            type: Array,
            default: () => []
        },
        scale: {
            type: String,
            default: "lg",
            description: 'Modal size',
            validator(value) {
                let acceptedValues = ["", "sm", "md", "lg", "xl"];
                return acceptedValues.indexOf(value) !== -1;
            },
        }

    },
    methods: {
        onShown() {
            this.$emit('shown');
        },
        onClose() {
            this.$emit('close');
        },
        show(){
            this.$refs['modal-container'].show();
        },
        close(){
            // this.visible = false
            this.$refs['modal-container'].hide();
            this.$emit('close');
        },

    },
    watch: {
    }
}
</script>

<style scoped>
    .modal-header .close {
        margin: -1.25rem -1.25rem -1.25rem auto;
    }
</style>