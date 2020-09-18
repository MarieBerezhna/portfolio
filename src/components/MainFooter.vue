<template>
    <div>
        <footer>
footer
        </footer>
    </div>
</template>

<script>
import $ from 'jquery'
    export default {
        name: 'MainFooter',
        methods: {
            showMenuFixed () {
                console.log('scrolll')
                $(document).ready(function () {
                console.log('scrolll')
                });
            }
        },
        created: function () {
            window.addEventListener('scroll', this.showMenuFixed)
        },
        mounted () {
            $(document).ready(function () {
                // window.onscroll = () => {
                //     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                //         console.log('scrolll')
                //     } else {
                //         console.log('scrolll')
                //     }
                // }
                      $(window).scroll(()=> {
                            console.log('logging');
                        });
            })

        }
    }
</script>

<style lang="scss" scoped>
footer {
    position: relative;
    height: 20vh;
    min-height: 150px;
    margin-top: 150px;
}
</style>