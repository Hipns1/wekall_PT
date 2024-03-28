# Aplicación de Prueba Técnica - Registro de Llamadas Telefónicas

Esta aplicación es una solución para el registro de llamadas telefónicas, proporcionando funcionalidades para filtrar,
paginar y visualizar los datos de llamadas simuladas. Se han utilizado [React](https://reactjs.org/) como framework y
[Bootstrap](https://getbootstrap.com/) como librería de estilos.

## Instrucciones de Uso

### Instalación

1. Clona este repositorio en tu máquina local.
2. Instala las dependencias usando npm:

### Ejecución

1. Ejecuta la aplicación usando el siguiente comando:
2. Abre tu navegador y visita [http://localhost:3000](http://localhost:3000).

## Funcionalidades Implementadas

1. **Filtrado por Rango de Fechas:** Los usuarios pueden filtrar las llamadas por fecha de inicio y fecha de fin.
2. **Filtrado por Tipo de Llamada:** Los usuarios pueden filtrar las llamadas por tipo de llamada (entrada/salida).
3. **Paginación:** Los datos de llamadas se presentan con paginación.
4. **Animación de Carga:** Se muestra una animación de carga mientras se obtienen los datos.
5. **Estado Vacío:** Se muestra un mensaje de estado vacío cuando no hay datos disponibles.
6. **Estadísticas por Agente:**
    - Número de llamadas por agente.
    - Número de llamadas que son primer contacto por agente y en total.
    - Número de llamadas entre extensiones.
    - Suma de minutos por agente.
7. **Casos de Uso Adicionales:**
    - Identificación de tendencias de llamadas por día de la semana.
    - Análisis de duración promedio de llamadas por tipo de llamada.
    - Seguimiento de cambios en el volumen de llamadas durante períodos específicos.
8. **Valor Adicional Propuesto:**
    - Análisis de la duración promedio de llamadas en función del origen y el destino.

## Pruebas Unitarias

Se han implementado pruebas unitarias para garantizar el correcto funcionamiento de las funcionalidades clave de la
aplicación.

## Persistencia de Estados

La aplicación permite a los usuarios guardar y restaurar su estado de navegación, incluidos los filtros aplicados,
incluso después de cerrar y volver a abrir la aplicación.

## Documentación para QA

### Funcionalidades:

1. **Filtrado por Fechas:**
    - **Objetivo:** Permitir a los usuarios filtrar las llamadas por fecha de inicio y fecha de fin.
    - **Prueba:** Seleccionar una fecha de inicio y una fecha de fin. Verificar que solo se muestren las llamadas dentro
      del rango de fechas seleccionado.
2. **Filtrado por Tipo de Llamada:**
    - **Objetivo:** Permitir a los usuarios filtrar las llamadas por tipo (entrada/salida).
    - **Prueba:** Seleccionar el tipo de llamada (entrada/salida). Verificar que solo se muestren las llamadas del tipo
      seleccionado.
3. **Paginación:**
    - **Objetivo:** Dividir los resultados de las llamadas en páginas.
    - **Prueba:** Verificar que haya múltiples páginas disponibles cuando hay más de la cantidad máxima de llamadas por
      página.
4. **Animación de Carga:**
    - **Objetivo:** Proporcionar retroalimentación visual mientras se cargan los datos.
    - **Prueba:** Iniciar una consulta de llamadas. Verificar que se muestre una animación de carga hasta que se
      muestren los datos.
5. **Estado Vacío:**
    - **Objetivo:** Manejar escenarios donde no se devuelvan datos.
    - **Prueba:** Filtrar las llamadas con un rango de fechas que no tenga resultados. Verificar que se muestre un
      mensaje indicando que no hay datos disponibles.
6. **Persistencia de Estados:**
    - **Objetivo:** Permitir que los usuarios guarden y restauren su estado de navegación.
    - **Prueba:** Aplicar varios filtros y cerrar la aplicación. Al volver a abrir la aplicación, verificar que los
      filtros aplicados anteriormente se mantengan.

## Notas Adicionales

-   La aplicación se ha diseñado con enfoque en la usabilidad y la experiencia del usuario.
-   Se recomienda el uso de Google Chrome para una mejor experiencia de usuario debido a la compatibilidad con las
    últimas tecnologías web.

Para más detalles técnicos y acceso al código fuente, por favor refiérase al repositorio en
[GitHub](https://github.com/tuusuario/nombre-repo).

---

Por favor, siéntase libre de contactarme si tiene alguna pregunta o necesita más información.

¡Gracias!

**Desarrollador:** Tu Nombre Tu Correo Electrónico
