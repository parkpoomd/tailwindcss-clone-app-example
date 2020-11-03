module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ['./src/**/*.html', './src/**/*.vue'],
  theme: {
    container: {
      center: true
    },
    extend: {
      colors: {
        green: '#1db954',
        blue: '#1DA1F2',
        darkblue: '#2795D9',
        lightblue: '#EFF9FF',
        dark: '#657786',
        light: '#AAB8C2',
        lighter: '#E1E8ED',
        lightest: '#F5F8FA',
        darkest: '#191414'
      }
    }
  },
  variants: {},
  plugins: []
};
