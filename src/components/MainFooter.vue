<template>
    <div>
        <footer :style="'background-color:' + this.$store.state.secondary_color" class="py-5">
            <div class="row mx-auto text-center" >
                    <div class="col-md-6 col-12 order-md-2 ">
                    <ul >
                        <li v-for="link in links" :key="link.id">
                            <MenuLink  :name="link.name"/>
                        </li>
 
                    </ul>
                </div>
                <div class="col-md-6 col-12 order-md-0">
                    <p>Made with 
                        <a href="">Vue.js</a> &amp; <span>Love</span>
                    </p>
                    <p>Copyleft &copy;  WebMarie 2020</p>
                </div>

            </div>
        </footer>
    </div>
</template>

<script>
    export default {
        name: 'MainFooter',
        components: {
            MenuLink: () => import('@/components/utils/MenuLink.vue')
        },
        data () {
            return {
                links: [
                    {id: 0, name: 'Terms of use & Privacy', code: 'tos'},
                    {id: 1, name: 'Credits', code: 'credits'}
                ]
            }
        }
    }
</script>
<style lang="scss" scoped>
footer {
    position: relative;
    height: auto;
    min-height: 150px;
    margin-top: 150px;
    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        
    }
}
</style>