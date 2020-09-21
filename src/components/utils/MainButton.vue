<template>
    <div class="btn my-3" 
    :href="href"
    :style="'background:' + color + '; color: #000; border: 1px solid #000'"
    @mouseenter="mouseEnter()" @mouseleave="mouseLeave()">
        {{ text }}
    </div>
</template>

<script>
    export default {
        name: 'MainButton',
        props: ['text', 'color', 'href'],
        data() {
            return {
                hovering: false
            }
        },
        methods: {
            hover () {
                this.hovering = !this.hovering
                if (this.hovering) {
                    event.target.style.background = '#000'
                    event.target.style.border = '1px solid' + this.color
                    event.target.style.color = this.color
                } else {
                    event.target.style.background = this.color
                    event.target.style.border = '1px solid #000'
                    event.target.style.color = '#000'
                }
            },
            mouseEnter() {
                 this.hover()
                
            },
            mouseLeave() {
                this.hover()
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>