<template>
    <div>
        <footer>
            <div class="row">
                                <div class="col-md-6 col-12 order-md-2">
                    <ul >
                        <li v-for="link in links" :key="link.id" :code='link.code'> {{ link.name }} </li>
                    </ul>
                </div>
                <div class="col-md-6 col-12 order-md-0">
                    <p>Copyleft &copy;  WebMarie 2020</p>
                </div>

            </div>
        </footer>
    </div>
</template>

<script>
// import $ from 'jquery'
    export default {
        name: 'MainFooter',
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
    height: 20vh;
    min-height: 150px;
    margin-top: 150px;
    ul {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        
    }
}
</style>