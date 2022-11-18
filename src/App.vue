<template>
  <HeaderComponent />
  <ItemList title="Films" :items="store.movieList" />
  <ItemList title="Series TV" :items="store.seriesList" />

</template>

<script>
import axios from 'axios';
import { store } from './store';
import HeaderComponent from './components/HeaderComponent.vue';
import ItemList from './components/ItemList.vue';

export default {
  components: { HeaderComponent, ItemList },
  data() {
    return {
      store,
    }
  },
  watch: {
    'store.searchName'(newVal, oldVal) {
      if (newVal != oldVal) {
        this.getMovie();
        this.getSeries();
      }
    }
  },
  methods: {
    getMovie() {
      let apiFull = store.apiURL + store.endPointMovie + store.apiKEY + '&query=' + store.searchName
      axios.get(apiFull).then(
        (res) => {
          store.movieList = res.data.results
          console.log(store.movieList)
        },
      ).catch((error) => {
        console.log(error)
      })
    },
    getSeries() {
      let apiFull = store.apiURL + store.endPointSeries + store.apiKEY + '&query=' + store.searchName
      axios.get(apiFull).then(
        (res) => {
          store.seriesList = res.data.results
          console.log(store.seriesList)
        },
      ).catch((error) => {
        console.log(error)
      })
    }
  },
  created() {
  }
}
</script>

<style lang="scss" scoped>

</style>