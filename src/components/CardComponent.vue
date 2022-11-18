<template>
    <div class="container">
        <div class="imgZone">
            <img
                :src="item.poster_path ? pathImg + item.poster_path : `https://image.tmdb.org/t/p/w185/mkqnkWk3jH6vEEI6W4xbiOvHpNW.jpg`">
            <div class="title fw-bold">{{ item.original_title || item.original_name }}</div>
        </div>

        <div> {{ item.title || item.name }}</div>
        <div> {{ item.original_language }}</div>
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
            pathImg: 'https://image.tmdb.org/t/p/w185',

        }
    }
}
</script>

<style lang="scss" scoped>

</style>