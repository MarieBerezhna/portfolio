<template>
    <div>
        <footer :style="'background-color:' + this.$store.state.secondary_color" class="py-5">
            <div class="container">
                <div class="row mx-auto">
                    <div class="col-md-6 col-12 order-md-2 ">
                        <ul>
                            <li v-for="link in this.$store.state.footerlinks" :key="link.id">
                                <MenuLink :name="link.name" :code="link.code" @click.native="openModal($event)" />
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
    import $ from 'jquery'
    export default {
        name: 'MainFooter',
        components: {
            MenuLink: () => import('@/components/utils/MenuLink.vue'),
            ModalWindow: () => import('@/components/utils/ModalWindow.vue')
        },
        methods: {
            openModal(e) {
                console.log(e.target)
                const items = this.$store.state.footerlinks
                const code = $(e.target).attr('code')
                let item = items.filter(item => item.code === code);
                item = item[0]
                console.log(item)

                $('.modal').find('.modal-title').text(item.name)
                $('.modal').find('.modal-body p').text(item.content)
                $('.modal').fadeIn()
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
            align-items: flex-start;
            justify-content: space-evenly;

        }
    }
</style>