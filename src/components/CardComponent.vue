<template>
    <div>
        <div>{{ item.original_title }}</div>
        <div> {{ item.title }}</div>
        <div>{{ item.vote_average }} </div>
    </div>
</template>

<script>
export default {
    name: 'CardComponent',
    props: {
        item: Object
    }
}
</script>

<style lang="scss" scoped>

</style>