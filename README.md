# Gestor de Tareas (To-Do List)

Minisoftware funcional para la gestión de tareas, desarrollado como proyecto individual para la asignatura **COM4602 - Introducción a los Repositorios de Código Distribuido**.

## Funcionalidades principales
* Creación de nuevas tareas dinámicas.
* Cambio de estado visual (marcar tareas como completadas).
* Sistema de prioridades con etiquetas de color (Alta, Media, Baja).
* Edición en línea para modificar tareas sin necesidad de borrarlas.
* Eliminación individual y limpieza total de la lista.
* Sistema de filtros de visualización (Todas, Pendientes, Completadas).
* Persistencia de información mediante `LocalStorage`.

## Tecnologías Utilizadas
* **HTML5:** Estructura base del documento.
* **Vue.js 3 (CDN):** Manejo de reactividad, renderizado de listas y estado de la aplicación.
* **Tailwind CSS (CDN):** Estilización rápida y diseño de la interfaz de usuario.
* **Lucide Icons:** Iconografía vectorial minimalista.
* **LocalStorage:** API del navegador para la persistencia de datos sin necesidad de backend.

## Instrucciones de Ejecución
Al ser una aplicación web estática basada en CDN, no requiere instalación de dependencias ni un servidor complejo para funcionar[cite: 1]. 

**Pasos para el despliegue local:**
1. Clona este repositorio en tu máquina local.
2. Abre el archivo `index.html` directamente en cualquier navegador web moderno (Chrome, Firefox, Edge, Safari).
3. ¡Listo! La aplicación guardará tus tareas localmente en tu navegador.