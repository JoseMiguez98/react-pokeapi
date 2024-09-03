# React PokeAPI

Este proyecto es una aplicación web construida con React y Vite que permite buscar y visualizar Pokémon usando la PokeAPI. La aplicación incluye tanto un modo de desarrollo para iteraciones rápidas como un modo de producción para despliegue.

## Requisitos Previos

- Node.js v20.17.0
- Yarn

## Instrucciones para Levantar la App

### Modo Desarrollo (sin Docker)

Para levantar la aplicación en modo desarrollo:

1. Clona el repositorio:

   ```bash
   git clone <url-del-repo>
   cd react-pokeapi
   ```

2. Instala las dependencias:

   ```bash
   yarn install
   ```

3. Inicia el servidor de desarrollo:

   ```bash
   yarn dev
   ```

La aplicación estará disponible en `http://localhost:5173`.

### Modo Producción (sin Docker)

Para construir y previsualizar la aplicación en modo producción:

1. Construye la aplicación:

   ```bash
   yarn build
   ```

2. Previsualiza la aplicación:

   ```bash
   yarn preview
   ```

La aplicación estará disponible en `http://localhost:4173`.

## Usando Docker

### Levantar la App en Modo Desarrollo con Docker

1. Construye la imagen Docker para desarrollo:

   ```bash
   docker build -f Dockerfile.dev -t react-pokeapi-dev .
   ```

2. Corre el contenedor:

   ```bash
   docker run -p 5173:5173 react-pokeapi-dev
   ```

La aplicación estará disponible en `http://localhost:5173`.

## Principales Librerías Usadas

El Proyecto fue construido con las siguientes librerias:

- **[React](https://reactjs.org/)**: Biblioteca de JavaScript para construir interfaces de usuario.
- **[Vite](https://vitejs.dev/)**: Herramienta de construcción y servidor de desarrollo rápido.
- **[Chakra UI](https://chakra-ui.com/)**: Biblioteca de componentes de UI para React que permite el desarrollo de interfaces accesibles y modernas.
- **[Zustand](https://github.com/pmndrs/zustand)**: Biblioteca de gestión de estado para React, pequeña y rápida.
- **[Fuse.js](https://fusejs.io/)**: Biblioteca de búsqueda difusa para realizar búsquedas rápidas y flexibles en listas de elementos.
- **[React Paginate](https://www.npmjs.com/package/react-paginate)**: Componente de paginación para React.
- **[ESLint](https://eslint.org/)**: Para el Linting del codigo
- **[Prettier](https://prettier.io/)**: Formateador de código consistente y predecible.