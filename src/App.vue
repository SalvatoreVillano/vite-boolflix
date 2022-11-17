<template>
  <HeaderComponent @filterMovie="getMovie" />
  <ItemList />
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
  methods: {
    getMovie() {
      let apiFull = store.apiURL + store.endPointMovie + store.apiKEY + '&query=' + store.movieName
      axios.get(apiFull).then(
        (res) => {
          store.movieList = res.data.results
          console.log(store.movieList)
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