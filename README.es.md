# Reservas de Asientos de Cine

<!-- hide -->
> Por [@ehiber](https://github.com/ehiber) y contribuidores de [4Geeks Academy](https://4geeksacademy.com/)

[![build by developers](https://img.shields.io/badge/build_by-Developers-blue)](https://4geeks.com)
[![twitter](https://img.shields.io/twitter/follow/4geeksacademy?style=social&logo=twitter)](https://twitter.com/4geeksacademy)

*These instructions are available in [english](./README.md).*
<!-- endhide -->

Simulador interactivo de reservas de asientos de cine construido con TypeScript, Vite y Tailwind CSS.

## Que hace este sitio

- Simula una matriz de asientos de cine de 8x10.
- Permite reservar asientos con entradas de fila y columna.
- Permite seleccionar asientos directamente haciendo click en la grilla.
- Opcionalmente permite liberar asientos ocupados.
- Muestra contadores en vivo de asientos ocupados y disponibles.
- Detecta y muestra el primer par de asientos adyacentes disponibles.

## Antes de empezar

Instala los paquetes escribiendo:

```bash
npm install
```

## Como ejecuto el sitio para ver cambios en vivo?

Escribe en la linea de comandos:

```bash
npm run start
```

Luego abre la URL local en el navegador (normalmente `http://localhost:5173`).

## Como ejecuto esto en GitHub Codespaces?

Usa el mismo servidor de desarrollo:

```bash
npm run start
```

Vite esta configurado para escuchar en `0.0.0.0`, asi que Codespaces puede detectar y redirigir automaticamente el puerto `5173`.

## Como ejecuto solo la validacion de TypeScript?

Usa este comando para validar solo TypeScript sin iniciar Vite:

```bash
npm run typecheck
```

## Como ejecuto `main.ts` desde la terminal?

Si quieres ejecutar `./src/main.ts` directamente y ver la salida de `console.log` en la terminal, usa:

```bash
npm run console
```

Este comando ya viene conectado por defecto a `./src/main.ts`.

## Donde esta la logica principal del proyecto?

Archivos principales que usa la app actualmente:

- `./index.html` para la estructura base y metadatos.
- `./src/main.ts` para la logica de reserva y comportamiento UI.
- `./src/style.css` para la importacion de Tailwind CSS.
- `./src/vite-env.d.ts` para tipos de Vite en TypeScript.

## Documentacion del proyecto

- `./documents/context.md`
- `./documents/flow-diagram.md`
- `./documents/technical-demo-guide.md`

## Solucion de problemas

### No veo mis cambios...

Cada vez que cambias cualquier archivo dentro de `./src`, el sitio se refresca automaticamente (hot reload).

Si aun no ves cambios, recarga limpiando cache:

- Mac: `Cmd + Shift + R`
- Windows/Linux: `Ctrl + Shift + R`

## Como incluyo mas archivos TypeScript?

Agrega archivos en `./src` e importalos desde `main.ts`.

Ejemplo:

```ts
import { myVar } from "./file2";
```

## Como publico el sitio?

Este boilerplate es compatible con Vercel en un solo paso.

## Contribuidores

Esta plantilla fue creada como parte del [Coding Bootcamp de 4Geeks Academy](https://4geeksacademy.com/us/coding-bootcamp) por [ehiber](https://github.com/ehiber) y otros contribuidores. Conoce mas sobre nuestro [AI Engineering Course](https://4geeksacademy.com/us/coding-bootcamps/ai-engineering), [Full Stack Developer Course](https://4geeksacademy.com/us/coding-bootcamps/part-time-full-stack-developer), y [Data Science Bootcamp](https://4geeksacademy.com/us/coding-bootcamps/datascience-machine-learning).

Puedes encontrar otras plantillas y recursos como este en la [pagina de GitHub de la escuela](https://github.com/4geeksacademy/).
