//f14b0120
//http://www.omdbapi.com/?apikey=[yourkey]&
//http://img.omdbapi.com/?apikey=[yourkey]&



const {createApp} = Vue

createApp({
    data(){
        return{
            peliculas: [
                // {
                //     Title: "One Piece",
                //     Year: "1999-",
                //     Poster: "https://m.media-amazon.com/images/M/MV5BODcwNWE3OTMtMDc3MS00NDFjLWE1OTAtNDU3NjgxODMxY2UyXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
                // },
                // {
                //     Title: "One Flew Over the Cuckoo's Nest",
                //     Year: "1975",
                //     Poster: "https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
                // },
                // {
                //     Title: "Air Force One",
                //     Year: "1997",
                //     Poster: "https://m.media-amazon.com/images/M/MV5BZmNiNTQ5ZjMtOThjYS00NDc2LWFlMWMtZTM5OTA1NjRmMGM4XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg"
                // },
            ],
            busqueda: "",
            informacion: false,
            desinformacion: true
        }
    },
    methods: {
        lanzarPeticion(){
            axios
                .get('http://www.omdbapi.com/?apikey=f14b0120&s=one')
                .then(response => (this.info = response))
                this.peliculas.push(response);
        }
    },
    computed: {

    },
    mounted(){

    }
}).mount('#vue')