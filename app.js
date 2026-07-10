const { createApp } = Vue;

createApp({
    data() {
        return {
            nuevaTarea: '',
            prioridadActual: 'Media',
            tareas: [],
            filtroActual: 'todas'
        };
    },
    computed: {
        tareasPendientes() { return this.tareas.filter(t => !t.completada).length; },
        totalTareas() { return this.tareas.length; },
        tareasFiltradas() {
            if (this.filtroActual === 'pendientes') return this.tareas.filter(t => !t.completada);
            if (this.filtroActual === 'completadas') return this.tareas.filter(t => t.completada);
            return this.tareas;
        }
    },
    mounted() {
        const tareasGuardadas = localStorage.getItem('mis-tareas-v3');
        if (tareasGuardadas) this.tareas = JSON.parse(tareasGuardadas);
        this.$nextTick(() => lucide.createIcons());
    },
    updated() {
        this.$nextTick(() => lucide.createIcons());
    },
    watch: {
        tareas: {
            handler(nuevasTareas) {
                localStorage.setItem('mis-tareas-v3', JSON.stringify(nuevasTareas));
            },
            deep: true
        }
    },
    methods: {
        agregarTarea() {
            if (this.nuevaTarea.trim() !== '') {
                this.tareas.push({
                    id: Date.now(),
                    texto: this.nuevaTarea.trim(),
                    completada: false,
                    prioridad: this.prioridadActual,
                    editando: false
                });
                this.nuevaTarea = '';
                this.prioridadActual = 'Media';
            }
        },
        toggleCompletada(tarea) {
            if (!tarea.editando) tarea.completada = !tarea.completada;
        },
        activarEdicion(tarea) {
            tarea.editando = true;
        },
        guardarEdicion(tarea) {
            if (tarea.texto.trim() === '') return this.eliminarTarea(tarea.id);
            tarea.editando = false;
        },
        eliminarTarea(id) {
            this.tareas = this.tareas.filter(t => t.id !== id);
        },
        limpiarTodo() {
            if (confirm('¿Eliminar todas las tareas?')) this.tareas = [];
        }
    }
}).mount('#app');
