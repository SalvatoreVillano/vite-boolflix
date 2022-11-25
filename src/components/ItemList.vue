<template>
    <section>
        <div class="container-fluid pt-2">
            <div class="title display-6 fw-bold text-center mb-3">{{ title }}</div>
            <div class="row">
                <div v-for="(item, index) in items" :key="item.id" class="col-12 col-sm-6 col-md-4 col-lg-3">
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
.title {
    color: white;
}

.row {
    overflow-x: auto;
    flex-wrap: nowrap;
    gap: -10px;

}

.row::-webkit-scrollbar {
    height: 15px;
}

.row::-webkit-scrollbar-track {
    background: #13131346;
}

.row::-webkit-scrollbar-thumb {
    background-color: #e50914;
    border-radius: 15px;
}
</style>