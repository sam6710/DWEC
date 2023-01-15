const {createApp} = Vue

createApp({
    data(){
        return{
            entradas: [
                {
                    codigoArt: 1,
                    titulo: "Fin de semana en Madrid",
                    texto: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    url: "https://www.google.es",
                    ubicacion: {
                        ciudad: "Madrid",
                        pais: "España"
                    }
                },
                {
                    codigoArt: 2,
                    titulo: "Vacaciones en Londres",
                    texto: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    url: "https://www.gmail.com",
                    ubicacion: {
                        ciudad: "Londres",
                        pais: "Reino Unido"
                    }
                }
            ],
            permitirAñadirEntrada: false,
            verEntrada: false
        }
    },
    methods: {
        muestraNumArtículos(){
            return this.entradas.length;
        },
        cambiarVisibilidad(){
            this.verEntrada = !this.verEntrada;
        }
    },
    computed: {
        entradasDeEspana(){
            return this.entradas.filter((ent) => ent.ubicacion.pais=="España").length;
        }
    }
}).mount('#vue')