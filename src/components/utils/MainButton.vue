<template>
    <a class="btn my-3" 
    :href="href? href : '#'" target="blank"
    :style="'background:#000; color: '+color+'; border: 1px solid '+color+ '; font-size: 1.5rem'"
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