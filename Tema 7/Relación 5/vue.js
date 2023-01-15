const {createApp} = Vue

createApp({
    data(){
        return{
            tareas: [
                {
                    contenido: "Hacer la compra",
                    prioridad: 2,
                    completado: true,
                    date: 4
                },
                {
                    contenido: "Hacer lista tareas con Vue",
                    prioridad: 3,
                    completado: false,
                    date: 1000000
                }
            ],
            campoFiltro: "",
            texto: "",
            filtro: ""
        }
    },
    methods: {
        calcularTiempo(tarea){
            return (((Date.now() - tarea.date)/1000)/60);
        },
        añadirTarea(){
            tarea = {
                contenido: this.texto,
                prioridad: 2,
                completado: false,
                date: Date.now()
            }
            this.tareas.push(tarea);
            this.texto="";
        },
        borrarNota(){
            
        },
        borrarCompletadas(){
            no_completadas = this.tareas.filter((tar) => tar.completado==false);
            this.tareas = no_completadas;
        },
        cambiarPrioridad(){
            
        }
    },
    computed: {
        tareasPendientes(){
            return this.tareas.filter((tar) => tar.completado==false).length;
        },
        totalTareas(){
            return this.tareas.length;
        },
        tareasFiltradas(){
            return arrayFilt = this.tareas.filter((tar) => tar.contenido.includes(this.campoFiltro));
            // return arrayFilt.sort();
        },
        filtrarPorInput(){
            filtradas = this.tareas.filter((tar) => tar.contenido.includes(this.filtro));
            return filtradas;
        }
    }
}).mount('#vue')