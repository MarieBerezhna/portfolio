<template>
    <div>
        <footer :style="'background-color:' + this.$store.state.secondary_color" class="py-5">
            <div class="container">
                <div class="row mx-auto">
                    <div class="col-md-6 col-12 order-md-2 ">
                        <ul>
                            <li v-for="link in this.$store.state.footerlinks" :key="link.id">
                                <MenuLink :name="link.name" :code="link.code" @click.native="goModal($event)" />
                            </li>
                        </ul>
                    </div>
                    <div class="col-md-6 col-12 order-md-0">
                        <p>Made with
                            <a href="https://vuejs.org/" target="_blank"
                                :style="'color:' + $store.state.primary_color">Vue.js</a> &amp; <span>Love</span>
                        </p>
                        <p>Copyleft &copy; WebMarie 2020</p>
                    </div>
                    <ModalWindow />
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    import $ from 'jquery'
    export default {
        name: 'MainFooter',
        components: {
            MenuLink: () => import('@/components/utils/MenuLink.vue'),
            ModalWindow: () => import('@/components/utils/ModalWindow.vue')
        },
        methods: {
            goModal(e) {
                const code = $(e.target).attr('code')
                const items = this.$store.state.footerlinks.filter(item => item.code === code);
                let item = items[0]
                //this.$store.commit('showModal')
                this.showModal(item.name, item.content)
            },
            
            ...mapActions([
                'openModal'
            ])
        },
        created () {
            
        }
    }
</script>
<style lang="scss" scoped>
    footer {
        position: relative;
        height: auto;
        min-height: 150px;
        margin-top: 150px;
        text-align: left;

        ul {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-evenly;

        }
    }
</style>