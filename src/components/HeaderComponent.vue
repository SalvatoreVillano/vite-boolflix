<template>
    <div class="container p-4 d-flex justify-content-center">
        <form class="row row-cols-lg-auto g-3 align-items-center" @submit.prevent="searchMovie">
            <div class="col-12">
                <label class="visually-hidden" for="charactername">Search Movie</label>
                <input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="Search Name"
                    v-model.trim="store.movieName">
            </div>


            <div class="col-12">
                <button type="submit" class="btn btn-primary" @click="searchMovie">Search</button>
            </div>

        </form>
    </div>
</template>

<script>
import { store } from '../store'
export default {
    name: 'HeaderComponent',
    data() {
        return {
            store,
        }
    },
    methods: {
        searchMovie() {
            this.$emit('filterMovie')
        }
    }
}
</script>

<style lang="scss" scoped>

</style>