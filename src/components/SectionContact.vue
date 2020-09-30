<template>
    <div>
        <MainHeading text="Contact" />
        <div class="container my-5">
            <div class="row">
                <div class="col-12 col-md-6 bg-dark">
                    <form id="contactform" action="/contact.php" method="POST" class="my-4 mx-auto text-center">
                        <div class="form-group">
                            <label for="name" class=" w-100 col-form-label"></label>
                            <input id="name" name="name" type="text" placeholder="Your name" pattern="^[A-Za-z ]{2,35}$"
                                required><br>
                            <span id="name_error" style="color: red;">Please, enter a valid name</span>
                        </div>
                        <div class="form-group">
                            <label for="email" class="col-form-label"></label>
                            <input id="email" name="email" type="text" placeholder="Your e-mail address"
                                pattern="^(.+)@(.+){2,}\.(.+){2,}$" required><br>
                            <span id="email_error"> <br></span>
                        </div>
                        <div class="form-group">
                            <label for="message"></label>
                            <textarea @keypress="expandTextarea($event)" id="message" name="message" rows="1" cols="22"
                                placeholder="Your message:"></textarea>

                        </div>
                        <MainButton text="Submit" @click="submitContact()" />
                    </form>
                </div>
                <div class="col-12 col-md-6 mx-auto my-auto" >
                    <div class="row">
                    <span class="icon-wrap position-relative" :style="'border: 1px solid '+ $store.state.primary_color" 
                    v-for="(icon, index) in icons" :key="index" :index="index">
                        <font-awesome-icon :icon="['fab', icon]" class="mx-auto my-auto" />
                    </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery'

    export default {
        name: 'SectionContact',
        components: {
            MainHeading: () => import('@/components/utils/MainHeading.vue'),
            MainButton: () => import('@/components/utils/MainButton.vue')
        },
        data() {
            return {
                icons: ['facebook-f', 'linkedin-in', 'whatsapp', 'facebook-f', 'linkedin-in']
            }
        },
        methods: {
            expandTextarea(e) {
                let rows = parseInt($(e.target).attr('rows'));
                if (e.which == 13 && rows < 5) {
                    $(e.target).attr('rows', rows + 1)
                }
            }
        },
        mounted() {
            let green = this.$store.state.primary_color
            $('#contactform input, #contactform textarea').css({
                border: 'none',
                borderBottom: '2px solid ' + green,
                color: green
            })
            let icons = $('.icon-wrap');
            $(icons).each(el => {
                let item = icons[el], index = parseInt($(item).attr('index'))
                if (index > 0 && index % 2 === 0) {
                    $('</div><div class="row">').insertAfter(item)
                } 
            });
        }
    }
</script>

<style lang="scss" scoped>
    textarea {
        resize: none;
        height: auto
    }

    input,
    textarea,
    .btn {
        width: 80%;
        text-align: center;
        background-color: transparent;
    }

    .icon-wrap {
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        cursor: pointer;
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
</style>