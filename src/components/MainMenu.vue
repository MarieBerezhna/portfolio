<template>
    <div>
        <nav>
            <a href="/">
                <img :src="require('../assets/logo.png')" alt="logo" class="logo">
            </a>
            <ul>
                <li v-for="sec in sections" :key="sec.name" class="nav-link">
                    <a :href="'#' + sec.name.toLowerCase()">{{ sec.name.toUpperCase() }}</a></li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'MainMenu',
    props: {
        sections: Array
    }
}
</script>

<style lang="scss" scoped>
.logo {
    width: 200px;
    height: 100px;
    position: fixed;
    top: 10px;
    left: 10px;
}
nav {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,0.9);
        ul {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        list-style: none;
        li, a {
            margin: 1% 10px;
            float: right;
            color: #fff;
            text-decoration: none;
            font-family: "AvantGarde Bold", Sans-serif;
            font-weight: 800;
            width: 100px;
            min-width: 100px;
        }
    }
}

</style>