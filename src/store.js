import {reactive} from "vue";

export const store = reactive({
    apiURL: "https://api.themoviedb.org/3/search/",
    endPointMovie: 'movie',
    endPointSeries: 'tv',
    apiKEY: '?api_key=3149d91c04c21e8b76d64bc1f5b20957',
    movieList: [],
    seriesList: [],
    searchName: '',
    
});