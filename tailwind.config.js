/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {},
  variants: {},
  plugins: [
    function({ addUtilities }) {
      
      const newUtilities = {
      '.translate-x-105per': {
             transform: 'translateX(145%)',
        },
      '.skew-15deg': {
             transform: 'skewY(-15deg)',
        }
      }

    addUtilities(newUtilities)
  }
 ]
}
