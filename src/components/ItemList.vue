<template>
    <div v-for="(item, index) in store.movieList" :key="item.id" class="col-12 col-sm-6 col-md-4 col-lg-3">
        <!--                 <CardComponent :character='item' />
 -->
    </div>
</template>

<script>
import { store } from '../store'

import CardComponent from './CardComponent.vue';

export default {
    name: 'ItemList',
    components: { CardComponent },
    data() {
        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped>

</style>