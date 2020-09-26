<template>
    <a class="btn my-3" 
    :href="href? href : '#'" target="blank"
    @mouseenter="mouseEnter()" @mouseleave="mouseLeave()">
        {{ text }}
    </a>
</template>

<script>
    export default {
        name: 'MainButton',
        props: ['text', 'href'],
        data() {
            return {
                color: this.$store.state.color,
                hovering: false
            }
        },
        methods: {
            hover () {
                this.hovering = !this.hovering
                if (!this.hovering) {
                    // event.target.style.background = '#000'
                    event.target.style.border = '1px solid' + this.color
                    event.target.style.color = this.color
                } else {
                    // event.target.style.background = this.color
                    event.target.style.border = '1px solid #000'
                    event.target.style.color = '#000'
                }
            },
            mouseEnter() {
                // this.hover()
                
            },
            mouseLeave() {
                // this.hover()
            }
        }
    }
</script>

<style lang="scss" scoped>
$green: #5BFFAA;
            a {
                position: relative;
                color: $green;
                border: 2px solid $green;
                z-index: 1;
                &:before {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    background-color: $green;
                    width: 0;
                    height: 100%;
                    -webkit-transition: 700ms cubic-bezier(0.17, 0.67, 0, 1.01);
                    -o-transition: 700ms cubic-bezier(0.17, 0.67, 0, 1.01);
                    transition: 700ms cubic-bezier(0.17, 0.67, 0, 1.01);
                }
                &:hover {
                    color: #000 !important;
                    &:before {
                        width: 100%;
                            z-index: -1;
                    }
                }
            }

</style>