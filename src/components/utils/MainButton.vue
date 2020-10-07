<template >
    <a class="btn my-3 main-btn" :href="href? href : '#'" 
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
        props: {
          text: String, 
          href: String
          },
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
            $('a.main-btn').css('border', '2px solid ' + this.$store.state.primary_color)
            $('a.main-btn:before').css('background-color', this.$store.state.primary_color)
        }
    }
</script>

<style lang="scss" scoped>



  a.main-btn {
    position: relative;
    color: #fff;
    z-index: 2;

    &:before {
      content: '';
      position: absolute;
      top: 1px;
      left: 1px;
      right: 1px;
      bottom: 1px;
      width: 0;
      height: calc(100% - 2px);
      -webkit-transition: 700ms cubic-bezier(0.17, 0.67, 0, 1.01);
      -ms-transition:700ms cubic-bezier(0.17, 0.67, 0, 1.01);
      -o-transition: 700ms cubic-bezier(0.17, 0.67, 0, 1.01);
      transition: 700ms cubic-bezier(0.17, 0.67, 0, 1.01);
    }

    &:hover {
      &:before {
        width: calc(100% - 2px);
        z-index: -1;
      }
    }
  }
</style>