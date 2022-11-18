<template>
    <section>
        <div class="container-fluid pt-5">
            {{ title }}
            <div class="row">
                <div v-for="(item, index) in items" :key="item.id" class="col-12 col-sm-6 col-md-4 col-lg-2 m-4">
                    <CardComponent :item='item' />
                </div>
            </div>
        </div>
    </section>

</template>

<script>
import { store } from '../store'

import CardComponent from './CardComponent.vue';

export default {
    name: 'ItemList',
    components: { CardComponent },
    props: {
        title: String,
        items: Array
    },
    data() {
        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped>
.container-fluid {
    background-color: rgb(95, 94, 94);

    .row {
        flex-wrap: nowrap;
        overflow-x: auto;


    }


}
</style>