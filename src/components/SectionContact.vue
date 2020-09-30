<template>
    <div>
        <MainHeader text="Contact" />
        <div class="container my-5">
            <div class="row">
                <div class="col-12 col-md-6 bg-dark" >
                    <form id="contactform" action="/contact.php" method="POST" class="my-4 mx-auto text-center">
                    <div class="form-group">
                        <label for="name" class=" w-100 col-form-label"></label>
                        <input id="name" name="name" type="text" placeholder="Your name" pattern="^[A-Za-z ]{2,35}$" required><br>
                        <span id="name_error" style="color: red;">Please, enter a valid name</span>
                    </div>
                    <div class="form-group">
                        <label for="email" class="col-form-label"></label>
                        <input id="email" name="email" type="text" placeholder="Your e-mail address" pattern="^(.+)@(.+){2,}\.(.+){2,}$" required><br>
                        <span id="email_error"> <br></span>
                    </div>
                    <div class="form-group">
                        <label for="message"></label>
                        <textarea @keypress="expandTextarea($event)"
                        id="message" name="message" rows="1" cols="22" placeholder="Your message:"></textarea>

                    </div>
                    <MainButton text="Submit" @click="submitContact()"/>
                </form>
                </div>
                <div class="col-12 col-md-6">
                    <font-awesome-icon :icon="['fab', 'font-awesome']" />
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
            MainHeader: () => import('@/components/utils/MainHeader.vue'),
            MainButton: () => import('@/components/utils/MainButton.vue')
        },
        methods: {
            expandTextarea (e) {
                let rows = parseInt($(e.target).attr('rows'));
                if(e.which == 13 && rows < 5) {      
                    $(e.target).attr('rows', rows + 1)
                }
            },
            submitContact (e) {
                $('#contactform').submit()
                console.log(e.type)
            }
        },
        mounted () {
            let green = this.$store.state.primary_color
            $('#contactform input, #contactform textarea').css({
                border: 'none',
                borderBottom: '2px solid ' + green,
                color: green
            })
        }
    }
</script>

<style lang="scss" scoped>
textarea {
    resize: none;
    height: auto
}
input, textarea, .btn {
    width: 80%;
    text-align: center;
    background-color: transparent;
}

.fa,.fab{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:inline-block;font-style:normal;font-variant:normal;text-rendering:auto;line-height:1}@font-face{font-family:Font Awesome\ 5 Brands;font-style:normal;font-weight:400;font-display:block;src:url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/webfonts/fa-brands-400.eot);src:url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/webfonts/fa-brands-400.eot#iefix) format("embedded-opentype"),url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/webfonts/fa-brands-400.woff2) format("woff2"),url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/webfonts/fa-brands-400.woff) format("woff"),url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/webfonts/fa-brands-400.ttf) format("truetype"),url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/webfonts/fa-brands-400.svg#fontawesome) format("svg")}.fab{font-family:Font Awesome\ 5 Brands}@font-face{font-family:Font Awesome\ 5 Free;font-style:normal;font-weight:400;font-display:block;src:url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/webfonts/fa-regular-400.eot);src:url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/webfonts/fa-regular-400.eot#iefix) format("embedded-opentype"),url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/webfonts/fa-regular-400.woff2) format("woff2"),url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/webfonts/fa-regular-400.woff) format("woff"),url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/webfonts/fa-regular-400.ttf) format("truetype"),url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/webfonts/fa-regular-400.svg#fontawesome) format("svg")}.fab,.far{font-weight:400}@font-face{font-family:Font Awesome\ 5 Free;font-style:normal;font-weight:900;font-display:block;src:url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/webfonts/fa-solid-900.eot);src:url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/webfonts/fa-solid-900.eot#iefix) format("embedded-opentype"),url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/webfonts/fa-solid-900.woff2) format("woff2"),url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/webfonts/fa-solid-900.woff) format("woff"),url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/webfonts/fa-solid-900.ttf) format("truetype"),url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/webfonts/fa-solid-900.svg#fontawesome) format("svg")}.fa,.far,.fas{font-family:Font Awesome\ 5 Free}.fa,.fas{font-weight:900}.fa-search:before{content:"ï€‚"}.fa-facebook-f:before{content:"ïŽž"}.fa-twitter:before{content:"ï‚™"}.fa-instagram:before{content:"ï…­"}header #search{position:relative}header .fa-search{position:absolute;left:5%;top:30%}header input{padding-left:35px;min-height:35px;width:100%}
</style>