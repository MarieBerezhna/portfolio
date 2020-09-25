<template>
    <div>
        <section id="projects">
            <MainHeader text="Projects" />
        </section>
    </div>
</template>

<script>

    export default {
        name: 'SeactionProjects',
        components: {
            MainHeader: () => import('@/components/utils/MainHeader.vue')
        }
    }
</script>

<style lang="scss" scoped>

</style>