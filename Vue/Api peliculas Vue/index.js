//f14b0120
//http://www.omdbapi.com/?apikey=[yourkey]&
//http://img.omdbapi.com/?apikey=[yourkey]&



const {createApp} = Vue

createApp({
    data(){
        return{
            peliculas: [],
            informacionAmpliada: [],
            busqueda: "",
            informacion: false,
            pagina: 1
        }
    },
    methods: {
        lanzarPeticion(){
            axios
                .get('http://www.omdbapi.com/?apikey=f14b0120&s=' + this.busqueda)
                .then(response => {
                for(i=0; i<response.data.Search.length; i++) 
                    this.peliculas.push(response.data.Search[i])
                    this.informacion = true
                });
        },
        borrar(){
            this.peliculas = [],
            this.informacionAmpliada = [],
            this.pagina = 1,
            this.informacion = false;
            this.busqueda = "";
        },
        // ampliarInformacionPeli(pelicula){
        //     axios.get("https://www.omdbapi.com/?i=" + pelicula.imdbID + "&apikey=f14b0120")
        //     .then(responseDataPlus => {this.informacionAmpliada = responseDataPlus.data;
        //         this.divInfo = true;
        //         this.transparencia = true;
        //         this.disableScroll();
        //     });
        // },
    },
    computed: {

    },
    mounted(){
    }
}).mount('#vue')