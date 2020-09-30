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
        },
        mounted () {
             let style = $(`<style id="main-btn-style">
             .main-btn {
                 border: 2px solid `+ this.color +`  ;
            }
             .main-btn::before {
                 background-color: `+ this.color +`     
            }  
             </style>`)
             $('body').append(style)
        }
    }
</script>

<style lang="scss" scoped>
    $green: #5BFFAA;

    a {
        position: relative;
        color: #fff;
        
        z-index: 2;

        &:before {
            content: '';
            position: absolute;
            bottom: -1%;
            left: 0%;
            width: 0;
            height: 105%;
            -webkit-transition: 700ms cubic-bezier(0.17, 0.67, 0, 1.01);
            -o-transition: 700ms cubic-bezier(0.17, 0.67, 0, 1.01);
            transition: 700ms cubic-bezier(0.17, 0.67, 0, 1.01);
        }

        &:hover {


            &:before {
                width: 100%;
                z-index: -1;
            }
        }
    }
</style>