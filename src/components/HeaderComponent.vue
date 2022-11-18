<template>
    <header>
        <div class="container p-4 d-flex justify-content-between">
            <div class="logoText">
                <p class="fs-4 fw-bold">BOOLFIX</p>
            </div>
            <div class="section">
                <span>Home</span>
                <span>Film</span>
                <span>Serie</span>
            </div>
            <form class="row g-2" @submit.prevent="search">
                <div class="col-12">
                    <label class="visually-hidden" for="charactername">Search Movie</label>
                    <input type="text" class="form-control" id="inlineFormInputGroupUsername"
                        placeholder="Search Film/Series" v-model.trim="text">
                </div>
                <div class="col-12">
                    <button type="submit" class="btn btn-danger ms-3">Search</button>
                </div>

            </form>
        </div>
    </header>
</template>

<script>
import { store } from '../store'
export default {
    name: 'HeaderComponent',
    data() {
        return {
            store,
            text: ''
        }
    },
    methods: {
        search() {
            store.searchName = this.text;
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
@use '../assets/styles/partials/mixins' as *;

header {
    @include dflex;
    top: 0;
    background-color: black;
    height: 80px;
    overflow: hidden;


    .logoText {
        color: red;
    }

    .section {

        @include dflex;

        span {
            margin-left: 10px;
            color: white;


        }
    }

    form {
        @include dflex;

        .form-control {
            border: 1px solid white;
            color: red;
        }
    }
}
</style>