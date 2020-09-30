<template>
    <a class="btn my-3 main-btn" :href="href? href : '#'" target="_blank"
    @mouseenter="hover($event)"
        @mouseleave="hover($event)"
     >
        {{ text }}
    </a>
</template>

<script>
import $ from 'jquery'
    export default {
        name: 'MainButton',
        props: ['text', 'href'],
        data() {
            return {
                color: this.$store.state.primary_color
            }
        },
        methods: {
            hover(e) {
               
                let btn = e.target
                if (e.type === 'mouseenter') {
        
                    $(btn).css('color', '#000')
                
                } else {

                     $(btn).css('color', '#fff')
                }

            }
        }
    }
</script>

<style lang="scss" scoped>
</style>