/**
 * Configuración de ESLint.
 *
 * Extiende la configuración del paquete `eslint-config-standard`, por lo que
 * están comentadas todas las configuraciones base por defecto aplicadas.
 */
module.exports = {
  root: true,

  /*
   * Ampliar la configuración base mediante la herencia de reglas.
   * https://eslint.org/docs/user-guide/configuring#extending-configuration-files
   */
  extends: [
    // Configuración para JavaScript Standard Style
    // https://github.com/standard/eslint-config-standard/
    'standard',

    // Desactiva todas las reglas que entren en conflicto con Prettier
    // https://github.com/prettier/eslint-config-prettier
    'prettier',
  ],

  plugins: [
    // 'import',
    // 'node',
    // 'promise'
  ],

  /*
   * Especificar el parser a utilizar.
   */
  parser: 'babel-eslint',

  /*
   * Dar soporte a determinadas opciones del lenguaje JavaScript.
   * https://eslint.org/docs/user-guide/configuring#specifying-parser-options
   */
  parserOptions: {
    // ecmaVersion: 2021,
    // ecmaFeatures: {
    //   jsx: true
    // },
    // sourceType: 'module'
  },

  /*
   * Variables globales predefinidas.
   * https://eslint.org/docs/user-guide/configuring#specifying-environments
   */
  env: {
    browser: true,
    commonjs: true
    // es2021: true,
    // node: true,
  },

  /*
   * Variales globales adicionales de acceso durante la ejecución.
   * https://eslint.org/docs/user-guide/configuring#specifying-globals
   */
  globals: {
    // 'document': 'readonly',
    // 'navigator': 'readonly',
    // 'window': 'readonly'
  },

  /*
   * Conjunto de reglas personalizadas.
   */
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
