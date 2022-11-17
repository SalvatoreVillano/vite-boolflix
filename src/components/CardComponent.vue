<template>
    <div>
        <div>{{ movie.original_title }}</div>
        <div> {{ movie.title }}</div>
        <div>{{ movie.vote_average }} </div>
    </div>
</template>

<script>
export default {
    name: 'CardComponent',
    props: {
        movie: Object
    }
}
</script>

<style lang="scss" scoped>

</style>