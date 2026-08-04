# SEN't

Sitio simple para mostrar los días sin caídas del SEN.

## Estructura

- `index.html`: página principal.
- `styles/index.css`: estilos y respuesta para móvil/escritorio.
- `scripts/days.js`: lógica que calcula y muestra los días.

## Cambiar la fecha de inicio

Si quieres modificar la fecha desde la que se cuentan los días, edita la variable `dateStart` en `scripts/days.js`.

Por ejemplo:

```js
const dateStart = new Date("2024-01-01");
```

## Cómo funciona

El script calcula la diferencia entre la fecha actual y `dateStart`, convierte esa diferencia a días y muestra el resultado en el elemento `<span id="days">`.