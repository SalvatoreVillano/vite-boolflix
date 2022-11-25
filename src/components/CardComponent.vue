<template>
    <div class="container text-center ">
        <div class="imgZone">
            <img
                :src="item.poster_path ? pathImg + item.poster_path : `https://image.tmdb.org/t/p/w342/mkqnkWk3jH6vEEI6W4xbiOvHpNW.jpg`">
            <div class="title fw-bold">{{ item.original_title || item.original_name }}</div>
        </div>

        <div> {{ item.title || item.name }}</div>
        <div> {{ item.original_language }}</div>
        {{ item.vote_average }}
        <div><span v-for="n in 5" class="fa-star" :class="(n <= stars) ? 'fa-solid' : 'fa-regular'"></span>
        </div>
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
    },
    computed: {
        stars() {
            return Math.ceil(this.item.vote_average / 2);
        }

    }
}
</script>

<style lang="scss" scoped>

</style>