module.exports = {
  // Fuerza el salto de línea después de la cantidad de caracteres especificada
  printWidth: 80,

  // Lo mismo que editorconfig
  tabWidth: 2,
  useTabs: false,

  // Previene a Git del uso de CRLF en Windows
  // Necesario: `.gitattributes` with `* text=auto eol=lf`
  endOfLine: 'lf',

  // Sin ; semicolon al final de las sentencias
  semi: false,

  // Comillas '' simples
  singleQuote: true,

  // Trailing commas para declaraciones de varias líneas
  trailingComma: 'none' // 'es5' => Git: Clean Diffs
}
