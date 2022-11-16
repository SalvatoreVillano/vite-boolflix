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
      let info = { ...store.info }
      axios.get(store.apiURL, info).then(
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
    this.getMovie();
  }
}
</script>

<style lang="scss" scoped>

</style>