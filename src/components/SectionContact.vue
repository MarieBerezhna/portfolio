<template>
    <div>
        <section id="contact" class="my-1 pt-4" style="min-height: unset">
            <MainHeading text="Contact" />
            <div class="container my-5">
                <div class="row mx-auto ">
                    <div class="col-12 col-md-5"
                        :style="'background-color: '+ this.$store.state.secondary_color">
                        <form id="contactform" action="#"
                         method="POST" class="my-4 pt-md-4 mx-auto text-center">
                            <div class="form-group"> 
                                 <label for="name" class=" w-100 col-form-label">
                                <input id="name" name="name" type="text" placeholder="Your name"
                                pattern="^[A-Za-z ]{2,35}$" required>
                               </label>
                                <br>
                                <span id="name_error"><br></span>
                            </div>
                            <div class="form-group">
                                <label for="email" class="col-form-label">
                                <input id="email" name="email" type="email" placeholder="Your e-mail address"
                                    pattern="^(.+)@(.+){2,}\.(.+){2,}$" required>
                                </label>
                                    <br>
                                <span id="email_error"> <br></span>
                            </div>
                            <div class="form-group">
                                <label for="message">
                                <textarea @keypress="expandTextarea($event)" id="message" name="message" rows="1"
                                    cols="22" placeholder="Your message:"></textarea></label>
                            </div>
                            <MainButton text="Submit" id="contact_submit" @click.native="contactSubmit()"
                                class="mb-5" />
                        </form>
                        <div id="msg"></div>
                    </div>
                    <div class="col-12 col-md-6 offset-md-1 text-center">
                        <div class="mx-auto text-center mt-5">
                            <img :src="require('../assets/profile.jpg')" alt="Marie Berezhna Resume" 
                            class="img rounded-circle" width="200" height="200">
                        </div>
                        <p>
                            By the way, I left my CV here. <br>
                            Would you like to take a look? </p>
                            <MainButton text="Open resume" href="cv.pdf" target="_blank" class="w-50" />
                    </div>
                </div>
                <div class="row my-3 my-md-5" :style="'border-top: 5px solid ' + this.$store.state.primary_color">
                    <div class="icons-row col-12 col-md-6 mx-auto mt-4">
                        <a class="icon-wrap mx-auto position-relative" 
                            rel="noopener noreferrer" :aria-label="icon.name"
                            style="color: #fff" :href="icon.url"
                            target="_blank" @mouseenter="iconHover($event)" 
                            @mouseleave="iconHover($event)"
                            :style="'border: 1px solid '+ $store.state.primary_color"
                            v-for="(icon, index) in this.$store.state.social_icons" :key="index" :index="index">
                            <font-awesome-icon :icon="['fab', icon.name]" class="mx-auto my-auto" />

                        </a>
                    </div>
                </div>
            </div>
        </section>
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
        methods: {
            expandTextarea(e) {
                let rows = parseInt($(e.target).attr('rows'));
                if (e.which == 13 && rows < 5) {
                    $(e.target).attr('rows', rows + 1)
                }
            },
            iconHover(e) {
                let value = e.type === 'mouseenter' ? '-5px' : 0
                $(e.target).css({
                    transform: 'translateY(' + value + ')',
                    color: e.type === 'mouseenter' ? this.$store.state.primary_color : '#fff'
                })
            },
            setStyles() {
                let green = this.$store.state.primary_color
                $('#contactform input, #contactform textarea').css({
                    border: 'none',
                    borderBottom: '2px solid ' + green,
                    color: green
                })
            },
            contactSubmit() {
                var name = $('#name').val(),
                    email = $('#email').val(),
                    message = $('#message').val();


                if (name && email) {

                    $('#name').val('');
                    $('#email').val('');
                    $('#message').val('');
                    $("input").css("box-shadow", "none");
                        const app = this;
                        $.post("https://api.webmarie.com/portfolio-contact", {
                                name: name,
                                email: email,
                                message: message
                            },
                            function (data) {
                                console.log(data)
                                app.showModal('Message sent!', data)
                            });
                } else {
                    $('input').blur()
                }

                return false;
            },
            contactSet() {
                var Contact = (function () {

                    var reg, the_value, the_id;

                    function validation() { //Validation hints:
                        $("input, textarea").blur(function () {
                            reg = new RegExp($(this).attr("pattern"));
                            the_value = $(this).val();
                            the_id = $(this).attr("id");

                            if (reg.test(the_value)) {

                                $(this).css({
                                    background: 'transparent'
                                });
                                $("#" + the_id + "_error").css({
                                    color: "transparent !important"
                                });

                            } else {

                                if (the_id == "tel") {
                                    $("#" + the_id + "_error").css({
                                        color: "#f56c62"
                                    }).html("Please, enter a valid phone number");
                                } else {
                                    $("#" + the_id + "_error").css({
                                        color: "#f56c62"
                                    }).html("Please, enter a valid " + the_id);
                                }
                            }

                        });
                        $("input").focus(function () {
                            $("#" + the_id + "_error").css({
                                color: "transparent"
                            });

                        });
                    }

                    function init() {
                        validation();
                    }
                    return {
                        init: init
                    };
                })();
                Contact.init();

            }
        },
        mounted() {
            this.setStyles()
            this.contactSet()
        }
    }
</script>

<style lang="scss" scoped>
    label {
        width: 100%;
    }
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

    .icons-row {
        display: flex;
        flex-direction: row;
    }

    .icon-wrap {
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        cursor: pointer;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        -webkit-transition: all ease-in 0.2s;
        -moz-transition: all ease-in 0.2s;
        -o-transition: all ease-in 0.2s;
        transition: all ease-in 0.2s;
    }

    input:-internal-autofill-selected {
        background-color: transparent !important;
    }
</style>