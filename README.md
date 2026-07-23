# Gestor de Tareas (To-Do List)

Minisoftware funcional para la gestión de tareas, desarrollado como proyecto individual para la asignatura **COM4602 - Introducción a los Repositorios de Código Distribuido**.

*(English version below)*

## Funcionalidades principales
* Creación de nuevas tareas dinámicas.
* Cambio de estado visual (marcar tareas como completadas).
* Sistema de prioridades con etiquetas de color (Alta, Media, Baja).
* Edición en línea para modificar tareas sin necesidad de borrarlas.
* Eliminación individual y limpieza total de la lista.
* Sistema de filtros de visualización (Todas, Pendientes, Completadas).
* Sistema de categorías para organizar las tareas por contexto.
* Persistencia de información mediante `LocalStorage`.

## Categorías y filtros

Al crear una tarea, selecciona una categoría para identificar su contexto. Las categorías disponibles son: **Trabajo, Estudios, Personal, Compras, Hogar, Salud, Evento** y **Otros**.

Cada tarea muestra su categoría junto a la prioridad. Para ver solo un tipo de tarea, usa el selector de categorías y elige la categoría deseada; la opción **Todas las categorías** restaura la visualización completa. Este filtro puede combinarse con los filtros de estado: Todas, Pendientes y Completadas.

## Tecnologías Utilizadas
* **HTML5:** Estructura base del documento.
* **Vue.js 3 (CDN):** Manejo de reactividad, renderizado de listas y estado de la aplicación.
* **Tailwind CSS (CDN):** Estilización rápida y diseño de la interfaz de usuario.
* **Lucide Icons:** Iconografía vectorial minimalista.
* **LocalStorage:** API del navegador para la persistencia de datos sin necesidad de backend.

## Instrucciones de Ejecución
Al ser una aplicación web estática basada en CDN, no requiere instalación de dependencias ni un servidor complejo para funcionar.

**Pasos para el despliegue local:**
1. Clona este repositorio en tu máquina local.
2. Abre el archivo `index.html` directamente en cualquier navegador web moderno (Chrome, Firefox, Edge, Safari).
3. ¡Listo! La aplicación guardará tus tareas localmente en tu navegador.

## Futuras Mejoras (Roadmap)
* **Gestión de Tiempo:** Implementación de fechas de vencimiento para cada tarea.
* **Modo Productividad:** Integración de un cronómetro basado en la técnica Pomodoro.
* **Sincronización en la Nube:** Migración desde `LocalStorage` hacia una base de datos externa (ej. Firebase) para permitir el acceso multiplataforma.

---

# Gestor de Tareas (To-Do List) - English Version

Functional mini-software for task management, developed as an individual project for the **COM4602 - Introduction to Distributed Code Repositories** course.

## Main Features
* Dynamic creation of new tasks.
* Visual state changes (mark tasks as completed).
* Priority system with color-coded badges (High, Medium, Low).
* Inline editing to modify tasks without deleting them.
* Individual deletion and full list clearing.
* View filtering system (All, Pending, Completed).
* Category system to organize tasks by context.
* Data persistence using `LocalStorage`.

## Categories and filters

When creating a task, select a category to identify its context. The available categories are: **Work, Studies, Personal, Shopping, Home, Health, Event** and **Other**.

Each task displays its category next to its priority. To view only one type of task, use the category selector and choose the desired category; **All categories** restores the complete list. This filter can be combined with the status filters: All, Pending and Completed.

## Technologies Used
* **HTML5:** Core document structure.
* **Vue.js 3 (CDN):** Reactivity handling, list rendering, and application state management.
* **Tailwind CSS (CDN):** Rapid styling and user interface design.
* **Lucide Icons:** Minimalist vector iconography.
* **LocalStorage:** Browser API for data persistence without requiring a backend.

## Execution Instructions
Being a static web application based on CDNs, it does not require dependency installation or a complex server to run.

**Steps for local deployment:**
1. Clone this repository to your local machine.
2. Open the `index.html` file directly in any modern web browser (Chrome, Firefox, Edge, Safari).
3. Done! The application will save your tasks locally in your browser.

## Future Improvements (Roadmap)
* **Time Management:** Implementation of due dates for each task.
* **Productivity Mode:** Integration of a timer based on the Pomodoro technique.
* **Cloud Synchronization:** Migration from `LocalStorage` to an external database (e.g., Firebase) to allow cross-platform access.

## Declaración de uso de IA / AI Disclaimer
La estructura base del código, la resolución de dudas técnicas sobre Vue.js y la correción de errores en el código fueron apoyados por Inteligencia Artificial (Gemini). La IA fue utilizada estrictamente como una herramienta de asistencia educativa para centralizar el aprendizaje a fondo de los comandos de Git.
