# simple-webpack-boilerplate

> Un entorno de desarrollo JavaScript sencillo y moderno con Webpack como herramienta de compilación.

En ocasiones puede ser interesante crear una aplicación web sencilla más parecida a lo que se conoce como **sitio web tridicional** con multiples páginas HTML. En este contexto sigue siendo útil tener a disposición un kit de herramientas como [Webpack](https://webpack.js.org/), [Babel](https://babeljs.io/) y [ESLint](https://eslint.org/) para aprovechar las últimas funcionalides del lenguaje JavaScript 🔥

## Instalación

**Prerrequisitos**

- [Node](https://nodejs.org/en/) _(LTS recomendable)_
- Un editor de texto como [VSCode](https://code.visualstudio.com/)
- Git, acceso al terminal y un navegador web 🚀

**Inicio rápido**

```sh
# clonar el proyecto
$ git clone https://github.com/whoisjorge/webpack-boilerplate.git

# instalar dependencias
$ cd webpack-boilerplate
$ npm install
```

## Desarrollo

```sh
# La aplicación estará ejecutándose 💻 en http://localhost:9000
$ npm run dev
```

- Utiliza _`webpack-dev-server`_ disponible mediante el comando **`webpack serve`**

  > Info: https://webpack.js.org/configuration/dev-server/

- En _`webpack-dev-server`_ el **watch mode está activado por defecto**, esto significa que webpack recompila cada vez que los archivos cambian sin necesidad de añadir opciones de `--watch`
  > Info: https://webpack.js.org/configuration/watch/

## Producción

```sh
$ npm run build
```

## Consideraciones

- Eliminamos el paquete `eslint-plugin-standard` ya que viene incluído en la v16.0.0 de `eslint-config-standard`: (https://github.com/standard/standard/issues/1316)
- Modificación de `@babel/preset-env` => `@babel/eslint-parser`
- Incluimos las siguientes dependencias:
  ```json
  "css-loader": "5.0.0",
  "file-loader": "6.2.0",
  "html-loader": "1.3.2",
  "html-webpack-plugin": "4.5.0",
  "mini-css-extract-plugin": "1.2.1"
  ```

## Licencia

[MIT](LICENSE)
