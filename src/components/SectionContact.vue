<template>
    <div id="contact">
        <MainHeading text="Contact" />
        <div class="container my-5">
            <div class="row mx-auto ">
                <div class="col-12 col-md-6 offset-md-3" :style="'background-color: '+ this.$store.state.secondary_color">
                    <form id="contactform" action="/contact.php" method="POST" class="my-4 mx-auto text-center">
                        <div class="form-group">
                            <label for="name" class=" w-100 col-form-label"></label>
                            <input id="name" name="name" type="text" placeholder="Your name" pattern="^[A-Za-z ]{2,35}$"
                                required><br>
                            <span id="name_error"><br></span>
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
                        <MainButton text="Submit" id="contact_submit" @click.native="contactSubmit()" class="mb-5" />
                    </form>
                    <div id="msg"></div>
                </div>
            </div>
            <div class="row">
                <div class="icons-row col-12 col-md-6 mx-auto mt-4">
                    <a class="icon-wrap mx-auto position-relative" 
                        style="color: #fff"
                        :href="icon.url" target="_blank"
                        @mouseenter="iconHover($event)"
                        @mouseleave="iconHover($event)" :style="'border: 1px solid '+ $store.state.primary_color"
                        v-for="(icon, index) in this.$store.state.social_icons" :key="index" :index="index">
                        <font-awesome-icon 
                        :icon="['fab', icon.name]" class="mx-auto my-auto" />
                        
                    </a>
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
                
            }
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
                }

                if (window.location.host.indexOf('localhost') !== -1) {

                    this.showModal('Message sent!',
                        '<h4 class="pt-1">Thank you, ' + name +
                        '. The message was successfully sent.</h4><hr>')
                } else {
                    const app = this;
                    $.post("/contact.php", {
                            name: name,
                            email: email,
                            message: message
                        },
                        function (data) {
                            app.showModal('Message sent!', data)
                        });
                }


                return false;
            },
            contactSet() {
                const color = this.$store.state.primary_color;
                var Contact = (function () {

                    var reg, the_value, the_id;

                    function validation() { //Validation hints:
                        $("input, textarea").blur(function () {
                            reg = new RegExp($(this).attr("pattern"));
                            the_value = $(this).val();
                            the_id = $(this).attr("id");

                            if (reg.test(the_value)) {

                                $(this).css({
                                    "box-shadow": "1px 1px 2px 4px " + color,
                                    background: 'transparent'
                                });
                                $("#" + the_id + "_error").css({
                                    color: "transparent !important"
                                });

                            } else {

                                $(this).css({
                                    "box-shadow": "1px 1px 2px 4px red"
                                });

                                if (the_id == "tel") {
                                    $("#" + the_id + "_error").css({
                                        color: "red"
                                    }).html("Please, enter a valid phone number");
                                } else {
                                    $("#" + the_id + "_error").css({
                                        color: "red"
                                    }).html("Please, enter a valid " + the_id);
                                }
                            }

                        });
                        $("input").focus(function () {
                            $(this).css("box-shadow", "none");
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