<template>
    <div class="container">
        <div class="imgZone"></div>
        <img :src="pathImg + item.backdrop_path">
        <div>{{ item.original_title || item.original_name }}</div>
        <div> {{ item.title || item.name }}</div>
        <div>{{ item.vote_average }} </div>
    </div>
</template>

<script>
export default {
    name: 'CardComponent',
    props: {
        item: Object
    },
    data() {
        return {
            pathImg: 'https://image.tmdb.org/t/p/w342',

        }
    }
}
</script>

<style lang="scss" scoped>

</style>