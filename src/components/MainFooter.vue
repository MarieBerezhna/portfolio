<template>
    <div>
        <footer :style="'background-color:' + this.$store.state.secondary_color" class="py-5">
            <div class="container">
                <div class="row mx-auto ">
                    <div class="col-md-6 col-12 order-md-2 ">
                        <ul>
                            <li v-for="link in this.links" :key="link.id">
                                <MenuLink :name="link.name" :code="link.code" @click.native="goModal($event)" />
                            </li>
                        </ul>
                    </div>
                    <div class="col-md-6 col-12 order-md-0">
                        <p>Made with
                            <a href="https://vuejs.org/" rel="noopener noreferrer" target="_blank"
                                aria-label="Vue"
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
    import $ from 'jquery'
    export default {
        name: 'MainFooter',
        data () {
            return {
                links: [{
                    id: 0,
                    name: 'Terms of use & Privacy',
                    code: 'tos',
                    content: `The only information I collect on this webpage is your name
                        and your email, when you make an enquiery with a contact form. 
                        The only use of that information for me is to get back to you with answers, 
                        I don't pass it to any third parties.`
                    },
                    {
                    id: 1,
                    name: 'Credits',
                    code: 'credits',
                    content: `<div>Homepage icons made by <a href="https://www.flaticon.local/authors/freepik" title="Freepik">
                        Freepik</a> from <a href="https://www.flaticon.local/" title="Flaticon">www.flaticon.local</a></div>
                        <div>Design inspirations : <a href='https://gentium.pixerex.com/wp/'>Gentium</a></div>
                        <div>Cool particles animation: <a href='https://codepen.io/natewiley/pen/GgONKy'>Nate Wiley</a></div>`
                    }
                ]
            }
        },
        components: {
            MenuLink: () => import('@/components/utils/MenuLink.vue'),
            ModalWindow: () => import('@/components/utils/ModalWindow.vue')
        },
        methods: {
            goModal(e) {
                const code = $(e.target).attr('code')
                const items = this.$store.state.footerlinks.filter(item => item.code === code);
                let item = items[0]
                this.showModal(item.name, item.content)
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
        text-align: left;

        ul {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;

        }
        p {
            text-align: center;
        }
    }
        @media (min-width: 992px) {
            footer {
            ul {
                align-items: flex-start;
            }
            p {
                text-align: left;
            }
            }

        }
</style>